/**
 * Redacted example — central secret resolution with production preload.
 *
 * Configuration and secret values are kept separate. Critical secrets are
 * preloaded on the production path; all other lookups go through a single
 * resolution point with an in-memory cache instead of scattered direct
 * accesses.
 *
 * Redacted: concrete secret names, backend selection, TTL values.
 */

import { Injectable, OnModuleInit } from "@nestjs/common";

interface SecretsBackend {
  getSecret(key: string): Promise<string | undefined>;
}

@Injectable()
export class SecretsCacheService implements OnModuleInit {
  private readonly cache = new Map<string, string>();

  /** Names of secrets that must be resolvable before the service accepts traffic. */
  private readonly criticalSecrets: string[] = ["<redacted>"];

  constructor(private readonly backend: SecretsBackend) {}

  async onModuleInit(): Promise<void> {
    if (process.env.NODE_ENV === "production") {
      await this.preloadCriticalSecrets();
    }
  }

  async getSecret(key: string): Promise<string | undefined> {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    const value = await this.backend.getSecret(key);
    if (value) {
      this.cache.set(key, value);
    }
    return value;
  }

  private async preloadCriticalSecrets(): Promise<void> {
    for (const key of this.criticalSecrets) {
      const value = await this.getSecret(key);
      if (!value) {
        // Fail-closed: a missing critical secret aborts startup instead of
        // degrading silently at request time.
        throw new Error(`Critical secret not resolvable: ${key}`);
      }
    }
  }
}
