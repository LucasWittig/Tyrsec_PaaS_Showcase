# Funktionsübersicht

## Einordnung

Die folgenden Punkte fassen Funktionen zusammen, die in den privaten Projektdokumenten klar beschrieben sind. Die Formulierungen bleiben bewusst technisch und zurückhaltend, ohne Vollständigkeits- oder Reifeversprechen über den öffentlich belegbaren Rahmen hinaus.

## Plattform- und Servicekern

- serviceorientierte Aufteilung in mehrere Domänenservices
- zentrales Dashboard für Bedienung und Beobachtung
- Gateway-basierte API-Struktur
- dokumentierter Service-Catalog-Ansatz für Modul- und Versionssicht

## Identität, Zugriff und Mandantenkontext

- Authentifizierungs- und Autorisierungsbausteine mit Rollen-/Rechtebezug
- dokumentierte Multi-Tenancy-Mechanismen auf Anwendungs- und Datenebene
- Sicherheitsprinzipien nach Zero-Trust- und Fail-Closed-Ausrichtung

## Community Ops (Gated-Community-Vertikale)

- Gast-Einladungen mit temporären Zugangs-Credentials
- Credential-Auslieferung über ein Outbox-Muster mit deterministischem lokalem Nachweis
- Vendor-Verwaltung: Firmen- und Worker-Roster mit Freigabe- und Sperr-Workflow
- Arbeitsaufträge mit unveränderlichen Revisionen und Einmal-Credentials
- Security-Incident-Erfassung, verknüpft mit abgelehnten Zutrittsereignissen
- Gate-/Geräteereignisse in der Demo als Simulation gekennzeichnet
- Tenant-Isolation der Guest-/Vendor-Tabellen über PostgreSQL Row-Level Security, belegt durch dedizierte RLS- und Cross-Tenant-Tests

## Integrations- und Provider-Themen

- Universal Connector als Integrationskomponente
- dokumentiertes Capability-Modell für Provider-Anbindungen
- Multi-Cloud-Bezug in Architektur- und Roadmap-Dokumenten

## Betrieb und Beobachtbarkeit

- Metrik- und Monitoring-Bausteine für Betriebsbeobachtung
- SLO/Observability-Konzepte in der Dokumentation
- Infrastrukturautomatisierung und Environment-Trennung konzeptionell vorhanden

## Hinweise zu AI- und Analytics-Funktionen

Die Quellen nennen Komponenten für Anomalieerkennung, Vorhersage- und Empfehlungsthemen. Der öffentliche Showcase bewertet diese Inhalte nicht als vollständig ausgerollte Produktfunktionen, sondern als dokumentierte Bestandteile und Ansätze innerhalb der Plattform.
