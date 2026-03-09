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

## Konzeptionelle Kontrollen

- Identitätsprüfung für geschützte API-Nutzung
- rollen- bzw. berechtigungsbasierte Zugriffsentscheidungen
- mehrschichtige Tenant-Isolation auf Anwendungs- und Datenebene
- Eingabevalidierung und konsistente Fehlerbehandlung
- zentrale Metrik- und Monitoring-Bausteine zur Erkennung von Auffälligkeiten

## Grenzen der öffentlichen Dokumentation

Dieser Showcase enthält absichtlich keine low-level Sicherheitsdetails wie konkrete Tokenschemata, Schwellenwerte, Guard-Kombinationen, Ausnahmelisten, Regex-Pattern, interne Scan-Regeln oder betriebliche Endpunkte. Diese Trennung reduziert unnötige Offenlegung des Angriffsraums.

## Responsible Disclosure

Bei verantwortungsvoller Meldung wird erwartet, dass:
- keine aktive Ausnutzung in produktiven Umgebungen erfolgt,
- ausreichend Zeit für Bewertung und Behebung gegeben wird,
- technische Details erst nach Abstimmung öffentlich gemacht werden.
