/**
 * Redacted example — tenant-aware Prometheus metrics.
 *
 * Metrics carry service and tenant context as labels, so operational views
 * and SLO evaluation can be scoped per tenant instead of only globally.
 *
 * Redacted: concrete bucket boundaries and scrape/interval values.
 */

import { Counter, Histogram, Registry } from "prom-client";

export const metricsRegistry = new Registry();

export const requestsTotal = new Counter({
  name: "tyrsec_requests_total",
  help: "Total number of handled requests",
  labelNames: ["tenant", "service", "endpoint", "method"] as const,
  registers: [metricsRegistry],
});

export const requestDurationSeconds = new Histogram({
  name: "tyrsec_request_duration_seconds",
  help: "Request duration in seconds",
  labelNames: ["tenant", "service", "endpoint", "method", "status"] as const,
  registers: [metricsRegistry],
});

export function observeRequest(
  labels: {
    tenant: string;
    service: string;
    endpoint: string;
    method: string;
    status: string;
  },
  durationSeconds: number,
): void {
  requestsTotal.inc({
    tenant: labels.tenant,
    service: labels.service,
    endpoint: labels.endpoint,
    method: labels.method,
  });
  requestDurationSeconds.observe(labels, durationSeconds);
}
