# Öffentliche Redaktionsnotizen

## Zweck

Dieses Dokument hält fest, welche Typen von Aussagen aus den privaten Quellen nicht in den öffentlichen Showcase übernommen wurden und warum.

## Nicht übernommene Claim-Kategorien

- absolute Prozent- und Score-Behauptungen ohne öffentliche Evidenz
- pauschale Reifebehauptungen wie „production-ready“ ohne öffentlich prüfbaren Kontext
- detaillierte interne Betriebsinformationen (inklusive Endpunkte, interne Pfade, Zugangsschemata)
- sensible Low-Level-Sicherheitsdetails (Tokenbeispiele, Ausnahmelisten, Guard-Ketten, Schwellenwerte)
- konkrete Kunden- oder Erfolgsgeschichten mit Leistungs- oder Zufriedenheitswerten

## Beispielhafte Problemstellen aus den Quellen

Insbesondere aus der privaten `README.md` wurden nicht übernommen:

- Formulierungen mit „100% Security“, „100% Functionality“, „100% Coverage“
- numerische Health- und Performance-Scores als globale Qualitätsaussage
- vollständige API-/URL-/Port-Listen und lokale Betriebszugänge
- konkrete Sicherheits- und Tokenlaufzeitdetails
- Fallbeispiele mit Kundenbezug und Erfolgskennzahlen

## Übernommene fachliche Kerne (abstrahiert)

- Plattformcharakter mit modularer Service-Architektur
- Security-by-Design, Authentifizierung/Autorisierung, Mandantentrennung
- Monitoring/Observability als Betriebsbaustein
- Integrationsansatz über den Universal Connector
- dokumentierte Betriebs- und Architekturprinzipien

## Redaktionsprinzipien

- nur Aussagen übernehmen, die in den Repository-Quellen klar belegbar sind
- technische Einordnung statt Werbesprache
- Abstraktion vor Detailtiefe, wenn Detailtiefe den Angriffsraum oder interne Abläufe offenlegt
