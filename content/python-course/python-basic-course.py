# ============================================
# PYTHON BASIC COURSE - BEGINNER TO INTERMEDIATE
# Chapters 1-13: Only Basic Concepts
# ============================================
# -*- coding: utf-8 -*-

import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

print("=" * 60)
print("   PYTHON BASIC COURSE - COMPLETE TRAINING")
print("=" * 60)
print()

# ============================================
# CHAPTER 1: PYTHON BASICS
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 1: PYTHON BASICS")
print("=" * 60)

# Variables and Data Types
name = "Alice"           # string
age = 25                 # int
height = 5.7             # float
is_student = True        # bool
hobbies = ["reading", "coding"]  # list
person = {"name": "Bob", "age": 30}  # dict

print("\n1.1 Variables and Data Types:")
print(f"   String: {name}")
print(f"   Integer: {age}")
print(f"   Float: {height}")
print(f"   Boolean: {is_student}")
print(f"   List: {hobbies}")
print(f"   Dictionary: {person}")

# Print and Input
print("\n1.2 Print Statement:")
print("   Hello, World!")
print(f"   My name is {name} and I'm {age} years old")

print("\n1.3 Input (uncomment to use interactively):")
print("   # user_input = input(\"Enter your name: \")")
print("   # print(f\"Hello, {user_input}!\")")

print("\n✓ Python Basics Complete!")

# ============================================
# CHAPTER 2: CONDITIONALS
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 2: CONDITIONALS")
print("=" * 60)

age = 18

print("\n2.1 if/elif/else Statement:")
if age < 13:
    print("   Child")
elif age < 20:
    print("   Teenager ✓")
else:
    print("   Adult")

print("\n2.2 One-liner Ternary:")
status = "Adult" if age >= 18 else "Minor"
print(f"   status = \"Adult\" if age >= 18 else \"Minor\"")
print(f"   Result: {status}")

print("\n✓ Conditionals Complete!")

# ============================================
# CHAPTER 3: LOOPS
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 3: LOOPS")
print("=" * 60)

print("\n3.1 For Loop with range:")
print("   for i in range(5):")
for i in range(5):
    print(f"     {i}")  # 0, 1, 2, 3, 4

print("\n3.2 For Loop with start and end:")
print("   for i in range(1, 6):")
for i in range(1, 6):
    print(f"     {i}")  # 1, 2, 3, 4, 5

print("\n3.3 Loop through list:")
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"   {fruit}")

print("\n3.4 While Loop:")
count = 0
while count < 3:
    print(f"   Count: {count}")
    count += 1

print("\n3.5 Break and Continue:")
print("   for i in range(10):")
print("       if i == 3: continue  # Skip 3")
print("       if i == 7: break     # Stop at 7")
print("       print(i)")
print("   Output:")
for i in range(10):
    if i == 3:
        continue
    if i == 7:
        break
    print(f"     {i}")

print("\n✓ Loops Complete!")

# ============================================
# CHAPTER 4: FUNCTIONS
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 4: FUNCTIONS")
print("=" * 60)

print("\n4.1 Basic Function:")
def greet(name):
    return f"Hello, {name}!"

print("   def greet(name):")
print("       return f\"Hello, {name}!\"")
print(f"   greet(\"Alice\") → {greet('Alice')}")

print("\n4.2 Function with Default Parameters:")
def greet_person(name="Guest"):
    return f"Hello, {name}!"

print("   def greet_person(name=\"Guest\"):")
print(f"   greet_person() → {greet_person()}")
print(f"   greet_person(\"John\") → {greet_person('John')}")

print("\n4.3 Function with Multiple Parameters:")
def add_numbers(a, b, c=0):
    return a + b + c

print("   def add_numbers(a, b, c=0):")
print(f"   add_numbers(5, 3) → {add_numbers(5, 3)}")
print(f"   add_numbers(5, 3, 2) → {add_numbers(5, 3, 2)}")

print("\n4.4 Function with *args:")
def sum_all(*args):
    return sum(args)

print("   def sum_all(*args):")
print(f"   sum_all(1, 2, 3, 4, 5) → {sum_all(1, 2, 3, 4, 5)}")

print("\n4.5 Function with **kwargs:")
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"      {key}: {value}")

print("   def print_info(**kwargs):")
print_info(name="Alice", age=25, city="NYC")

print("\n4.6 Lambda Functions:")
square = lambda x: x ** 2
add = lambda a, b: a + b

print("   square = lambda x: x ** 2")
print(f"   square(5) → {square(5)}")
print("   add = lambda a, b: a + b")
print(f"   add(3, 4) → {add(3, 4)}")

print("\n✓ Functions Complete!")

# ============================================
# CHAPTER 5: LISTS
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 5: LISTS")
print("=" * 60)

print("\n5.1 Create Lists:")
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
print(f"   numbers = [1, 2, 3, 4, 5]")
print(f"   mixed = [1, \"hello\", 3.14, True]")

print("\n5.2 Access Elements:")
print(f"   numbers[0] → {numbers[0]}")
print(f"   numbers[-1] → {numbers[-1]} (last element)")

