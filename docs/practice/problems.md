---
outline: deep
---

# Python Practice Problems


## Fibonacci numbers
Print n fibonacci numbers 
```
Input: 10
Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

```

::: details Solution
::: code-group
```python [Basic]
def fib(n):
    a, b = 0, 1
    for i in range(n):
        print(a)
        a, b = b, a+b
```

```python [Using Generator]
def fib(n):
    a, b = 0, 1
    while n > 0:
        yield a
        a, b = b, a+b
        n -= 1

print(list(fib(10)))
```
:::

## Balanced Brackets
Write a program to check brackets are balanced or not

```
Input: {{{]}
Output: False

Input: {}
Output: True

```

::: details Solution
```python 
def is_balanced(s):
    valid_bracket_pairs = {
        "}": "{", "]": "[", ")": "("
    }
    _stack = []
    for char in s:
        if char in valid_bracket_pairs.values():
            _stack.append(char)
        elif char in valid_bracket_pairs.keys():
            if not _stack or _stack.pop() != valid_bracket_pairs[char]:
                return False
    return not _stack
```
:::


## Squares of a sorted Array
Given an integer array `nums` sorted in ascending order, return an array of squares of each number in ascending order

```
Input: [-4, -1, 0, 3, 10]
Output: [0,1,9,16,100]

```

::: details Solution
```python
def squared_sorted_array(nums):
   return sorted([num ** 2 for num in nums])
```
:::


## Print staircase pattern 
Given the number of steps, print the steps in a staircase

```
Input: 5

Output:
___
   |__
      |__
         |__
            |__
               |
```

::: details Solution
::: code-group
```python [Approach 1]
def generate_staircase(steps):
    for i in range(steps):
        print("_" *(i==0) +  "__")
        print("   "*(i+1) + "|" , end="")
```

```python [Approach 2]
def generate_staircase(steps):
    for i in range(2, steps*3, 3):
        print("__")
        print(" "*(i) + "|" , end="")
```
:::