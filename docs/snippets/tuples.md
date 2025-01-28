---
outline: deep
---

# Python Tuples Tips and Tricks

Snippets and one-liners for tuples.


# Ternary Operator
Using tuple to for 

:::code-group
```python{2} [Using Tuple]
def calculate_results(marks):
    return ("Fail", "Pass")[marks > 35]
    
print(calculate_results(36))

# Output: Pass
```
```python{2} [Using If else]
def calculate_results(marks):
    return "Pass" if marks > 35 else "Fail"
    
print(calculate_results(30))

# Output: Fail
```
:::
