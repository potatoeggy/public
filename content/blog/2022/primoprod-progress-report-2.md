---
title: "Primoprod Progress Report 2"
date: "2022-01-15"
tags:
- tech
- primoprod
---

Six months have passed since the [first progress report](/blog/2021/primoprod-progress-report/). Since then, a flood of changes have made it in, including hundredth-class Android support!

This report will cover from where the previous left off to the present day: 21 August 2021 - 15 January 2022.

<!-- more -->

## No more

::image{src="primoprod-itemrevealscreen.webp"}
::

It's done. The pull screen is done. The element/weapon icon was added to the pull. Audio syncs up (well enough). The only thing missing is all of the fancy effects like glow and particles.

Nah, this is good enough.

## Take this!

::image{src="primoprod-questscreen.webp"}
::

Until now, you had to manually edit the browser's `localStorage` to gain any currency. The quest screen makes primoprod finally usable as now you can make your own long-term "quests" that give 900 Primogems each as well as set four daily "tasks" that give 30 Primogems each plus 60 when all are done — if only the base game was this generous. These are editable and can have whatever title or description you want. The logic here went through several rewrites as the structure was finalised and an interface developed to the rest of primoprod. Dailies will automatically refresh themselves on the next day.

In addition, there are several more features hidden in the Quest interface, such as an expiry time that you can't currently set.

By the way, JavaScript really doesn't have a good way to set an exact date relative to today — in the end I had to resort to *this* to set an expiry time for dailies.

```js
expires: (() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    d.setHours(4, 0, 0, 0);
    return d;
    // somehow this way is actually nicer than the new Date() way
})(),
```

## First pre-release

The [very first pre-release](https://github.com/potatoeggy/primoprod/releases/tag/1.0-beta1) of primoprod, **1.0-beta1**, was published on 25 August 2021.

It would be a few more months before the first stable release would be sent out into the world.

## Look to the future

Up to now, you might have noticed a considerable lack of pain in this progress report compared to the previous one. And for good reason: I got smarter.

Sounds incredible, right? As it turns out, as you gain more experience with technologies, you make less mistakes and follow best practices more.

This is why [the shop](https://github.com/potatoeggy/primoprod/blob/master/src/components/ShopScreen.vue) and the [dialog to buy things from the shop](https://github.com/potatoeggy/primoprod/blob/master/src/components/ItemPurchaseOverlay.vue) are so nicely done! It reused most of my types and was admittedly much simpler than some of the other screens, but I only ran into one insurmountable problem: range styling.

::image{src="primoprod-itempurchaseoverlay.webp"}
::

*I wish I was actually this rich in the base game.*

As you can see, the slider looks very out of place. Why? That's because [only Firefox](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-progress) supports the needed CSS attribute to style the coloured bit before the "thumb" of the slider. I could make up something like Spotify and other services do using JavaScript, but that's a job for my future self.

## Pick your poison

Up until now, only one banner was supported. This was finally fixed in November with the addition of [banner headers](https://github.com/potatoeggy/primoprod/pull/25) to match the base game. Now, you can simultaneously roll for Qiqi on *both* banners!

::image{src="selected-wanderlust-invocation.webp"}
::

On a side note, did you know that Vue puts all of their reactive things into Proxies? This means you can't simply `console.log(obj)` without going through five more clicks to find what you actually want. No, no. To properly print out the actual object, you have to *copy its contents to a clean, non-reactive Object* for this to work. Why??

```js
console.log("Rolled:", this.lastRoll); // nope
```

```js
console.log("Rolled:", [...this.lastRoll.map((i) => Object.assign({}, i))]); // thank you vue love that
```

## First release

After 8 beta pre-releases, [version 1.0.0](https://github.com/potatoeggy/primoprod/releases/tag/1.0.0) of Primoprod was successfully launched on 15 December 2021! I'm happy to tell you that the release went perfectly, was completely stable, and had absolutely no bugs whatsoever.

None.

None at all.

## Imagine not properly structuring your programs

Thanks to my astute design of primoprod, there were zero problems when the base game switched to having [double event banners](https://github.com/potatoeggy/primoprod/releases/tag/1.0-beta8) — they would simply share the same banner storage. Truly a stroke of genius. Practically a zero-line change.

The thing that *did* trip me up was the requirement for descriptions — this required all banners to be [updated](https://github.com/potatoeggy/primoprod/commit/12e7decdc6f5724afda467d6977d566b5c762e2e) to include a description as well as version upgrade code to migrate the pull data from older versions of primoprod into 1.0.1 without issues.

```js
switch (localStorage.version) {
  case undefined: // pre-1.0.1: Add descriptions
    if (localStorage.pullHistory) {
      localStorage.pullHistory = JSON.stringify(
        JSON.parse(localStorage.pullHistory).map((pull: Pull) => {
          pull.description =
            pull.bannerStorage === "event"
              ? "Character Event Wish"
              : "Permanent Wish";
          return pull;
        })
      );
    }
    console.log("Updated from pre-1.0.1 to 1.0.1");
}
localStorage.version = 1;
```

In hindsight, simply linking the banner they came from to this would have saved more data as well as have been more future-proof.

## Can't stop, won't stop

By this point, I'd become a little fed up with having to wait several minutes for my computer to build primoprod each release every two weeks, so I looked into using GitHub Actions for continuous integration.

Several days of tweaking later, I got GitHub to successfully [build and upload](https://github.com/potatoeggy/primoprod/blob/master/.github/workflows/build.yml) artifacts on each commit for all three operating systems — but they were zipped (even if they were just one file) and couldn't be attached to a release…

Back to laptop compilation we go!

## Pretty badges

Obviously, you aren't a *real* free and open source project if you don't have [pretty badges](https://github.com/potatoeggy/primoprod/blob/master/README.md) on your README. This was a major concern, so I copied Vue's style and now made primoprod a proper FOSS repo — build checkmark and badges and all!

::image{src="primoprod-badges.webp"}
::

## Kids and their phones

Annoying as it might be, many people only have phones and browse most often on their phones, so this project has to be mobile compatible. If you saw the last progress report, you know that mobile support was…lacking.

To remedy that for the 1.1.0 release, I spent a few days grinding out and cursing CSS as I was forced to go back to 

ItemRevealScreen? What's that? Now [WishBanners](https://github.com/potatoeggy/primoprod/blob/v1.1.0/src/components/WishBanners.vue) is my enemy.

At last, though, we have a [proper mobile UI](https://github.com/potatoeggy/primoprod/pull/33).

::image{src="mobile-primoprod.webp"}
::

Still some niggles to work out, but it looks "good enough"! With the completion of proper mobile orientation came the merging of the [Android branch](https://github.com/potatoeggy/primoprod/pull/32) made with [Capacitor.js](https://capacitorjs.com/), basically the mobile equivalent of Electron. It has even more niggles than the web version does.

If you have any idea how to fix them, please do send a suggestion on the [issue tracker!](https://github.com/potatoeggy/primoprod/issues/34)

## Present day

And that's everything that changed since August! Primoprod has come a long way from being a mere personal project to a proper personal project with fancy badges! Hopefully in the future it'll be able to be played standalone (chibi sprite combat, anyone?) so that it'll be interesting enough that people can set their goals and stick to them.

In case you'd like to check it out, version 1.1.0 released just [yesterday](https://github.com/potatoeggy/primoprod/releases/tag/v1.1.0) and is available for download for Windows, macOS, Linux, and Android, with a web version available at https://primoprod.eggworld.me!

Until next time!
