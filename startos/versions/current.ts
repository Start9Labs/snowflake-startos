import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.15.3:3',
  releaseNotes: {
    en_US:
      'The proxy and its dashboard now run as an unprivileged user, and the dashboard is hardened against malformed log lines.',
    es_ES:
      'El proxy y su panel ahora se ejecutan como un usuario sin privilegios, y el panel está reforzado frente a líneas de registro malformadas.',
    de_DE:
      'Der Proxy und sein Dashboard laufen jetzt als nicht privilegierter Benutzer, und das Dashboard ist gegen fehlerhafte Logzeilen abgesichert.',
    pl_PL:
      'Proxy i jego panel działają teraz jako użytkownik bez uprawnień, a panel jest zabezpieczony przed błędnymi wierszami dziennika.',
    fr_FR:
      "Le proxy et son tableau de bord s'exécutent désormais sous un utilisateur non privilégié, et le tableau de bord est protégé contre les lignes de journal malformées.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
