---
outline: deep
---

# Python Excercies


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

```python [Using Recursion]
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)


nfib = 10 # n Fibonacci numbers

for i in range(nfib):
    print(fib(i), end=" ")
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

## Print Star Triangle patter
Print n rows of star triangle pattern
```
// Right angled Triangle
*
**
***
****
*****

// Reversed right angle triangle
    *
   **
  ***
 ****
*****

// Equilateral triangle
    *
   * *
  * * *
 * * * *
* * * * *

```

::: details Solution
::: code-group
```python [Right Angle Triangle]
def star_triangle(rows):
    for row in range(1, rows+1):
        print("*" * row )

star_triangle(5)
```

```python [Reversed Right Angle Triangle]
def reversed_star_triangle(rows):
    for row in range(1, rows+1):
        print(" " * (rows - row), end="")
        print("*" * row)

reversed_star_triangle(5)
```

```python [Equilateral Triangle]
def equilateral_star_triangle(rows):
    for row in range(1, rows+1):
        idx = rows - row
        print(" " * idx, end="")
        for star in range(row+row-1):
            if star % 2 == 0:
                print("*", end="")
            else:
                print(" ", end="")
        print()

equilateral_star_triangle(5)
```
:::


## Common elements in two lists
Find common elements in two lists, no duplicates in the list

```
Input: 
a = [1,3,5,7,9]
b = [2,4,6,8,9]

Output:
[9]
```

::: details Solution
```python
def common_element(list1, list2):
    return list(set(a).intersection(set(b)))

common_element(a, b)
```
:::


## Duplicate elements in a list
Find duplicate elements in a list and return the elements

```
Input: 
a=[1,4,1,3,5,9,9,9]

Output:
[1,9]
```

::: details Solution
```python
from collections import Counter

def duplicate_elements(list1):
    return [ele for ele, count in Counter(list1).items() if count > 1]

duplicate_elements(a)
```
:::


## Print string as triangle
Print characters in a string in a triangle pattern

```
Input: 
str1 = "Python"

Output:
P
Py
Pyt
Pyth
Pytho
Python
```

::: details Solution
```python
def print_string(input_str):
    for idx in range(1, len(input_str)+1):
        print(input_str[0:idx])

print_string(str1)
```
:::


## Check if number is Armstrong
> Hint: If number is equal to the sum of nth (number of digits in the number) power of the digits in the number
```
Input: 153
Output: 153 is Armstrong number

```

::: details Solution
::: code-group
```python [Basic]
def is_armstrong(n):
    numb = n
    result = 0
    order = len(str(n))

    while numb > 0:
        result += (numb % 10) ** order
        numb //= 10

    if n == result:
        print(f"{n} is an Armstrong number.")
    else:
        print(f"{n} is not an Armstrong number.")

is_armstrong(153)
```

```python [Using Lists]
def is_armstrong_number(numb):
    # Convert the number to a list of its digits
    digits = list(map(int, str(numb)))
    power = len(digits)

    # Calculate the sum of each digit raised to the power of the number of digits
    sum_of_powers = sum([digit ** power for digit in digits])

    if numb == sum_of_powers:
        print(f"{numb} is an Armstrong number.")
    else:
        print(f"{numb} is not an Armstrong number.")

is_armstrong(153)
```
:::


## FizzBuzz Program

FizzBuzz is a simple and popular code challenge. It states that, a number:
- is divisible by 3, print "Fizz"
- is divisible by 5, print "Buzz"
- is divisible by both, print "FizzBuzz"


::: details Solution
```python
def fizz_buss(n):
    for i in range(1, n+1):
        if i % 15 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

fizz_buss(15)
```
:::

::: details Output
```bash
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
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