print("\n5.3 Slicing:")
print(f"   numbers[1:4] → {numbers[1:4]}")
print(f"   numbers[:3] → {numbers[:3]}")
print(f"   numbers[2:] → {numbers[2:]}")

print("\n5.4 Modify Lists:")
numbers.append(6)
print(f"   numbers.append(6) → {numbers}")
numbers.insert(0, 0)
print(f"   numbers.insert(0, 0) → {numbers}")
numbers.remove(3)
print(f"   numbers.remove(3) → {numbers}")
last = numbers.pop()
print(f"   numbers.pop() → {last}, list: {numbers}")

print("\n5.5 List Operations:")
print(f"   len(numbers) → {len(numbers)}")
print(f"   2 in numbers → {2 in numbers}")

print("\n5.6 List Comprehension:")
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
print(f"   [x**2 for x in range(10)] → {squares}")
print(f"   [x for x in range(20) if x % 2 == 0] → {evens[:5]}...")

print("\n✓ Lists Complete!")

# ============================================
# CHAPTER 6: DICTIONARIES
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 6: DICTIONARIES")
print("=" * 60)

print("\n6.1 Create Dictionary:")
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
print(f"   person = {{\"name\": \"Alice\", \"age\": 25, \"city\": \"New York\"}}")

print("\n6.2 Access Values:")
print(f"   person[\"name\"] → {person['name']}")
print(f"   person.get(\"age\") → {person.get('age')}")
print(f"   person.get(\"country\", \"USA\") → {person.get('country', 'USA')} (default)")

print("\n6.3 Modify Dictionary:")
person["age"] = 26
person["email"] = "alice@example.com"
print(f"   person[\"age\"] = 26 → age is now {person['age']}")
print(f"   person[\"email\"] = \"...\" → {person}")

print("\n6.4 Remove Items:")
del person["city"]
email = person.pop("email")
print(f"   del person[\"city\"] → city removed")
print(f"   person.pop(\"email\") → {email}")
print(f"   Updated: {person}")

print("\n6.5 Loop Through Dictionary:")
print("   for key in person:")
for key in person:
    print(f"      {key}: {person[key]}")

print("\n6.6 Dictionary Comprehension:")
squares_dict = {x: x**2 for x in range(5)}
print(f"   {{x: x**2 for x in range(5)}} → {squares_dict}")

print("\n✓ Dictionaries Complete!")

# ============================================
# CHAPTER 7: TUPLES AND SETS
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 7: TUPLES AND SETS")
print("=" * 60)

print("\n7.1 Tuples (Immutable):")
coordinates = (10, 20)
x, y = coordinates
print(f"   coordinates = (10, 20)")
print(f"   x, y = coordinates  # Unpacking")
print(f"   x → {x}, y → {y}")

print("\n7.2 Sets (Unique Elements):")
unique_numbers = {1, 2, 3, 3, 4}
print(f"   unique_numbers = {{1, 2, 3, 3, 4}}")
print(f"   Result → {unique_numbers}")

print("\n7.3 Set Operations:")
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(f"   set1 = {{1, 2, 3}}")
print(f"   set2 = {{3, 4, 5}}")
print(f"   set1 | set2 (Union) → {set1 | set2}")
print(f"   set1 & set2 (Intersection) → {set1 & set2}")
print(f"   set1 - set2 (Difference) → {set1 - set2}")

print("\n✓ Tuples and Sets Complete!")

# ============================================
# CHAPTER 8: STRING MANIPULATION
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 8: STRING MANIPULATION")
print("=" * 60)

text = "Hello, World!"

print("\n8.1 String Methods:")
print(f"   text = \"{text}\"")
print(f"   text.lower() → \"{text.lower()}\"")
print(f"   text.upper() → \"{text.upper()}\"")
print(f"   text.capitalize() → \"{text.capitalize()}\"")
print(f"   text.title() → \"{text.title()}\"")
print(f"   text.replace(\"World\", \"Python\") → \"{text.replace('World', 'Python')}\"")
print(f"   text.split(\", \") -> {text.split(', ')}")
hello_in_text = "Hello" in text
print(f"   'Hello' in text -> {hello_in_text}")
print(f"   len(text) -> {len(text)}")

print("\n8.2 String Formatting:")
name = "Alice"
age = 25
print(f"   f\"My name is {{name}} and I'm {{age}}\" → \"My name is {name} and I'm {age}\"")
print("   \"My name is {{}} and I'm {{}}\".format(name, age)")
print("   \"My name is %s and I'm %d\" % (name, age)")

print("\n8.3 Multi-line Strings:")
multiline = """This is a
multi-line string"""
print("   multiline = \"\"\"This is a")
print("   multi-line string\"\"\"")

print("\n✓ String Manipulation Complete!")

# ============================================
# CHAPTER 9: FILE HANDLING
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 9: FILE HANDLING")
print("=" * 60)

print("\n9.1 Write to File:")
print("   with open(\"example.txt\", \"w\") as f:")
print("       f.write(\"Hello, World!\\n\")")
print("       f.write(\"Python is awesome!\")")

