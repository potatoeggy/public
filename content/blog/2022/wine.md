---
title: "Running Windows Apps on Mac and Linux"
date: "2022-10-16"
tags:
- tech
- albatross
---

This article is [also published in The FOSS Albatross.](https://medium.com/the-foss-albatross/running-windows-apps-on-mac-and-linux-c372996588af)

Windows is a beloved operating system with absolutely no flaws whatsoever. It  is the pinnacle of engineering — sheer perfection in its design.

But say you like being objectively correct and actually think that Windows  has its own problems, so you decide to switch to a Mac or to use Linux  instead.

What happens to all of the programs you leave behind? Linux and macOS don't  recognise .exe files as ones they can run, so you won't be able to run  those incompatible with Linux without extra work. If you can find  alternatives for all of them, that's great, but there still might be stragglers for beloved programs such as niche apps and games.

<!-- more -->

You could launch real Windows inside a virtual machine, which guarantees  compatibility (except with certain anti-cheats), but tends to have a  pretty big performance impact. If you're interested, check out [our article on running virtual machines](https://medium.com/the-foss-albatross/an-os-inside-an-os-how-to-run-virtual-machines-a3ddf6c8bbed)!

In this article, we'll be looking at Wine, a program that is practically  magical by letting you run Windows apps natively on macOS or Linux!

## What is Wine?

Wine is a common alcoholic beverage —

Wine is a *compatibility layer* for Windows applications, translating Windows system calls into Mac or Linux ones.

Windows programs are actually quite similar to Linux and macOS programs. They  all make calls to system APIs, and they all compile down to machine  code. Because the different OSes run on the same x86_64 architecture  (pre-Apple M1), there's no need to go through the expensive emulation of a whole other CPU like you see in game console emulators.

To be able to run the program, Wine hooks into the application and  intercepts all of the calls it makes, passing it to its own  reimplementation of the Windows filesystem and its various libraries or  DLLs.

In fact, some of the APIs called are actually the same on all operating  systems (such as OpenGL for graphics), so Wine can pass those through  directly. In some cases, running an application through Wine can be even faster than on Windows!

Even if the APIs aren't exactly the same, Wine can still do a little bit of  work to make them compatible. For example, plenty of work in making  games run better has led to DirectX 12, 11, and 9 all translatable to  the lower-level Vulkan, supported natively on Linux. On macOS, yet  another translation layer takes the Vulkan output and turns it into the  macOS-preferred API, Metal. Ironically, some games on Windows run *faster on Windows* if you run a DirectX-to-Vulkan translator! Combined with the general  impression of a faster Linux, you can see how games can run *faster* under Wine than in Windows!

Wine's integration and familiarity with the host (Linux or macOS) means that  it has some niceties that make it easier to use than a virtual machine,  such as desktop integration! Shortcuts from installed Windows apps will  appear on your desktop and in your launcher, and you can access all your files from within Wine. Pre-established shared Documents / Desktop /  Videos / Music folders mean that getting started is super easy.

## Does it work?

Anyone who's tried to run a modern version of Office will be able to tell you  that compatibility isn't perfect. Although Windows APIs are documented  by Microsoft, many applications rely on undefined behaviour and quirks  in Windows' implementation of those APIs, which Wine has to chase down  and patch each time.

In addition, some anti-cheats fundamentally rely on the Windows kernel,  and Wine's reimplementation isn't yet complete. Valve's work on the  Steam Deck, which uses Wine extensively under the hood to run games on  its Linux platform, has helped substantially in persuading developers to support Wine, but still many other games remain locked to Windows under the guise of fairness.

In general, howeve

r, you can expect many applications to at least start. Wine themselves [maintains a database](https://appdb.winehq.org/) of how well many applications run on their website. If it doesn’t work—it was worth a shot, at least!

## How can I use it?

Wine is already in many Linux distributions' repositories, so installing it  through your package manager should get you up and ready.

On macOS (pre-10.15), Wine can be installed using homebrew [as described on their website](https://wiki.winehq.org/MacOS).

Once Wine is installed, running a program is as easy as passing the path of the program you want to run into Wine:

```
wine path/to/program.exe
```

…or more commonly, you can just double-click the .exe file.

The decades spent on making the transition away from Windows easier have  resulted in a marvel of a project capable of running proprietary  software on a *different operating system* with a minimal performance cost. If it's helped you out, consider [getting involved](https://www.winehq.org/getinvolved) or [donating](https://www.winehq.org/donate)!