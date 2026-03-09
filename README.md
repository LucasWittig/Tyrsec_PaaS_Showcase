# TyrSec PaaS Showcase

## Kurzbeschreibung

Dieses Repository-Verzeichnis ist ein öffentlicher Showcase-Auszug aus dem privaten Projekt `Tyrsec_PaaS`. Der Fokus liegt auf Architektur, Sicherheitsprinzipien und Betriebsmodell in abstrahierter Form. Konkrete Implementierungsdetails, interne Betriebsinformationen und sensible Sicherheitsparameter sind bewusst nicht enthalten.

TyrSec ist als modulare Plattform mit mehreren Backend-Services, einem Dashboard-Frontend, einem API-Gateway sowie zentralen Komponenten für Datenhaltung und Observability aufgebaut. Die zugrunde liegende Dokumentation im privaten Repository beschreibt zusätzlich Infrastrukturautomatisierung, Governance- und Security-Policies sowie den Integrationsansatz über einen Universal Connector.

## Ziel und Umfang

Der Showcase dokumentiert den technischen Rahmen des Systems für fachliche Einordnung, Architekturgespräche und Code-Review-orientierte Erstbewertung. Er ist keine Installationsanleitung und keine vollständige Betriebsdokumentation.

Enthalten sind:
- Architekturüberblick auf Komponentenebene
- abstrahierte Security-Übersicht
- Deployment- und Betriebsmodell auf hoher Ebene
- knappe Funktionsübersicht ohne Roadmap-Hype

## Systemüberblick

Im Kern besteht das System aus einem Gateway-basierten Zugriffspunkt, mehreren fachlich getrennten Services und einem webbasierten Dashboard. Persistenz, Caching und Monitoring sind als eigene Bausteine geführt. Für externe Anbindungen ist ein Connector-Ansatz dokumentiert, der Provider-Funktionalitäten über Capabilities strukturiert.

## Kernkomponenten

- Dashboard (Web-Frontend) für Bedienung und Visualisierung
- API-Gateway für Routing und zentrale Randbedingungen
- Domain-Services für Authentifizierung, Resident-, Access- und IoT-Funktionen
- Universal Connector für Integrations- und Provider-Themen
- Datenhaltung und unterstützende Laufzeitdienste
- Monitoring- und Metrikkomponenten für Betriebsbeobachtung

## Architektur

Die Architektur folgt einer serviceorientierten Trennung fachlicher Verantwortlichkeiten. Sicherheits-, Tenant- und Observability-Aspekte sind als durchgängige Querschnittsthemen angelegt. Weitere Details enthält die Architekturdokumentation in diesem Showcase:

- [Architekturübersicht](./docs/architecture.md)
- [Architekturdiagramm](./assets/diagrams/architecture-overview.mmd)

## Sicherheitsansatz

Die privaten Quellen dokumentieren einen Zero-Trust-orientierten Ansatz mit Authentifizierung, Autorisierung, Tenant-Isolation, Secret-Handling und Auditierbarkeit. Für die öffentliche Darstellung wurden diese Inhalte auf Prinzipienebene verdichtet.

- [Security Policy und Disclosure-Prozess](./SECURITY.md)
- [Abstrahierte Security-Übersicht](./docs/security-overview.md)
- [Security-Layer-Diagramm](./assets/diagrams/security-layers.mmd)

## Deployment- und Betriebsmodell

Die Quellen beschreiben ein containerbasiertes Betriebsmodell mit Gateway, Services, Datenhaltung und Observability. Zusätzlich sind Infrastrukturautomatisierung und Environment-Trennung dokumentiert. Konkrete interne Abläufe, Betriebsendpunkte und Detailpfade sind in diesem Showcase bewusst ausgeblendet.

- [Deployment-Überblick](./docs/deployment-overview.md)

## Technische Schwerpunkte

Der Showcase zeigt nicht nur Zielbilder, sondern auch reale, redigierte Implementierungslogik aus dem Projekt. Die vollständigen Beispiele stehen in `implementation-examples.md`; hier nur drei Teaser:

1. **Fail-Closed Tenant-Kontext in Middleware**
   - Tenant-Kontext wird primär aus signiertem JWT übernommen.
   - Header-Werte werden nur akzeptiert, wenn sie zum JWT-Kontext passen.
   - Kann der Datenbankkontext nicht sicher gesetzt werden, wird der Request abgebrochen.

2. **Gateway als Boundary-Schicht**
   - Das Gateway setzt Sicherheitsheader, leitet Korrelation-IDs weiter und begrenzt Request-Last.
   - Interne Dienste sind nicht als direkte Einstiegspunkte gedacht; die Routing-Schicht trennt externe von interner Erreichbarkeit.

3. **Capability-basierte Connector-Abstraktion**
   - Provider-Funktionen werden über Capabilities und Interfaces beschrieben statt über Cloud-spezifische Direktaufrufe.
   - Das reduziert Kopplung und unterstützt nachvollziehbare Zuordnung zwischen Laufzeit und Infrastrukturmodulen.

Mehr Tiefe:
- [Implementierungsbeispiele (redigiert)](./docs/implementation-examples.md)

## Dokumentationsübersicht

- [Feature-Übersicht](./docs/feature-summary.md)
- [Implementierungsbeispiele](./docs/implementation-examples.md)
- [Hinweise zu Screenshots](./assets/screenshots/README.md)
- [Export-Checkliste für ein öffentliches Repository](./EXPORT-CHECKLIST.md)

## Hinweis zum privaten Implementierungs-Repository

Dieser Showcase enthält bewusst nur einen redigierten Dokumentationsauszug. Der vollständige Quellcode, interne Runbooks, operative Detailkonfigurationen und weitere projektspezifische Artefakte verbleiben im privaten Repository.
