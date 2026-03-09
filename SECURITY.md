# Security

## Geltungsbereich

Dieses Dokument bezieht sich auf die öffentlich sichtbaren Inhalte dieses Repositorys. Es beschreibt den Meldeweg für sicherheitsrelevante Hinweise und den Sicherheitsrahmen auf hoher Ebene.

Private Implementierungsdetails, operative Konfigurationen und interne Abwehrmechanismen sind nicht Bestandteil dieser öffentlichen Dokumentation.

## Unterstützter Scope

| Bereich | Status |
|---|---|
| Öffentliche Dokumentation in diesem Repository | im Scope |
| Diagramme und technische Übersichten | im Scope |
| Privater Anwendungscode und interne Betriebsartefakte | nicht öffentlich, daher nicht Teil dieses Repositorys |

## Meldung von Sicherheitsproblemen

Bitte keine sicherheitsrelevanten Hinweise über öffentliche Issues oder Pull Requests einreichen.

Für eine vertrauliche Meldung nutze den direkten Maintainer-Kontakt, der im GitHub-Profil oder im jeweiligen Projektkontext angegeben ist.

Eine Meldung sollte nach Möglichkeit enthalten:

1. betroffene Komponente oder betroffener Bereich
2. kurze Beschreibung des Problems
3. Voraussetzungen oder Annahmen
4. mögliche Auswirkungen
5. nachvollziehbare Reproduktionsschritte, soweit dies ohne öffentliche Offenlegung sensibler Details möglich ist

## Sicherheitsprinzipien

Der dokumentierte Sicherheitsrahmen folgt im Kern diesen Leitlinien:

- kontrollierter Zugriff nach einem Zero-Trust-orientierten Modell
- Trennung von Authentifizierung und Autorisierung
- Mandantenkontext als wesentliche Grundlage für Datenzugriffe
- Trennung von Konfiguration und geheimen Werten
- nachvollziehbare Verarbeitung sicherheitsrelevanter Vorgänge
- fail-closed bei fehlendem oder ungültigem Sicherheitskontext

## Konzeptionelle Kontrollen

Die öffentliche Dokumentation verweist auf folgende Kontrollbereiche:

- Identitätsprüfung für geschützte Zugriffe
- rollen- oder berechtigungsbasierte Zugriffsentscheidungen
- mehrschichtige Tenant-Isolation auf Anwendungs- und Datenebene
- Validierung eingehender Daten und konsistente Fehlerbehandlung
- Monitoring- und Logging-Bausteine zur Erkennung von Auffälligkeiten
- klare Trennung zwischen öffentlicher Dokumentation und internen Schutzmechanismen

## Grenzen der öffentlichen Dokumentation

Dieses Repository enthält bewusst keine Low-Level-Sicherheitsdetails wie konkrete Tokenstrukturen, Secret-Pattern, Schwellenwerte, Guard-Kombinationen, Ausnahmelisten, internen Scan-Regeln oder betriebliche Endpunkte.

Diese Abgrenzung ist beabsichtigt. Der Showcase soll Architektur und Sicherheitsprinzipien nachvollziehbar machen, ohne unnötig operative Angriffsflächen offenzulegen.

## Responsible Disclosure

Bei verantwortungsvoller Meldung wird erwartet, dass

- keine aktive Ausnutzung in realen Umgebungen erfolgt,
- ausreichend Zeit für Bewertung und Einordnung gegeben wird,
- technische Details nicht vor einer abgestimmten Rückmeldung öffentlich gemacht werden.