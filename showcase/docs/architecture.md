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

## Architekturelle Leitlinien

- fachliche Trennung entlang klarer Servicegrenzen
- zentrale Behandlung von Security- und Tenant-Kontext
- standardisierte API- und Observability-Grundmuster
- Erweiterbarkeit über Connector- und Provider-Modelle

## Diagramm

Das zugehörige Diagramm liegt unter:

- [assets/diagrams/architecture-overview.mmd](../assets/diagrams/architecture-overview.mmd)
