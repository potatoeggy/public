// the only damn js needed in this site instead
// of all the nuxt bs while we wait for static generation
// to actually become a thing in nuxt 3

import type { GithubPushEvent } from "../app/shared/github";

const html = document.getElementsByTagName("html")[0];
html.className = localStorage.theme ?? "light";

// dark mode toggle
function toggleDarkMode() {
  const storageVars = ["dark-mode-toggle", "nuxt-color-mode", "theme"];

  const currentTheme = html.className;

  const newTheme = currentTheme === "light" ? "dark" : "light";
  html.className = newTheme;
  for (const v of storageVars) {
    localStorage[v] = newTheme;
  }
}

const darkToggle = document.getElementById(
  "dark-toggle"
) as HTMLInputElement | null;

if (darkToggle) {
  darkToggle.checked = html.className === "dark";
  darkToggle.onclick = toggleDarkMode;
}

// github commit fetcher
// pulled from CommitStatBox.vue
const FEED_URL = "https://api.github.com/users/potatoeggy/events";
const results = (await (await fetch(FEED_URL)).json()) as GithubPushEvent[];
const latestEvent = results.find(
  (e) => e.type === "PushEvent"
) as GithubPushEvent;
const latestCommitSha = latestEvent.payload.head;

const commitImg = document.getElementById(
  "github-commit-img"
) as HTMLImageElement | null;
const commitAnchor = document.getElementById(
  "github-commit-a"
) as HTMLAnchorElement;

if (commitImg) {
  commitImg.src = `https://opengraph.githubassets.com/hash/${latestEvent.repo.name}/commit/${latestCommitSha}`;
}

if (commitAnchor) {
  commitAnchor.href = `https://github.com/${latestEvent.repo.name}/commit/${latestCommitSha}`;
}

// to make this an esm module for top-level await
export {};
