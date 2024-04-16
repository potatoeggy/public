---
title: "Appreciate Your Browser!"
date: "2022-09-18"
_draft: true
tags:
- tech
- albatross
---

This article is [also published in *The FOSS Albatross.*](https://medium.com/the-foss-albatross/appreciate-your-browser-82d36a81a696)

*Click.* Milliseconds after you press a link, your screen flashes white. Elements slowly load in as a page full of search results appears in front of your eyes. How does this magic work? How does your computer know exactly what to show you when you press a button on your mouse? Let's go on a journey through your system to see exactly what happens.

<!-- more -->

------

The instant your finger pushes past a physical barrier, a switch connects a circuit and electrons go speeding through a wire (or over the air if your mouse is wireless) to your computer.

The moment the central processing unit (CPU) of your computer receives the electrons, it propagates that signal up to your operating system as a **hardware interrupt**, pulling all the brakes on whatever it's currently doing to handle the signal.

Eventually, your browser realises it's been clicked on and starts the process to fetch the page you're looking for from the internet. Through the operating system, your browser sends a small packet of information to your router, asking it where exactly https://en.wikipedia.org is through its **domain name system** (DNS)!

Your router kindly asks several other routers, which in turn ask even more routers until it gets back to you with a "208.80.154.224"!

Armed with this **internet protocol** (IP) address, your browser then asks your router to connect to it, which it happily does, informing you when it returns that the server with that address does in fact exist and is alive.

Now it's finally time to connect to the server. Your browser extends a handshake to the server, hoping it will reciprocate. Because Wikipedia is a trustworthy site that knows social expectations, it will return the handshake, whispering a secret only it knows through the **Transport Layer Security** (TLS) protocol.

Assured of Wikipedia's trustworthiness, your browser whispers secrets back, telling Wikipedia the information you're looking for. Wikipedia nods knowingly, but because they have other people to meet, they tell you everything you could ever need to know about parakeets in less than a millisecond with the power of **gzip** (compression) — you just need some time to decipher it.

Finally satisfied, your browser arranges the data prettily so that it's easy for you to read and holds it out to you expectantly, waiting for your praise.

Unfortunately, you snatch it out of your browser's hands, berating it for being so slow as you skim only the opening paragraph before yelling at it to fetch more information from Wikipedia, this time about parrots.
