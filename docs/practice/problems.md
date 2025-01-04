---
outline: deep
---

# Python Practice Problems


## Write a program to generate staircase pattern given number of steps

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
```python
# Approach 1
def generate_staircase(steps):
    for i in range(steps):
        print("_" *(i==0) +  "__")
        print("   "*(i+1) + "|" , end="")

# Approach 2
def generate_staircase(steps):
    for i in range(2, steps*3, 3):
        print("__")
        print(" "*(i) + "|" , end="")

```
:::
