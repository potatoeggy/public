---
title: "Choosing a License — Politics in FOSS"
date: "2022-09-02"
_draft: false
tags:
- tech
- albatross
---

This article is [also published in *The FOSS Albatross.*](https://medium.com/the-foss-albatross/choosing-a-license-politics-in-foss-df2cbfe48237)

All FOSS projects must have a license before other people can use them — but which should you choose, and what are the consequences behind each one?

<!-- more -->

## You need a license

Under the [Berne Convention](https://en.wikipedia.org/wiki/Berne_Convention) signed by the vast majority of countries in 1886, you own copyright to your software the moment you create it. Rights *exclusive to you* unless given otherwise include the right to copy and modify that software.

In a nutshell, it means that even if you submit your code to GitHub, *no one else* is allowed to copy or redistribute your code (e.g., via forking the repository).

Licenses work around this by granting specific permissions to other people *so long* as they follow the rules in the license.

Although there are many different types and variations of licenses, they can be broadly broken down into two categories: **copyleft** licenses and **permissive** licenses.

## Permissive licenses (e.g., MIT, BSD, Apache) 

These licenses are pretty simple: they let anyone do virtually anything with them, so long as they credit you for using your code. This makes it easier for people to incorporate your code into theirs, but also raises the possibility that others, such as corporations, simply take your code without giving back.

Permissively licensed programs tend to be used more often by bigger projects due to the lack of restrictions.

The BSD operating system is a typical example of the dynamic of permissive licenses: Apple used BSD code as a basis for all of their operating systems (macOS, iOS, iPadOS, etc.), as well as Sony in their PlayStations, Nintendo in the Nintendo Switch, and much more. These corporations chose BSD because of how easy it is to take the code for free and build off of it.

## Copyleft licenses (e.g., GPL, MPL, CC-BY-SA) 

If you really care about the ideology behind the free software movement, you might consider a copyleft license instead. These require all **derivative works** to have the same license that the original program had. They can still do whatever they want with your code, though.

For example, if library A held a copyleft license and application B bundled it in an app that they published, application B must also be compatible with that copyleft license or else they are in violation of library A's license.

…Which is a lot of words to say that copyleft licenses are "viral" in that they make everything they touch copyleft.

If you're a developer, this is really good for you, because it means that if a large corporation adapts your code to make it work for them and improves it, they have to share those improvements with you.

The Linux kernel is a great example of how copyleft has helped it grow to become the most-used operating system in the world. As devices adopt Linux (e.g., in Android phones), they are required to publish sources that make Linux compatible with their hardware, which is how the custom ROM community exists today!

Some corporations really hate copyleft because it forces them to open source their code, such as Google's [infamous policy on avoiding the AGPL](https://opensource.google/documentation/reference/using/agpl-policy/) like the plague. If that matters to you, you should use a more permissive license instead.

------

 It's important to make sure that you are *allowed* to use a license in your project! After all, if you have a copyleft dependency, you can't license your program permissively. In addition, plenty of licenses are incompatible with one another, so you can't use both of them together.

In general, your program must be at least as copyleft as the most copyleft license in your dependency chain.

Although not a definitive guide, [https://choosealicense.com](https://choosealicense.com/) from GitHub is a great starting point to choose a license! So long as you're careful and check your dependencies' licenses, you'll be well on your way to contributing to the FOSS community!
