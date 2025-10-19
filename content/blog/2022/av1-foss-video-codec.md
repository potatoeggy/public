---
title: "AV1 — The FOSS Video Codec"
date: 2022-11-13
_draft: false
tags:
- tech
- albatross
---

This article is [also published in *The FOSS Albatross.*](https://medium.com/the-foss-albatross/av1-the-foss-video-codec-1761ad9b0a4a)



More than 60% of all internet traffic is video — YouTube and Netflix are 20% alone! In fact, during COVID, so many people started to watch so much video that that number climbed up to 25%, even as they reduced the quality and size of the videos they served.

This much traffic costs lots of money for internet service providers, who carry on this cost to the streaming service.

And so, media companies, including YouTube and Netflix, have banded together as the Alliance of Open Media (AOM) to develop a video format to reduce the file size of videos: AV1!

<!-- more -->

## How did they shrink video?

Digital video today is represented as a collection of many still pictures known as “frames” that are shown to the viewer really quickly to create the *illusion* of motion.

Each individual frame contains thousands to *millions* of tiny squares called *pixels.*

However, at a typical 24 to 30 frames per second, you’d have to store more than a *thousand* frames per minute! Uncompressed, a 1080p would need to stream nearly 50 million pixels per second, or 50 MB/s. You might see how this could grow expensive for both the streaming service and the consumer, *fast*.

So, someone figured out that, hey, we can compress pictures! Why don’t we also compress video, too?

And that’s exactly what we did — video *codecs* were created to provide a standard format to compress or “encode” video, providing large file size savings at the cost of more resources required to decode them upon playback.

For example, MPEG-2 in DVDs was able to use only 0.25 MB/s of bandwidth for 1080p video when pushed to its limits, though it was a pixelated, smeary mess.

## Why not use H.265?

H.265 is the successor to the ubiquitous H.264 codec that virtually every video player can process. Popularised on many physical media such as Blu-Rays, no browser is currently able to natively play back H.265-encoded content, for one very good reason: MPEG-LA, the organisation that designed it, charges royalties for each of its users.

Understandably, browsers don’t want to have to pay millions of dollars recurringly just to play video, so it’s been stuck playing local media.

Why doesn’t H.264 have this problem, you ask? [Cisco generously open sourced](https://en.wikipedia.org/wiki/OpenH264) their implementation of the codec and agreed to pay royalties to MPEG-LA, letting anyone legally use the codec for free.

## Support AV1!

In light of these problems, Google led the development of AV1 as a royalty-free, high quality alternative to H.265. All modern browsers today have already implemented AV1 playback, and hardware released within the last two years all support hardware decoding of AV1, meaning that the performance and power cost of supporting the codec has decreased drastically.

By supporting open standards, you can support a world where outdated royalty models no longer exist, and we can all benefit off of each others’ work.
