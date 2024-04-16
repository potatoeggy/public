---
title: "Primoprod Progress Report 3"
date: 2023-12-29
tags:
- tech
- primoprod
- featured
---

Welcome back to another one of these development posts! It's been almost two years since [the last one](/blog/2022/primoprod-progress-report-2), so there are plenty of changes to talk about. Primoprod is more polished than ever, but a couple of questionable initial design decisions made it harder to work on than before.

<!-- more -->

## Pretty pretty pulls

There's a summary screen for 10-pulls now! It has that nice slide-in animation from the base game too, along with (largely) proper item alignment and a sorting algorithm that is not exactly like the base game's but works well enough to generalise outside of Genshin too.

The last step for this screen is to have the rush of particles in the base game for 4- and 5-star items, but that's incredibly difficult for someone not frontend-oriented like myself.

![(SPOILERS FOR FONTAINE'S ARCHON QUEST) Hydro Dragon acquired!](primoprod-10pull.webp)

Not only that, there are lots of small improvements to better mimick the base game! For example, weapons now have their weapon background behind them:

![What a beautiful sword.](primoprod-weapon-bgs.webp)

Banner headers are now dynamically generated instead of taken from screenshots, so now they can be nicely animated!

![No more screenshots >:(](primoprod-banner-headers.webp)

Version 3.0 of the base game brought a new book UI for the details and wish screens. I'm proud to announce that Primoprod was the very first simulator to incorporate it into its design!

![](primoprod-book.webp)

## Performance and prefetching

These are only a few of the design changes that make Primoprod a prettier and happier simulator. However, beauty means nothing if no one can see it. Luckily, update 1.2.2 of Primoprod brought some much-needed optimisations that make its web version much more palatable.

As of writing, Primoprod has around 75 MB of assets that it may need to show to users, the bulk of which is wish splash art. Previously, all of this was delivered as PNGs on demand, which resulted in noticeable lag waiting for the image when going through 10-pulls. By converting media to more modern formats, Primoprod gains nearly a *5x decrease in load times!*

Specifically, all PNGs were converted to WEBPs, MP4s to WEBMs (except for Safari, which doesn't support it), and MP3s to OGGs (except for Safari, which doesn't support it).

But that's not all! A 5x decrease in load time is still noticeable load time. The user doesn't want t to wait a few hundred milliseconds when they click the wish button, so we need as little latency as possible.

As it turns out, fetching the wish animation videos while the user is chilling on the main banner screen is both incredibly easy and incredibly rewarding — as long as the user doesn't wish right away, they can download the videos in the background so that when they start gambling, they don't have to wait at all!

Primoprod uses this same tactic to prefetch pull splash screens. Because rolls are determined the instant the user presses "Wish", it can prefetch the splash images required while the meteor animation plays, which means that splash screen animations are also instant! With a sufficiently fast internet connection (~1-2 MB/s), there ends up being *zero load time* for the user.

Of course, the downloadable versions of Primoprod (desktop/Android) will still always be faster, but this is such a noticeable decrease for users that it was a no-brainer.

## Quash the larvae before they hatch

### Oh, you sweet summer child

Things have changed a lot in the web development landscape since I began this project back in July 2021, and those changes have highlighted both the bad and the good in my initial designs.

I chose to use TypeScript and Vue 3, both decisions that hold up today. However, I opted for Vue's Options API over the new Composition API, which resulted in [a headache](https://github.com/potatoeggy/primoprod/pull/54) when I tried to read my old code — not helped at all by the fact that Primoprod was my first foray into web development, and there is some truly atrocious code:

```vue
<template>
<img
      v-for="weapon in ['Bow', 'Catalyst', 'Claymore', 'Polearm', 'Sword']"
      :key="weapon"
      :src="getWeaponBgImage(weapon)"
      :class="[
        {
          'active-bg-img': true,
          nofilter: true,
          'display-none': currentItem.element !== weapon || animationIndex < 0,
          transparent: animationIndex <= 0,
          'animate-weapon-bg': animationIndex === 1,
        },
      ]"
    />

<img
      :src="currentItemImage"
      :class="{
        'animate-image': animationIndex === 1,
        'zoom-image': animationIndex === 0,
        'active-img': true,
        'active-img-weapon': currentItem.type === 'Weapon',
        transparent: animationIndex < 0,
      }"
      :alt="currentItemImage"
      @animationstart="playSfx"
      @animationend="if (animationIndex < 2) nextAnimation();"
      @load="nextAnimation"
    />
    <!-- the reason why the double check is needed is
    that the two animations for the drop shadow count
    as two animations and trigger animationend twice -->
</template>
```

Another issue I didn't foresee but still ended up to be a real pain was Webpack. [Vite](https://vitejs.dev/) is the new kid on the block, built specifically for Vue, with the major advantage of being extremely fast. At Primoprod's scale — and Primoprod isn't even that big of a project — Webpack takes more than ten seconds to start the local dev server. Which is slow!

```
Done in 12.38s.
yarn build  57.47s user 9.66s system 535% cpu 12.528 total
```

### You will never take prop drilling away from me

Behind the scenes, a lot of systems have been tweaked and changed over the years as Primoprod grew in scope. [Pinia](https://pinia.vuejs.org/) is a global store for Vue (similar to Redux in React) that Primoprod now uses to hold information such as the current banner, inventory, and settings.

Previously, all of these were drilled deep into nested components, which is really not great.

What *you*, the user, gets out of this are a bunch of bug fixes and some really nice quality-of-life features:

![Why earn gems when you can just cheat?](primoprod-settings.webp)

Now you can choose to have infinite fates! And roll only Qiqi! And even go back to older banners, a long-overdue feature.

### Quests

Quests have been rather neglected since their release pre-1.0 a couple years ago, largely because I no longer use it to stay productive. Recently, they've received some love and a *lot* of patches to fix some really strange behaviour.

![](primoprod-quests-overhaul.webp)

First, there is a character limit in the title, and the box height has been slightly increased to allow multiline titles to properly overflow. Daily commissions now have icons to make it more obvious and also to copy the base game. Lastly, a bunch of bugs related to lists and quest ordering were squashed to avoid the janky horror that was pre-1.4 quests.

### For the mobile gamers in chat

Primoprod's mobile version has received the most love of all! Strangely, in WebKit-based engines (Chrome, Safari, Android WebView), using `background: fixed` with `transform: rotate(...)` causes the browser to ignore the `background-image` property. This broke mobile backgrounds on everything but Firefox Android, so that needed to be worked around.

On Android, things have tidied themselves up a bit as Primoprod comes ever closer to being able to fool the untrained eye. The notification bar used to annoy people by being ever present in the corner — now it's gone. There used to be a strange black flash right before playing videos — now that's gone. And video playback used to be very squashed on mobile — that's fixed too!

All in all, the squeaky platform got the grease.

## The future

As Primoprod approaches its two-and-a-half-year anniversary, it is slowly time to say goodbye. Updates have become more sporadic, and even I don't use it to be productive anymore. There is only so much one can polish something before it starts to blind them. This progress report may be its last.

But it was fun while it lasted!