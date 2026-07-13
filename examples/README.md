# Redigierte Implementierungsbeispiele (eigenständige Dateien)

Dieses Verzeichnis enthält die Implementierungsbeispiele aus
[docs/implementation-examples.md](../docs/implementation-examples.md) als
eigenständige, syntaktisch vollständige Dateien.

## Zweck

- Die Beispiele sind als echte `.ts`-, `.tf`-, `.yaml`- und `.conf`-Dateien
  abgelegt, nicht nur als Codeblöcke in Markdown. Damit sind sie direkt
  lesbar, diff-bar und werden von GitHub korrekt als Quellcode erkannt.
- Jede Datei entspricht einem Muster, das im privaten Repository produktiv
  umgesetzt ist. Der Inhalt wurde für die Veröffentlichung redigiert.

## Redaktionsregeln

Für alle Dateien in diesem Verzeichnis gilt (siehe auch
[EXPORT-CHECKLIST.md](../EXPORT-CHECKLIST.md)):

- keine echten Secrets, Tokens, Schlüssel oder Verbindungsdaten
- keine internen Hostnamen, Routen-Muster oder Betriebsendpunkte
- keine konkreten Schwellenwerte, Bucket-Grenzen oder Ausnahmelisten
- Platzhalter sind als solche erkennbar (`example`, `<redacted>` u. ä.)

## Übersicht

| Datei | Thema |
|---|---|
| [typescript/tenant-context.middleware.ts](./typescript/tenant-context.middleware.ts) | Fail-Closed Tenant-Kontext: JWT/Header-Konsistenz und Abbruch bei fehlendem DB-Kontext |
| [typescript/http-exception.filter.ts](./typescript/http-exception.filter.ts) | Standardisierte Fehlerantwort mit Request-/Trace-Korrelation |
| [typescript/secrets-cache.service.ts](./typescript/secrets-cache.service.ts) | Secret-Preload im Produktionspfad und zentrale Auflösung mit Cache |
| [typescript/metrics.registry.ts](./typescript/metrics.registry.ts) | Mandantenfähige Prometheus-Metriken mit konsistenter Label-Strategie |
| [typescript/provider-capability.ts](./typescript/provider-capability.ts) | Capability-Modell des Universal Connector statt direkter Cloud-Kopplung |
| [terraform/objectstore_module.tf](./terraform/objectstore_module.tf) | IaC-Modul mit Tenant-Naming und Security-Defaults (S3 Public Access Block) |
| [kubernetes/service-deployment.yaml](./kubernetes/service-deployment.yaml) | Deployment mit Rolling Update, Probes, Secret-Referenzen und Security Context |
| [nginx/gateway-boundary.conf](./nginx/gateway-boundary.conf) | Gateway als Boundary-Schicht: Security-Header, Korrelation, interne Routensperre |
| [docker/docker-compose.hardening.yml](./docker/docker-compose.hardening.yml) | Defensive Container-Defaults und health-basierte Startabhängigkeiten |
