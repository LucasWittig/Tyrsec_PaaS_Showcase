/**
 * Redacted example — standardized error response with request correlation.
 *
 * Every error response carries the same structure and a request id, so the
 * gateway, the services and the logs can be correlated end to end.
 *
 * Redacted: internal mapping tables and the full error-code set.
 */

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { Request, Response } from "express";

interface CorrelatedRequest extends Request {
  id?: string;
  traceId?: string;
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<CorrelatedRequest>();
    const res = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const code =
      exception instanceof HttpException ? exception.name : "INTERNAL_ERROR";
    const message =
      exception instanceof HttpException
        ? exception.message
        : "Internal server error";

    const requestId = req.id ?? (req.headers["x-request-id"] as string);
    const traceId = req.traceId ?? (req.headers["x-trace-id"] as string);

    this.logger.error(
      `[${requestId}] [${traceId}] ${req.method} ${req.url} failed`,
    );

    res.status(status).json({
      success: false,
      error: { code, message },
      requestId,
    });
  }
}
