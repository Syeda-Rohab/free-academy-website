// Complete Python Advanced Course - 15 Detailed Chapters

import { Chapter } from './types';

export const pythonAdvancedChapters: Chapter[] = [
  {
    id: 'python-advanced-ch1-oop',
    title: 'Chapter 1: Advanced OOP',
    introduction: 'Master advanced Object-Oriented Programming concepts including inheritance, polymorphism, encapsulation, abstraction, and design patterns.',
    topics: ['Inheritance Deep Dive', 'Method Overriding', 'Polymorphism', 'Encapsulation', 'Abstraction', 'Multiple Inheritance', 'MRO', 'Class & Static Methods', 'Property Decorators', 'Magic Methods'],
    content: `# Advanced OOP Concepts

## 1. Inheritance Deep Dive
Create new classes based on existing ones:

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "Some sound"

class Dog(Animal):  # Dog inherits from Animal
    def __init__(self, name, breed):
        super().__init__(name)  # Call parent constructor
        self.breed = breed
    
    def speak(self):  # Method overriding
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"
\`\`\`

## 2. Method Overriding
Child class replaces parent method:

\`\`\`python
class Parent:
    def show(self):
        print("Parent")

class Child(Parent):
    def show(self):  # Overrides parent
        print("Child")
\`\`\`

## 3. Polymorphism
Same interface, different implementations:

\`\`\`python
def animal_sound(animal):
    print(animal.speak())

dog = Dog("Buddy", "Labrador")
cat = Cat("Whiskers")

animal_sound(dog)  # Woof!
animal_sound(cat)  # Meow!
\`\`\`

## 4. Encapsulation
Hide internal data using private attributes:

\`\`\`python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private (name mangling)
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
    
    def get_balance(self):  # Public getter
        return self.__balance
\`\`\`

## 5. Abstraction
Hide complex implementation:

\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)
\`\`\`

## 6. Multiple Inheritance
Inherit from multiple classes:

\`\`\`python
class Flyable:
    def fly(self):
        return "Flying"

class Swimmable:
    def swim(self):
        return "Swimming"

class Duck(Flyable, Swimmable):
    pass

duck = Duck()
duck.fly()   # Flying
duck.swim()  # Swimming
\`\`\`

## 7. Method Resolution Order (MRO)
Order Python searches for methods:

\`\`\`python
class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass

print(D.__mro__)
# D -> B -> C -> A -> object
\`\`\`

## 8. Class & Static Methods

### Class Method (@classmethod)
\`\`\`python
class Person:
    count = 0
    
    def __init__(self, name):
        self.name = name
        Person.count += 1
    
    @classmethod
    def get_count(cls):
        return cls.count
\`\`\`

### Static Method (@staticmethod)
\`\`\`python
class Math:
    @staticmethod
    def add(a, b):
        return a + b
\`\`\`

## 9. Property Decorators
Control attribute access:

\`\`\`python
class Product:
    def __init__(self, price):
        self._price = price
    
    @property
    def price(self):
        return self._price
    
    @price.setter
    def price(self, value):
        if value < 0:
            raise ValueError("Price cannot be negative")
        self._price = value
    
    @price.deleter
    def price(self):
        del self._price
\`\`\`

## 10. Magic Methods (Dunder Methods)
Special methods with double underscores:

\`\`\`python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __len__(self):
        return 2
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
\`\`\``,
    codeExamples: [
      {
        title: 'Inheritance and Method Overriding',
        code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return "Some sound"\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed\n    \n    def speak(self):\n        return f"{self.name} says Woof!"\n\ndog = Dog("Buddy", "Labrador")\nprint(dog.speak())  # Buddy says Woof!',
        explanation: 'Dog inherits from Animal. super() calls parent constructor. speak() method is overridden.'
      },
      {
        title: 'Polymorphism in Action',
        code: 'class Circle:\n    def area(self):\n        return 3.14 * 5 ** 2\n\nclass Square:\n    def area(self):\n        return 5 ** 2\n\ndef print_area(shape):\n    print(shape.area())\n\nprint_area(Circle())  # 78.5\nprint_area(Square())  # 25',
        explanation: 'Different classes, same method name. Function works with any object having area() method.'
      },
      {
        title: 'Encapsulation with Private Attributes',
        code: 'class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n    \n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n            return True\n        return False\n    \n    def get_balance(self):\n        return self.__balance\n\nacc = BankAccount(1000)\nacc.deposit(500)\nprint(acc.get_balance())  # 1500',
        explanation: '__balance is private (name mangling). Can only access through public methods.'
      },
      {
        title: 'Abstraction with ABC',
        code: 'from abc import ABC, abstractmethod\n\nclass Payment(ABC):\n    @abstractmethod\n    def process_payment(self, amount):\n        pass\n\nclass CreditCard(Payment):\n    def process_payment(self, amount):\n        return f"Processing ${amount} via Credit Card"\n\nclass PayPal(Payment):\n    def process_payment(self, amount):\n        return f"Processing ${amount} via PayPal"\n\nprint(CreditCard().process_payment(100))\nprint(PayPal().process_payment(100))',
        explanation: 'Abstract base class defines interface. Concrete classes implement specific behavior.'
      },
      {
        title: 'Property Decorators',
        code: 'class Employee:\n    def __init__(self, salary):\n        self._salary = salary\n    \n    @property\n    def salary(self):\n        return self._salary\n    \n    @salary.setter\n    def salary(self, value):\n        if value < 0:\n            raise ValueError("Invalid")\n        self._salary = value\n\nemp = Employee(50000)\nprint(emp.salary)  # 50000\nemp.salary = 60000\nprint(emp.salary)  # 60000',
        explanation: '@property creates getter. @salary.setter creates setter. Controls attribute access.'
      },
      {
        title: 'Magic Methods',
        code: 'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f"Vector({self.x}, {self.y})"\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\nv1 = Vector(2, 3)\nv2 = Vector(4, 5)\nprint(v1 + v2)  # Vector(6, 8)\nprint(v1 == Vector(2, 3))  # True',
        explanation: '__str__ for string representation. __add__ for + operator. __eq__ for == comparison.'
      }
    ],
    quiz: {
      id: 'python-advanced-ch1-quiz',
      questions: [
        { id: 'q1', question: 'Inheritance allows?', options: ['Code reuse', 'Faster code', 'Less memory', 'None'], correctAnswer: 0 },
        { id: 'q2', question: 'super() calls?', options: ['Parent class', 'Child class', 'Sibling class', 'None'], correctAnswer: 0 },
        { id: 'q3', question: 'Method overriding means?', options: ['Child replaces parent method', 'Parent replaces child', 'Same name', 'Different name'], correctAnswer: 0 },
        { id: 'q4', question: 'Polymorphism means?', options: ['Many forms', 'One form', 'No form', 'Hidden form'], correctAnswer: 0 },
        { id: 'q5', question: 'Private attribute prefix?', options: ['__', '_', '###', '@'], correctAnswer: 0 },
        { id: 'q6', question: 'Abstract class uses?', options: ['ABC', 'ABS', 'ABSTRACT', 'BASE'], correctAnswer: 0 },
        { id: 'q7', question: '@abstractmethod decorator?', options: ['Required', 'Optional', 'Never', 'Sometimes'], correctAnswer: 0 },
        { id: 'q8', question: 'Multiple inheritance means?', options: ['Inherit from multiple classes', 'Multiple objects', 'Multiple methods', 'Multiple constructors'], correctAnswer: 0 },
        { id: 'q9', question: '@classmethod receives?', options: ['cls', 'self', 'both', 'neither'], correctAnswer: 0 },
        { id: 'q10', question: '@property creates?', options: ['Getter', 'Setter', 'Deleter', 'All'], correctAnswer: 0 },
        { id: 'q11', question: '__str__ is called by?', options: ['str() and print()', 'len()', 'add()', 'eq()'], correctAnswer: 0 },
        { id: 'q12', question: '__add__ enables?', options: ['+ operator', '- operator', '* operator', '/ operator'], correctAnswer: 0 }
      ]
    },
    summary: 'Advanced OOP includes: Inheritance (code reuse), Method Overriding (child replaces parent), Polymorphism (many forms), Encapsulation (private attributes with __), Abstraction (ABC with @abstractmethod), Multiple Inheritance (multiple parents), MRO (method resolution order), Class Methods (@classmethod with cls), Static Methods (@staticmethod), Property Decorators (@property, @x.setter), Magic Methods (__str__, __add__, __eq__, etc.).'
  },
  {
    id: 'python-advanced-ch2-decorators',
    title: 'Chapter 2: Decorators and Generators',
    introduction: 'Master decorators for enhancing functions and generators for efficient iteration. Learn advanced Python patterns.',
    topics: ['Function Decorators', 'Decorator with Arguments', 'Multiple Decorators', 'Class Decorators', 'Generator Functions', 'yield Keyword', 'Generator Expressions', 'Iterator Protocol'],
    content: `# Decorators and Generators

## 1. Function Decorators
Modify function behavior without changing code:

\`\`\`python
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
# Before function
# Hello!
# After function
\`\`\`

## 2. Decorator with Arguments
\`\`\`python
def repeat(times):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(times):\n                func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef greet(name):\n    print(f"Hello {name}")\n\ngreet("Ali")\n\`\`\`

## 3. Multiple Decorators
\`\`\`python
@decorator1\n@decorator2\ndef func():\n    pass\n# Applied bottom-up: decorator2 then decorator1\n\`\`\`

## 4. Class Decorators
\`\`\`python
class CountCalls:\n    def __init__(self, func):\n        self.func = func\n        self.count = 0\n    \n    def __call__(self, *args, **kwargs):\n        self.count += 1\n        return self.func(*args, **kwargs)\n\n@CountCalls\ndef say_hello():\n    print("Hello")\n\`\`\`

## 5. Generator Functions
Lazy evaluation with yield:

\`\`\`python
def count_up_to(n):\n    count = 1\n    while count <= n:\n        yield count\n        count += 1\n\nfor num in count_up_to(5):\n    print(num)  # 1, 2, 3, 4, 5\n\`\`\`

## 6. yield vs return
- return: Ends function, sends value back
- yield: Pauses function, sends value, resumes

\`\`\`python
def squares(n):\n    for i in range(n):\n        yield i ** 2\n\nfor sq in squares(5):\n    print(sq)  # 0, 1, 4, 9, 16\n\`\`\`

## 7. Generator Expressions
Like list comprehensions but lazy:

\`\`\`python
# List comprehension (eager)\nsquares_list = [x**2 for x in range(1000000]\n\n# Generator expression (lazy)\nsquares_gen = (x**2 for x in range(1000000))\n\`\`\`

## 8. Iterator Protocol
\`\`\`python
class Counter:\n    def __init__(self, start, end):\n        self.start = start\n        self.end = end\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.start >= self.end:\n            raise StopIteration\n        current = self.start\n        self.start += 1\n        return current\n\`\`\``,
    codeExamples: [
      {
        title: 'Basic Function Decorator',
        code: 'def timer_decorator(func):\n    import time\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"{func.__name__} took {end-start:.4f}s")\n        return result\n    return wrapper\n\n@timer_decorator\ndef slow_function():\n    import time\n    time.sleep(1)\n\nslow_function()',
        explanation: 'Decorator wraps function. Adds timing functionality without changing original code. *args, **kwargs pass arguments.'
      },
      {
        title: 'Decorator with Arguments',
        code: 'def repeat(times):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(times):\n                func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef greet(name):\n    print(f"Hello {name}")\n\ngreet("Ali")',
        explanation: 'Decorator factory returns decorator. repeat(3) creates decorator that repeats 3 times.'
      },
      {
        title: 'Generator Function',
        code: 'def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nfor num in fibonacci(10):\n    print(num, end=" ")  # 0 1 1 2 3 5 8 13 21 34',
        explanation: 'Generator yields values one at a time. Memory efficient. State preserved between yields.'
      },
      {
        title: 'Generator Expression',
        code: 'squares = (x**2 for x in range(10))\nprint(next(squares))  # 0\nprint(next(squares))  # 1\nprint(next(squares))  # 4\n\nfor sq in (x**2 for x in range(5)):\n    print(sq, end=" ")  # 0 1 4 9 16',
        explanation: 'Generator expression uses (). Lazy evaluation. next() gets next value. Memory efficient.'
      },
      {
        title: 'Custom Iterator Class',
        code: 'class Reverse:\n    def __init__(self, data):\n        self.data = data\n        self.index = len(data)\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.index == 0:\n            raise StopIteration\n        self.index -= 1\n        return self.data[self.index]\n\nfor char in Reverse("Python"):\n    print(char, end="")  # nohtyP',
        explanation: '__iter__ returns iterator. __next__ returns next value. StopIteration signals end.'
      }
    ],
    quiz: {
      id: 'python-advanced-ch2-quiz',
      questions: [
        { id: 'q1', question: '@symbol is for?', options: ['Decorator', 'Comment', 'Variable', 'Function'], correctAnswer: 0 },
        { id: 'q2', question: 'Decorator modifies?', options: ['Function behavior', 'Variable', 'Class only', 'Module'], correctAnswer: 0 },
        { id: 'q3', question: 'yield vs return?', options: ['yield pauses', 'return pauses', 'same', 'different'], correctAnswer: 0 },
        { id: 'q4', question: 'Generator is?', options: ['Lazy iterator', 'List', 'Tuple', 'Dictionary'], correctAnswer: 0 },
        { id: 'q5', question: 'Generator expression uses?', options: ['()', '[]', '{}', '<>'], correctAnswer: 0 },
        { id: 'q6', question: 'next() on generator?', options: ['Gets next value', 'Resets', 'Stops', 'Error'], correctAnswer: 0 },
        { id: 'q7', question: 'StopIteration raised when?', options: ['Generator exhausted', 'Start', 'Middle', 'Never'], correctAnswer: 0 },
        { id: 'q8', question: '__iter__ returns?', options: ['Iterator', 'Value', 'None', 'Error'], correctAnswer: 0 },
        { id: 'q9', question: '__call__ makes object?', options: ['Callable', 'Static', 'Private', 'Protected'], correctAnswer: 0 },
        { id: 'q10', question: 'Multiple decorators apply?', options: ['Bottom-up', 'Top-down', 'Random', 'Parallel'], correctAnswer: 0 }
      ]
    },
    summary: 'Decorators modify function behavior using @decorator syntax. Can take arguments. Multiple decorators apply bottom-up. Generators use yield for lazy evaluation. Generator expressions use (). Custom iterators implement __iter__ and __next__. StopIteration signals end. Generators are memory efficient for large datasets.'
  },
  {
    id: 'python-advanced-ch3-modules',
    title: 'Chapter 3: Modules, Packages, and Imports',
    introduction: 'Learn to organize code with modules and packages. Master import statements, creating packages, and Python project structure.',
    topics: ['Creating Modules', 'Import Statements', 'from import', 'import as', '__name__ == "__main__"', 'Creating Packages', '__init__.py', 'Package Structure', 'Relative Imports', 'Absolute Imports', 'Standard Library Overview'],
    content: `# Modules, Packages, and Imports

## 1. Creating Modules
A module is a .py file:

\`\`\`python
# mymodule.py
def greet(name):\n    return f"Hello {name}"\n\ndef add(a, b):\n    return a + b\n\nPI = 3.14159\n\`\`\`

## 2. Import Statements
\`\`\`python
# Import entire module\nimport mymodule\nprint(mymodule.greet("Ali"))\n\n# Import specific items\nfrom mymodule import greet, add\nprint(greet("Ali"))\n\n# Import with alias\nimport mymodule as mm\nprint(mm.add(5, 3))\n\n# Import all (not recommended)\nfrom mymodule import *\n\`\`\`

## 3. __name__ == "__main__"
\`\`\`python
# mymodule.py\ndef main():\n    print("Running directly")\n\nif __name__ == "__main__":\n    main()\n# Only runs when executed directly, not when imported\n\`\`\`

## 4. Creating Packages
Package is a folder with __init__.py:

\`\`\`
mypackage/\n    __init__.py\n    module1.py\n    module2.py\n    subpackage/\n        __init__.py\n        module3.py\n\`\`\`

## 5. __init__.py
Makes folder a package. Can export items:

\`\`\`python
# __init__.py\nfrom .module1 import greet\nfrom .module2 import add\n\n__all__ = ['greet', 'add']\n\`\`\`

## 6. Absolute vs Relative Imports
\`\`\`python
# Absolute (recommended)\nfrom mypackage.module1 import greet\n\n# Relative (within package)\nfrom .module1 import greet\nfrom ..module2 import add\n\`\`\``,
    codeExamples: [
      {
        title: 'Creating and Using Module',
        code: '# math_utils.py\ndef add(a, b):\n    return a + b\n\ndef multiply(a, b):\n    return a * b\n\nPI = 3.14159\n\n# main.py\nimport math_utils\nprint(math_utils.add(5, 3))\nprint(math_utils.PI)\n\nfrom math_utils import multiply\nprint(multiply(4, 5))',
        explanation: 'Module is .py file. Import with import module or from module import item.'
      },
      {
        title: 'Package Structure',
        code: '# mypackage/__init__.py\nfrom .math_ops import add, subtract\nfrom .string_ops import uppercase, lowercase\n\n__all__ = ["add", "subtract", "uppercase", "lowercase"]\n\n# mypackage/math_ops.py\ndef add(a, b): return a + b\ndef subtract(a, b): return a - b\n\n# mypackage/string_ops.py\ndef uppercase(s): return s.upper()\ndef lowercase(s): return s.lower()\n\n# main.py\nfrom mypackage import add, uppercase\nprint(add(5, 3))\nprint(uppercase("hello"))',
        explanation: 'Package is folder with __init__.py. __init__.py can export items. Use from package import item.'
      },
      {
        title: 'Using __name__ == "__main__"',
        code: '# calculator.py\ndef add(a, b):\n    return a + b\n\ndef main():\n    print("Testing calculator")\n    print(add(5, 3))\n\nif __name__ == "__main__":\n    main()\n\n# When run directly: executes main()\n# When imported: main() not called',
        explanation: '__name__ == "__main__" checks if file run directly. Allows code to work as script and module.'
      },
      {
        title: 'Import Aliases',
        code: 'import numpy as np\nimport pandas as pd\nfrom datetime import datetime as dt\n\n# Use aliases\n# np.array(), pd.DataFrame(), dt.now()',
        explanation: 'Aliases shorten long module names. Common: np (numpy), pd (pandas), plt (matplotlib).'
      }
    ],
    quiz: {
      id: 'python-advanced-ch3-quiz',
      questions: [
        { id: 'q1', question: 'Module is?', options: ['.py file', 'Folder', 'Function', 'Class'], correctAnswer: 0 },
        { id: 'q2', question: 'Package is?', options: ['Folder with __init__.py', '.py file', 'Function', 'Variable'], correctAnswer: 0 },
        { id: 'q3', question: 'import module as m does?', options: ['Creates alias', 'Copies module', 'Deletes module', 'Nothing'], correctAnswer: 0 },
        { id: 'q4', question: 'from module import x imports?', options: ['Specific item', 'Everything', 'Nothing', 'Error'], correctAnswer: 0 },
        { id: 'q5', question: '__name__ == "__main__" checks?', options: ['Direct execution', 'Import', 'Both', 'Neither'], correctAnswer: 0 },
        { id: 'q6', question: '__init__.py makes?', options: ['Package', 'Module', 'Function', 'Class'], correctAnswer: 0 },
        { id: 'q7', question: 'Relative import uses?', options: ['.', '..', 'import', 'from'], correctAnswer: 0 },
        { id: 'q8', question: 'Absolute import uses?', options: ['Full path', 'Relative path', 'Short path', 'No path'], correctAnswer: 0 },
        { id: 'q9', question: '__all__ defines?', options: ['Public API', 'Private items', 'All items', 'None'], correctAnswer: 0 },
        { id: 'q10', question: 'import * imports?', options: ['All public items', 'Nothing', 'One item', 'Error'], correctAnswer: 0 }
      ]
    },
    summary: 'Module is .py file. Package is folder with __init__.py. Import with: import module, from module import item, import module as alias. __name__ == "__main__" checks direct execution. __init__.py makes folder a package, can export items. Relative imports use ./.. Absolute imports use full path. __all__ defines public API.'
  },
  {
    id: 'python-advanced-ch4-regex',
    title: 'Chapter 4: Regular Expressions',
    introduction: 'Master pattern matching with regular expressions. Learn regex syntax, re module, and text processing techniques.',
    topics: ['Regex Basics', 'Special Characters', 'Character Classes', 'Quantifiers', 'Anchors', 'Groups', 're Module', 'Search vs Match', 'Find All', 'Replace', 'Split'],
    content: `# Regular Expressions

## What is Regex?
Pattern matching for text processing.

## 1. Basic Patterns
\`\`\`python
import re\n\npattern = r"hello"  # r = raw string\ntext = "hello world"\n\nresult = re.search(pattern, text)\nif result:\n    print("Found!")\n\`\`\`

## 2. Special Characters
| Pattern | Meaning |\n|---------|----------|\n| . | Any character |\n| \\d | Digit (0-9) |\n| \\w | Word character |\n| \\s | Whitespace |\n| \\D | Not digit |\n| \\W | Not word |\n| \\S | Not space |\n\n## 3. Character Classes
\`\`\`python
[abc]     # a, b, or c\n[a-z]     # lowercase letter\n[A-Z]     # uppercase letter\n[0-9]     # digit\n[^abc]    # not a, b, or c\n\`\`\`

## 4. Quantifiers
| Pattern | Meaning |\n|---------|----------|\n| * | 0 or more |\n| + | 1 or more |\n| ? | 0 or 1 |\n| {3} | Exactly 3 |\n| {3,} | 3 or more |\n| {3,5} | 3 to 5 |\n\n## 5. Anchors
\`\`\`python
^hello    # Starts with hello\nworld$    # Ends with world\n^hello$   # Exactly hello\n\\bword\\b  # Word boundary\n\`\`\`

## 6. Groups
\`\`\`python
(abc)     # Capturing group\n(?:abc)   # Non-capturing group\n(abc|def) # abc or def\n\`\`\``,
    codeExamples: [
      {
        title: 'Basic Pattern Matching',
        code: 'import re\n\ntext = "My phone is 123-456-7890"\n\n# Search for pattern\npattern = r"\\d{3}-\\d{3}-\\d{4}"\nmatch = re.search(pattern, text)\n\nif match:\n    print(f"Found: {match.group()}")  # 123-456-7890',
        explanation: 're.search() finds first match. \\d{3} matches 3 digits. group() returns matched text.'
      },
      {
        title: 'Find All Matches',
        code: 'import re\n\ntext = "Call 123-456 or 789-012"\n\n# Find all phone numbers\npattern = r"\\d{3}-\\d{3}"\nmatches = re.findall(pattern, text)\n\nprint(matches)  # ["123-456", "789-012"]',
        explanation: 're.findall() returns list of all matches. Great for extracting multiple items.'
      },
      {
        title: 'Groups and Extraction',
        code: 'import re\n\ntext = "Email: user@example.com"\n\n# Extract username and domain\npattern = r"(\\w+)@(\\w+\\.\\w+)"\nmatch = re.search(pattern, text)\n\nif match:\n    print(f"Username: {match.group(1)}")  # user\n    print(f"Domain: {match.group(2)}")    # example.com',
        explanation: 'Parentheses create groups. group(1) is first group, group(2) is second.'
      },
      {
        title: 'Replace with Regex',
        code: 'import re\n\ntext = "The price is $100 and $200"\n\n# Replace all prices\npattern = r"\\$\\d+"\nresult = re.sub(pattern, "$X", text)\n\nprint(result)  # The price is $X and $X',
        explanation: 're.sub(pattern, replacement, text) replaces all matches.'
      },
      {
        title: 'Validate Email',
        code: 'import re\n\ndef validate_email(email):\n    pattern = r"^[\\w.]+@[\\w.]+\\.[\\w]{2,}$"\n    return bool(re.match(pattern, email))\n\nprint(validate_email("user@example.com"))  # True\nprint(validate_email("invalid"))           # False',
        explanation: 're.match() checks from start. ^ and $ anchor pattern. Returns match object or None.'
      }
    ],
    quiz: {
      id: 'python-advanced-ch4-quiz',
      questions: [
        { id: 'q1', question: 're module is for?', options: ['Regex', 'Files', 'Network', 'Math'], correctAnswer: 0 },
        { id: 'q2', question: '\\d matches?', options: ['Digit', 'Letter', 'Space', 'Any'], correctAnswer: 0 },
        { id: 'q3', question: '\\w matches?', options: ['Word char', 'Whitespace', 'Wildcard', 'Word only'], correctAnswer: 0 },
        { id: 'q4', question: '* means?', options: ['0 or more', '1 or more', '0 or 1', 'Exactly'], correctAnswer: 0 },
        { id: 'q5', question: '+ means?', options: ['1 or more', '0 or more', '0 or 1', 'Exactly'], correctAnswer: 0 },
        { id: 'q6', question: '^ means?', options: ['Start', 'End', 'Any', 'Not'], correctAnswer: 0 },
        { id: 'q7', question: '$ means?', options: ['End', 'Start', 'Any', 'Not'], correctAnswer: 0 },
        { id: 'q8', question: 're.search returns?', options: ['Match or None', 'List', 'Bool', 'String'], correctAnswer: 0 },
        { id: 'q9', question: 're.findall returns?', options: ['List', 'Match', 'Bool', 'String'], correctAnswer: 0 },
        { id: 'q10', question: 're.sub does?', options: ['Replace', 'Search', 'Match', 'Split'], correctAnswer: 0 },
        { id: 'q11', question: '(abc) creates?', options: ['Group', 'Class', 'Anchor', 'Quantifier'], correctAnswer: 0 },
        { id: 'q12', question: 'r"pattern" is?', options: ['Raw string', 'Regular', 'Regex', 'Raw regex'], correctAnswer: 0 }
      ]
    },
    summary: 'Regex patterns match text. Import re module. \\d digit, \\w word, \\s space. * 0+, + 1+, ? 0/1. ^ start, $ end. re.search() finds first, re.findall() finds all, re.sub() replaces, re.match() checks start. Groups with (). Raw strings r"pattern".'
  },
  {
    id: 'python-advanced-ch5-fileio',
    title: 'Chapter 5: Advanced File I/O',
    introduction: 'Master advanced file operations including binary files, CSV, JSON, context managers, and file system operations.',
    topics: ['Binary Files', 'CSV Files', 'JSON Files', 'Context Managers', 'pathlib Module', 'File System Operations', 'Reading Large Files', 'File Compression'],
    content: `# Advanced File I/O

## 1. Binary Files
\`\`\`python
# Write binary\nwith open("data.bin", "wb") as f:\n    f.write(b"\\x00\\x01\\x02\\x03")\n\n# Read binary\nwith open("data.bin", "rb") as f:\n    data = f.read()\n\`\`\`

## 2. CSV Files
\`\`\`python
import csv\n\n# Write CSV\nwith open("data.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerow(["Name", "Age"])\n    writer.writerow(["Ali", 25])\n\n# Read CSV\nwith open("data.csv", "r") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)\n\`\`\`

## 3. JSON Files
\`\`\`python
import json\n\n# Write JSON\ndata = {"name": "Ali", "age": 25}\nwith open("data.json", "w") as f:\n    json.dump(data, f, indent=2)\n\n# Read JSON\nwith open("data.json", "r") as f:\n    data = json.load(f)\n\`\`\`

## 4. Custom Context Manager
\`\`\`python
from contextlib import contextmanager\n\n@contextmanager\ndef open_file(path, mode):\n    f = open(path, mode)\n    try:\n        yield f\n    finally:\n        f.close()\n\`\`\`

## 5. pathlib Module
\`\`\`python
from pathlib import Path\n\np = Path("data/file.txt")\np.exists()      # Check exists\np.is_file()     # Is file?\np.parent        # Directory\np.name          # Filename\np.stem          # Name without ext\np.suffix        # Extension\np.read_text()   # Read content\np.write_text("Hello")  # Write\n\`\`\``,
    codeExamples: [
      {
        title: 'Working with CSV',
        code: 'import csv\n\n# Write CSV\nwith open("students.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerow(["Name", "Grade", "Age"])\n    writer.writerow(["Ali", "A", 20])\n    writer.writerow(["Sara", "B", 21])\n\n# Read CSV\nwith open("students.csv", "r") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(f"{row[\'Name\']}: Grade {row[\'Grade\']}")',
        explanation: 'csv.writer writes rows. csv.DictReader reads as dictionaries. newline="" prevents blank lines.'
      },
      {
        title: 'Working with JSON',
        code: 'import json\n\n# Write JSON\ndata = {\n    "students": [\n        {"name": "Ali", "grade": "A"},\n        {"name": "Sara", "grade": "B"}\n    ]\n}\nwith open("data.json", "w") as f:\n    json.dump(data, f, indent=2)\n\n# Read JSON\nwith open("data.json", "r") as f:\n    data = json.load(f)\n    print(data["students"])',
        explanation: 'json.dump() writes, json.load() reads. indent=2 for pretty formatting.'
      },
      {
        title: 'pathlib for File Operations',
        code: 'from pathlib import Path\n\n# Create path\np = Path("data/file.txt")\n\n# Check existence\nif p.exists():\n    print("File exists")\n\n# Read/Write\np.write_text("Hello World")\ncontent = p.read_text()\n\n# Get info\nprint(p.parent)   # Directory\nprint(p.name)     # Filename\nprint(p.suffix)   # .txt',
        explanation: 'pathlib provides object-oriented path handling. More modern than os.path.'
      },
      {
        title: 'Reading Large Files',
        code: 'def read_large_file(path):\n    with open(path, "r") as f:\n        for line in f:\n            process(line)\n\ndef process(line):\n    print(line.strip())\n\n# Memory efficient - reads line by line\nread_large_file("large_file.txt")',
        explanation: 'Iterate over file object for memory efficiency. Doesn\'t load entire file.'
      },
      {
        title: 'File Compression with gzip',
        code: 'import gzip\n\n# Write compressed\nwith gzip.open("data.txt.gz", "wt") as f:\n    f.write("Hello World" * 100)\n\n# Read compressed\nwith gzip.open("data.txt.gz", "rt") as f:\n    content = f.read()\n    print(content[:50])',
        explanation: 'gzip module compresses files. "wt" for write text, "rt" for read text.'
      }
    ],
    quiz: {
      id: 'python-advanced-ch5-quiz',
      questions: [
        { id: 'q1', question: 'Binary mode uses?', options: ['"wb"/"rb"', '"w"/"r"', '"wt"/"rt"', '"binary"'], correctAnswer: 0 },
        { id: 'q2', question: 'CSV module is?', options: ['csv', 'files', 'spreadsheet', 'excel'], correctAnswer: 0 },
        { id: 'q3', question: 'JSON write uses?', options: ['dump()', 'write()', 'save()', 'store()'], correctAnswer: 0 },
        { id: 'q4', question: 'JSON read uses?', options: ['load()', 'read()', 'get()', 'fetch()'], correctAnswer: 0 },
        { id: 'q5', question: 'pathlib provides?', options: ['Object paths', 'String paths', 'Number paths', 'Bool paths'], correctAnswer: 0 },
        { id: 'q6', question: 'Context manager uses?', options: ['with', 'using', 'context', 'manage'], correctAnswer: 0 },
        { id: 'q7', question: '@contextmanager decorates?', options: ['Generator', 'Function', 'Class', 'Method'], correctAnswer: 0 },
        { id: 'q8', question: 'Large file reading?', options: ['Line by line', 'All at once', 'Random', 'Skip'], correctAnswer: 0 },
        { id: 'q9', question: 'gzip compresses?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 0 },
        { id: 'q10', question: 'p.suffix returns?', options: ['.txt', 'txt', 'name', 'path'], correctAnswer: 0 }
      ]
    },
    summary: 'Advanced file I/O: Binary files use "wb"/"rb". CSV with csv module (writer, DictReader). JSON with json module (dump, load). Context managers with with or @contextmanager. pathlib for modern path handling (exists, read_text, write_text). Read large files line by line. gzip for compression.'
  },
  {
    id: 'python-advanced-ch6-exception',
    title: 'Chapter 6: Advanced Exception Handling',
    introduction: 'Master advanced exception handling including custom exceptions, exception chaining, context managers, and best practices.',
    topics: ['Custom Exceptions', 'Exception Chaining', 'Multiple Exceptions', 'Exception Hierarchy', 'Logging Exceptions', 'Cleanup with finally', 'Context Managers', 'Raising Exceptions', 'Assertion Errors'],
    content: `# Advanced Exception Handling

## 1. Custom Exceptions
\`\`\`python
class InvalidAgeError(Exception):\n    def __init__(self, age):\n        self.age = age\n        super().__init__(f"Invalid age: {age}")\n\ndef register(age):\n    if age < 0 or age > 150:\n        raise InvalidAgeError(age)\n    print("Registered!")\n\`\`\`

## 2. Exception Chaining
\`\`\`python
try:\n    int("abc")\nexcept ValueError as e:\n    raise TypeError("Conversion failed") from e\n\`\`\`

## 3. Exception Hierarchy
\`\`\`python\nBaseException\n +-- SystemExit\n +-- KeyboardInterrupt\n +-- Exception\n      +-- ValueError\n      +-- TypeError\n      +-- IndexError\n      +-- KeyError\n      +-- FileNotFoundError\n\`\`\`

## 4. Logging Exceptions
\`\`\`python\nimport logging\n\nlogging.basicConfig(level=logging.ERROR)\n\ntry:\n    result = 10 / 0\nexcept Exception as e:\n    logging.error(f"Error: {e}", exc_info=True)\n\`\`\`

## 5. Cleanup with finally
\`\`\`python\ntry:\n    file = open("data.txt")\n    # process\nfinally:\n    file.close()  # Always runs\n\`\`\``,
    codeExamples: [
      {
        title: 'Custom Exception Class',
        code: 'class InsufficientFundsError(Exception):\n    def __init__(self, balance, amount):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(f"Balance ${balance}, tried to withdraw ${amount}")\n\nclass BankAccount:\n    def __init__(self, balance):\n        self.balance = balance\n    \n    def withdraw(self, amount):\n        if amount > self.balance:\n            raise InsufficientFundsError(self.balance, amount)\n        self.balance -= amount\n        return amount\n\ntry:\n    acc = BankAccount(100)\n    acc.withdraw(200)\nexcept InsufficientFundsError as e:\n    print(f"Error: {e}")',
        explanation: 'Custom exceptions inherit from Exception. Can store additional data. Raise with raise keyword.'
      },
      {
        title: 'Exception Chaining',
        code: 'def process_data(data):\n    try:\n        return int(data)\n    except ValueError as e:\n        raise TypeError("Failed to process") from e\n\ntry:\n    process_data("abc")\nexcept TypeError as e:\n    print(f"Main error: {e}")\n    print(f"Original: {e.__cause__}")',
        explanation: 'from e chains exceptions. Preserves original error. __cause__ accesses original.'
      },
      {
        title: 'Multiple Exception Handling',
        code: 'def calculate(a, b, op):\n    try:\n        if op == "/":\n            return a / b\n        elif op == "//":\n            return a // b\n        else:\n            raise ValueError(f"Unknown op: {op}")\n    except ZeroDivisionError as e:\n        print(f"Division by zero: {e}")\n        return None\n    except TypeError as e:\n        print(f"Type error: {e}")\n        return None\n    except Exception as e:\n        print(f"General error: {e}")\n        return None\n    finally:\n        print("Calculation attempted")',
        explanation: 'Handle specific exceptions first, general last. finally always runs.'
      },
      {
        title: 'Logging Exceptions',
        code: 'import logging\n\nlogging.basicConfig(\n    level=logging.ERROR,\n    filename="errors.log",\n    format="%(asctime)s - %(levelname)s - %(message)s"\n)\n\ndef risky():\n    try:\n        10 / 0\n    except Exception as e:\n        logging.error("Error occurred", exc_info=True)\n\nrisky()',
        explanation: 'logging module records errors. exc_info=True includes traceback. filename logs to file.'
      }
    ],
    quiz: {
      id: 'python-advanced-ch6-quiz',
      questions: [
        { id: 'q1', question: 'Custom exception inherits from?', options: ['Exception', 'Error', 'BaseException', 'object'], correctAnswer: 0 },
        { id: 'q2', question: 'raise keyword does?', options: ['Throws exception', 'Catches', 'Handles', 'Ignores'], correctAnswer: 0 },
        { id: 'q3', question: 'Exception chaining uses?', options: ['from e', 'with e', 'by e', 'via e'], correctAnswer: 0 },
        { id: 'q4', question: 'finally always runs?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 0 },
        { id: 'q5', question: 'Logging module is?', options: ['logging', 'log', 'logger', 'record'], correctAnswer: 0 },
        { id: 'q6', question: 'exc_info=True adds?', options: ['Traceback', 'Message', 'Time', 'Level'], correctAnswer: 0 },
        { id: 'q7', question: 'BaseException is?', options: ['Root class', 'Custom', 'Error', 'Warning'], correctAnswer: 0 },
        { id: 'q8', question: 'ValueError for?', options: ['Invalid value', 'Wrong type', 'Missing key', 'No file'], correctAnswer: 0 },
        { id: 'q9', question: 'TypeError for?', options: ['Wrong type', 'Invalid value', 'Missing key', 'No file'], correctAnswer: 0 },
        { id: 'q10', question: 'KeyError for?', options: ['Missing dict key', 'Invalid value', 'Wrong type', 'No file'], correctAnswer: 0 },
        { id: 'q11', question: 'AssertionError raised by?', options: ['assert', 'raise', 'try', 'except'], correctAnswer: 0 },
        { id: 'q12', question: 'Best practice?', options: ['Catch specific', 'Catch all', 'Ignore', 'No handling'], correctAnswer: 0 }
      ]
    },
    summary: 'Advanced exception handling: Custom exceptions inherit from Exception. raise throws exceptions. from e chains exceptions. Handle specific exceptions first. finally always runs. logging module records errors with exc_info=True. BaseException is root. ValueError (invalid value), TypeError (wrong type), KeyError (missing key).'
  },
  {
    id: 'python-advanced-ch7-threading',
    title: 'Chapter 7: Multithreading and Multiprocessing',
    introduction: 'Learn concurrent programming with threads and processes. Master threading, multiprocessing, GIL, and parallel execution.',
    topics: ['Threading Basics', 'Thread Class', 'Thread Synchronization', 'Locks', 'RLock', 'Semaphore', 'Queue', 'Multiprocessing', 'Process Pool', 'GIL', 'Thread vs Process'],
    content: `# Multithreading and Multiprocessing

## 1. Threading Basics
Run multiple threads concurrently:

\`\`\`python
import threading\n\ndef worker(n):\n    print(f"Worker {n}")\n\nthreads = []\nfor i in range(5):\n    t = threading.Thread(target=worker, args=(i,))\n    t.start()\n    threads.append(t)\n\nfor t in threads:\n    t.join()  # Wait for completion\n\`\`\`

## 2. Thread Class
\`\`\`python
class MyThread(threading.Thread):\n    def __init__(self, name):\n        super().__init__()\n        self.name = name\n    \n    def run(self):\n        print(f"Running {self.name}")\n\`\`\`

## 3. Locks (Mutual Exclusion)
\`\`\`python\nlock = threading.Lock()\n\ndef safe_increment():\n    lock.acquire()\n    try:\n        # critical section\n        counter += 1\n    finally:\n        lock.release()\n\n# Or with context manager\ndef safe_increment():\n    with lock:\n        counter += 1\n\`\`\`

## 4. RLock (Reentrant Lock)
Same thread can acquire multiple times:

\`\`\`python\nrlock = threading.RLock()\n\`\`\`

## 5. Semaphore
Limit concurrent access:

\`\`\`python\nsemaphore = threading.Semaphore(3)  # Max 3 threads\n\ndef worker():\n    with semaphore:\n        # Only 3 threads here\n        pass\n\`\`\`

## 6. Queue (Thread-safe)
\`\`\`python\nfrom queue import Queue\n\nq = Queue()\nq.put(item)\nitem = q.get()\n\`\`\`

## 7. Multiprocessing
Use multiple CPU cores:

\`\`\`python\nimport multiprocessing\n\ndef worker(n):\n    return n * n\n\nif __name__ == "__main__":\n    with multiprocessing.Pool(4) as pool:\n        results = pool.map(worker, range(10))\n\`\`\``,
    codeExamples: [
      {
        title: 'Basic Threading',
        code: 'import threading\nimport time\n\ndef worker(name, delay):\n    for i in range(3):\n        time.sleep(delay)\n        print(f"{name}: {i}")\n\nt1 = threading.Thread(target=worker, args=("Thread-1", 1))\nt2 = threading.Thread(target=worker, args=("Thread-2", 1))\n\nt1.start()\nt2.start()\nt1.join()\nt2.join()\n\nprint("All threads completed")',
        explanation: 'Thread(target, args) creates thread. start() begins execution. join() waits for completion.'
      },
      {
        title: 'Thread with Lock',
        code: 'import threading\n\ncounter = 0\nlock = threading.Lock()\n\ndef increment():\n    global counter\n    for _ in range(10000):\n        with lock:\n            counter += 1\n\nthreads = []\nfor _ in range(5):\n    t = threading.Thread(target=increment)\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()\n\nprint(f"Final counter: {counter}")',
        explanation: 'Lock prevents race conditions. with lock: ensures mutual exclusion. Counter accurate.'
      },
      {
        title: 'Thread Queue',
        code: 'from queue import Queue\nimport threading\n\ndef worker(q):\n    while True:\n        item = q.get()\n        if item is None:\n            break\n        print(f"Processing {item}")\n        q.task_done()\n\nq = Queue()\nthreads = []\nfor _ in range(3):\n    t = threading.Thread(target=worker, args=(q,))\n    t.start()\n    threads.append(t)\n\nfor item in range(10):\n    q.put(item)\n\nq.join()  # Wait for all items processed\n\nfor _ in range(3):\n    q.put(None)  # Stop workers',
        explanation: 'Queue is thread-safe. put() adds items, get() retrieves. task_done() marks completion. join() waits.'
      },
      {
        title: 'Multiprocessing Pool',
        code: 'import multiprocessing\nimport os\n\ndef square(n):\n    print(f"Process {os.getpid()}: {n}")\n    return n * n\n\nif __name__ == "__main__":\n    with multiprocessing.Pool(4) as pool:\n        results = pool.map(square, range(10))\n    print(f"Results: {results}")',
        explanation: 'Pool creates process pool. map() distributes work. Each process has separate memory. Bypasses GIL.'
      },
      {
        title: 'Thread vs Process',
        code: '# Threading (I/O bound)\nimport threading\nimport time\n\ndef io_task():\n    time.sleep(1)  # I/O wait\n\nthreads = [threading.Thread(target=io_task) for _ in range(10)]\n\n# Multiprocessing (CPU bound)\nimport multiprocessing\n\ndef cpu_task(n):\n    return sum(i * i for i in range(n))\n\nprocesses = [multiprocessing.Process(target=cpu_task, args=(1000000,)) for _ in range(4)]',
        explanation: 'Threading for I/O bound (network, files). Multiprocessing for CPU bound (calculations). GIL limits threads.'
      }
    ],
    quiz: {
      id: 'python-advanced-ch7-quiz',
      questions: [
        { id: 'q1', question: 'threading module creates?', options: ['Threads', 'Processes', 'Functions', 'Classes'], correctAnswer: 0 },
        { id: 'q2', question: 'Thread starts with?', options: ['start()', 'run()', 'begin()', 'execute()'], correctAnswer: 0 },
        { id: 'q3', question: 'join() waits for?', options: ['Thread completion', 'Start', 'Lock', 'Queue'], correctAnswer: 0 },
        { id: 'q4', question: 'Lock prevents?', options: ['Race conditions', 'Deadlocks', 'Errors', 'Exceptions'], correctAnswer: 0 },
        { id: 'q5', question: 'Semaphore limits?', options: ['Concurrent threads', 'Total threads', 'Memory', 'CPU'], correctAnswer: 0 },
        { id: 'q6', question: 'Queue is?', options: ['Thread-safe', 'Not safe', 'Fast', 'Slow'], correctAnswer: 0 },
        { id: 'q7', question: 'multiprocessing uses?', options: ['Multiple cores', 'Single core', 'Threads', 'Fibers'], correctAnswer: 0 },
        { id: 'q8', question: 'Pool.map() does?', options: ['Distributes work', 'Collects results', 'Creates threads', 'Locks'], correctAnswer: 0 },
        { id: 'q9', question: 'GIL stands for?', options: ['Global Interpreter Lock', 'General Internal Lock', 'Global Internal Loop', 'General Interpreter Loop'], correctAnswer: 0 },
        { id: 'q10', question: 'Threading good for?', options: ['I/O bound', 'CPU bound', 'Both', 'Neither'], correctAnswer: 0 },
        { id: 'q11', question: 'Multiprocessing good for?', options: ['CPU bound', 'I/O bound', 'Both', 'Neither'], correctAnswer: 0 },
        { id: 'q12', question: 'Process has separate?', options: ['Memory', 'Threads', 'Locks', 'Queues'], correctAnswer: 0 }
      ]
    },
    summary: 'Multithreading: threading.Thread(target, args). start() begins, join() waits. Lock prevents race conditions. Semaphore limits concurrent access. Queue is thread-safe. Multiprocessing: Pool(processes) for CPU-bound tasks. map() distributes work. GIL (Global Interpreter Lock) limits threads. Threading for I/O bound, Multiprocessing for CPU bound.'
  },
  {
    id: 'python-advanced-ch8-async',
    title: 'Chapter 8: Async Programming',
    introduction: 'Master asynchronous programming with asyncio. Learn async/await, event loops, coroutines, and concurrent I/O operations.',
    topics: ['Async Basics', 'Coroutines', 'async/await', 'Event Loop', 'asyncio.gather', 'asyncio.wait', 'Async Context Managers', 'Async Iterators', ' aiohttp'],
    content: `# Async Programming

## 1. Async Basics
Asynchronous code runs without blocking:

\`\`\`python
import asyncio\n\nasync def main():\n    print("Hello")\n    await asyncio.sleep(1)\n    print("World")\n\nasyncio.run(main())\n\`\`\`

## 2. Coroutines
Async functions are coroutines:

\`\`\`python\nasync def fetch_data():\n    await asyncio.sleep(1)\n    return "Data"\n\nasync def main():\n    result = await fetch_data()\n    print(result)\n\`\`\`

## 3. async/await
\`\`\`python\nasync def worker(n):\n    print(f"Worker {n} started")\n    await asyncio.sleep(1)\n    print(f"Worker {n} done")\n\nasync def main():\n    await asyncio.gather(\n        worker(1),\n        worker(2),\n        worker(3)\n    )\n\`\`\`

## 4. Event Loop
\`\`\`python\nloop = asyncio.get_event_loop()\nloop.run_until_complete(main())\nloop.close()\n\`\`\`

## 5. asyncio.gather
Run multiple coroutines:

\`\`\`python\nresults = await asyncio.gather(\n    fetch_url("url1"),\n    fetch_url("url2"),\n    fetch_url("url3")\n)\n\`\`\`

## 6. asyncio.wait_for
Timeout for coroutines:

\`\`\`python\ntry:\n    result = await asyncio.wait_for(\n        slow_operation(),\n        timeout=5.0\n    )\nexcept asyncio.TimeoutError:\n    print("Timed out!")\n\`\`\``,
    codeExamples: [
      {
        title: 'Basic Async/Await',
        code: 'import asyncio\nimport time\n\nasync def say_after(delay, what):\n    await asyncio.sleep(delay)\n    print(what)\n\nasync def main():\n    print(f"Started at {time.strftime(\'%X\')}")\n    await say_after(1, "Hello")\n    await say_after(1, "World")\n    print(f"Finished at {time.strftime(\'%X\')}")\n\nasyncio.run(main())',
        explanation: 'async def defines coroutine. await pauses until complete. asyncio.run() runs async function.'
      },
      {
        title: 'Concurrent Execution with gather',
        code: 'import asyncio\nimport time\n\nasync def say_after(delay, what):\n    await asyncio.sleep(delay)\n    print(what)\n\nasync def main():\n    print(f"Started at {time.strftime(\'%X\')}")\n    await asyncio.gather(\n        say_after(1, "Hello"),\n        say_after(1, "World")\n    )\n    print(f"Finished at {time.strftime(\'%X\')}")\n\nasyncio.run(main())  # Runs in 1 second, not 2!',
        explanation: 'gather() runs coroutines concurrently. Both sleep at same time. Total time is max, not sum.'
      },
      {
        title: 'Async with Timeout',
        code: 'import asyncio\n\nasync def slow_operation():\n    await asyncio.sleep(10)\n    return "Done"\n\nasync def main():\n    try:\n        result = await asyncio.wait_for(\n            slow_operation(),\n            timeout=2.0\n        )\n        print(result)\n    except asyncio.TimeoutError:\n        print("Operation timed out!")\n\nasyncio.run(main())',
        explanation: 'wait_for() adds timeout. Raises TimeoutError if coroutine takes too long.'
      },
      {
        title: 'Async Producer-Consumer',
        code: 'import asyncio\n\nasync def producer(queue, n):\n    for i in range(n):\n        await queue.put(i)\n        print(f"Produced {i}")\n    await queue.put(None)  # Signal end\n\nasync def consumer(queue):\n    while True:\n        item = await queue.get()\n        if item is None:\n            break\n        print(f"Consumed {item}")\n        queue.task_done()\n\nasync def main():\n    queue = asyncio.Queue()\n    await asyncio.gather(\n        producer(queue, 10),\n        consumer(queue)\n    )\n\nasyncio.run(main())',
        explanation: 'asyncio.Queue for async producer-consumer. put() and get() are awaitable. task_done() marks completion.'
      },
      {
        title: 'Async HTTP with aiohttp',
        code: 'import asyncio\nimport aiohttp\n\nasync def fetch(session, url):\n    async with session.get(url) as response:\n        return await response.text()\n\nasync def main():\n    async with aiohttp.ClientSession() as session:\n        urls = [\n            "https://api.github.com",\n            "https://httpbin.org/get"\n        ]\n        tasks = [fetch(session, url) for url in urls]\n        results = await asyncio.gather(*tasks)\n        for result in results:\n            print(result[:100])\n\n# asyncio.run(main())',
        explanation: 'aiohttp for async HTTP. ClientSession for connections. async with for context management. gather() fetches concurrently.'
      }
    ],
    quiz: {
      id: 'python-advanced-ch8-quiz',
      questions: [
        { id: 'q1', question: 'async def defines?', options: ['Coroutine', 'Function', 'Class', 'Method'], correctAnswer: 0 },
        { id: 'q2', question: 'await waits for?', options: ['Coroutine', 'Function', 'Class', 'Variable'], correctAnswer: 0 },
        { id: 'q3', question: 'asyncio.run() does?', options: ['Runs async function', 'Creates loop', 'Stops loop', 'Pauses'], correctAnswer: 0 },
        { id: 'q4', question: 'gather() runs?', options: ['Concurrently', 'Sequentially', 'Randomly', 'Parallel'], correctAnswer: 0 },
        { id: 'q5', question: 'wait_for() adds?', options: ['Timeout', 'Delay', 'Pause', 'Stop'], correctAnswer: 0 },
        { id: 'q6', question: 'TimeoutError raised when?', options: ['Timeout exceeded', 'Success', 'Error', 'Never'], correctAnswer: 0 },
        { id: 'q7', question: 'asyncio.Queue is?', options: ['Async queue', 'Sync queue', 'List', 'Dict'], correctAnswer: 0 },
        { id: 'q8', question: 'put() in async queue?', options: ['awaitable', 'sync', 'fast', 'slow'], correctAnswer: 0 },
        { id: 'q9', question: 'aiohttp is for?', options: ['Async HTTP', 'Sync HTTP', 'FTP', 'WebSocket'], correctAnswer: 0 },
        { id: 'q10', question: 'async with uses?', options: ['Async context manager', 'Sync context', 'Lock', 'Queue'], correctAnswer: 0 },
        { id: 'q11', question: 'Event loop manages?', options: ['Coroutines', 'Threads', 'Processes', 'Files'], correctAnswer: 0 },
        { id: 'q12', question: 'Async good for?', options: ['I/O bound', 'CPU bound', 'Both', 'Neither'], correctAnswer: 0 }
      ]
    },
    summary: 'Async programming: async def defines coroutines. await pauses until complete. asyncio.run() runs async functions. gather() runs concurrently. wait_for() adds timeout. asyncio.Queue for async producer-consumer. aiohttp for async HTTP. Event loop manages coroutines. Async ideal for I/O bound tasks.'
  },
  {
    id: 'python-advanced-ch9-networking',
    title: 'Chapter 9: Networking and Sockets',
    introduction: 'Learn network programming with sockets. Master TCP/UDP, client-server architecture, and network protocols.',
    topics: ['Socket Basics', 'TCP Sockets', 'UDP Sockets', 'Server Sockets', 'Client Sockets', 'Socket Options', 'select Module', 'Threading Servers', 'HTTP Basics', 'WebSocket Intro'],
    content: `# Networking and Sockets

## 1. Socket Basics
Sockets are network endpoints:

\`\`\`python
import socket\n\n# Create socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # TCP\ns = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)   # UDP\n\`\`\`

## 2. TCP Server
\`\`\`python\nimport socket\n\nserver = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserver.bind(('localhost', 8080))\nserver.listen(5)\n\nwhile True:\n    client, addr = server.accept()\n    data = client.recv(1024)\n    client.send(b"Response")\n    client.close()\n\`\`\`

## 3. TCP Client
\`\`\`python\nimport socket\n\nclient = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nclient.connect(('localhost', 8080))\nclient.send(b"Hello")\ndata = client.recv(1024)\nclient.close()\n\`\`\`

## 4. UDP Server
\`\`\`python\nimport socket\n\nserver = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\nserver.bind(('localhost', 8080))\n\nwhile True:\n    data, addr = server.recvfrom(1024)\n    server.sendto(b"Response", addr)\n\`\`\`

## 5. UDP Client
\`\`\`python\nimport socket\n\nclient = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\nclient.sendto(b"Hello", ('localhost', 8080))\ndata, addr = client.recvfrom(1024)\n\`\`\``,
    codeExamples: [
      {
        title: 'TCP Echo Server',
        code: 'import socket\nimport threading\n\ndef handle_client(client_socket, address):\n    print(f"Connected: {address}")\n    while True:\n        data = client_socket.recv(1024)\n        if not data:\n            break\n        print(f"Received: {data.decode()}")\n        client_socket.send(data)  # Echo back\n    client_socket.close()\n\ndef main():\n    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    server.bind(("localhost", 8080))\n    server.listen(5)\n    print("Server listening on port 8080")\n    \n    while True:\n        client, addr = server.accept()\n        thread = threading.Thread(\n            target=handle_client,\n            args=(client, addr)\n        )\n        thread.start()\n\n# main()',
        explanation: 'TCP server binds to port, listens for connections. Each client gets separate thread. recv() receives, send() sends.'
      },
      {
        title: 'TCP Client',
        code: 'import socket\n\ndef main():\n    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    client.connect(("localhost", 8080))\n    \n    while True:\n        message = input("Enter message: ")\n        if message == "quit":\n            break\n        client.send(message.encode())\n        data = client.recv(1024)\n        print(f"Server echo: {data.decode()}")\n    \n    client.close()\n\n# main()',
        explanation: 'TCP client connects to server. send() sends data, recv() receives response. Close when done.'
      },
      {
        title: 'UDP Server',
        code: 'import socket\n\ndef main():\n    server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n    server.bind(("localhost", 8080))\n    print("UDP Server listening")\n    \n    while True:\n        data, addr = server.recvfrom(1024)\n        print(f"Received from {addr}: {data.decode()}")\n        server.sendto(b"ACK", addr)\n\n# main()',
        explanation: 'UDP uses sendto/recvfrom. Connectionless. recvfrom returns data and address.'
      },
      {
        title: 'Simple HTTP Client',
        code: 'import socket\n\ndef get_url(host, path):\n    request = f"GET {path} HTTP/1.1\\r\\nHost: {host}\\r\\n\\r\\n"\n    \n    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    sock.connect((host, 80))\n    sock.send(request.encode())\n    \n    response = sock.recv(4096).decode()\n    sock.close()\n    \n    print(response)\n\n# get_url("example.com", "/")',
        explanation: 'HTTP uses TCP. Send HTTP request string. Parse response for headers and body.'
      }
    ],
    quiz: {
      id: 'python-advanced-ch9-quiz',
      questions: [
        { id: 'q1', question: 'Socket is?', options: ['Network endpoint', 'File', 'Function', 'Class'], correctAnswer: 0 },
        { id: 'q2', question: 'AF_INET is for?', options: ['IPv4', 'IPv6', 'UDP', 'TCP'], correctAnswer: 0 },
        { id: 'q3', question: 'SOCK_STREAM is?', options: ['TCP', 'UDP', 'HTTP', 'FTP'], correctAnswer: 0 },
        { id: 'q4', question: 'SOCK_DGRAM is?', options: ['UDP', 'TCP', 'HTTP', 'FTP'], correctAnswer: 0 },
        { id: 'q5', question: 'bind() does?', options: ['Binds to address', 'Connects', 'Listens', 'Accepts'], correctAnswer: 0 },
        { id: 'q6', question: 'listen() does?', options: ['Listens for connections', 'Binds', 'Connects', 'Sends'], correctAnswer: 0 },
        { id: 'q7', question: 'accept() returns?', options: ['(client, address)', 'data', 'socket', 'port'], correctAnswer: 0 },
        { id: 'q8', question: 'recv() receives?', options: ['Bytes', 'String', 'Int', 'Float'], correctAnswer: 0 },
        { id: 'q9', question: 'send() sends?', options: ['Bytes', 'String', 'Int', 'Float'], correctAnswer: 0 },
        { id: 'q10', question: 'UDP uses?', options: ['sendto/recvfrom', 'send/recv', 'connect/disconnect', 'bind/listen'], correctAnswer: 0 },
        { id: 'q11', question: 'TCP is?', options: ['Connection-oriented', 'Connectionless', 'Fast', 'Unreliable'], correctAnswer: 0 },
        { id: 'q12', question: 'UDP is?', options: ['Connectionless', 'Connection-oriented', 'Reliable', 'Slow'], correctAnswer: 0 }
      ]
    },
    summary: 'Networking: Socket is network endpoint. AF_INET for IPv4. SOCK_STREAM for TCP (connection-oriented). SOCK_DGRAM for UDP (connectionless). Server: bind(), listen(), accept(). Client: connect(). TCP: send/recv. UDP: sendto/recvfrom. Threading for multiple clients. HTTP uses TCP on port 80.'
  },
  {
    id: 'python-advanced-ch10-lambda',
    title: 'Chapter 10: Lambda, Map, Filter, Reduce',
    introduction: 'Master functional programming with lambda functions, map, filter, and reduce. Write concise, expressive code.',
    topics: ['Lambda Functions', 'map() Function', 'filter() Function', 'reduce() Function', 'List Comprehensions', 'Functional Patterns', 'Operator Module', 'functools Module'],
    content: `# Lambda, Map, Filter, Reduce

## 1. Lambda Functions
Anonymous one-line functions:

\`\`\`python
# Regular function
def add(a, b):\n    return a + b\n\n# Lambda\nadd = lambda a, b: a + b\n\n# Use with sorted\nstudents = [("Ali", 25), ("Sara", 20), ("Ahmed", 30)]\nsorted_students = sorted(students, key=lambda x: x[1])\n\`\`\`

## 2. map() Function
Apply function to all items:

\`\`\`python
numbers = [1, 2, 3, 4, 5]\nsquares = list(map(lambda x: x**2, numbers))\n# [1, 4, 9, 16, 25]\n\n# Multiple iterables\na = [1, 2, 3]\nb = [4, 5, 6]\nsums = list(map(lambda x, y: x + y, a, b))\n# [5, 7, 9]\n\`\`\`

## 3. filter() Function
Filter items based on condition:

\`\`\`python
numbers = [1, 2, 3, 4, 5, 6]\nevens = list(filter(lambda x: x % 2 == 0, numbers))\n# [2, 4, 6]\n\n# Remove None values\ndata = [1, None, 3, None, 5]\nclean = list(filter(None, data))\n# [1, 3, 5]\n\`\`\`

## 4. reduce() Function
Reduce to single value:

\`\`\`python
from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5]\nproduct = reduce(lambda x, y: x * y, numbers)\n# 120\n\n# Find maximum\nmax_num = reduce(lambda a, b: a if a > b else b, numbers)\n# 5\n\`\`\``,
    codeExamples: [
      {
        title: 'Lambda with sorted',
        code: 'students = [\n    ("Ali", 85),\n    ("Sara", 92),\n    ("Ahmed", 78),\n    ("Fatima", 95)\n]\n\n# Sort by name\nsorted_name = sorted(students, key=lambda x: x[0])\nprint(sorted_name)\n\n# Sort by marks (descending)\nsorted_marks = sorted(students, key=lambda x: x[1], reverse=True)\nprint(sorted_marks)',
        explanation: 'lambda as key function. x[0] for name, x[1] for marks. reverse=True for descending.'
      },
      {
        title: 'map() for Transformation',
        code: 'numbers = [1, 2, 3, 4, 5]\n\n# Square all\nsquares = list(map(lambda x: x**2, numbers))\nprint(squares)  # [1, 4, 9, 16, 25]\n\n# Convert to strings\nstrings = list(map(str, numbers))\nprint(strings)  # ["1", "2", "3", "4", "5"]\n\n# Add 10 to each\nplus_ten = list(map(lambda x: x + 10, numbers))\nprint(plus_ten)  # [11, 12, 13, 14, 15]',
        explanation: 'map() applies function to all items. Pass function and iterable. Convert to list for results.'
      },
      {
        title: 'filter() for Selection',
        code: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# Filter even\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(evens)  # [2, 4, 6, 8, 10]\n\n# Filter > 5\ngreater_than_5 = list(filter(lambda x: x > 5, numbers))\nprint(greater_than_5)  # [6, 7, 8, 9, 10]\n\n# Filter truthy\ndata = [0, 1, "", "Hello", None, [1, 2]]\ntruthy = list(filter(None, data))\nprint(truthy)  # [1, "Hello", [1, 2]]',
        explanation: 'filter() keeps items where function returns True. None filters falsy values (0, "", None, []).'
      },
      {
        title: 'reduce() for Aggregation',
        code: 'from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5]\n\n# Sum\nsum_all = reduce(lambda a, b: a + b, numbers)\nprint(sum_all)  # 15\n\n# Product\nproduct = reduce(lambda a, b: a * b, numbers)\nprint(product)  # 120\n\n# Maximum\nmax_num = reduce(lambda a, b: a if a > b else b, numbers)\nprint(max_num)  # 5\n\n# With initial value\nsum_with_init = reduce(lambda a, b: a + b, numbers, 100)\nprint(sum_with_init)  # 115',
        explanation: 'reduce() accumulates result. Takes function and iterable. Optional initial value.'
      },
      {
        title: 'Combining map, filter, reduce',
        code: 'from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# Square even numbers, sum result\nresult = reduce(\n    lambda a, b: a + b,\n    map(lambda x: x**2,\n        filter(lambda x: x % 2 == 0, numbers)\n    )\n)\nprint(result)  # 4 + 16 + 36 + 64 + 100 = 220\n\n# Or with comprehensions (more Pythonic)\nresult = sum(x**2 for x in numbers if x % 2 == 0)\nprint(result)  # 220',
        explanation: 'Chain map, filter, reduce for complex operations. List comprehensions often clearer.'
      }
    ],
    quiz: {
      id: 'python-advanced-ch10-quiz',
      questions: [
        { id: 'q1', question: 'lambda creates?', options: ['Anonymous function', 'Named function', 'Class', 'Object'], correctAnswer: 0 },
        { id: 'q2', question: 'map() applies?', options: ['Function to all', 'Filter', 'Reduce', 'Sort'], correctAnswer: 0 },
        { id: 'q3', question: 'filter() keeps?', options: ['True items', 'All', 'False', 'None'], correctAnswer: 0 },
        { id: 'q4', question: 'reduce() returns?', options: ['Single value', 'List', 'Tuple', 'Dict'], correctAnswer: 0 },
        { id: 'q5', question: 'reduce is in?', options: ['functools', 'itertools', 'operator', 'collections'], correctAnswer: 0 },
        { id: 'q6', question: 'lambda x: x*2 does?', options: ['Doubles', 'Squares', 'Adds 2', 'Divides'], correctAnswer: 0 },
        { id: 'q7', question: 'map returns?', options: ['Iterator', 'List', 'Tuple', 'Dict'], correctAnswer: 0 },
        { id: 'q8', question: 'filter(None, data) filters?', options: ['Falsy values', 'Truthy', 'Zeros', 'Ones'], correctAnswer: 0 },
        { id: 'q9', question: 'sorted key uses?', options: ['Function', 'Value', 'Index', 'String'], correctAnswer: 0 },
        { id: 'q10', question: 'Comprehension vs map?', options: ['Both transform', 'Same', 'Different', 'Opposite'], correctAnswer: 0 }
      ]
    },
    summary: 'Functional programming: lambda creates anonymous functions. map() applies function to all items. filter() keeps items where function returns True. reduce() accumulates to single value (from functools). Chain for complex operations. List comprehensions often more Pythonic. sorted() uses key function.'
  }
];
