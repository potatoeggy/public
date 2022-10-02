---
title: "13 Tricks to Write Nicer Python"
date: "2022-08-21"
tags:
- tech
- albatross
---

This article is [also published in *The FOSS Albatross.*](https://medium.com/the-foss-albatross/13-tricks-to-write-nicer-python-d6c65897cd59)

Known as an easy-to-use and flexible programming language, Python nevertheless still has plenty of tricks you can use to make your code prettier and faster to write. No matter if you’re new to Python or have years of experience, read more to find a tip for you!

<!-- more -->

## 1. F-strings

When printing out lots of text, you might find that you have to add lots of text together, which you might do by string concatenation:

```py
name = "John"
lastname = "Doe"
print("My name is " + name + " and my last name is " + lastname + ".")
```

As you can see, it gets quite long and cumbersome if the string is long enough and if you’re adding enough strings. This is where **f-strings** come in to make the code readable and actually more performant! These special strings begin with the letter “f” immediately before the opening quote of a string, and any expression in curly braces will be evaluated.

```py
print(f"My name is {name} and my last name is {lastname}.")
```

Completely clear, right?

That’s not all they can do, either! F-strings also provide some ways to easily format the data by providing how you want the data to be displayed after a colon in the expression.

For example, you can limit the number of decimal places shown in a float to two decimal places…

```py
num = 123.456789
print(f"{num:.2f}")
```

…and even dates and times!

```py
from datetime import date
today = date(2022, 8, 21)
print(f"{today:%m/%d/%Y}")
```

Output:

```
08/21/2022
```

## 2. Using “if” to its maximum potential

Like any language, Python has its quirks with values that evaluate to `True` and `False` in if statements. Specifically, **only the following are False** and every other value is True.

- Zero (`0` and `0.0`)
- Empty containers, such as lists, tuples, dictionaries, sets, **and strings**
- `False`
- `None`

This means that actions like checking for empty containers can be drastically shortened from:

```py
array = []
if len(array) != 0:
    print("something is in the list!")
```

to:

```py
array = []
if array:
    print("something is in the list!")
```

## 3. List comprehensions

You can generate a new list very easily with an inline `for`.

```py
array = [i for i in range(10)]
print(array)
```

Output:

```py
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

List comprehensions are just syntactic sugar for a regular for loop, so the above code is equivalent to:

```py
array = []
for i in range(10):
    array.append(i)
print(array)
```

They’re also useful for performing operations *on* the elements, much like `map` in other functional programming languages.

```py
array = [i for i in range(10)]
new_array = [i ** 2 for i in array]
print(new_array)
```

Output:

```py
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

In addition, as an alternative to `filter`, you can only include specific elements by adding an `if` at the end:

```py
array = [i ** 2 for i in range(10) if i % 2 == 0]
print(array)
```

Output:

```py
[0, 4, 16, 36, 64]
```

This is equivalent to:

```py
array = []
for i in range(10):
    if i % 2 == 0:
        array.append(i ** 2)
print(array)
```

## 4. Slicing strings and arrays

Compared to more traditional languages that only allow array accesses `array[i]` for one element, Python lets you "slice" a list or any other sequence (like strings) by a colon between the two indexes.

```py
string = "hello world!"
array = [1, 2, 3, 4, 5, 6]

print(string[2:7])
print(array[:-2])
```

Output:

```
llo w
[1, 2, 3, 4]
```

## 5. Tuple expansion

Tuple expansion is one of Python’s most powerful features, allowing you to expand or assign multiple values in a single line.

```py
a, b = 1, 2
s1, s2 = "baguette", "tomato" + "cheese"
print(a, b)
print(s1, s2)
```

Output:

```
1 2
baguette tomatocheese
```

The code above effectively assigns a tuple `(a, b)` to another tuple `(1, 2)` and is equivalent to the code below:

```py
a = 1
b = 2
s1 = "baguette"
s2 = "tomato" + "cheese"
```

This can let you return multiple values from a function.

```py
def init():
    return (5, 6)
a, b = init()
```

And it’s also really useful in swapping variables!

```py
a = 2
b = 4

# oops, assigned them wrong
b, a = a, b
```

Tuple expansion can even be used in for loops to iterate over tuples or dictionaries!

```py
items = {
    "apple": "juice",
    "orange": "pulp",
    "banana": "smoothie",
    "mango": "slushie"
}

for key, value in items.items():
    print(key, value)
```

Output:

```
apple juice
banana smoothie
mango slushie
orange pulp
```

## 6. Shorter code with shortcircuiting

Imagine you want to assign a variable based on the value of another variable. You might do it this way:

```py
name = "John"
if name == "John":
    last_name = "Doe"
else:
    last_name = "Unknown"
```

But that’s long, and `last_name` appears twice. You can have an inline if to do it in just one line:

```py
name = "John"
last_name = "Doe" if name == "John" else "Unknown"
```

Much nicer!

You also might be familiar with logical boolean operators and how they’re used in if statements.

```py
if password == "hunter2" and name == "Joe":
    print("password accepted")
```

But you might not know some of their quirks or exactly how they work.

If you have two things opposite an `and`, for example `x and y`:

- If `x` evaluates to True, `y` is returned.
- If `x` evaluates to False, `x` is returned.

This might not seem that useful, but then look at `or` in `x or y`:

- If `x` evaluates to True, `x` is returned.
- If `x` evaluates to False, `y` is returned.

This might also not seem that useful until you learn that logical operators can also be used in assignments, where they’re most commonly used for fallback values.

```py
confirm = input("Accept the EULA? (Y/n) ") or "y"
```

Because `input` returns a string, if the user doesn't enter anything, it evaluates to False, so the value `"y"` is assigned to `confirm`.

## 7. Safer file handing with context managers

In most languages, when you write something to a file, it’s actually held in a buffer until you close it manually or automatically when the program ends.

In Python, you would run the following to write to a file:

```py
file = open("myfile.txt")
file.write("hello file")
file.close()
```

But that’s a lot of lines, and you might forget to run `file.close()`, particularly in long programs with lots of stuff being written to the file.

That’s where **context managers** come in, abstracting the whole process and calling `file.close()` automagically:

```py
with open("myfile.txt") as file:
    file.write("hello file")
```

## 8. Nicer iteration with zip() and enumerate()

Python’s for loop is commonly known in other programming languages as a for-each loop. This is great if you just want each item in an iterable, but sometimes you want the index too! Instead of having to resort to `range(len(array))`, instead you can use `enumerate()` and tuple expansion to easily get both the index of the element and the element itself:

```py
array = ["a", "b", "c", "d", "e"]
for i, c in enumerate(array):
    print(i, c)
```

Output:

```
0 a
1 b
2 c
3 d
4 e
```

In a similar vein, if you have two arrays you want to process at the same time, you don’t need to use `range(len(array))` when you have `zip()`, which will bundle the different iterators into one big one as big as the smallest iterable.

```py
ints = [1, 2, 3, 4]
strs = ("pomme", "poutine", "pinterest", "pear")
floats = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0]
for i, s, f in zip(ints, strs, floats):
    print(i, s, f)
```

Output:

```
1 pomme 1.0
2 poutine 2.0
3 pinterest 3.0
4 pear 4.0
```

## 9. Nicer paths with pathlib

Python is a cross-platform language, and if there’s one annoying difference between Windows and macOS / Linux, it’s that their path separators are different: Windows uses the backslash (`\`) while macOS and Linux use the forward slash (`/`), and attempting to access a path the wrong way will result in file not found.

So, in the olden days, you would have to string together a long string with `os.path.join` just to be safe:

```py
import os
path = os.path.join("folder", os.path.join("subfolder", "subsubfile.txt"))
```

Doesn’t that look clunky?

Luckily, a “new” (read: years-old) [addition to the standard library](https://docs.python.org/3/library/pathlib.html) makes that *much* easier:

```py
from pathlib import Path
path = Path("folder") / "subfolder" / "subsubfile.txt"
```

It also includes a bunch of helper methods to check for things and navigate the filesystem tree just because Python loves making your life easier.

```py
from pathlib import Path
path = Path("folder")

if path.exists() and path.is_file():
    print("yay!")
    print(path.parent)
    print(path.suffix)
    
if not path.exists():
    path.mkdir()  ### create the folder if it doesn't exist
```

## 10. Iterable unpacking

n competitive programming, often you have to print out space-separated results. This can be done by the mildly inconveniencing

```py
print(" ".join([1, 2, 3, 4]))
```

or heaven forbid, via iteration:

```py
for i in [1, 2, 3, 4]:
    print(i, end=" ")
print()
```

which is where iterable unpacking comes in, and you can go straight to

```py
array = [1, 2, 3, 4]
print(*array)
```

The **unpacking operator** (the asterisk) basically gets rid of the container and throws all of the elements inside directly into the print function as parameters.

That means that the above line of code is equivalent to:

```py
print(1, 2, 3, 4)
```

which nicely prints out the integers separated by spaces with a newline at the end.

But wait, there’s more! The unpacking operator is also commonly used in function definitions as a catch-all parameter for extra arguments, stuffing them into a list.

```py
def init(a, b, *args):
    print(a, b)
    print(args)
    
init(1, 2, "pomme", 4, 6.0)
```

Output:

```
1, 2
['pomme', 4, 6.0]
```

You can also use this in normal assignment to, say, only get the first and last elements of an array:

```py
first, *args, last = [1, 2, 3, 4, 5]
print(first)
print(args)
print(last)
```

Output:

```
1
[2, 3, 4]
5
```

## 11. Else outside of if

Everyone knows what if-else does. But did you know that Python also lets you use it after loops and exception blocks?

- In loops, `else` is run *only if* the loop did not `break`.
- In exception blocks, `else` is run *only if* there was no exception.

These are especially useful so you don’t have to add an indicator variable yourself:

```py
for i in array:
    if i.is_tomato():
        print("found a tomato!")
        break
else:
    print("no tomato found :(")
```

…is equivalent to

```py
found_tomato = False
for i in array:
    if i.is_tomato():
        found_tomato = True
        break

if found_tomato:
    print("found a tomato!")
else:
    print("non tomato found :(")
```

Similarly, in a try-except block:

```py
try:
    number = int(input("Enter a number: "))
except ValueError:
    print("That's not a number >:(")
else:
    print("You know how to follow instructions! :D")
```

…which is equivalent to:

```py
is_number = True
try:
    number = int(input("Enter a number: "))
except ValueError:
    is_number = False

if is_number:
    print("You know how to follow instructions! :D")
else:
    print("That's not a number >:(")
```

## 12. Type hinting

When you use a library, your IDE often knows what types a function will accept so you don’t have to guess.

These come from **type hints** in the code, which you can use in your own code, especially if there is a lot of reused code and it’s a long program.

A colon after a variable shows its type:

```py
a: int = 4
```

…while an arrow after a function shows its return value.

```py
def pow(x: int, y: int) -> int:
    return x ** 2

def largest(array: list[int]) -> int:
    return max(array)
```

In more complex programs, type hinting is especially useful as your IDE can provide autocomplete and better syntax highlighting as it knows the limits of your program, so if you accidentally assume the wrong type of an object, your IDE will complain and find the bug before it causes a runtime crash.

## 13. The walrus operator (:=)

Say you’re doing something over and over again and checking for a condition until it’s true. You could do it in a while loop:

```py
import requests

r = requests.get("https://google.com")
while r.status_code != 200:
    print(r.status_code)
    time.sleep(1)
    r = requests.get("https://google.com")
```

But the assignment is repeated twice!

Introducing the walrus operator, which assigns *and returns the assigned value* in the same statement, allowing for less repeated code and some pretty crazy one-liners:

```py
import requests

while (r := requests.get("https://google.com")).status_code != 200:
    print(r.status_code)
    time.sleep(1)
```

---

Although thirteen of them are covered here, there are endless ways to optimise your code so that it’s faster to read, write, and run. Python is a “batteries included” language — chances are that the way you’re used to doing things in other languages have a shorter and more concise method in Python.

The most important tip I can give you is to check the standard library if you want to do something — from [image format recognition](https://docs.python.org/3/library/imghdr.html) to [config file management](https://docs.python.org/3/library/configparser.html) to [basic database operations](https://docs.python.org/3/library/sqlite3.html), the standard library is chock full of useful tools included over the years.
