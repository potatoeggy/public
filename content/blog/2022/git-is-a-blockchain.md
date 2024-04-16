---
title: "Git is a Blockchain"
date: "2022-10-02"
_draft: true
tags:
- tech
- albatross
---

This article is [also published in *The FOSS Albatross.*](https://medium.com/the-foss-albatross/git-is-a-blockchain-1060b53cea1f)

Git today is a beloved technology developers all around the world now use to track the history of a project through revisions. Obviously, it's not magic — if you look at the hidden files in a Git repository, you'll find a `.git` folder at least as big as the rest of your repo.

<!-- more -->

But for a technology that lets you revert the exact state of your files back any number of years, that `.git` folder is surprisingly small. You'd expect that any backup program worth its salt would actually back up each version of each file, but Git tracks *changes* to files instead of the actual files themselves, a method known as [delta encoding](https://en.wikipedia.org/wiki/Delta_encoding).

Not to mention all of the other features that Git piles on for practically no storage cost, such as branches, merges, cherry-picking, and more?

How does it do it, you ask?

Quantum Web3 decentralised machine learning VR blockchain agile AI cloud storage microservice architecture.

Only two out of the many buzzwords above are are actually used in Git, but Git was the decentralised blockchain before decentralised blockchains were cool.

But, I hear you cry, Git couldn't *possibly* be a blockchain! Blockchains are the stuff used in cryptocurrencies, scams, and other overhyped technologies!

In that case, why don't we compare the two? Let's start with the [Wikipedia definition of a blockchain:](https://en.wikipedia.org/wiki/Blockchain)

## A blockchain is a distributed ledger. 

In simple terms, a blockchain isn't centralised, and a blockchain is copied across many computers, typically via peer-to-peer, such that each person with the data can verify that it's true.

…What do you know? That's exactly what Git does! Each Git repository is copied in its entirety by each person who clones it. When you push a commit, you send an update to another repo hosted somewhere else. When someone else pulls your commit, they *also* do it from a repo hosted somewhere else.

## A blockchain is decentralised. 

At this point, Git servers have largely centralised into large services such as GitHub and GitLab, but that does not mean that the repository hosted there is the "true" one. Any contributor can overwrite the "centralised" version with their own local changes. In fact, there are lots of other server options out there from FOSS hosts such as Gitea, Codeberg, Sourcehut, and more. You can even host your own Git server!

Although Git *can* be centralised, the technology is inherently decentralised because it does not differentiate between servers — all of them are simple "remote"s.

## A blockchain consists of a growing list of records. 

Transaction, meet commit. This one doesn't even need an explanation.

## Each record contains a cryptographic hash of the previous hash! 

Hypothetically, right now, what if you run `git show` in your repository? Oh, hey! Is that a SHA-1 commit hash? Leading to the previous SHA-1 commit hash?? Who would've thunk it??? It's almost as if Git is a blockchain!!!!

```
commit ff25f8f352ed9e9f2fd07275ff136182a1711508
Author: NAME <EMAIL@EMAIL.COM>
Date:  Tue Aug 16 22:45:12 2022 -0400

  fix(api): add back imports

  pylance keeps deleting them >:(

diff --git a/mandown/__init__.py b/mandown/__init__.py
index 4bba27f..9b12daa 100644
```

Each Git commit is hashed in a cryptographically secure* way that links back to the previous hash, which makes it so that you can't modify a previous hash without changing all of the hashes afterward.

This is literally what happens when you mess up a commit and try to revert it  but the server yells at you due to mismatched histories because you messed up reverting it properly.



------

By every commonplace definition of the word, Git utilises a blockchain in its revision control system. It's at the heart of how each change can be uniquely tracked across systems.

A blockchain is nothing special. It's a technology you can use to avoid data tampering via communal tracking of transactions / commits. So, the next time you hear someone rambling on and on about blockchain and crypto, remember that it's just a tool as a means to an end, not some magical solution to everything.

------

*SHA-1 is no longer cryptographically secure, but Git has moved to a patched version that hasn't been cracked yet. SHA-256 support is also in the works.
