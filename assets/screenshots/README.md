# Screenshots

## Dashboard-Übersicht

![TyrSec Dashboard – Übersicht](./dashboard-overview.png)

## Aufnahmekontext (bewusste Demo-Darstellung)

- Der Screenshot zeigt das reale Dashboard-Frontend des privaten Repositories
  (React 19, Material UI, Widget-Grid mit Drag-and-drop).
- Er ist **bewusst** im **Standalone-Modus ohne verbundenes Backend**
  aufgenommen: So bleibt die Frontend-Architektur sichtbar, ohne
  Produktions- oder Betriebsdaten offenzulegen. Der Verbindungsstatus
  „Getrennt" oben rechts ist genau dieser gewollte Zustand; die Kennzahlen in
  den Widgets sind repräsentative Beispieldaten des Frontends.
- In der Demo sind **Gate- und Geräteereignisse bewusst simuliert** — dieselbe
  kontrollierte Simulationslinie, die für den gesamten Showcase gilt. Das ist
  eine Design-Entscheidung, keine fehlende Funktion: die Logik läuft real,
  nur die physische Hardware wird durch eine deterministische Simulation
  ersetzt.
- Sichtbare Module: Dashboard, Community Ops, Residents, Access, IoT sowie das
  Service-Register mit den verfügbaren Widgets (Auth, IoT, Access, Resident,
  Universal Connector, Monitoring, Security).

Screenshots des vollständigen Stacks (Gateway + Services + Datenhaltung via
Docker Compose) enthalten Demo-Daten aus dem Community-Ops-Seed und werden nur
nach Redaktionsprüfung gemäß [EXPORT-CHECKLIST.md](../../EXPORT-CHECKLIST.md)
ergänzt.
