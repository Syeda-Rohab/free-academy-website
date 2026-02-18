# ============================================
# PYTHON COMPLETE COURSE - BEGINNER TO ADVANCED
# ============================================

# ============================================
# 1. PYTHON BASICS
# ============================================

# Variables and Data Types
name = "Alice"           # string
age = 25                 # int
height = 5.7             # float
is_student = True        # bool
hobbies = ["reading", "coding"]  # list
person = {"name": "Bob", "age": 30}  # dict

# Print and Input
print("Hello, World!")
print(f"My name is {name} and I'm {age} years old")

# Input (uncomment to use interactively)
# user_input = input("Enter your name: ")
# print(f"Hello, {user_input}!")

# ============================================
# 2. CONDITIONALS
# ============================================

age = 18

if age < 13:
    print("Child")
elif age < 20:
    print("Teenager")
else:
    print("Adult")

# One-liner
status = "Adult" if age >= 18 else "Minor"

# ============================================
# 3. LOOPS
# ============================================

# For Loop
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for i in range(1, 6):
    print(i)  # 1, 2, 3, 4, 5

# Loop through list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# While Loop
count = 0
while count < 5:
    print(count)
    count += 1

# Break and Continue
for i in range(10):
    if i == 3:
        continue  # Skip 3
    if i == 7:
        break  # Stop at 7
    print(i)

# ============================================
# 4. FUNCTIONS
# ============================================

# Basic function
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))

# Function with default parameters
def greet_person(name="Guest"):
    return f"Hello, {name}!"

print(greet_person())  # Hello, Guest!
print(greet_person("John"))  # Hello, John!

# Function with multiple parameters
def add_numbers(a, b, c=0):
    return a + b + c

print(add_numbers(5, 3))  # 8
print(add_numbers(5, 3, 2))  # 10

# Function with *args
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4, 5))  # 15

# Function with **kwargs
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="NYC")

# Lambda functions
square = lambda x: x ** 2
print(square(5))  # 25

add = lambda a, b: a + b
print(add(3, 4))  # 7

# ============================================
# 5. LISTS
# ============================================

# Create lists
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# Access elements
print(numbers[0])  # 1
print(numbers[-1])  # 5 (last element)

# Slicing
print(numbers[1:4])  # [2, 3, 4]
print(numbers[:3])  # [1, 2, 3]
print(numbers[2:])  # [3, 4, 5]

# Modify lists
numbers.append(6)  # Add to end
numbers.insert(0, 0)  # Add at index
numbers.remove(3)  # Remove value
last = numbers.pop()  # Remove and return last

# List operations
print(len(numbers))  # Length
print(3 in numbers)  # Check if exists

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]

# ============================================
# 6. DICTIONARIES
# ============================================

# Create dictionary
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Access values
print(person["name"])  # Alice
print(person.get("age"))  # 25
print(person.get("country", "USA"))  # Default value

# Modify dictionary
person["age"] = 26  # Update
person["email"] = "alice@example.com"  # Add new

# Remove items
del person["city"]
email = person.pop("email")

# Loop through dictionary
for key in person:
    print(f"{key}: {person[key]}")

for key, value in person.items():
    print(f"{key}: {value}")

# Dictionary comprehension
squares = {x: x**2 for x in range(5)}

# ============================================
# 7. TUPLES AND SETS
# ============================================

# Tuples (immutable)
coordinates = (10, 20)
x, y = coordinates  # Unpacking

# Sets (unique elements)
unique_numbers = {1, 2, 3, 3, 4}  # {1, 2, 3, 4}

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}

print(set1 | set2)  # Union: {1, 2, 3, 4, 5}
print(set1 & set2)  # Intersection: {3}
print(set1 - set2)  # Difference: {1, 2}

# ============================================
# 8. STRING MANIPULATION
# ============================================

text = "Hello, World!"

# String methods
print(text.lower())  # "hello, world!"
print(text.upper())  # "HELLO, WORLD!"
print(text.capitalize())  # "Hello, world!"
print(text.title())  # "Hello, World!"
print(text.replace("World", "Python"))  # "Hello, Python!"
print(text.split(", "))  # ["Hello", "World!"]
print("Hello" in text)  # True
print(len(text))  # 13

