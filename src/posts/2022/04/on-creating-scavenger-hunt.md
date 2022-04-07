---
title: "BSSCC Linux Scavenger Hunt - Solutions"
date: "2022-04-07"
tags:
- blog
- tech
- bsscc
---

SPOILERS if you haven't completed it.

<!-- excerpt -->

Assume all part 1 commands here are run in the home directory. Assume all part 2 commands are run in the `part2` directory.

## Clue 1

#### Solution

```bash
ls
```

No explanation necessary here. Clue 1 is in the file name itself, so simplying listing the files in the home directory will return the first clue.

## Clue 2

#### Solution

```bash
cat clue2.txt
```

Presumably, after you `ls` and find the first clue, you would notice a file named `clue2.txt`, in which the second clue is contained.

## Clue 3

#### Solution

```bash
cd clue3
ls
cd "down here"
ls
cd "over here"
ls
cd "nearly there"
ls
cat "you found me!"
```

There are multiple ways to solve this problem, but the solution provided is the one that requires the least amount of knowledge. Helpful folder names should guide you to the final file containing the clue.

## Clue 4

#### Solution

```bash
ls -a
cat .clue4
```

The assist text at the end of clue 3 implies that you should return to your home directory, and that there are hidden files:

> The fourth clue is back at home, but you might need to look more closely for something that lies unseen...

…upon which you would discover three new files, each containing clues. Clue 4's only challenge is finding it.

## Clue 5

#### Solution

```bash
chmod +r .clue5
cat .clue5
```

Off the heels of clue 4, you would probably do the same thing. Unfortunately, there is something else you have to do:

```
cat: .clue5: Permission denied
```

This should be a hint that you have to muck around with permissions. As you're trying to read the file, you would add the *read* permission to it, which should then reveal the clue.

## Clue 6

#### Solution

```bash
grep NEEDLE .the_sixth_clue
```

Completing clue 5 is almost required to complete this clue with the following help text.

> Clue 6 is pretty big and hard to look through. Can you find the NEEDLE in the haystack?

There is no chance of you manually scrolling unless you want to scroll for a very long time — there are 10000 lines to scroll through, and the clue is found on line 777. Following the help text, *literally* finding the word "NEEDLE" will take you to the clue.

However, you might have noticed a pattern so far — each clue begins with "Clue X: cluehere", so you might be inclined to simply grep for the word "Clue". This does work for this clue and was used by many beta testers, but the shortcut means that you may struggle a little in the second half, which builds on this concept.

## Clue 7

#### Solution

```bash
chmod +x clue7
./clue7
```

Similar to clue 5, although you might try to read it, garbled text and the hint text from the clue unlocker used to unlock this clue should lead you to conclude that you should be running this program instead.

> About Clue 7: Fun fact: you can run anything on Linux. No need for a “.exe” or “.app” file extension. But what do you have to do to be able to run it…?

Therefore, once you get another permission denied trying to run it, you conclude that you have to once again set the executable bit with `chmod` and run it as a compiled C program.

## Clue 8

#### Solution

```bash
cd /
ls
cat clue8
```

> To find the eighth clue, you'll have to go up. All the way up.

"Going up" here can mean a variety of things, but at the knowledge level of the scavenger hunt should imply that you go up the *directory tree*, going "all the way up" to the root directory `/`, where looking around should reveal the `clue8` file containing the eighth clue.

## Clue 9

#### Solution

```bash
grep -vi needle clue9.txt
```

> About Clue 9: What if you’re looking for a clue in a haystack of needles? You'd have to take it all apart. You wouldn’t want to find a needle, after all. Regardless if the nEeDlES are big or if the neeDLES are small, you don't want any of them.

The puzzle here expands on that from the sixth clue and practically inverts it. Once again, you're searching for a clue, but instead of finding a clue using the needle, you want to find the line *without* the needle.

Trying to `grep` for "Clue" or ":" if you tried that in clue 6 will show you a line that kindly informs you that you should try a different approach.

```
Clue 9: Not this line ;) — try again!                                                               needle
```

Instead, the solution is to find every line that *does not* contain a needle case-insensitively.

```
Hint IX is as follows - cxS1YxZFl
```

## Clue 10

#### Solution

