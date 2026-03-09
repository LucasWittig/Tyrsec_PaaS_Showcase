# Implementierungsbeispiele (redigiert)

## Zweck dieses Dokuments

Dieses Dokument ergänzt die Architektur- und Security-Übersicht um kurze, reale Ausschnitte aus dem Projekt. Die Beispiele wurden auf öffentlich vertretbare Inhalte reduziert. Sensible Parameter, interne Bezeichner und betriebliche Detailwerte sind teilweise redigiert.

## 1) Servicegrenzen und Boundary Controls

### Beispiel: Gateway setzt Sicherheitsheader und propagiert Korrelation

Einordnung: Das Gateway ist nicht nur Routing-Komponente, sondern auch Randbedingung für Security-Header und Trace-Kontext.

```nginx
add_header X-Frame-Options DENY always;
add_header X-Content-Type-Options nosniff always;

location /api/... {
  proxy_pass http://<internal-service>/...;
  proxy_set_header X-Request-Id $http_x_request_id;
  proxy_set_header X-Trace-Id $http_x_trace_id;
}

location ~ ^/(<internal-routes>)/ {
  return 403;
}
```

Was dieser Ausschnitt zeigt:
- zentrale Boundary-Schicht vor den Domain-Services
- Weitergabe von Request-/Trace-Kontext über Servicegrenzen
- explizite Sperre für interne Routenmuster

Was redigiert wurde:
- konkrete Routenmuster und interne Service-Namen

## 2) Authentifizierung und Autorisierung

### Beispiel: Header/JWT-Konsistenzprüfung im Tenant-Kontext

Einordnung: Der Tenant-Kontext wird nicht aus beliebigen Request-Quellen übernommen.

```typescript
const jwtTenantId = req.user?.tenantId;
const headerTenantId = req.headers["x-tenant-id"];

if (headerTenantId && jwtTenantId && headerTenantId !== jwtTenantId) {
  return res.status(403).json({
    success: false,
    error: { code: "TENANT_ID_MISMATCH" },
  });
}
```

Was dieser Ausschnitt zeigt:
- defensive Konsistenzprüfung zwischen signiertem Kontext und Headerwert
- frühes Abweisen unplausibler Requests

Was redigiert wurde:
- keine internen Fehlermeldungsdetails

## 3) Tenant-Kontext und Isolation

### Beispiel: Fail-Closed bei fehlendem Datenbankkontext

Einordnung: Kann der Tenant-Kontext für die nachgelagerte Datenzugriffsschicht nicht gesetzt werden, wird nicht weiterverarbeitet.

```typescript
if (tenantId) {
  try {
    await tenantContext.set(tenantId);
  } catch {
    return res.status(500).json({
      success: false,
      error: { code: "TENANT_CONTEXT_ERROR" },
    });
  }
}
```

Was dieser Ausschnitt zeigt:
- technische Durchsetzung von Mandantentrennung
- Fail-Closed statt stiller Degradation

Was redigiert wurde:
- interne Logging-Details

## 4) Secret-Handling und sichere Konfiguration

### Beispiel: Produktionspfad mit Secret-Preload und Cache

Einordnung: Konfiguration und Geheimwerte sind getrennt; kritische Secrets werden im Produktionspfad gezielt vorgeladen.

```typescript
if (isProduction) {
  await preloadCriticalSecrets();
}

async getSecret(key: string): Promise<string> {
  if (cache.has(key)) return cache.get(key)!;
  const value = await secretsService.getSecret(key);
  if (value) cache.set(key, value);
  return value;
}
```

Was dieser Ausschnitt zeigt:
- klarer Produktions-/Nichtproduktionspfad
- zentrale Secret-Auflösung statt verteilter Direktzugriffe

Was redigiert wurde:
- konkrete Secret-Namen

## 5) Auditierbarkeit und Nachvollziehbarkeit

### Beispiel: Standardisierte Fehlerantwort mit Request-Korrelation

