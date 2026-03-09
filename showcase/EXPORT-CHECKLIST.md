# Export-Checkliste für das öffentliche Repository

## Dateien für das Repo-Root

Beim Export in ein separates öffentliches Repository diese Dateien aus `showcase/` in das Root des Ziel-Repositories übernehmen:

- `README.md`
- `SECURITY.md`
- `repo-description.txt`
- `EXPORT-CHECKLIST.md`

## Unterordner, die mitgenommen werden

- `docs/`
  - `architecture.md`
  - `security-overview.md`
  - `deployment-overview.md`
  - `feature-summary.md`
  - `public-redaction-notes.md`
- `assets/`
  - `diagrams/architecture-overview.mmd`
  - `diagrams/security-layers.mmd`
  - `screenshots/README.md`

## Manuelle Prüfung vor Veröffentlichung

1. In allen Dateien auf unbeabsichtigte interne Details prüfen.
2. Security-Kontakt in `SECURITY.md` von TODO auf reale Kontaktadresse umstellen.
3. Screenshot-Set manuell erstellen und prüfen.
4. Endredaktion auf Stil und Nachvollziehbarkeit durchführen.

## Redaktionscheck

Vor Freigabe bestätigen:

- keine Secrets oder Zugangsdaten
- keine `localhost`-Links
- keine Ports ohne fachliche Notwendigkeit
- keine Kundennamen oder Fallbeispiele
- keine internen Dateipfade aus dem privaten Repository
- keine exakten Sicherheitsgrenzwerte
- keine nicht belegbaren Claims
- keine generisch wirkenden Floskeln oder Marketington

## Explizite Ausschlussregeln

Die Exportdateien dürfen nicht enthalten:

- vollständige API-Endpoint-Listen
- JWT-Beispiele und Token-Details
- konkrete Secret-Variablen mit Sicherheitsrelevanz ohne öffentlichen Mehrwert
- Regex-Pattern aus Policy-as-Code
- konkrete Rate-Limit-Zahlen
- konkrete Audit-Hash-Implementierungsdetails
- konkrete Guard-/Decorator-Kombinationen pro Endpoint
- interne CI/CD-Detailmuster ohne öffentlichen Nutzen
- nicht freigegebene Roadmap-Details
- unbestätigte Compliance- oder Zertifizierungsbehauptungen
