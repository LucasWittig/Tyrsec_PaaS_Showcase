# Security-Überblick

## Sicherheitsziele

Die öffentliche Security-Darstellung folgt drei Zielen:

- Schutz von Identitäten und Zugriffskontext
- Trennung von Mandantendaten
- Nachvollziehbarkeit sicherheitsrelevanter Vorgänge

Die zugrunde liegenden privaten Quellen enthalten hierzu detaillierte Policies und Implementierungen; im Showcase werden diese auf Kontroll- und Prinzipienebene dargestellt.

## Authentifizierung und Autorisierung

Die Architektur nutzt einen getrennten Ansatz für Identitätsprüfung und Berechtigungsprüfung. Geschützte Funktionen setzen einen validen Sicherheitskontext voraus. Autorisierungsentscheidungen orientieren sich an Rollen und Berechtigungen und folgen dem Prinzip minimaler Rechte.

## Mandantentrennung und Datenisolation

Mandantentrennung ist als Querschnittsthema dokumentiert. Die Trennung erfolgt über anwendungsseitigen Mandantenkontext und datenbankseitige Isolationsmechanismen. Das reduziert das Risiko von Cross-Tenant-Zugriffen bei Fehlern in einzelnen Schichten.

## Secret-Handling

Geheime Werte werden konzeptionell getrennt von regulärer Konfiguration behandelt. Der dokumentierte Ansatz sieht dafür dedizierte Secret-Quellen vor, statt Geheimwerte im Quellcode oder in unsicheren Defaults zu hinterlegen.

## Auditierbarkeit und Nachvollziehbarkeit

Sicherheitsrelevante Vorgänge werden protokolliert, um Änderungen und Zugriffe nachvollziehen zu können. Der Fokus liegt auf belastbarer forensischer Auswertbarkeit und auf konsistenten Audit-Daten über Services hinweg.

## API- und Eingabevalidierung

Die privaten Richtlinien verlangen strukturierte Eingabevalidierung und konsistente Fehlerantworten. Dieses Muster reduziert Angriffsflächen durch fehlerhafte Eingaben und stärkt die Vorhersagbarkeit des API-Verhaltens.

## Netzwerk- und Perimeterkontrollen

Der dokumentierte Aufbau enthält eine zentrale Gateway-Schicht und weitere Perimeterkontrollen, um eingehenden Verkehr zu steuern und technische Schutzmaßnahmen an zentralen Stellen durchzusetzen.

## Observability und Sicherheitsüberwachung

Monitoring- und Metrikkomponenten sind Teil des Sicherheitsbetriebs. Sie unterstützen Erkennung von Auffälligkeiten, Betriebsüberwachung und die Einordnung von Störungen.

## Security-by-Default und Fail-Closed

Die Policy-Ausrichtung setzt auf sichere Voreinstellungen und auf Ablehnung bei unvollständigem Sicherheitskontext. Dieses Fail-Closed-Verhalten ist ein zentrales Designprinzip für sensible Zugriffsentscheidungen.

## Beispielhafte technische Umsetzung (redigiert)

### Praktische Designentscheidung: Tenant-Kontext als Sicherheitsgrenze

Der Tenant-Kontext wird nicht nur als Domänenfeld behandelt, sondern als technische Sicherheitsgrenze. Bei Kontextkonflikten oder Fehlern beim Setzen des Datenbankkontexts bricht die Verarbeitung ab.

### Praktische Designentscheidung: Korrelation statt isolierter Fehlerlogs

Fehler- und Request-Verarbeitung nutzt ein konsistentes Korrelationmodell. Das erleichtert die Verbindung zwischen Gateway-, Service- und Monitoring-Sicht ohne zusätzliche Offenlegung sensibler Payload-Details.

Weitere Beispiele:
- [Implementierungsbeispiele](./implementation-examples.md)

## Grenzen der öffentlichen Dokumentation

Nicht öffentlich enthalten sind konkrete Ausnahmelisten, Token-Details, Schwellenwerte, Guard-Ketten, Regex-Regeln, interne Scanmuster und betriebliche Endpunkte. Diese Trennung ist bewusst gewählt, um Informationswert für Fachleser zu erhalten, ohne unnötige Angriffsdetails offenzulegen.
