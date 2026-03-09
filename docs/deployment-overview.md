# Deployment- und Betriebsüberblick

## Ziel dieses Dokuments

Dieses Dokument beschreibt das Betriebsmodell der Plattform auf hoher Ebene. Es ersetzt keine interne Betriebsanleitung und enthält keine sensiblen Infrastrukturdetails.

## Betriebsmodell in Kurzform

Die Quellen dokumentieren ein containerbasiertes Modell mit getrennten Anwendungsdiensten, einem Gateway, zentraler Datenhaltung und Observability-Bausteinen. Das System ist für mehrere Umgebungen ausgelegt; Konfiguration und Secrets sind dabei umgebungsspezifisch zu trennen.

## Architekturbausteine für den Betrieb

- Gateway-Schicht als zentraler Zugriffspunkt
- mehrere fachliche Backend-Services
- persistente Datenhaltung und Laufzeitdienste
- Monitoring- und Metriksysteme

Diese Bausteine werden in den Projektdokumenten als zusammenhängendes Betriebsmodell behandelt, unabhängig davon, ob lokal entwickelt oder in einer dedizierten Zielumgebung betrieben wird.

## Lokale Entwicklung und Betriebsumgebung

Die private Dokumentation trennt zwischen:

- lokaler Entwicklungsnutzung mit vereinfachter Ausführung,
- Betriebs- bzw. Deployment-Kontext mit gesonderter Konfiguration und Härtung.

Für den öffentlichen Showcase wird diese Trennung nur konzeptionell dargestellt. Konkrete interne Betriebsabläufe und Detailschritte bleiben bewusst privat.

## Secrets und Konfigurationsgrenzen

Konfigurationswerte und geheime Werte sind getrennt zu behandeln. Die Quellen enthalten dafür Richtlinien und Security-Policies. Der öffentliche Export übernimmt diese Aussage auf Prinzipienebene, ohne interne Variablenlandschaft oder Betriebsparameter offenzulegen.

## Infrastrukturautomatisierung

Im privaten Repository sind Infrastrukturmodule und Environment-Konzepte dokumentiert. Der Showcase übernimmt daraus die Grundaussage, dass Infrastruktur als Code und reproduzierbare Environment-Strukturen vorgesehen sind.

## Nicht Bestandteil dieses Dokuments

- interne Zertifikatspfade und Betriebsendpunkte
- operative Schritt-für-Schritt-Runbooks
- detaillierte Service- oder Endpoint-Konfigurationen
