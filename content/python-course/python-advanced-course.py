# ============================================
# PYTHON ADVANCED COURSE - INTERMEDIATE TO ADVANCED
# Chapters 14-25: Only Advanced Concepts
# ============================================
# -*- coding: utf-8 -*-

import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

print("=" * 60)
print("   PYTHON ADVANCED COURSE - COMPLETE TRAINING")
print("=" * 60)
print()

# ============================================
# CHAPTER 14: DECORATORS
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 14: DECORATORS")
print("=" * 60)

print("\n14.1 Basic Decorator:")

def my_decorator(func):
    def wrapper():
        print("   Before function")
        func()
        print("   After function")
    return wrapper

@my_decorator
def say_hello():
    print("   Hello!")

print("   def my_decorator(func):")
print("       def wrapper():")
print("           print(\"Before function\")")
print("           func()")
print("           print(\"After function\")")
print("       return wrapper")
print("")
print("   @my_decorator")
print("   def say_hello():")
print("       print(\"Hello!\")")
print("")
print("   Execution:")
say_hello()

print("\n14.2 Decorator with Arguments:")

def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"   Hello, {name}!")

print("   @repeat(3)")
print("   def greet(name):")
print("       print(f\"Hello, {name}!\")")
print("")
print("   Execution:")
greet("Alice")

print("\n✓ Decorators Complete!")

# ============================================
# CHAPTER 15: GENERATORS
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 15: GENERATORS")
print("=" * 60)

print("\n15.1 Generator Function:")

def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

print("   def count_up_to(n):")
print("       count = 1")
print("       while count <= n:")
print("           yield count")
print("           count += 1")
print("")
print("   for num in count_up_to(5):")
print("       print(num)")
print("   Output:")
for num in count_up_to(5):
    print(f"     {num}")

print("\n15.2 Generator Expression:")
squares = (x**2 for x in range(5))
print("   squares = (x**2 for x in range(5))")
print("   for square in squares:")
print("       print(square)")
print("   Output:")
for square in squares:
    print(f"     {square}")

print("\n✓ Generators Complete!")

# ============================================
# CHAPTER 16: LAMBDA, MAP, FILTER, REDUCE
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 16: LAMBDA, MAP, FILTER, REDUCE")
print("=" * 60)

numbers = [1, 2, 3, 4, 5]

print(f"\n16.1 Input List: {numbers}")

print("\n16.2 Map (Transform):")
squares = list(map(lambda x: x**2, numbers))
print(f"   list(map(lambda x: x**2, numbers))")
print(f"   → {squares}")

print("\n16.3 Filter:")
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(f"   list(filter(lambda x: x % 2 == 0, numbers))")
print(f"   → {evens}")

print("\n16.4 Reduce:")
from functools import reduce
sum_all = reduce(lambda a, b: a + b, numbers)
print(f"   reduce(lambda a, b: a + b, numbers)")
print(f"   → {sum_all}")

print("\n✓ Lambda, Map, Filter, Reduce Complete!")

# ============================================
# CHAPTER 17: CONTEXT MANAGERS
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 17: CONTEXT MANAGERS")
print("=" * 60)

print("\n17.1 Using 'with' Statement:")
print("   with open(\"example.txt\", \"r\") as f:")
print("       content = f.read()")
print("   # File automatically closed")

print("\n17.2 Custom Context Manager:")

class MyContext:
    def __enter__(self):
        print("   Entering context")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("   Exiting context")

print("   class MyContext:")
print("       def __enter__(self):")
print("           print(\"Entering context\")")
print("           return self")
print("")
print("       def __exit__(self, exc_type, exc_val, exc_tb):")
print("           print(\"Exiting context\")")
print("")
print("   with MyContext() as ctx:")
print("       print(\"Inside context\")")
print("")
print("   Execution:")
with MyContext() as ctx:
    print("Inside context")

print("\n✓ Context Managers Complete!")

# ============================================
# CHAPTER 18: DATA CLASSES (Python 3.7+)
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 18: DATA CLASSES")
print("=" * 60)

from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    city: str = "Unknown"

print("\n18.1 Create Data Class:")
print("   from dataclasses import dataclass")
print("")
print("   @dataclass")
print("   class Person:")
print("       name: str")
print("       age: int")
print("       city: str = \"Unknown\"")
print("")

person = Person("Alice", 25, "NYC")
print(f"   person = Person(\"Alice\", 25, \"NYC\")")
print(f"   person.name → {person.name}")
print(f"   person → {person}")

print("\n✓ Data Classes Complete!")

