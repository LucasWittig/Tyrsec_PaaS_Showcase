# Security Policy und Sicherheitsüberblick

## Geltungsbereich

Dieses Dokument gilt für den öffentlichen Showcase-Auszug unter `showcase/`. Es beschreibt Meldeweg und Grundprinzipien auf hoher Ebene. Detaillierte Abwehrkonfigurationen, interne Betriebsparameter und konkrete Implementierungsgrenzen werden nicht öffentlich dokumentiert.

## Unterstützter Scope

| Bereich | Status |
|---|---|
| Inhalte unter `showcase/` | unterstützt |
| Privater Anwendungscode und interne Betriebsartefakte | nicht Teil dieses öffentlichen Exports |

## Meldung von Sicherheitslücken

Bitte keine Sicherheitslücken über öffentliche Issues melden.

Vorgehen:
1. Verwundbarkeit mit betroffener Komponente und reproduzierbarer Beschreibung dokumentieren.
2. Auswirkung, Annahmen und mögliche Bedingungen benennen.
3. Meldung über einen nicht-öffentlichen Kanal senden.

TODO: Offizielle Security-Kontaktadresse (z. B. dedizierte E-Mail oder Security-Formular) für den öffentlichen Export festlegen.

Bis zur Festlegung eines offiziellen Kontakts sollten Maintainer einen vertraulichen Meldekanal manuell bereitstellen.

## Sicherheitsprinzipien auf hoher Ebene

- Zero-Trust-orientierte Zugriffskontrolle
- Trennung von Authentifizierung und Autorisierung
- Mandantenkontext als zentrale Leitlinie für Datenzugriffe
- Secret-Handling mit Trennung von Konfiguration und geheimen Werten
- Nachvollziehbarkeit sicherheitsrelevanter Änderungen über Audit-Mechanismen
- Fail-Closed als Grundprinzip bei ungültigem oder fehlendem Sicherheitskontext

## Security-Layer im Systemkontext

| Layer | Zweck | Technischer Fokus |
|---|---|---|
| Identity und Access | Identitätsprüfung und Sitzungsbezug | Validierung des Sicherheitskontexts vor geschützten Operationen |
| Authorization | Durchsetzung von Rollen/Rechten | Zugriff nur mit passendem Berechtigungsprofil |
| Tenant Isolation | Trennung von Mandantenkontext | Konsistenzprüfung zwischen Request-Kontext und Datenzugriff |
| Data Protection | Schutz sensibler Daten | Trennung von Secrets und regulärer Konfiguration |
| Auditability | Nachvollziehbarkeit von Sicherheitsereignissen | Korrelation über Request-/Trace-Kontext und strukturierte Fehlerantworten |
| Boundary Controls | Steuerung externer Zugriffe | Gateway-Schicht als kontrollierter Eintrittspunkt |
| Monitoring und Detection | Betriebs- und Sicherheitsbeobachtung | Metrik-/Monitoring-Signale über Servicegrenzen hinweg |

## Konzeptionelle Kontrollen

- Identitätsprüfung für geschützte API-Nutzung
- rollen- bzw. berechtigungsbasierte Zugriffsentscheidungen
- mehrschichtige Tenant-Isolation auf Anwendungs- und Datenebene
- Eingabevalidierung und konsistente Fehlerbehandlung
- zentrale Metrik- und Monitoring-Bausteine zur Erkennung von Auffälligkeiten

## Beispielausschnitt 1: Fail-Closed bei Tenant-Mismatch (redigiert)

Herkunft: Tenant-Middleware in der Service-Schicht.

```typescript
const jwtTenantId = req.user?.tenantId;
const headerTenantId = req.headers["x-tenant-id"];

if (headerTenantId && jwtTenantId && headerTenantId !== jwtTenantId) {
  return res.status(403).json({ code: "TENANT_ID_MISMATCH" });
}

const tenantId = jwtTenantId || headerTenantId;
if (tenantId) {
  await tenantContext.set(tenantId); // Fehler -> Request abbrechen
}
```

Was der Ausschnitt zeigt: Tenant-Kontext wird technisch durchgesetzt und nicht nur fachlich angenommen.

## Beispielausschnitt 2: Fehlerantwort mit Korrelation (redigiert)

Herkunft: Standardisierter Error-Filter.

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

Was der Ausschnitt zeigt: Security- und Betriebsanalyse werden über konsistente Request-Korrelation unterstützt.

## Interner Reifehinweis

Im Projekt ist eine interne Security-Checkliste mit 27 definierten Kontrollpunkten dokumentiert; der aktuelle interne Stand nennt 27 von 27 als umgesetzt.

Diese Angabe beschreibt den Erfüllungsgrad der projektspezifisch definierten Sicherheitskontrollen und ist keine absolute Sicherheitszusage.

## Grenzen der öffentlichen Dokumentation

Dieser Showcase enthält absichtlich keine low-level Sicherheitsdetails wie konkrete Tokenschemata, Schwellenwerte, Guard-Kombinationen, Ausnahmelisten, Regex-Pattern, interne Scan-Regeln oder betriebliche Endpunkte. Diese Trennung reduziert unnötige Offenlegung des Angriffsraums.

## Responsible Disclosure

Bei verantwortungsvoller Meldung wird erwartet, dass:
- keine aktive Ausnutzung in produktiven Umgebungen erfolgt,
- ausreichend Zeit für Bewertung und Behebung gegeben wird,
- technische Details erst nach Abstimmung öffentlich gemacht werden.
