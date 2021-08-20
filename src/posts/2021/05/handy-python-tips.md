---
title: Handy Python Tips
date: 2021-05-29
tags:
- blog
- tech
---

Python is a flexible programming language that is well-known for its simplicity and numerous features that make programming in it a lot faster. This article presents just a few that might speed up your productivity a little bit.

<!-- excerpt -->

## 1. Tuple expansion

```python
a, b = tuple([1, 2])
s1, s2 = input(), int(input())
```

Tuple expansion is one of Python's most powerful features, allowing you to assign multiple values or expand multiple values of a tuple in a single line.

```python
>>> print(a, b)
1 2
>>> print(s1, s2)
baguette
pomme
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: 'pomme'
```

The code above effectively assigns a tuple `(a, b)` to another tuple `(1, 2)`, and is equivalent to the code below:

```python
a = 1
b = 2
s1 = input()
s2 = int(input())
```

This can let you return multiple values from a function.

```python
def init():
    return (5, 6)

a, b = init()
print(a, b)
```

Output:

```
5 6
```

Tuple expansion is also used in for loops to iterate over tuples or even dictionaries.

```python
array = [
    (1, 2),
    (3, 4),
    (5, 6)
]

items = {
    7: 8,
    9: 10,
    11: 12
}

for i, j in array:
    print(i, j)

for k, v in items.items():
    print(k, v)
```

Output:

```
1 2
3 4
5 6
7 8
9 10
11 12
```

## 2. Nicer iteration with zip() and enumerate()

Python's for loop is commonly known in other programming languages as a for-each loop. This is great if you just want each item in an iterable, but sometimes you want the index too! Instead of having to resort to `range(len(array))`, instead you can use `enumerate()` and tuple expansion to easily get both the index of the element and the element itself:

```python
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

In a similar vein, if you have two arrays you want to process at the same time, you don't need to use `range(len(array))` when you have `zip()`, which will bundle the different iterators into one big one as big as the smallest iterable.

```python
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

## 3. Iterable unpacking

In competitive programming, often you have to print out space-separated results. This can be done by the mildly inconveniencing

```python
print(" ".join([1, 2, 3, 4]))
```

or heaven forbid, via iteration:

```python
for i in [1, 2, 3, 4]:
    print(i, end=" ")
print()
```

which is where iterable unpacking comes in, and you can go straight to

```python
print(*[1, 2, 3, 4])
```

The **unpacking operator** (the asterisk) basically gets rid of the container and throws all of the elements inside directly into the print function as parameters.

That means that the above line of code is equivalent to:

```python
print(1, 2, 3, 4)
```

which nicely prints out the integers separated by spaces with a newline at the end.

But wait, there's more! The unpacking operator is also commonly used in function definitions as a catch-all parameter for extra arguments, stuffing them into a list.

```python
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

You can also use this in normal assignment:

```python
a, *args, b = (1, 2, 3, 4, 5)
print(a)
print(args)
print(b)
```

Output:

```
1
[2, 3, 4]
5
```

And it can be used as a handy way to expand a list instead of using `list()`. The comma at the end of the variable is there to indicate it is a tuple with a single element (a singleton).

```python
*s, = "abcde"
print(s)
```

Output:

```
['a', 'b', 'c', 'd', 'e']
```

## 4. map()

This makes one-liners super easy in Python. `map()` takes a function in the first parameter and applies it to all values in the iterable in the second parameter.

```python
def readints(string):
    print(list(map(int, string.split()))
readInts("1 2 3 4 5")
```

Output:

```
[1, 2, 3, 4, 5]
```

It's most useful in assigning variables easily when you know the format the input will be in.

```python
a, b = (map(int, input().split()))
```

## 5. List generators

You can generate a new list using inline `for`.

```python
array = [i for i in range(10)]
print(array)
```

Output:

```
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 6. One-line prefix sum array

A [prefix sum array](https://en.wikipedia.org/wiki/Prefix_sum) is a common data structure used in competitive programming. Python's `itertools` module has a wide array of functionality that can make this easier. A traditional PSA requires three lines:

```python
psa = [0]
for i in [1, 2, 3]:
    psa.append(psa[-1] + i)
```

Excluding the import, you can shrink it down to one with `itertools`:

```python
import itertools
*psa, = itertools.accumulate([1, 2, 3])
```

