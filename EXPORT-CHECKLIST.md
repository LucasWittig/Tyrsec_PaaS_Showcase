# Export-Checkliste für den öffentlichen Showcase

Diese Checkliste gilt für jede Datei, die aus dem privaten Repository
`Tyrsec_PaaS` in diesen öffentlichen Showcase übernommen wird — Code,
Konfiguration, Diagramme, Screenshots und Dokumentation.

## Vor jedem Export prüfen

### Secrets und Zugangsdaten

- [ ] keine echten Passwörter, Tokens, API-Keys oder private Schlüssel
- [ ] keine Connection Strings mit echten Hosts oder Credentials
- [ ] keine `.env`-Inhalte, auch keine „Demo"-Werte aus dem privaten Repo
- [ ] Platzhalter sind eindeutig als solche erkennbar (`example`, `<redacted>`)

### Interne Infrastruktur

- [ ] keine internen Hostnamen, IP-Adressen oder Ports produktiver Systeme
- [ ] keine internen Routen-Muster, Betriebsendpunkte oder Admin-Pfade
- [ ] keine echten Image-Registries, Namespaces oder Cluster-Bezeichner
- [ ] keine Cloud-Account-IDs, ARNs oder Projektkennungen

### Sicherheitsdetails

- [ ] keine konkreten Schwellenwerte, Rate-Limit-Werte oder Lockout-Parameter
- [ ] keine Guard-Kombinationen, Ausnahmelisten oder Regex-Pattern aus
      Security-Filtern
- [ ] keine internen Scan-Regeln oder Detektionslogik
- [ ] keine vollständigen Fehlercodesets oder internen Mapping-Tabellen

### Fachliche und personenbezogene Daten

- [ ] keine echten Namen, E-Mail-Adressen oder Telefonnummern
      (Demo-Personas sind erlaubt, wenn sie klar fiktiv sind)
- [ ] keine kundenbezogenen oder mandantenbezogenen Echtdaten
- [ ] keine internen Roadmap-Details mit Geschäftsbezug

### Screenshots und Diagramme

- [ ] Aufnahmekontext ist dokumentiert (Standalone/Demo-Stack, Datenherkunft)
- [ ] keine Browser-Tabs, Bookmarks oder Desktop-Inhalte im Bild
- [ ] Kennzahlen sind als Beispiel-/Demo-Daten gekennzeichnet, wenn sie keine
      Produktionswerte sind

## Grundsatz

Sicherheit vor Vollständigkeit: Im Zweifel wird ein Inhalt weggelassen oder
weiter abstrahiert, statt ihn zu veröffentlichen. Jede Datei in `examples/`
nennt im Kopfkommentar explizit, was redigiert wurde.
