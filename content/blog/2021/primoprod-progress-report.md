---
title: Primoprod Progress Report
date: 2021-08-21
tags:
  - primoprod
  - tech
  - featured
---

Welcome to the very first [Primoprod](https://primoprod.eggworld.me) progress report! In a similar vein to quite a few open source emulation projects (such as those I follow myself using [emufeed](https://github.com/potatoeggy/emufeed/blob/master/sources.py)), I'll be releasing these tidbits in lieu of daily Unstagnation shorts sometimes.

In this hopefully small series of development notes, I'll be laying out my experiences learning web development as an absolute amateur.

This report will cover the beginnings of the project to the present day: 16 July - 20 August 2021.

<!-- more -->

## Introduction

What is Primoprod? Short for "Productivity Primogems", it was born when I noticed that the gacha system employed by games such as _Genshin Impact_ could be incredibly addictive, so I decided to see if I could take advantage of it to boost my productivity and at the same time try to learn web development.

The basic premise was to assign a given point value for each productive task and be able to spend those points on something or have them progress toward a milestone, so that productive tasks would be incentivised. The aforementioned gacha games and Uber use this to great effect, so I decided to emulate the Wish UI of [_Genshin Impact_](https://genshin.mihoyo.com/en).

And so the project began! I decided to work with Vue.js because of its gentler learning curve compared to Angular and more traditional HTML/CSS/JS separation compared to React. You can tell when I became more comfortable in using Vue's declarative system in the later components compared to, say, [`App.vue`](https://github.com/potatoeggy/primoprod/blob/master/src/App.vue).

Of course, the project was made open source on [GitHub](https://github.com/potatoeggy/primoprod) and licensed under the [GNU AGPLv3](https://en.wikipedia.org/wiki/GNU_Affero_General_Public_License) so that anyone can use it. (Except for the assets, but we'll get to that later.)

## First steps

As my first foray into web development, there were many tools and practices I could choose from. Vue's justification was outlined in the introduction, but I had no clue how Webpack worked, what folder structure I should use, how I should lay out my code, etc.

Luckily, I didn't have to make any of these decisions because Vue's [CLI](https://cli.vuejs.org/) gives you a list of sane defaults that you can pick from, and since I was learning for the future, I went with the first option of Vue 3 + Typescript. `vue-cli` even nicely [initialised a git repo for me](https://github.com/potatoeggy/primoprod/commit/9b7d7841806c905e8f580f98d1c95d4732178810)!

At the time, coming from Python/Java, I opted in to the class components plugin hoping it made it easier to develop for, but later removed it due to a lack of documentation with it for Vue 3. Occasional downsides of newer technologies ¯\\\_(ツ)\_/¯.

The [first few commits](https://github.com/potatoeggy/primoprod/commit/ed9d94b61bf91ea9b82ac4d832dfb2b9ff2efc59) had me playing around until I was comfortable enough to introduce my very [first component](https://github.com/potatoeggy/primoprod/commit/fcbb4068dd3b018db2809ccfcc5381d4ea3ae727): the WishButton.

![](src=wish-button-emulated.webp)

I'd say it turned out pretty well! Since I wanted to emulate Genshin's UI, I wanted to match it as closely as I could. These two buttons are made of an image inside of a div relatively positioned with text absolutely positioned inside. Original image for comparison:

![](wish-button-original.webp)

There are still some differences between the texts since Genshin uses antialiasing, and the alignment and shadow of the icon beside the wish quantity is slightly off too, but I would consider this result to be acceptable.

## CSS pain

When working with "pure" Vue, the hard part is not usually HTML, which is quite simple and is usually obvious if something is wrong, nor is it Vue/TypeScript itself — I know TypeScript saved me some pain by doing type checking prior to runtime several times, even — but instead CSS.

CSS.

No, it's not that it was difficult to center or align a `div`, generally (slap everything in flexboxes and magic happens), but the time spent getting the wish buttons to look exactly how I wanted to would be nothing compared to some of the later parts.

No one warns you about this stuff either; all the memes are about JS not making sense but no one talks about CSS except being hard to center divs!

See [GemCounter](https://github.com/potatoeggy/primoprod/blob/master/src/components/GemCounter.vue), the second component I made. All those precise margins/padding…

Although I had read up on [MDN's](https://developer.mozilla.org/en-US/) fantastic tutorials/documentation a fair bit and used flexboxes and `rem` everywhere, I apparently did not catch `box-sizing: border-box` and the margins and padding just did not arrange themselves how they should have.

![:/ thanks MDN for letting me know](mdn-box-sizing-tip.webp)

[Some foreshadowing](https://github.com/potatoeggy/primoprod/blob/master/src/components/ItemRevealScreen.vue#L224)

## Smooth beginnings

Designing the basic screen was pretty straightforward. For all its woes, pure CSS still works and is intuitive enough that my git history was only slightly too messy and I got my results.

![](primoprod-wishbanners.webp)

Pretty good, right? Now, the design still isn't adaptive enough _since things get cut off for who knows why I thought flexboxes were supposed to solve all this_ but for the most part it looks good enough. It appears I'll have to make a lot of exceptions for mobile devices…

![](primoprod-wishbanners-scaled.webp)

With some help taken by examining the assets of https://genshin.thekima.com and https://gi-wish-simulator.uzairashraf.dev, I grabbed a static background image as well as the videos!

For now, every time you pressed the wish button, you got a five-star animation.

## Asset prefetching and inconsistencies

Progress was steady and things appeared to be running perfectly. but on my local machine things load instantly, courtesy of it not being beamed around the world. So when it was deployed to https://primoprod.eggworld.me, even with a relatively fast download speed, the background image loaded slowly, and there were a few seconds of downtime before a video would play.

This was unacceptable, so I investigated around on how Vue prefetches assets before giving up and setting up an [Electron](https://www.electronjs.org/) build for the desktop — this doesn't resolve the issue on the web, but until I'm more competent with Vue I can't quite make the necessary changes. The issue of slow asset loading also severely lengthened the suffering in the `ItemRevealScreen.vue` arc, where animations and audio had to be timed…

## Gacha and storage backend

And with the basic frontend done, a backend would be needed to determine what items were pulled, and they had to be stored in a compact way.

I opted for a [standard item database](https://github.com/potatoeggy/primoprod/blob/master/src/banners/ItemDatabase.json) accessible from anywhere that would make it easy to add/remove/reference characters in the future. To conserve storage space on the user's end (why do I bother, really), items are stored as [string IDs](https://github.com/potatoeggy/primoprod/blob/master/src/banners/Inventory.ts) and the inventory class has a plethora of helper functions to work with.

The [gacha](https://github.com/potatoeggy/primoprod/blob/master/src/banners/Gacha.ts) file was heavily inspired (and many ideas taken from) https://github.com/uzair-ashraf/genshin-impact-wish-simulator/blob/master/src/models/base-gacha.js, many thanks! Because we don't need the previous-banner-switching capability that it uses, I stripped out the unnecessary bits and kept it simple-ish.

As Primoprod evolved and grew past my initial design of random bullshit go!, these critical classes went through some changes that added functions such as being able to calculate the extra stardust/starglitter rewards from a gacha. This let me keep banners to be comparatively simple, defined in [easy-to-read and copy JSON](https://github.com/potatoeggy/primoprod/blob/master/src/banners/tapestry-of-golden-flames.json).

Typescript was actually really helpful here, since as a nearly complete newcomer to JavaScript, it made sure I was doing legal things — something I also found a little annoying in Python.

Just my opinion, but I much prefer statically typed languages such as C#/Java — not Java screw Java.

## ItemRevealScreen horror

Everything had gone extremely smoothly up to this point. I was making rapid progress, even with the time spent on Stack Overflow to learn CSS and JavaScript.

But then came the pull screen.

https://youtu.be/g1jDTHCRyCY?t=165

It looks simple, right? Deceptively simple. But there's a lot going on here.

There is:

- a zoom-in of the character image, followed by
- a slide-right of the character image, while
- the text slides left, while-after
- the element icon slides left, after which
- the stars appear in sequence, during? which
- the extra reward screen slides left.

Not to mention all of the glow and particle effects. All of these had to be aligned with audio, which I couldn't find after listening for hours on end to many of the sound effects in the game files so gave up and recorded my own pulls.

I don't know how actual developers take care of this — potentially a library — but aside from the alignment of everything (which was its own nightmare to be adaptable across multiple display sizes and I only finished everything but the extra slide yesterday), I spent waaaaaaay too long making Vue work with an "animation index" that tracked whose turn it was to show animations.

The lack of proper asset prefetching was also an issue after deployment since the images took time to load and the animation had already started, so even more went into `animationIndex` to check that the audio and images are loaded before playing.

The code got [progressively worse](https://github.com/potatoeggy/primoprod/commits/master/src/components/ItemRevealScreen.vue) and is now the [most complex](https://github.com/potatoeggy/primoprod/blob/master/src/components/ItemRevealScreen.vue) thing that I never want to touch again by far, but there's still more to do ;-;. Not to mention that if I need to add more animation indexes (say, if I need them for glow effects) I am utterly screwed unless I add a second animation index for those effects…

There are still occasional desyncs and alignment isn't actually completely fixed and the extra rewards side is the simplest I can get away with and the weapons are missing backgrounds and shadows and the element icon doesn't glow and the weapon element doesn't have a correct gradient since unfortunately CSS doesn't support recolouring images with gradients.

But hey, it looks good enough, right?

No it doesn't it's not even close but I'm not coming back to that

## Sweet release

Now that `ItemRevealScreen` is _done and over with and will not need any changes_, before making myself work on the equally fun part of the project that is `ItemRevealAllOverlay`, I opted for a break in `ItemObtainScreen` and `ItemDescriptionOverlay` and a one-week hiatus.

And they were easy! Easy and fun. It was blissful to be working with structured HTML and CSS again, and the animation pains there were _nothing_ compared to the trauma of `ItemRevealScreen`.

In fact, I consider those two to be 100% done unless I can find a way to apply a border that looks exactly like the original game's that isn't an image.

But it looks great!

![](itemdescriptionoverlay.webp)

![](itemobtainoverlay.webp)

## Wrapping up

As it turns out, I'm not actually near good enough nor is web development interesting enough to be able to outline issues like the emulator and Asahi Linux developers.

In fact, this was less a progress report and more complaining like a development log.

As such, every future version will be called a development log since I'm far too lazy to change the title now.

Until next time!
