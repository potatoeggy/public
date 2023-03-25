---
title: "Reviving Older Games Through Emulation"
date: "2022-05-22"
_draft: true
tags:
- tech
- albatross
---

This article is [also published in *The FOSS Albatross.*](https://medium.com/the-foss-albatross/reviving-older-games-through-emulation-ca4e9705700c)

Throughout the past few decades, video games have evolved from an art medium restricted solely to specialized consoles to one enjoyable on all sorts of platforms, including everyday devices such as PCs and phones, replayable for the years to come.

However, for all of the beloved games that *are* locked to consoles, what option do you have but to let them die out as discontinued second-hand consoles grow more and more expensive as they break down?

Introducing…emulation!

<!-- more -->

### TIL converting games to Australian birds will preserve them.

::image{src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Emu_1_-_Tidbinbilla.jpg"}
(Wikipedia Commons, public domain)
::

Though *emu* and *emulation* share three letters, the only other similarity they have is that large entities have tried and failed miserably to stamp them out in the past. Emulation is the process of one system (such as a phone or computer) imitating another one (such as a video game console) to run programs designed for that system. Emus will now forever ravage the Australian wilderness, and emulation has been ruled to be legal in at least the United States.

Today, almost every popular system with games in demand has an emulator developed for them that works to some extent, allowing people to take their *rightfully owned* games and play them long after the original system has been discontinued or play them with mods to enhance their experience such as by increasing resolution.

In a nutshell, this means that if the Nintendo DS you owned as a kid suddenly broke one day, you can back up your cartridges and play Pokémon Black on your phone or computer instead!

### Cool, how do I try it out?

Modern-day emulators are nearly all FOSS, allowing them to be ported to most desktop and even mobile operating systems. We recommend the emulators below for their respective systems for a variety of reasons, including user-friendliness, ease of use, performance, and accessibility.

| Platform                | PC                                                           | Android                                                      |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Sony PlayStation 2      | [PCSX2](https://pcsx2.net/)                                  | [AetherSX2](https://www.aethersx2.com/)                      |
| Nintendo GameCube / Wii | [Dolphin](https://dolphin-emu.org/)                          | [Dolphin](https://dolphin-emu.org/)                          |
| Nintendo DS             | [melonDS](https://melonds.kuribo64.net/) / [DeSmuME](https://desmume.org/download/) | [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic&gl=US) / [melonDS](https://github.com/rafaelvcaetano/melonDS-android) |
| Sony PlayStation 3      | [RPCS3](https://rpcs3.net/)                                  | None                                                         |
| Nintendo 3DS            | [Citra](https://citra-emu.org/)                              | [Citra](https://citra-emu.org/) / [Mikage](https://mikage.app/) |
| Nintendo Switch         | [yuzu](https://yuzu-emu.org/) / [Ryujinx](https://ryujinx.org/) | [Skyline](https://github.com/skyline-emu/skyline) (WIP)      |



Do note that emulators, unlike typical games, are *much* heavier on the CPU compared to the GPU because of all the translation required for the emulator to "convert" the game from the console's "language" to that of your phone or PC.

You can find more details about each emulator and other options for different consoles on the [Emulation General Wiki](https://emulation.gametechwiki.com/index.php/Main_Page).

### I want to learn more!

From stories about games relying on undocumented behaviour to *game-breaking* bugs cancelled out only by *console-breaking* bugs, emulation is a fascinating topic well-deserving of your interest if you're at all interested in low-level systems.

Modern emulators usually perform high-level emulation (HLE), where they emulate the functions that the system OS provides, compared to emulating each transistor like some monstrously complex Minecraft redstone contraption. As you might guess, this approach sacrifices some accuracy for greater performance — it's like translating a book character by character instead of word by word.

For further reading, there are plenty of blogs run by emulators outlining their tales in overcoming tricky obstacles, and we here at the *Albatross* strongly recommend you go check them out! [Dolphin](https://dolphin-emu.org/blog/) (GameCube / Wii), [yuzu](https://yuzu-emu.org/entry/) (Switch), [Ryujinx](https://blog.ryujinx.org/) (Switch), and [RPCS3](https://rpcs3.net/blog/) (PS3) all attempt to post regular progress reports on their respective blogs, linked above.