# ============================================
# CHAPTER 19: TYPE HINTS (Optional)
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 19: TYPE HINTS")
print("=" * 60)

from typing import List, Dict, Optional, Union

print("\n19.1 Function Type Annotations:")

def greet(name: str) -> str:
    return f"Hello, {name}"

def add(a: int, b: int) -> int:
    return a + b

print("   def greet(name: str) -> str:")
print("       return f\"Hello, {name}\"")
print("")
print("   def add(a: int, b: int) -> int:")
print("       return a + b")

print("\n19.2 Complex Type Hints:")

def process_items(items: List[str]) -> None:
    for item in items:
        print(f"   {item}")

def get_user(user_id: int) -> Optional[Dict]:
    return {"id": user_id, "name": "Alice"}

def process(value: Union[int, str]) -> str:
    return str(value)

print("   def process_items(items: List[str]) -> None:")
print("       for item in items: print(item)")
print("")
print("   def get_user(user_id: int) -> Optional[Dict]:")
print("       return {\"id\": user_id, \"name\": \"Alice\"}")
print("")
print("   def process(value: Union[int, str]) -> str:")
print("       return str(value)")

print("\n✓ Type Hints Complete!")

# ============================================
# CHAPTER 20: COMPLETE EXAMPLE - TODO APP
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 20: COMPLETE EXAMPLE - TODO APP")
print("=" * 60)

class TodoApp:
    def __init__(self):
        self.todos = []

    def add_todo(self, task):
        self.todos.append({"task": task, "completed": False})
        print(f"✓ Added: {task}")

    def complete_todo(self, index):
        if 0 <= index < len(self.todos):
            self.todos[index]["completed"] = True
            print(f"✓ Completed: {self.todos[index]['task']}")
        else:
            print("Invalid index")

    def show_todos(self):
        if not self.todos:
            print("No todos!")
            return
        for i, todo in enumerate(self.todos):
            status = "X" if todo["completed"] else "O"
            print(f"  {i}. [{status}] {todo['task']}")

    def remove_todo(self, index):
        if 0 <= index < len(self.todos):
            removed = self.todos.pop(index)
            print(f"✓ Removed: {removed['task']}")
        else:
            print("Invalid index")

print("\n20.1 Todo App Structure:")
print("   Features:")
print("   - Add new todos")
print("   - Complete todos")
print("   - Show all todos")
print("   - Remove todos")

print("\n20.2 Demo Usage:")
print("\nStep 1: Adding Todos")
print("--------------------")
app = TodoApp()
app.add_todo("Learn Python")
app.add_todo("Build a project")
app.add_todo("Practice coding")

print("\nStep 2: Show Todos")
print("------------------")
app.show_todos()

print("\nStep 3: Complete a Todo")
print("-----------------------")
app.complete_todo(0)
app.show_todos()

print("\n✓ Complete Example Complete!")

# ============================================
# CHAPTER 21: WORKING WITH APIs
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 21: WORKING WITH APIs")
print("=" * 60)

print("\n21.1 Making API Requests (Requires 'requests' library):")
print("   # Uncomment to use with real API")
print("   import requests")
print("")
print("   # GET request")
print("   response = requests.get(\"https://jsonplaceholder.typicode.com/posts/1\")")
print("   data = response.json()")
print("   print(data)")
print("")
print("   # POST request")
print("   new_data = {\"title\": \"foo\", \"body\": \"bar\", \"userId\": 1}")
print("   response = requests.post(")
print("       \"https://jsonplaceholder.typicode.com/posts\",")
print("       json=new_data")
print("   )")
print("")
print("   # Error handling")
print("   try:")
print("       response = requests.get(\"https://api.example.com/data\")")
print("       response.raise_for_status()")
print("       data = response.json()")
print("   except requests.exceptions.RequestException as e:")
print("       print(f\"API Error: {e}\")")

print("\n✓ Working with APIs Complete!")

# ============================================
# CHAPTER 22: WORKING WITH JSON
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 22: WORKING WITH JSON")
print("=" * 60)

import json

print("\n22.1 Python to JSON:")
data = {"name": "Alice", "age": 25}
json_string = json.dumps(data)
print(f"   data = {{\"name\": \"Alice\", \"age\": 25}}")
print(f"   json.dumps(data) → {json_string}")

print("\n22.2 JSON to Python:")
parsed = json.loads(json_string)
print(f"   json.loads(json_string) → {parsed}")

print("\n22.3 Write JSON to File:")
print("   with open(\"data.json\", \"w\") as f:")
print("       json.dump(data, f, indent=2)")