# String formatting
name = "Alice"
age = 25

print(f"My name is {name} and I'm {age}")  # f-string
print("My name is {} and I'm {}".format(name, age))
print("My name is %s and I'm %d" % (name, age))

# Multi-line strings
multiline = """
This is a
multi-line string
"""

# ============================================
# 9. FILE HANDLING
# ============================================

# Write to file
with open("example.txt", "w") as f:
    f.write("Hello, World!\n")
    f.write("Python is awesome!")

# Read from file
with open("example.txt", "r") as f:
    content = f.read()
    print(content)

# Read line by line
with open("example.txt", "r") as f:
    for line in f:
        print(line.strip())

# Read all lines
with open("example.txt", "r") as f:
    lines = f.readlines()
    print(f"Total lines: {len(lines)}")

# ============================================
# 10. EXCEPTION HANDLING
# ============================================

try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"Error: {e}")
else:
    print("No errors occurred")
finally:
    print("This always runs")

# Raise exceptions
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age

# Custom exception
class MyError(Exception):
    pass

# ============================================
# 11. CLASSES AND OOP
# ============================================

class Person:
    # Class attribute
    species = "Homo sapiens"
    
    # Constructor
    def __init__(self, name, age):
        self.name = name  # Instance attribute
        self.age = age
    
    # Instance method
    def greet(self):
        return f"Hello, I'm {self.name}"
    
    # Method with parameters
    def have_birthday(self):
        self.age += 1
        return f"Happy birthday! Now I'm {self.age}"
    
    # String representation
    def __str__(self):
        return f"Person({self.name}, {self.age})"

# Create objects
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

print(person1.greet())  # Hello, I'm Alice
print(person1.have_birthday())  # Happy birthday! Now I'm 26
print(person1)  # Person(Alice, 26)

# ============================================
# 12. INHERITANCE
# ============================================

class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):  # Override
        return "Woof!"
    
    def fetch(self):
        return f"{self.name} is fetching"

class Cat(Animal):
    def speak(self):  # Override
        return "Meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak())  # Woof!
print(dog.fetch())  # Buddy is fetching
print(cat.speak())  # Meow!

# ============================================
# 13. MODULES AND PACKAGES
# ============================================

# Import modules
import math
import random
from datetime import datetime

print(math.sqrt(16))  # 4.0
print(random.randint(1, 10))  # Random number
print(datetime.now())  # Current date/time

# Create your own module
# Save as mymodule.py:
"""
def greet(name):
    return f"Hello, {name}!"
"""

# Import your module
# import mymodule
# print(mymodule.greet("Alice"))

# ============================================
# 14. DECORATORS
# ============================================

# Basic decorator
def my_decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()

# Decorator with arguments
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")

# ============================================
# 15. GENERATORS
# ============================================

# Generator function
def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

for num in count_up_to(5):
    print(num)  # 1, 2, 3, 4, 5

# Generator expression
squares = (x**2 for x in range(10))
for square in squares:
    print(square)

# ============================================
# 16. LAMBDA, MAP, FILTER, REDUCE
# ============================================

numbers = [1, 2, 3, 4, 5]

# Map
squares = list(map(lambda x: x**2, numbers))
print(squares)  # [1, 4, 9, 16, 25]

# Filter
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4]

# Reduce
from functools import reduce
sum_all = reduce(lambda a, b: a + b, numbers)
print(sum_all)  # 15

# ============================================
# 17. CONTEXT MANAGERS
# ============================================

# Using with statement
print("\n--- Context Manager Example ---")
with open("example.txt", "r") as f:
    content = f.read()
    print(f"File content: {content[:20]}...")
# File automatically closed

# Custom context manager
class MyContext:
    def __enter__(self):
        print("Entering context")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting context")

with MyContext() as ctx:
    print("Inside context")

# ============================================
# 18. DATA CLASSES (Python 3.7+)
# ============================================

from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    city: str = "Unknown"  # Default value

person = Person("Alice", 25, "NYC")
print(person.name)  # Alice
print(person)  # Person(name='Alice', age=25, city='NYC')

