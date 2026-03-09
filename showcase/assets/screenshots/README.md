# Hinweise zu Screenshots für den öffentlichen Export

## Sinnvolle Screenshots

Für ein öffentliches Repository sind vor allem diese Screenshot-Typen sinnvoll:

- Dashboard-Übersicht mit anonymisierten, nicht-personenbezogenen Daten
- Architektur- und Security-Diagramme als gerenderte Ansichten aus den `.mmd`-Dateien
- exemplarische Service- oder Modulübersicht ohne interne URLs und ohne Betriebsdetails

## Ungeeignete Screenshots

Nicht geeignet für den öffentlichen Export sind:

- Screenshots mit Tokens, Secrets, Headern oder internen Zugangsdaten
- Screenshots mit internen Hostnamen, lokalen Entwicklungs-URLs oder Port-Details
- Screenshots mit Kundennamen, personenbezogenen Daten oder echten Betriebsmetriken
- Screenshots aus internen Runbooks mit operativen Detailschritten

## Empfohlene Neuanfertigung

Die Screenshots sollten für den öffentlichen Export manuell neu erstellt werden, auf Basis der redigierten Showcase-Dokumente:

1. Architekturdiagramm aus `assets/diagrams/architecture-overview.mmd` rendern
2. Security-Layer-Diagramm aus `assets/diagrams/security-layers.mmd` rendern
3. Eine neutrale UI-Ansicht ohne sensible Betriebsinformationen aufnehmen

## Hinweis zu bestehenden Binärdateien

Vorhandene PNG- oder andere Binär-Screenshots werden nicht automatisch redigiert. Für den öffentlichen Export sollten sie durch neu erstellte, inhaltlich geprüfte Varianten ersetzt werden.
