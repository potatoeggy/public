"use strict";
// the only damn js needed in this site instead
// of all the nuxt bs while we wait for static generation
// to actually become a thing in nuxt 3
var _a;
exports.__esModule = true;
var html = document.getElementsByTagName("html")[0];
html.className = (_a = localStorage.theme) !== null && _a !== void 0 ? _a : "light";
// dark mode toggle
function toggleDarkMode() {
    var storageVars = ["dark-mode-toggle", "nuxt-color-mode", "theme"];
    var currentTheme = html.className;
    var newTheme = currentTheme === "light" ? "dark" : "light";
    html.className = newTheme;
    for (var _i = 0, storageVars_1 = storageVars; _i < storageVars_1.length; _i++) {
        var v = storageVars_1[_i];
        localStorage[v] = newTheme;
    }
}
var darkToggle = document.getElementById("dark-toggle");
darkToggle.checked = html.className === "dark";
darkToggle.onclick = toggleDarkMode;
// github commit fetcher
// pulled from CommitStatBox.vue
var FEED_URL = "https://api.github.com/users/potatoeggy/events";
var results = (await (await fetch(FEED_URL)).json());
var latestEvent = results.find(function (e) { return e.type === "PushEvent"; });
var latestCommit = latestEvent.payload.commits[0];
var commitImg = document.getElementById("github-commit-img");
var commitAnchor = document.getElementById("github-commit-a");
commitImg.src = "https://opengraph.githubassets.com/hash/".concat(latestEvent.repo.name, "/commit/").concat(latestCommit.sha);
commitAnchor.href = "https://github.com/".concat(latestEvent.repo.name, "/commit/").concat(latestCommit.sha);