print("\n9.2 Read from File:")
print("   with open(\"example.txt\", \"r\") as f:")
print("       content = f.read()")
print("       print(content)")

print("\n9.3 Read Line by Line:")
print("   with open(\"example.txt\", \"r\") as f:")
print("       for line in f:")
print("           print(line.strip())")

print("\n9.4 Read All Lines:")
print("   with open(\"example.txt\", \"r\") as f:")
print("       lines = f.readlines()")
print("       print(f\"Total lines: {len(lines)}\")")

print("\n✓ File Handling Complete!")

# ============================================
# CHAPTER 10: EXCEPTION HANDLING
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 10: EXCEPTION HANDLING")
print("=" * 60)

print("\n10.1 try/except/else/finally:")
print("   try:")
print("       result = 10 / 0")
print("   except ZeroDivisionError:")
print("       print(\"Cannot divide by zero!\")")
print("   else:")
print("       print(\"No errors occurred\")")
print("   finally:")
print("       print(\"This always runs\")")

print("\n10.2 Raise Exceptions:")
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age

print("   def validate_age(age):")
print("       if age < 0:")
print("           raise ValueError(\"Age cannot be negative\")")
print("       return age")

print("\n10.3 Custom Exception:")
print("   class MyError(Exception):")
print("       pass")

print("\n✓ Exception Handling Complete!")

# ============================================
# CHAPTER 11: CLASSES AND OOP
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 11: CLASSES AND OOP")
print("=" * 60)

print("\n11.1 Basic Class:")

class Person:
    # Class attribute
    species = "Homo sapiens"

    # Constructor
    def __init__(self, name, age):
        self.name = name
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

print("   class Person:")
print("       species = \"Homo sapiens\"")
print("       def __init__(self, name, age):")
print("           self.name = name")
print("           self.age = age")
print("       def greet(self):")
print("           return f\"Hello, I'm {self.name}\"")

person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

print(f"\n   person1 = Person(\"Alice\", 25)")
print(f"   person1.greet() → {person1.greet()}")
print(f"   person1.have_birthday() → {person1.have_birthday()}")
print(f"   str(person1) → {person1}")

print("\n✓ Classes and OOP Complete!")

# ============================================
# CHAPTER 12: INHERITANCE
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 12: INHERITANCE")
print("=" * 60)

print("\n12.1 Basic Inheritance:")

class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

    def fetch(self):
        return f"{self.name} is fetching"

class Cat(Animal):
    def speak(self):
        return "Meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")

print("   class Animal:")
print("       def __init__(self, name):")
print("           self.name = name")
print("       def speak(self):")
print("           return \"Some sound\"")
print("")
print("   class Dog(Animal):")
print("       def speak(self):  # Override")
print("           return \"Woof!\"")
print("")
print(f"   dog = Dog(\"Buddy\")")
print(f"   dog.speak() → {dog.speak()}")
print(f"   dog.fetch() → {dog.fetch()}")
print(f"   cat.speak() → {cat.speak()}")

print("\n✓ Inheritance Complete!")

# ============================================
# CHAPTER 13: MODULES AND PACKAGES
# ============================================

print("\n" + "=" * 60)
print("CHAPTER 13: MODULES AND PACKAGES")
print("=" * 60)

import math
import random
from datetime import datetime

print("\n13.1 Import Standard Modules:")
print(f"   import math → math.sqrt(16) = {math.sqrt(16)}")
print(f"   import random → random.randint(1, 10) = {random.randint(1, 10)}")
print(f"   from datetime import datetime → {datetime.now().strftime('%Y-%m-%d %H:%M')}")

print("\n13.2 Create Your Own Module:")
print("   # Save as mymodule.py:")
print("   def greet(name):")
print("       return f\"Hello, {name}!\"")
print("")
print("   # Import and use:")
print("   import mymodule")
print("   print(mymodule.greet(\"Alice\"))")

print("\n✓ Modules and Packages Complete!")

# ============================================
# BASIC COURSE COMPLETION MESSAGE
# ============================================

print("\n" + "=" * 60)
print("🎉 PYTHON BASIC COURSE COMPLETED!")
print("=" * 60)
print("You've learned (Chapters 1-13):")
print("  ✓ Chapter 1: Python Basics (Variables, Data Types)")
print("  ✓ Chapter 2: Conditionals (if/elif/else)")
print("  ✓ Chapter 3: Loops (for, while, break, continue)")
print("  ✓ Chapter 4: Functions (args, kwargs, lambda)")
print("  ✓ Chapter 5: Lists (operations, comprehension)")
print("  ✓ Chapter 6: Dictionaries (operations, comprehension)")
print("  ✓ Chapter 7: Tuples and Sets")
print("  ✓ Chapter 8: String Manipulation")
print("  ✓ Chapter 9: File Handling")
print("  ✓ Chapter 10: Exception Handling")
print("  ✓ Chapter 11: Classes and OOP")
print("  ✓ Chapter 12: Inheritance")
print("  ✓ Chapter 13: Modules and Packages")
print("=" * 60)
print("\n➡️  Next: Continue to Python Advanced Course (Chapters 14-25)")
print("=" * 60)
