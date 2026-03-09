# Architekturübersicht

## Einordnung

Die privaten Quelldokumente beschreiben TyrSec als serviceorientierte Plattform mit klar getrennten Verantwortlichkeiten für Authentifizierung, Resident-, Access- und IoT-Funktionen sowie einem Integrationsbaustein für externe Provider. Der öffentliche Showcase reduziert diese Darstellung auf die technische Struktur und Interaktionen auf hoher Ebene.

## Hauptkomponenten

- Dashboard als Bedien- und Beobachtungsoberfläche
- API-Gateway als zentraler Einstiegspunkt und Routing-Schicht
- Kernservices für fachliche Domänen
- Universal Connector für Integrations- und Provider-Themen
- Datenhaltung und zustandsnahe Laufzeitdienste
- Observability-Bausteine für Metriken und Monitoring

## Verantwortungen der Kernservices

| Komponente | Hauptverantwortung |
|---|---|
| Auth Service | Identitäts- und Zugriffsgrundlagen (Authentifizierung, Sitzungskontext, Rollen-/Rechtebezug) |
| Resident Service | Domänenobjekte im Kontext von Bewohner- und Einheitenverwaltung |
| Access Service | Regeln, Zugriffsvorgänge und Auswertung von Zugriffsereignissen |
| IoT Service | Geräte-, Sensor- und Automatisierungsfunktionen |
| Universal Connector | Provider- und Integrationslogik, inklusive Erweiterungs- und Monitoringbezug |

## Zusammenspiel auf hoher Ebene

1. Clients nutzen das Dashboard als primären Interaktionspunkt.
2. API-Aufrufe laufen über das Gateway in die zuständigen Kernservices.
3. Services persistieren fachliche Daten und nutzen Laufzeitdienste für Session-, Cache- oder Queue-nahe Aufgaben.
4. Monitoring-Komponenten erfassen technische Signale für Betrieb und Fehleranalyse.
5. Der Universal Connector stellt Integrationslogik für externe Systeme über ein Capability-orientiertes Modell bereit.

## Beispielhafte technische Umsetzung (redigiert)

### Designentscheidung: Gateway + Servicegrenzen

Die Trennung über eine zentrale Gateway-Schicht reduziert die direkte Angriffs- und Kopplungsfläche zwischen externem Traffic und internen Diensten. Gleichzeitig können Querschnittsthemen wie Korrelation, Header-Politik und Boundary-Regeln an einer Stelle konsistent umgesetzt werden.

### Designentscheidung: Connector-Abstraktion

Provider-Funktionen werden im Projekt nicht nur über konkrete SDK-Aufrufe, sondern über ein Capability-Modell beschrieben. Das vereinfacht Provider-Wechsel, reduziert Cloud-spezifische Streuung und macht Infrastruktur-/Runtime-Mapping nachvollziehbarer.

Kompakte, reale Auszüge dazu:
- [Implementierungsbeispiele](./implementation-examples.md)

## Architekturelle Leitlinien

- fachliche Trennung entlang klarer Servicegrenzen
- zentrale Behandlung von Security- und Tenant-Kontext
- standardisierte API- und Observability-Grundmuster
- Erweiterbarkeit über Connector- und Provider-Modelle

## Diagramm

Das zugehörige Diagramm liegt unter:

- [assets/diagrams/architecture-overview.mmd](../assets/diagrams/architecture-overview.mmd)
