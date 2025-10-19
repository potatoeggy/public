---
title: "Rust Changes How You Think And Code"
date: 2022-11-27
_draft: false
tags:
- tech
- rust
- albatross
---

This article is [also published in *The FOSS Albatross.*](https://medium.com/the-foss-albatross/rust-changes-how-you-think-and-code-2b5ee4d8def2)

Rust is the hot new language on the block (as new as a language from 2006 can be) that boasts reliability and efficiency.

How does it do this? Well, Rust has something that no other language does — it guarantees memory and thread safety while maintaining the same high performance of C or C++, all the while having high level features such as pattern matching and functional programming!

<!-- more -->

Some languages come close: Go is known for being both fast to run and to write, but its garbage collector and xenophobia toward other languages adds overhead that means that it is not suited for a systems programming language.

In safe Rust, there is *no such thing* as undefined behaviour. Everything your code says it does will happen — segfaults and NullPointerExceptions are impossible.

For simpler issues, the rustc compiler tells you more or less exactly what went wrong, along with a helpful error code, a link for examples on how to fix the error code, and even a suggestion that applies directly to your current code, which more times than not immediately fixes the issue.

```rust
error: format argument must be a string literal
--> helloworld.rs:3:14
 |
3 | println!(123);
 | ^^^
 |
help: you might be missing a string literal to format with
 |
3 | println!("{}", 123);
 |
error[E0384]: cannot assign twice to immutable variable `a`
 --> helloworld.rs:3:5
 |
2 |   let a = 123;
 |     -
 |     |
 |     first assignment to `a`
 |     help: consider making this binding mutable: `mut a`
3 |   a *= 2;
 |   ^^^^^^ cannot assign twice to immutable variable
```

Thanks, rustc!

In time, you come to stop thinking less about the edges in the language and focus more on implementing what you want to implement. Rust makes it so that you don't have to stop and ask yourself these questions every minute:

- What if this variable isn't initialised or defined?
- What if this variable is already used?
- What if I'm modifying a variable that isn't supposed to be modified?
- What if another thread changes this data while I'm reading it?
- Did I forget to handle an error?
- Did I forget to check the error?

So how does it do this?

## Immutability by default

There are debates on whether immutable or mutable objects are better. Well, Rust provides both — but you have to *explicitly* tell Rust that you want your variables to be mutable. For example, the second error message in this article shows that you need the `mut` keyword to let the compiler let you change variable values.

```rust
let mut a = 1;
```

This applies to everything: from references to function arguments. If a variable isn't passed as `mut`, it's not mutable, and there is nothing else you can do to get around that. This isn't like JavaScript's `const`, either — the internal variables of a struct also have to be declared mutable in order to overwrite them.

This added friction to mutability means that developers tend to prefer immutable objects when possible, so it's very clear when a variable can change!

## The borrow checker

Perhaps Rust's flagship feature, this is how Rust manages memory without the complexity of manual memory management or the overhead of a garbage collector. In a nutshell, each variable is given an owner, and they may only have one owner.

You can "borrow" the value if you want to do something with it but give it back to use later, but the typical pitfalls of pointers don't exist in Rust because *there are no pointers in Rust!* (At least, not safe Rust.)

Here's an example of what Rust prevents — if you operated on vector B, it would change C, so Rust's safety guarantees would not hold. That's why the compiler doesn't let you run this in the first place.

```rust
let a = vec![1, 2, 3];
let b = a;
let c = a;

2 |   let a = vec![1, 2, 3];
 |     - move occurs because `a` has type `Vec<i32>`, which does not implement the `Copy` trait
3 |   let b = a;
 |       - value moved here
4 |   let c = a;
 |       ^ value used here after move
```

And it's here that you really have to appreciate how much information the compiler gives you. It:

- tells you where the value originated from
- tells you where the value was used
- and tells you where the value was used *again*, which is not allowed

## Conclusion

Though there is a rather steep learning curve from just *how much* there is to unlearn about the finnicky things you can do in more traditional languages, Rust is a language that lets the computer calculate if your program is correct, letting you think purely on how to solve your problems.