print("\n22.4 Read JSON from File:")
print("   with open(\"data.json\", \"r\") as f:")
print("       data = json.load(f)")

print("\n✓ Working with JSON Complete!")

# ============================================
# CHAPTER 23: REGULAR EXPRESSIONS
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 23: REGULAR EXPRESSIONS")
print("=" * 60)

import re

text = "My email is test@example.com and phone is 123-456-7890"

print(f"\n23.1 Input Text: \"{text}\"")

print("\n23.2 Search:")
match = re.search(r"\w+@\w+\.\w+", text)
print(f"   re.search(r\"\\w+@\\w+\\.\\w+\", text)")
print(f"   → {match.group()}")

print("\n23.3 Find All:")
emails = re.findall(r"\w+@\w+\.\w+", text)
phones = re.findall(r"\d{3}-\d{3}-\d{4}", text)
print(f"   re.findall(r\"\\w+@\\w+\\.\\w+\", text) → {emails}")
print(f"   re.findall(r\"\\d{{3}}-\\d{{3}}-\\d{{4}}\", text) → {phones}")

print("\n23.4 Replace:")
new_text = re.sub(r"\d", "#", text)
print(f"   re.sub(r\"\\d\", \"#\", text)")
print(f"   → {new_text}")

print("\n23.5 Validate Email:")
def is_valid_email(email):
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return bool(re.match(pattern, email))

print("   def is_valid_email(email):")
print("       pattern = r\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\"")
print("       return bool(re.match(pattern, email))")
print("")
print(f"   is_valid_email(\"test@example.com\") → {is_valid_email('test@example.com')}")

print("\n✓ Regular Expressions Complete!")

# ============================================
# CHAPTER 24: MULTITHREADING
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 24: MULTITHREADING")
print("=" * 60)

import threading
import time

print("\n24.1 Create and Start Threads:")
print("   import threading")
print("   import time")
print("")
print("   def print_numbers():")
print("       for i in range(5):")
print("           time.sleep(1)")
print("           print(i)")
print("")
print("   def print_letters():")
print("       for letter in \"ABCDE\":")
print("           time.sleep(1)")
print("           print(letter)")
print("")
print("   # Create threads")
print("   t1 = threading.Thread(target=print_numbers)")
print("   t2 = threading.Thread(target=print_letters)")
print("")
print("   # Start threads")
print("   t1.start()")
print("   t2.start()")
print("")
print("   # Wait for threads")
print("   t1.join()")
print("   t2.join()")
print("")
print("   print(\"Done!\")")

print("\n✓ Multithreading Complete!")

# ============================================
# CHAPTER 25: ASYNC/AWAIT (Python 3.5+)
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 25: ASYNC/AWAIT")
print("=" * 60)

import asyncio

print("\n25.1 Async Function:")
print("   import asyncio")
print("")
print("   async def fetch_data():")
print("       print(\"Fetching data...\")")
print("       await asyncio.sleep(2)")
print("       print(\"Data fetched\")")
print("       return {\"data\": \"sample\"}")
print("")
print("   async def main():")
print("       result = await fetch_data()")
print("       print(result)")
print("")
print("   # Run async function")
print("   asyncio.run(main())")

print("\n25.2 Run Multiple Tasks Concurrently:")
print("   async def run_all():")
print("       await asyncio.gather(")
print("           fetch_data(),")
print("           fetch_data(),")
print("           fetch_data()")
print("       )")
print("")
print("   asyncio.run(run_all())")

print("\n✓ Async/Await Complete!")

# ============================================
# ADVANCED COURSE COMPLETION MESSAGE
# ============================================

print("\n" + "=" * 60)
print("🎉 PYTHON ADVANCED COURSE COMPLETED!")
print("=" * 60)
print("You've learned (Chapters 14-25):")
print("  ✓ Chapter 14: Decorators")
print("  ✓ Chapter 15: Generators")
print("  ✓ Chapter 16: Lambda, Map, Filter, Reduce")
print("  ✓ Chapter 17: Context Managers")
print("  ✓ Chapter 18: Data Classes")
print("  ✓ Chapter 19: Type Hints")
print("  ✓ Chapter 20: Complete Example (Todo App)")
print("  ✓ Chapter 21: Working with APIs")
print("  ✓ Chapter 22: Working with JSON")
print("  ✓ Chapter 23: Regular Expressions")
print("  ✓ Chapter 24: Multithreading")
print("  ✓ Chapter 25: Async/Await")
print("=" * 60)
print("\n🏆 Congratulations! You've completed both Basic and Advanced Python courses!")
print("=" * 60)
