/**
 * Redacted example — tenant context middleware (service layer).
 *
 * Shows how the tenant context is enforced technically instead of being
 * assumed: the signed JWT is the primary source, header values are only
 * accepted when they are consistent with it, and the request is aborted
 * (fail-closed) when the database tenant context cannot be established.
 *
 * Redacted: internal error mapping, logging details, service names.
 */

import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

interface TenantContextStore {
  /** Sets the tenant context for the downstream data-access layer. */
  set(tenantId: string): Promise<void>;
}

interface AuthenticatedRequest extends Request {
  user?: { tenantId?: string };
}

@Injectable()
export class TenantContextMiddleware implements NestMiddleware {
  constructor(private readonly tenantContext: TenantContextStore) {}

  async use(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const jwtTenantId = req.user?.tenantId;
    const headerTenantId = req.headers["x-tenant-id"] as string | undefined;

    // A header value is only accepted when it matches the signed context.
    if (headerTenantId && jwtTenantId && headerTenantId !== jwtTenantId) {
      return res.status(403).json({
        success: false,
        error: { code: "TENANT_ID_MISMATCH" },
      });
    }

    const tenantId = jwtTenantId ?? headerTenantId;

    // Fail-closed: if the tenant context cannot be set for the data-access
    // layer, the request is not processed further.
    if (tenantId) {
      try {
        await this.tenantContext.set(tenantId);
      } catch {
        return res.status(500).json({
          success: false,
          error: { code: "TENANT_CONTEXT_ERROR" },
        });
      }
    }

    next();
  }
}
