---
title: "Stay Anonymous Online With These 4 Browser Extensions"
date: "2022-08-06"
_draft: true
tags:
- tech
- albatross
---

This article is [also published in *The FOSS Albatross.*](https://medium.com/the-foss-albatross/stay-anonymous-online-with-these-4-browser-extensions-f032c43f2bb)

It's a given that no matter what you do while browsing the web, Big Tech has their grubby fingers all over your data and tracks every site you visit, selling it to advertisers and other shady actors. Preventing this is almost impossible, short of something like Tor Browser behind a VPN in a virtual machine, which is slow and cumbersome.

<!-- more -->

If you're enamored with the convenience of major browsers, you can still increase your privacy by installing these well-known extensions for Chrome/Firefox, each tackling a different part of web security.

### 1. uBlock Origin 

You might already know this extension as a popular ad blocker. However, it can do so much more — in addition to blocking ads, uBlock Origin [blocks trackers and malware sites](https://github.com/gorhill/uBlock) while being one of the lightest ad blockers out there to keep your sites snappy. By blocking trackers, you obviously reduce the amount of data that sites can collect, but by blocking ads, you also don't perform the *request* for the ad, so it's like the ad service doesn't even know you were ever there.

### 2. Decentraleyes 

Whenever you connect to virtually any modern website, that website loads JavaScript libraries to make itself interactive, typically from content delivery networks (CDNs) such as Google, Microsoft, and Cloudflare. This, of course, isn't great, because that means that those CDNs know what site you're loading them from.

Enter Decentraleyes! This extension bundles quite a few common libraries so that whenever a site tries to grab it from a CDN, it loads it from Decentraleyes running locally on your computer instead. Privacy benefits aside, this also means that those sites load faster by not having to fetch more files from the web!

### 3. ClearURLs 

Have you ever clicked through a bunch of links and ended up with the longest URL you've ever seen, all for a simple search query?

**A simple search for Wikipedia on Google:**

https://www.google.com/search?q=wikipedia&hl=en&ei=Ex7vYq-HI4KH0PEPpKus0Ac&ved=0ahUKEwjv3Lil0rP5AhWCAzQIHaQVC3oQ4dUDCA0&oq=wikipedia&gs_lcp=Cgdnd3Mtd2l6EAxKBAhBGABKBAhGGABQAFgAYABoAHABeACAAQCIAQCSAQCYAQA&sclient=gws-wiz

**A search for dog food on Amazon:**

https://www.amazon.com/s?k=dog+food&crid=2UT0FTXBL16XJ&sprefix=dog+foo%2Caps%2C182&ref=nb_sb_noss_2

All the nonsense after the ampersand (&) are used purely for tracking and won't be caught by content blockers like uBlock Origin because they're *in the initial request itself*. This data includes device and browser information, your search history, how you arrived at the site, and more.

ClearURLs offers a solution by simply removing all of the nonessential parts of a URL before sending it to Google or Amazon so that they never receive this information, securing a little bit more of your privacy.

### 4. NoScript 

Lastly, the most intrusive forms of data collection are through JavaScript. So what if you just turned off JavaScript? You'd dramatically improve your browsing experience as sites load much faster, ads don't load at all, and none of the trackers can do a thing, but it could also result in broken sites that rely on it to function at all.

Therefore, if you truly care about privacy and want maximum control over what is allowed to load in your browser, you'll want to be able to selectively enable JavaScript per-script per website. NoScript is just the tool for this, with an easy-to-use interface that streamlines the troubleshooting process when sites require JavaScript.

------

You only need four extensions to dramatically reduce the data sites can collect on you from your browser. Although even these are no match for a properly tuned, custom solution like [LibreWolf](https://librewolf.net/), they provide an excellent first step into becoming more privacy-aware and in securing your data.