# ============================================
# 19. TYPE HINTS (Optional)
# ============================================

def greet(name: str) -> str:
    return f"Hello, {name}"

def add(a: int, b: int) -> int:
    return a + b

from typing import List, Dict, Optional, Union

def process_items(items: List[str]) -> None:
    for item in items:
        print(item)

def get_user(user_id: int) -> Optional[Dict]:
    return {"id": user_id, "name": "Alice"}

def process(value: Union[int, str]) -> str:
    return str(value)

# ============================================
# 20. COMPLETE EXAMPLE - TODO APP
# ============================================

class TodoApp:
    def __init__(self):
        self.todos = []
    
    def add_todo(self, task):
        self.todos.append({"task": task, "completed": False})
        print(f"Added: {task}")
    
    def complete_todo(self, index):
        if 0 <= index < len(self.todos):
            self.todos[index]["completed"] = True
            print(f"Completed: {self.todos[index]['task']}")
        else:
            print("Invalid index")
    
    def show_todos(self):
        if not self.todos:
            print("No todos!")
            return
        
        for i, todo in enumerate(self.todos):
            status = "X" if todo["completed"] else "O"
            print(f"{i}. [{status}] {todo['task']}")
    
    def remove_todo(self, index):
        if 0 <= index < len(self.todos):
            removed = self.todos.pop(index)
            print(f"Removed: {removed['task']}")
        else:
            print("Invalid index")

# Usage
app = TodoApp()
app.add_todo("Learn Python")
app.add_todo("Build a project")
app.add_todo("Practice coding")
app.show_todos()
app.complete_todo(0)
app.show_todos()

# ============================================
# 21. WORKING WITH APIs (Requires Internet)
# ============================================

# Uncomment to use with real API
"""
import requests

# GET request
response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
data = response.json()
print(data)

# POST request
new_data = {"title": "foo", "body": "bar", "userId": 1}
response = requests.post(
    "https://jsonplaceholder.typicode.com/posts",
    json=new_data
)
print(response.json())

# With error handling
try:
    response = requests.get("https://api.example.com/data")
    response.raise_for_status()
    data = response.json()
except requests.exceptions.RequestException as e:
    print(f"API Error: {e}")
"""

# ============================================
# 22. WORKING WITH JSON
# ============================================

import json

# Python to JSON
data = {"name": "Alice", "age": 25}
json_string = json.dumps(data)

# JSON to Python
data = json.loads(json_string)

# Write JSON to file
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# Read JSON from file
with open("data.json", "r") as f:
    data = json.load(f)

# ============================================
# 23. REGULAR EXPRESSIONS
# ============================================

import re

text = "My email is test@example.com and phone is 123-456-7890"

# Search
match = re.search(r"\w+@\w+\.\w+", text)
print(match.group())  # test@example.com

# Find all
emails = re.findall(r"\w+@\w+\.\w+", text)
phones = re.findall(r"\d{3}-\d{3}-\d{4}", text)

# Replace
new_text = re.sub(r"\d", "#", text)

# Validate email
def is_valid_email(email):
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return bool(re.match(pattern, email))

# ============================================
# 24. MULTITHREADING
# ============================================

import threading
import time

def print_numbers():
    for i in range(5):
        time.sleep(1)
        print(i)

def print_letters():
    for letter in "ABCDE":
        time.sleep(1)
        print(letter)

# Create threads
t1 = threading.Thread(target=print_numbers)
t2 = threading.Thread(target=print_letters)

# Start threads
t1.start()
t2.start()

# Wait for threads
t1.join()
t2.join()

print("Done!")

# ============================================
# 25. ASYNC/AWAIT (Python 3.5+)
# ============================================

import asyncio

async def fetch_data():
    print("Fetching data...")
    await asyncio.sleep(2)
    print("Data fetched")
    return {"data": "sample"}

async def main():
    result = await fetch_data()
    print(result)

# Run async function
asyncio.run(main())

# Run multiple tasks concurrently
async def run_all():
    await asyncio.gather(
        fetch_data(),
        fetch_data(),
        fetch_data()
    )

asyncio.run(run_all())

# ============================================
# PYTHON COURSE COMPLETE!
# ============================================
