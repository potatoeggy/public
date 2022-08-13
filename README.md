# Eggworld v3: Nuxt 3

After hand-written HTML and a static site generator comes Nuxt!

**WARN: Volar 0.40.0 breaks all type-checking and I don't know why — stick with Volar 0.39.5.**

**WARN: Nuxt 3 is too new that prerendering actually renders a ton of JS and causes blinking — remove all `Prose*.mjs` to stop it**

Post-build instructions (while prerendering is bork)

 - Strip all <script /> tags in every HTML file
 - Compile `/script.ts` to `/script.js`
 - Remove `/api` and `/_nuxt`

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Locally preview production build:

```bash
yarn preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