```bash
ls -R clue10
cat clue10/2/1/1/*
```

Much like how clue 9 expanded on clue 6, clue 10 expands on clue 3. This time, there are no hints and the number of folders is too large to reasonably manually `cd` and `ls` through, so you'll need to find another way around.

```bash
ls clue10
  0   1   2  "don't bother trying to brute force this"  'you'\''ll have to put the pieces together - wild, huh?'
```

Practical solutions here involve `ls -R` but also `find .`, both of which will show all subdirectories in `clue10`, revealing 10 text files in `clue10/2/1/1` that must be combined to form the clue. The help folder in `clue10` hints that **wildcards** can be used to quickly see the contents of each file.

## Clue 11

#### Solution

```bash
unzip clue11.zip
cat clue11.txt
```

File extensions aren't completely useless — they can hint to what you might need to do if used properly. No explanation needed here.

## Clue 12

#### Solution

```bash
mv clue9.txt clue99.txt
cp ../clue2.txt clue100.txt
rm ../clueunlocker.pyc
mkdir bucket
python clue12.pyc
```

The last clue is the most complex clue. You will have to perform four file manipulations to get it, with plenty of messages if you do it wrong.

> Where's clue 99? Oh, it's called clue9 now... Would you be a dear and move it to clue99.txt?

The first task asks you to move the 9th clue to the 99th clue. Be sure not to copy it, or the program will get mad at you.

> Wait, there are supposed to be 100 clues!
> Just copy that second clue you got and put it here, alright?
> Name it clue100.txt and we'll call it even.

Clue 12 has developed an attitude and now wants you to bring `clue2.txt` to `clue100.txt`. Make sure to copy it *to the same directory as clue12*.

For fun, if you moved it instead of copying it:

> I told you to *copy* it, not move it! Do as I say next time or else I'm locking you out.

Or if you copied a different file / created a file named clue100.txt without copying clue2:

> You trying to scam me over here? I thought I told you to copy clue2.txt, not whatever garbage you dumped.

The third task simply wants you to remove `clueunlocker.pyc` in the home directory.

> Oi! What's that troublemaking clue unlocker doin' here? Get rid of 'im. Right now. I see 'im smirking in his little hidey-hole in your home. Delete him off of the face of the planet or I ain't giving you my clue.

Lastly, the (most difficult?) clue wants you to give it a bucket.

> At least that b****** clueunlocker.pyc ain't 'ere. I'd be doing bad things if 'e was here, I would.
> *cough* I ain't feelin' too good. Quick, fetch me a bucket, will ya? Put it right beside me when you're done. Make sure I know it's a bucket, just a bucket, my eyes do be swimmin' these days.

It wants a folder named `bucket` to vomit whatever it's having trouble with. If you happen to place a file named `bucket` instead, you'll be kindly informed that you might want to consider a folder instead.

> Wha... what is this? This ain't no bucket! Quick, before I -- BLERGH!
> .
> .
> You sense that your clue-holder won't be coming back anytime soon. Maybe you should consider giving him a more empty container.

With that, you finally receive the final clue!

> Whew, something came up. Bless /dev/null that there was this bucket here.
> Anyway, here you are. Don't let me hold you back, now.
> Submit your combined code to judge.bayview.club!

To wrap up the main hunt, you have to run your combined code through the base64 decoder outlined in the initial instructions:

```bash
echo CODE | base64 -d
```

This will earn you your prize, which you can claim at https://prize.bayview.club !

## Secret

#### Solution

```bash
echo <CODE> | base64 -d
echo <NEWCODE> | base64 -d
echo <NEWNEWCODE> | base64 -d
echo <NEWNEWNEWCODE> | base64 -d
echo <NEWNEWNEWNEWCODE> | base64 -d
```
There is one secret solution implied in the instructions:

> If you are so inclined, you may find that the base case is not the base it appears to be, and that there might be something deeper...

A "base case" is a term for when revursion ends and things start returning up the stack. The hint here implies that the base64 command you're given is *not* the end, and perhaps you can run it a few more times to get a different result.

To be precise, running the command five times on each code you get will give you:

```
you found a secret!
```

Submitting this to the judge will grant you a score of 3/3 and access to the secret prize: https://prize.bayview.club/secret .
