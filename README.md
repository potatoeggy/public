# Oeufs?

Après le HTML manuscrit et le générateur de site statique — c'est Nuxt!

Instructions post-compilation (pendant Nuxt n'a pas le prérendu)

- Compilez `/script.ts` à `/script.js` (`tsc script.ts -m esnext -t esnext --moduleResolution node`)

Lisez la [documentation de Nuxt](https://v3.nuxtjs.org) pour en savoir plus.

## Installation

Assurez-vous d'installer les dépendances:

```bash
# yarn
yarn install
```

## Serveur de développement

Démarrez le serveur de développement sur http://localhost:3000

```bash
yarn dev
```

## Production

Prévisualisez la production sur votre système local:

```bash
yarn preview
```

Lisez la [documentation de déploiement](https://v3.nuxtjs.org/guide/deploy/presets) pour en savoir plus.
