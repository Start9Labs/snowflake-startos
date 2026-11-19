import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.15.4:0',
  releaseNotes: {
    en_US:
      'Updated Snowflake to 2.15.4, which updates its dependencies with security fixes. The other changes in this release affect Tor bridges, not the proxy. Full notes: https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/blob/v2.15.4/ChangeLog',
    es_ES:
      'Snowflake actualizado a 2.15.4, que actualiza sus dependencias con correcciones de seguridad. Los demás cambios de esta versión afectan a los puentes de Tor, no al proxy. Notas completas: https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/blob/v2.15.4/ChangeLog',
    de_DE:
      'Snowflake auf 2.15.4 aktualisiert, mit aktualisierten Abhängigkeiten, die Sicherheitskorrekturen enthalten. Die übrigen Änderungen dieser Version betreffen Tor-Bridges, nicht den Proxy. Vollständige Hinweise: https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/blob/v2.15.4/ChangeLog',
    pl_PL:
      'Zaktualizowano Snowflake do 2.15.4, która aktualizuje zależności o poprawki bezpieczeństwa. Pozostałe zmiany w tym wydaniu dotyczą mostków Tor, a nie proxy. Pełne informacje: https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/blob/v2.15.4/ChangeLog',
    fr_FR:
      'Snowflake mis à jour vers 2.15.4, qui met à jour ses dépendances avec des correctifs de sécurité. Les autres changements de cette version concernent les ponts Tor, pas le proxy. Notes complètes : https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/blob/v2.15.4/ChangeLog',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
