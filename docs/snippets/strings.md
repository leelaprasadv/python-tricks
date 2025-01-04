---
outline: deep
---

# Python String Tips and Tricks

Snippets and one-liners for strings.


## Reverse a string

```python
text = "Hello, World!"
reversed_text = text[::-1]
print(reversed_text)

# Output: !dlroW ,olleH
```

## Check if a string is a palindrome

```python
text = "racecar"
is_palindrome = text == text[::-1]
print(is_palindrome)

# Output: True
```

## Remove all non-alphanumeric characters

```python
import re
text = "Hello, World!"
cleaned_text = re.sub(r'[^a-zA-Z0-9]', '', text)
print(cleaned_text)

# Output: HelloWorld
```

## Check if string contains only specific characters

```python
"12345".isdigit() # True
"abcABC".isalpha() # True
"abc123".isalnum() # True
```