Einordnung: Fehlerbehandlung liefert konsistente Struktur und Korrelation für Betrieb und Analyse.

```typescript
const requestId = req.id ?? req.headers["x-request-id"];
const traceId = req.traceId ?? req.headers["x-trace-id"];

logger.error(`[${requestId}] [${traceId}] ${req.method} ${req.url} failed`);

res.status(status).json({
  success: false,
  error: { code, message },
  requestId,
});
```

Was dieser Ausschnitt zeigt:
- einheitliches Fehlerformat
- durchgängige Korrelation zwischen Gateway, Service und Logs

Was redigiert wurde:
- interne Mapping-Tabellen und vollständige Fehlercodesets

## 6) Container- und Betriebsmodell

### Beispiel: Sicherheits- und Verfügbarkeitsaspekte im Runtime-Stack

Einordnung: Das Laufzeitmodell enthält neben Service-Definitionen auch Betriebsaspekte wie Healthchecks und Privilegienbegrenzung.

```yaml
service-a:
  restart: unless-stopped
  security_opt:
    - no-new-privileges:true
  depends_on:
    db:
      condition: service_healthy
  healthcheck:
    test: ["CMD", "curl", "-f", "http://<service>/health"]
```

Was dieser Ausschnitt zeigt:
- defensive Container-Defaults
- health-basierte Startabhängigkeiten
- Betriebslogik direkt im Compose-Kontext

Was redigiert wurde:
- konkrete Service-Namen und Netzwerkdetails

## 7) Monitoring und Betriebsbeobachtung

### Beispiel: Mandantenfähige Metriken mit Label-Strategie

Einordnung: Metriken sind nicht nur global, sondern enthalten Service- und Tenant-Kontext für Auswertung und Fehlerlokalisierung.

```typescript
new Counter({
  name: "tyrsec_requests_total",
  labelNames: ["tenant", "service", "endpoint", "method"],
});

new Histogram({
  name: "tyrsec_request_duration_seconds",
  labelNames: ["tenant", "service", "endpoint", "method", "status"],
});
```

Was dieser Ausschnitt zeigt:
- konsistente Label-Strategie für Betriebssicht
- Basis für tenantbezogene Observability und SLO-Auswertung

Was redigiert wurde:
- konkrete Bucket- und Intervallwerte

## 8) Integrationsmuster und Provider-Abstraktion

### Beispiel A: Capability-Modell statt direkter Cloud-Kopplung

Einordnung: Der Connector beschreibt Integrationsfähigkeiten über Capabilities und Interfaces.

```typescript
export enum ProviderCapability {
  OBJECT_STORE = "object_store",
  MESSAGE_BUS = "message_bus",
  KEY_MANAGEMENT = "key_management",
  EDGE_GATEWAY = "edge_gateway",
}

export interface IObjectStore {
  putObject(bucket: string, key: string, data: Buffer): Promise<string>;
}
```

Was dieser Ausschnitt zeigt:
- Austauschbarkeit von Providern über stabile Verträge
- reduzierte Kopplung an einzelne Plattformanbieter

### Beispiel B: Infrastrukturmodul mit Tenant-Bezug und Schutzdefaults

Einordnung: Die IaC-Module koppeln Tenant-Naming mit Sicherheitsdefaults in der Ressourcenkonfiguration.

```hcl
locals {
  tenant_suffix = var.tenant_id != "" ? "-${local.tenant_sanitized}" : ""
  tags_final    = var.tenant_id != "" ? merge(local.base_tags, { TenantId = var.tenant_id }) : local.base_tags
}

resource "aws_s3_bucket_public_access_block" "objectstore" {
  block_public_acls       = true
  block_public_policy     = true
  restrict_public_buckets = true
}
```

Was dieser Ausschnitt zeigt:
- Brücke zwischen Laufzeit-Mandantenmodell und Infrastruktur-Namensschema
- Security-Defaults auf Infrastrukturebene

Was redigiert wurde:
- konkrete Ressourcennamen und Umgebungsbezeichner
