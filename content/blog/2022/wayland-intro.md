---
title: "What's Wayland? Linux's \"New\" Display Server"
date: 2022-12-11
_draft: true
tags:
- tech
- albatross
---

Wayland is the shiny next-generation display server protocol that finally lets the Linux desktop move away from the cludgy abomination that is X. Although it was initially released in 2008, it's only recently that it has matured enough to the point that Linux distributions have begun to default to it.

<!-- more -->

## History

Ever since 1984, the Linux desktop has used the X Window System in order to output contents to a display.

38 years later, it's still alive and kicking in most Linux computers with all of its outdated features, such as slow compositing, built-in easy keylogging, and a lot of overhead just in case you want to operate your computer over the internet! Even with piled on extension (xrandr) after extension (xrender) and extension (composite), all of the bloat accumulated over time to the point that most of the X.Org server team moved to work on Wayland. As of today, X.Org is in maintenance mode, with few contributions and even fewer contributors because of all of the legacy code and practices that have to be worked with.

And that's exactly why Wayland was created — to be a simple, modern, and fast display protocol that narrows its scope to focus entirely on displaying windows efficiently and securely. Secondary priorities such as remote desktop, screen sharing, and screen tearing were implemented much later on.

No longer can any window catch every keypress without asking the user! No longer does shutting down the compositor crash nearly every program! No longer can any application decide to take over your screen and wreak havoc because it's allowed to do *literally anything!* No longer is workaround after workaround needed to maintain a *research project* that was never meant to be globally deployed!

Not to mention that because Wayland was designed from the ground up, it supports modern display technologies that X simply isn't able to due to technical limitations, such as different variable refresh rates over different displays at different resolutions.

## Adoption

Both Firefox and Chromium natively support Wayland. The GTK+, Qt, Electron, and SDL toolkits do too, letting thousands of applications "just work" by updating their dependencies.

In fact, the biggest desktop environments already support Wayland and all of its benefits:

- GNOME and KDE Plasma both have great support and even default to it on some distros.
- [Sway](https://swaywm.org) is a drop-in replacement for the i3 window manager if you're into tiling WMs.
- The Steam Deck uses Wayland to contain and sandbox games in its Gamescope compositor.

In addition, even for legacy apps such as games that can never be updated to support Wayland, a built-in compatibility layer called XWayland is there to run X applications in their very own contained X server. Even so, limitations in XWayland prevent it from being a one-size-fits-all solution to every X application.

Regardless, Wayland is still the future! Development on X has more or less completely stopped, so unless a party is desperate for a feature and is willing to invest a lot of time and money into navigating around the clunkier parts of the X.Org codebase, Wayland is the only available option for the future.
