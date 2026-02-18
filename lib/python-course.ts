// Complete Python Course - Basic to Advanced with Detailed Chapters

import { Chapter, CodeExample, Quiz } from './types';

// ============== BASIC PYTHON COURSE ==============
export const pythonBasicChapters: Chapter[] = [
  {
    id: 'python-basic-ch1-setup',
    title: 'Chapter 1: Python Full Setup',
    introduction: 'Welcome to Python! In this chapter, you will set up your complete Python development environment and write your first program.',
    topics: ['Installing Python', 'Setting up VS Code', 'Installing Extensions', 'Creating First Project', 'Running Python Code'],
    content: `# Python Full Setup

## What is Python?
Python is a high-level, interpreted programming language created by Guido van Rossum in 1991. It emphasizes code readability and simplicity, making it perfect for beginners and professionals alike.

## Why Python is Important?
Python is one of the most valuable programming languages in the job market today:

### Market Value:
- #1 most wanted programming language (Stack Overflow 2023)
- Average Python Developer Salary: $120,000/year
- Used by: Google, Netflix, Instagram, Spotify, NASA

### What You Can Build:
1. **Web Applications** - Instagram, Pinterest built with Django (Python framework)
2. **Data Science & AI** - Machine Learning, Deep Learning, Neural Networks
3. **Automation** - Automate repetitive tasks, web scraping
4. **Desktop Applications** - GUI applications with Tkinter, PyQt
5. **Mobile Apps** - Backend services for mobile applications
6. **Game Development** - Simple games with Pygame

## Installing Python

### Step 1: Download Python
1. Go to https://www.python.org/downloads/
2. Download the latest version (Python 3.11+)
3. **IMPORTANT**: Check "Add Python to PATH" during installation

### Step 2: Verify Installation
Open Command Prompt and type:
\`\`\`bash
python --version
\`\`\`

### Step 3: Install VS Code
1. Download from https://code.visualstudio.com/
2. Install Python extension by Microsoft
3. Install Code Runner extension

## Your First Program
\`\`\`python
print("Hello, World!")
print("Welcome to Python Programming!")
\`\`\`

## Python Syntax Basics
- Uses indentation (spaces) for code blocks - NO curly braces
- No semicolons needed at end of statements
- Comments start with # symbol
- Case-sensitive (Name and name are different)
- Files end with .py extension`,
    codeExamples: [
      {
        title: 'Hello World Program',
        code: 'print("Hello, World!")\nprint("Welcome to Python!")\nprint("Let\'s start coding!")',
        explanation: 'The print() function outputs text to the console. This is your first Python program!'
      },
      {
        title: 'Simple Calculator',
        code: 'print(10 + 5)\nprint(10 - 5)\nprint(10 * 5)\nprint(10 / 5)\nprint(10 ** 2)  # Power',
        explanation: 'Python can perform mathematical operations directly.'
      },
      {
        title: 'Multiple Print Statements',
        code: 'print("Line 1")\nprint("Line 2")\nprint("Line 3")\nprint("---")\nprint("Done!")',
        explanation: 'Each print() creates a new line automatically.'
      }
    ],
    quiz: {
      id: 'python-basic-ch1-quiz',
      questions: [
        { id: 'q1', question: 'Who created Python?', options: ['Guido van Rossum', 'Bill Gates', 'Steve Jobs', 'Mark Zuckerberg'], correctAnswer: 0 },
        { id: 'q2', question: 'Python was created in which year?', options: ['1991', '2000', '1985', '1995'], correctAnswer: 0 },
        { id: 'q3', question: 'Function to display output?', options: ['echo()', 'print()', 'write()', 'display()'], correctAnswer: 1 },
        { id: 'q4', question: 'Python file extension?', options: ['.py', '.python', '.pt', '.pi'], correctAnswer: 0 },
        { id: 'q5', question: 'Comment symbol in Python?', options: ['//', '/*', '#', '--'], correctAnswer: 2 },
        { id: 'q6', question: 'Python uses what for code blocks?', options: ['Braces {}', 'Parentheses ()', 'Indentation', 'Keywords'], correctAnswer: 2 },
        { id: 'q7', question: 'Is Python case-sensitive?', options: ['Yes', 'No', 'Sometimes', 'Only for variables'], correctAnswer: 0 },
        { id: 'q8', question: 'Which company uses Python?', options: ['Google', 'Microsoft', 'Apple', 'All of above'], correctAnswer: 3 }
      ]
    },
    summary: 'Python is a high-level, interpreted language known for simplicity and readability. It\'s the #1 most wanted language with high demand in web development, data science, AI, and automation. You learned to install Python, set up VS Code, and write your first program using print(). Remember: Python uses indentation for code blocks, is case-sensitive, and comments start with #.'
  },
  {
    id: 'python-basic-ch2-intro',
    title: 'Chapter 2: Introduction to Python',
    introduction: 'Learn what Python is, its history, market value, and what amazing things you can build with it.',
    topics: ['History of Python', 'Python Versions', 'Python Applications', 'Career Opportunities', 'Learning Path'],
    content: `# Introduction to Python

## History of Python
- 1989: Guido van Rossum started developing Python as a hobby project
- 1991: First public release (Python 0.9.0)
- 2000: Python 2.0 released
- 2008: Python 3.0 released (current major version)
- Name comes from "Monty Python's Flying Circus" (comedy show)

## Python Versions
- **Python 2**: Legacy version (end of life 2020)
- **Python 3**: Current version (we use Python 3.11+)
- Always use Python 3 for new projects

## Why Python is So Popular?

### 1. Easy to Learn
- Simple syntax, reads like English
- Less code than other languages
- Great for beginners

### 2. Versatile
- Web Development (Django, Flask)
- Data Science (Pandas, NumPy)
- Machine Learning (TensorFlow, PyTorch)
- Automation & Scripting
- Desktop Applications

### 3. Large Community
- Millions of developers worldwide
- Extensive documentation
- Free libraries for everything

### 4. High Demand
- Average Salary: $120,000/year
- Remote work opportunities
- Freelance projects available

## What Can You Build?

### Web Applications
- Instagram (Django)
- Pinterest (Django)
- Spotify (Flask)

### Data Science
- Data analysis
- Visualizations
- Predictions

### Artificial Intelligence
- Chatbots
- Image recognition
- Self-driving cars

### Automation
- Web scraping
- File management
- Email automation

### Games
- Simple 2D games
- Game prototypes

## Career Paths
1. **Python Developer** - Web development, APIs
2. **Data Scientist** - Analysis, predictions
3. **Machine Learning Engineer** - AI models
4. **DevOps Engineer** - Automation, deployment
5. **Freelancer** - Work on various projects`,
    codeExamples: [
      {
        title: 'Python in Action - Simple Tasks',
        code: 'print("=== Python Calculator ===")\nprint(100 + 50)\nprint(100 - 50)\nprint(100 * 50)\nprint(100 / 50)\nprint(100 ** 2)\nprint(100 % 3)',
        explanation: 'Python can be used as a powerful calculator with built-in mathematical operations.'
      },
      {
        title: 'Printing Multiple Lines',
        code: 'print("=" * 30)\nprint("Welcome to Python Course")\nprint("=" * 30)\nprint("Chapter 2: Introduction")\nprint("=" * 30)',
        explanation: 'String multiplication creates repeated patterns. Great for formatting output.'
      }
    ],
    quiz: {
      id: 'python-basic-ch2-quiz',
      questions: [
        { id: 'q1', question: 'Python 2 support ended in?', options: ['2020', '2015', '2018', '2022'], correctAnswer: 0 },
        { id: 'q2', question: 'Current Python major version?', options: ['3', '2', '4', '1'], correctAnswer: 0 },
        { id: 'q3', question: 'Instagram uses which framework?', options: ['Django', 'Flask', 'FastAPI', 'Pyramid'], correctAnswer: 0 },
        { id: 'q4', question: 'Python is good for?', options: ['Web Dev', 'Data Science', 'AI', 'All of above'], correctAnswer: 3 },
        { id: 'q5', question: 'Python name comes from?', options: ['Snake', 'Comedy Show', 'Scientist', 'Place'], correctAnswer: 1 },
        { id: 'q6', question: 'Average Python developer salary?', options: ['$120,000', '$60,000', '$200,000', '$80,000'], correctAnswer: 0 },
        { id: 'q7', question: 'Spotify uses which framework?', options: ['Flask', 'Django', 'FastAPI', 'Tornado'], correctAnswer: 0 }
      ]
    },
    summary: 'Python was created in 1989 by Guido van Rossum and has become the #1 programming language. It\'s used by major companies like Instagram, Pinterest, and Spotify. Python excels in web development, data science, AI, and automation. The job market highly values Python skills with average salaries of $120,000/year. Always use Python 3 for new projects.'
  },
  {
    id: 'python-basic-ch3-variables',
    title: 'Chapter 3: Variables and Data Types',
    introduction: 'Learn about variables - the foundation of programming. Understand how to store, manipulate, and work with different types of data in Python.',
    topics: ['What are Variables?', 'Creating Variables', 'Data Types (str, int, float, bool)', 'Type Conversion', 'String Operations', 'Number Operations'],
    content: `# Variables and Data Types

## What are Variables?
Variables are containers for storing data values. Think of them as labeled boxes where you can store information.

\`\`\`python
name = "Ali"        # String
age = 25            # Integer
height = 5.9        # Float
is_student = True   # Boolean
\`\`\`

## Why Variables are Important?
1. **Store Information**: Keep data for later use
2. **Reuse Values**: Use the same value multiple times
3. **Easy Updates**: Change value in one place
4. **Make Code Readable**: Use meaningful names

## Python Data Types

### 1. String (str) - Text Data
\`\`\`python
name = "Python"
message = 'Hello World'
long_text = """Multi
line
text"""
\`\`\`

### 2. Integer (int) - Whole Numbers
\`\`\`python
age = 25
count = 100
negative = -50
\`\`\`

### 3. Float - Decimal Numbers
\`\`\`python
price = 19.99
pi = 3.14159
height = 5.9
\`\`\`

### 4. Boolean (bool) - True/False
\`\`\`python
is_active = True
is_logged_in = False
\`\`\`

## Type Conversion
Convert between data types:

\`\`\`python
# String to int
age = int("25")

# String to float
price = float("19.99")

# Number to string
text = str(100)

# To boolean
result = bool(1)  # True
\`\`\`

## String Operations
\`\`\`python
name = "python"
name.upper()      # "PYTHON"
name.lower()      # "python"
name.title()      # "Python"
len(name)         # 6
\`\`\`

## Number Operations
\`\`\`python
10 + 5    # Addition: 15
10 - 5    # Subtraction: 5
10 * 5    # Multiplication: 50
10 / 5    # Division: 2.0
10 // 3   # Floor Division: 3
10 % 3    # Modulus (remainder): 1
10 ** 2   # Power: 100
\`\`\``,
    codeExamples: [
      {
        title: 'Creating and Using Variables',
        code: 'name = "Ali"\nage = 25\nheight = 5.9\nis_student = True\n\nprint("Name:", name)\nprint("Age:", age)\nprint("Height:", height)\nprint("Student:", is_student)',
        explanation: 'Variables store different types of data. Use print() to display their values.'
      },
      {
        title: 'String Operations',
        code: 'name = "python"\nprint(name.upper())    # PYTHON\nprint(name.lower())    # python\nprint(name.title())    # Python\nprint(len(name))       # 6',
        explanation: 'Strings have built-in methods for manipulation. upper(), lower(), title() change case. len() gets length.'
      },
      {
        title: 'Type Conversion',
        code: 'age_str = "25"\nage_int = int(age_str)\nprint(age_int + 10)  # 35\n\nprice = float("19.99")\nprint(price * 2)  # 39.98',
        explanation: 'Convert strings to numbers using int() and float() for mathematical operations.'
      },
      {
        title: 'Number Operations',
        code: 'a, b = 10, 3\nprint(a + b)   # 13\nprint(a - b)   # 7\nprint(a * b)   # 30\nprint(a / b)   # 3.33\nprint(a // b)  # 3\nprint(a % b)   # 1\nprint(a ** b)  # 1000',
        explanation: 'Python supports all mathematical operations. // gives whole number, % gives remainder, ** is power.'
      }
    ],
    quiz: {
      id: 'python-basic-ch3-quiz',
      questions: [
        { id: 'q1', question: 'Valid variable name?', options: ['2name', 'first_name', 'first-name', 'class'], correctAnswer: 1 },
        { id: 'q2', question: 'Type of 3.14?', options: ['int', 'str', 'float', 'bool'], correctAnswer: 2 },
        { id: 'q3', question: 'Convert string to int?', options: ['str()', 'int()', 'float()', 'convert()'], correctAnswer: 1 },
        { id: 'q4', question: 'bool("Hello") returns?', options: ['False', 'True', 'Error', 'None'], correctAnswer: 1 },
        { id: 'q5', question: 'len("Hello") returns?', options: ['4', '5', '6', 'Hello'], correctAnswer: 1 },
        { id: 'q6', question: '"Hello".upper() returns?', options: ['hello', 'HELLO', 'Hello', 'hELLO'], correctAnswer: 1 },
        { id: 'q7', question: '10 % 3 equals?', options: ['3', '1', '0', '2'], correctAnswer: 1 },
        { id: 'q8', question: '2 ** 3 equals?', options: ['6', '8', '9', '5'], correctAnswer: 1 }
      ]
    },
    summary: 'Variables store data values. Python has four main data types: str (text), int (whole numbers), float (decimals), and bool (True/False). Use type conversion functions like int(), float(), str() to change types. Strings have methods like upper(), lower(), title(), len(). Python supports all mathematical operations including +, -, *, /, //, %, **.'
  },
  {
    id: 'python-basic-ch4-operators',
    title: 'Chapter 4: Operators and Expressions',
    introduction: 'Master Python operators - the building blocks of all calculations and logic. Learn arithmetic, comparison, logical, and assignment operators with practical examples.',
    topics: ['Arithmetic Operators', 'Comparison Operators', 'Logical Operators', 'Assignment Operators', 'Operator Precedence', 'Building Expressions'],
    content: `# Operators and Expressions

## What are Operators?
Operators are symbols that perform operations on values and variables.

## 1. Arithmetic Operators
Used for mathematical calculations:

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| + | Addition | 10 + 5 | 15 |
| - | Subtraction | 10 - 5 | 5 |
| * | Multiplication | 10 * 5 | 50 |
| / | Division | 10 / 5 | 2.0 |
| // | Floor Division | 10 // 3 | 3 |
| % | Modulus | 10 % 3 | 1 |
| ** | Power | 2 ** 3 | 8 |

## 2. Comparison Operators
Compare values and return True/False:

| Operator | Example | Meaning |
|----------|---------|---------|
| == | 5 == 5 | Equal to |
| != | 5 != 3 | Not equal |
| > | 5 > 3 | Greater than |
| < | 3 < 5 | Less than |
| >= | 5 >= 5 | Greater or equal |
| <= | 3 <= 5 | Less or equal |

## 3. Logical Operators
Combine multiple conditions:

| Operator | Example | Result |
|----------|---------|--------|
| and | True and False | False |
| or | True or False | True |
| not | not True | False |

## 4. Assignment Operators
Assign values to variables:

| Operator | Example | Same as |
|----------|---------|---------|
| = | x = 5 | x = 5 |
| += | x += 3 | x = x + 3 |
| -= | x -= 3 | x = x - 3 |
| *= | x *= 3 | x = x * 3 |
| /= | x /= 3 | x = x / 3 |

## Operator Precedence (Order of Operations)
1. Parentheses ()
2. Power **
3. Multiplication *, Division /, Floor //, Modulus %
4. Addition +, Subtraction -
5. Comparison operators
6. Logical operators

\`\`\`python
result = 2 + 3 * 4  # 14, not 20
result = (2 + 3) * 4  # 20
\`\`\``,
    codeExamples: [
      {
        title: 'Arithmetic Operators',
        code: 'a, b = 10, 3\nprint(a + b)   # 13\nprint(a - b)   # 7\nprint(a * b)   # 30\nprint(a / b)   # 3.333\nprint(a // b)  # 3\nprint(a % b)   # 1\nprint(a ** b)  # 1000',
        explanation: 'Arithmetic operators perform mathematical calculations. // gives integer result, % gives remainder.'
      },
      {
        title: 'Comparison Operators',
        code: 'age = 25\nprint(age == 25)   # True\nprint(age != 25)   # False\nprint(age > 18)    # True\nprint(age < 18)    # False\nprint(age >= 25)   # True\nprint(age <= 25)   # True',
        explanation: 'Comparison operators return True or False based on the relationship between values.'
      },
      {
        title: 'Logical Operators',
        code: 'age = 25\nhas_license = True\n\ncan_drive = age >= 18 and has_license\nprint(can_drive)  # True\n\nis_senior = age > 60 or age < 18\nprint(is_senior)  # False\n\nis_not_minor = not (age < 18)\nprint(is_not_minor)  # True',
        explanation: 'Logical operators combine conditions. and requires both true, or needs one true, not reverses.'
      },
      {
        title: 'Assignment Operators',
        code: 'score = 100\nscore += 10  # 110\nscore -= 20  # 90\nscore *= 2   # 180\nscore /= 3   # 60.0\nprint(score)',
        explanation: 'Assignment operators provide shortcuts. += adds and assigns, -= subtracts and assigns, etc.'
      },
      {
        title: 'Complex Expressions',
        code: 'price = 100\ntax = 0.1\ndiscount = 0.2\n\nfinal = (price - price * discount) * (1 + tax)\nprint(final)  # 96.0\n\n# Check if good deal\nis_good = final < 100\nprint(is_good)  # True',
        explanation: 'Combine operators to build complex expressions. Use parentheses for clarity and correct order.'
      }
    ],
    quiz: {
      id: 'python-basic-ch4-quiz',
      questions: [
        { id: 'q1', question: '10 + 5 * 2 equals?', options: ['30', '20', '25', '15'], correctAnswer: 1 },
        { id: 'q2', question: '(10 + 5) * 2 equals?', options: ['20', '30', '25', '15'], correctAnswer: 1 },
        { id: 'q3', question: '10 % 3 equals?', options: ['3', '1', '0', '2'], correctAnswer: 1 },
        { id: 'q4', question: '2 ** 4 equals?', options: ['8', '16', '32', '4'], correctAnswer: 1 },
        { id: 'q5', question: '5 == 5.0?', options: ['True', 'False', 'Error', 'None'], correctAnswer: 0 },
        { id: 'q6', question: 'True and False?', options: ['True', 'False', 'Error', 'None'], correctAnswer: 1 },
        { id: 'q7', question: 'True or False?', options: ['True', 'False', 'Error', 'None'], correctAnswer: 0 },
        { id: 'q8', question: 'not True?', options: ['True', 'False', 'Error', 'None'], correctAnswer: 1 },
        { id: 'q9', question: 'x += 5 means?', options: ['x = x + 5', 'x = 5', 'x + 5', 'x++'], correctAnswer: 0 },
        { id: 'q10', question: '10 // 3 equals?', options: ['3.33', '3', '4', '3.0'], correctAnswer: 1 }
      ]
    },
    summary: 'Operators perform operations on values. Arithmetic (+, -, *, /, //, %, **) do math. Comparison (==, !=, >, <, >=, <=) return True/False. Logical (and, or, not) combine conditions. Assignment (=, +=, -=, *=, /=) store values. Remember operator precedence: parentheses first, then power, then multiplication/division, then addition/subtraction.'
  },
  {
    id: 'python-basic-ch5-control',
    title: 'Chapter 5: Control Flow',
    introduction: 'Learn to control program execution using if statements, elif, else, and nested conditions. Make your code make decisions!',
    topics: ['If Statements', 'Elif Statements', 'Else Statements', 'Nested Conditions', 'Multiple Conditions', 'Ternary Operator'],
    content: `# Control Flow - Making Decisions

## Why Control Flow?
Programs need to make decisions based on conditions. Control flow lets you execute different code based on different situations.

## If Statement
Executes code only if condition is true:

\`\`\`python
age = 18
if age >= 18:
    print("You are an adult")
\`\`\`

## If-Else Statement
Two possible paths:

\`\`\`python
age = 16
if age >= 18:
    print("Adult")
else:
    print("Minor")
\`\`\`

## If-Elif-Else Chain
Multiple conditions:

\`\`\`python
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
\`\`\`

## Nested Conditions
If inside another if:

\`\`\`python
age = 25
has_license = True
\nif age >= 18:\n    if has_license:\n        print("Can drive")\n    else:\n        print("Get license first")\nelse:\n    print("Too young")\n\`\`\`

## Multiple Conditions with Logical Operators

\`\`\`python
age = 25\nhas_money = True\nhas_license = True\n\nif age >= 18 and has_license and has_money:\n    print("Can buy car")\n\nif age < 18 or age > 60:\n    print("Special discount available")\n\`\`\`

## Ternary Operator (One-line if)

\`\`\`python
age = 20\nstatus = "Adult" if age >= 18 else "Minor"\nprint(status)  # Adult\n\`\`\``,
    codeExamples: [
      {
        title: 'Simple If Statement',
        code: 'age = 18\nif age >= 18:\n    print("You can vote!")\n    print("You are an adult")\nprint("This always prints")',
        explanation: 'If block only runs when condition is True. Code after if (not indented) always runs.'
      },
      {
        title: 'If-Else for Grading',
        code: 'score = 75\nif score >= 60:\n    print("Passed!")\nelse:\n    print("Failed!")\n    print("Try again")',
        explanation: 'If-else gives two paths. One will always execute based on condition.'
      },
      {
        title: 'If-Elif-Else Chain',
        code: 'score = 85\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelif score >= 60:\n    grade = "D"\nelse:\n    grade = "F"\nprint(f"Grade: {grade}")',
        explanation: 'Elif checks multiple conditions in order. First True condition executes, rest are skipped.'
      },
      {
        title: 'Nested Conditions',
        code: 'age = 25\nhas_id = True\nhas_ticket = True\n\nif has_ticket:\n    if has_id:\n        if age >= 18:\n            print("Welcome to the club!")\n        else:\n            print("Too young")\n    else:\n        print("Show ID")\nelse:\n    print("Buy ticket")',
        explanation: 'Nested ifs check multiple requirements. All conditions must be met for innermost code.'
      },
      {
        title: 'Multiple Conditions with and/or',
        code: 'age = 25\nis_member = True\nhas_reservation = False\n\nif is_member or has_reservation:\n    print("Can enter")\n\nif age >= 21 and is_member:\n    print("VIP access granted")',
        explanation: 'and needs all True, or needs at least one True. Combine for complex logic.'
      },
      {
        title: 'Ternary Operator',
        code: 'age = 20\nstatus = "Adult" if age >= 18 else "Minor"\nprint(status)\n\nprice = 100\ndiscount = 0.2 if price > 50 else 0.1\nprint(f"Discount: {discount * 100}%")',
        explanation: 'Ternary operator is shorthand for simple if-else. Value = X if condition else Y.'
      }
    ],
    quiz: {
      id: 'python-basic-ch5-quiz',
      questions: [
        { id: 'q1', question: 'Keyword for conditional?', options: ['if', 'when', 'check', 'condition'], correctAnswer: 0 },
        { id: 'q2', question: 'Symbol for not equal?', options: ['!=', '<>', '==', '=!'], correctAnswer: 0 },
        { id: 'q3', question: 'Check multiple conditions?', options: ['else if', 'elif', 'elseif', 'otherwise'], correctAnswer: 1 },
        { id: 'q4', question: 'True and False =?', options: ['True', 'False', 'Error', 'None'], correctAnswer: 1 },
        { id: 'q5', question: 'True or False =?', options: ['True', 'False', 'Error', 'None'], correctAnswer: 0 },
        { id: 'q6', question: 'not True =?', options: ['True', 'False', 'Error', 'None'], correctAnswer: 1 },
        { id: 'q7', question: 'Can have if without else?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 0 },
        { id: 'q8', question: 'How many elif allowed?', options: ['Unlimited', '1', '2', '3'], correctAnswer: 0 },
        { id: 'q9', question: 'Nested if means?', options: ['If inside if', 'Multiple ifs', 'Elif chain', 'Ternary'], correctAnswer: 0 },
        { id: 'q10', question: 'Ternary is?', options: ['One-line if', 'Three ifs', 'Nested if', 'Elif chain'], correctAnswer: 0 }
      ]
    },
    summary: 'Control flow lets code make decisions. if executes when condition is True. else provides alternative. elif checks multiple conditions in order. Nested ifs check multiple requirements. Use and (all must be True) and or (at least one True) for multiple conditions. Ternary operator provides one-line if-else: X if condition else Y.'
  },
  {
    id: 'python-basic-ch6-loops',
    title: 'Chapter 6: Loops - For and While',
    introduction: 'Learn to repeat code using loops. Master for loops, while loops, range(), break, continue, and nested loops.',
    topics: ['For Loops', 'Range Function', 'While Loops', 'Break Statement', 'Continue Statement', 'Nested Loops', 'Loop Patterns'],
    content: `# Loops - Repeating Code

## Why Loops?
Loops let you repeat code without writing it multiple times. Essential for:
- Processing lists of data
- Repeating tasks
- Iterating through collections

## For Loop
Iterates over a sequence:

\`\`\`python
# Loop through numbers\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4\n\n# Loop through string\nfor letter in "Python":\n    print(letter)\n\`\`\`

## Range Function
Generates number sequences:

\`\`\`python
range(5)      # 0, 1, 2, 3, 4\nrange(1, 6)   # 1, 2, 3, 4, 5\nrange(1, 10, 2)  # 1, 3, 5, 7, 9\n\`\`\`

## While Loop
Repeats while condition is true:

\`\`\`python\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n\`\`\`

## Break Statement
Exit loop early:

\`\`\`python\nfor i in range(10):\n    if i == 5:\n        break\n    print(i)  # 0, 1, 2, 3, 4\n\`\`\`

## Continue Statement
Skip to next iteration:

\`\`\`python\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)  # 0, 1, 3, 4\n\`\`\`

## Nested Loops
Loop inside another loop:

\`\`\`python\nfor i in range(3):\n    for j in range(3):\n        print(f"{i},{j}")\n\`\`\``,
    codeExamples: [
      {
        title: 'Basic For Loop',
        code: 'for i in range(5):\n    print(f"Count: {i}")\n\nprint("Loop finished!")',
        explanation: 'For loop iterates over range. range(5) gives 0,1,2,3,4. f-string formats output.'
      },
      {
        title: 'Range with Start and End',
        code: 'for i in range(1, 6):\n    print(i)  # 1, 2, 3, 4, 5\n\nfor i in range(1, 10, 2):\n    print(i)  # 1, 3, 5, 7, 9',
        explanation: 'range(start, end, step). End is exclusive. Step is increment.'
      },
      {
        title: 'While Loop Counter',
        code: 'count = 0\nwhile count < 5:\n    print(f"Count: {count}")\n    count += 1\nprint("Done!")',
        explanation: 'While loop repeats while condition is True. Must update counter to avoid infinite loop.'
      },
      {
        title: 'Break Statement',
        code: 'for i in range(10):\n    if i == 5:\n        break\n    print(i)  # 0, 1, 2, 3, 4\nprint("Loop stopped at 5")',
        explanation: 'Break exits loop immediately. Rest of iterations are skipped.'
      },
      {
        title: 'Continue Statement',
        code: 'for i in range(5):\n    if i == 2:\n        continue\n    print(i)  # 0, 1, 3, 4\nprint("Skipped 2")',
        explanation: 'Continue skips current iteration and jumps to next. Loop continues.'
      },
      {
        title: 'Nested Loops Pattern',
        code: 'for i in range(1, 4):\n    for j in range(1, 4):\n        print(f"{i}x{j}={i*j}", end="  ")\n    print()',
        explanation: 'Nested loops create patterns. Inner loop completes for each outer iteration.'
      },
      {
        title: 'Loop with Else',
        code: 'for i in range(5):\n    print(i)\nelse:\n    print("Loop completed!")\n\n# Else not run if break\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)\nelse:\n    print("Not printed")',
        explanation: 'Else runs after loop completes normally. Not executed if break is used.'
      }
    ],
    quiz: {
      id: 'python-basic-ch6-quiz',
      questions: [
        { id: 'q1', question: 'Loop over sequence?', options: ['for', 'while', 'loop', 'repeat'], correctAnswer: 0 },
        { id: 'q2', question: 'range(3) generates?', options: ['1,2,3', '0,1,2', '0,1,2,3', '1,2'], correctAnswer: 1 },
        { id: 'q3', question: 'Exit loop early?', options: ['break', 'continue', 'exit', 'stop'], correctAnswer: 0 },
        { id: 'q4', question: 'Skip iteration?', options: ['break', 'continue', 'skip', 'pass'], correctAnswer: 1 },
        { id: 'q5', question: 'While loop needs?', options: ['Condition', 'Counter', 'List', 'Range'], correctAnswer: 0 },
        { id: 'q6', question: 'range(1, 5) gives?', options: ['1,2,3,4', '1,2,3,4,5', '0,1,2,3,4', '2,3,4,5'], correctAnswer: 0 },
        { id: 'q7', question: 'Infinite loop happens when?', options: ['Condition always True', 'No counter', 'Wrong range', 'All'], correctAnswer: 0 },
        { id: 'q8', question: 'Nested loop means?', options: ['Loop in loop', 'Two loops', 'While in for', 'All'], correctAnswer: 3 },
        { id: 'q9', question: 'Loop else runs when?', options: ['Loop completes', 'Break used', 'Error', 'Always'], correctAnswer: 0 },
        { id: 'q10', question: 'range(0, 10, 2) gives?', options: ['0,2,4,6,8', '2,4,6,8,10', '0,2,4,6,8,10', '1,3,5,7,9'], correctAnswer: 0 }
      ]
    },
    summary: 'Loops repeat code. For loops iterate over sequences like range(). range(start, end, step) generates numbers. While loops repeat while condition is True. Break exits loop early. Continue skips to next iteration. Nested loops (loop inside loop) create patterns. Loop-else runs when loop completes without break.'
  },
  {
    id: 'python-basic-ch7-strings',
    title: 'Chapter 7: Strings',
    introduction: 'Master string manipulation in Python. Learn string methods, formatting, slicing, and text processing techniques.',
    topics: ['String Creation', 'String Indexing', 'String Slicing', 'String Methods', 'String Formatting', 'Escape Characters'],
    content: `# Strings - Text Processing

## What are Strings?
Strings are sequences of characters used for text data.

## Creating Strings
\`\`\`python\nname = "Python"\nmessage = 'Hello'\nlong_text = """Multi\nline\ntext"""\n\`\`\`

## String Indexing
Access individual characters:

\`\`\`python\ntext = "Python"\ntext[0]   # 'P'\ntext[1]   # 'y'\ntext[-1]  # 'n' (from end)\n\`\`\`

## String Slicing
Get parts of string:

\`\`\`python\ntext = "Python"\ntext[0:3]    # 'Pyt'\ntext[:3]     # 'Pyt'\ntext[3:]     # 'hon'\ntext[-3:]    # 'hon'\ntext[::2]    # 'Pto'\n\`\`\`

## String Methods

### Case Methods
\`\`\`python\ntext = "python"\ntext.upper()     # "PYTHON"\ntext.lower()     # "python"\ntext.title()     # "Python"\ntext.capitalize() # "Python"\n\`\`\`

### Search Methods
\`\`\`python\ntext = "Hello World"\ntext.find("World")    # 6\ntext.count("o")       # 2\ntext.startswith("He") # True\ntext.endswith("ld")   # True\n\`\`\`

### Modify Methods
\`\`\`python\ntext = "  Hello  "\ntext.strip()    # "Hello"\ntext.replace("H", "Y")  # "Yello"\n\`\`\`

### Split and Join
\`\`\`python\ntext = "a,b,c"\ntext.split(",")  # ['a', 'b', 'c']\n\nwords = ['a', 'b', 'c']\n",".join(words)  # "a,b,c"\n\`\`\`

## String Formatting

### f-strings (Recommended)
\`\`\`python\nname = "Ali"\nage = 25\nprint(f"My name is {name} and I am {age}")\n\`\`\`

### format() method
\`\`\`python\nprint("My name is {} and I am {}".format(name, age))\n\`\`\`

## Escape Characters
\`\`\`python\n"Hello\\nWorld"  # New line\n"Hello\\tWorld"  # Tab\n"He said \\"Hi\\""  # Quote\n"C:\\\\Users"     # Backslash\n\`\`\``,
    codeExamples: [
      {
        title: 'String Indexing and Slicing',
        code: 'text = "Python Programming"\nprint(text[0])      # P\nprint(text[6])      # P\nprint(text[-1])     # g\nprint(text[0:6])    # Python\nprint(text[:6])     # Python\nprint(text[7:])     # Programming\nprint(text[::2])    # Pto rgamn',
        explanation: 'Indexing accesses characters. Slicing gets substrings. [start:end:step]. Negative indices count from end.'
      },
      {
        title: 'String Methods - Case',
        code: 'text = "python programming"\nprint(text.upper())      # PYTHON PROGRAMMING\nprint(text.lower())      # python programming\nprint(text.title())      # Python Programming\nprint(text.capitalize()) # Python programming',
        explanation: 'Case methods change text case. upper() all caps, lower() lowercase, title() each word capitalized.'
      },
      {
        title: 'String Methods - Search',
        code: 'text = "Hello World"\nprint(text.find("World"))    # 6\nprint(text.count("o"))     # 2\nprint(text.startswith("He")) # True\nprint(text.endswith("ld"))  # True\nprint("World" in text)     # True',
        explanation: 'Search methods find information. find() returns index, count() returns occurrences, startswith/endswith check boundaries.'
      },
      {
        title: 'String Methods - Modify',
        code: 'text = "  Hello World  "\nprint(text.strip())        # "Hello World"\nprint(text.replace("H", "Y"))  # "  Yello World  "\nprint(text.split())      # ["Hello", "World"]',
        explanation: 'Modify methods change strings. strip() removes whitespace, replace() substitutes, split() breaks into list.'
      },
      {
        title: 'String Formatting with f-strings',
        code: 'name = "Ali"\nage = 25\nheight = 5.9\n\nprint(f"My name is {name}")\nprint(f"I am {age} years old")\nprint(f"Height: {height:.2f}")  # 2 decimals\nprint(f"Name length: {len(name)}")',
        explanation: 'f-strings embed expressions in strings. {variable} inserts value. :.2f formats to 2 decimals.'
      },
      {
        title: 'Escape Characters',
        code: 'print("Line 1\\nLine 2")     # New line\nprint("Tab\\tHere")         # Tab\nprint("Say \\"Hello\\"")     # Quote\nprint("Path: C:\\\\Users")   # Backslash',
        explanation: 'Escape characters represent special chars. \\n newline, \\t tab, \\\\" quote, \\\\\\\\ backslash.'
      }
    ],
    quiz: {
      id: 'python-basic-ch7-quiz',
      questions: [
        { id: 'q1', question: '"Python"[0] returns?', options: ['P', 'y', 'n', 'Error'], correctAnswer: 0 },
        { id: 'q2', question: '"Python"[-1] returns?', options: ['P', 'n', 'o', 'Error'], correctAnswer: 1 },
        { id: 'q3', question: '"Python"[1:4] returns?', options: ['Pyt', 'yth', 'ytho', 'thon'], correctAnswer: 2 },
        { id: 'q4', question: '"hello".upper() returns?', options: ['hello', 'HELLO', 'Hello', 'hELLO'], correctAnswer: 1 },
        { id: 'q5', question: '"Hello".find("e") returns?', options: ['0', '1', '2', '-1'], correctAnswer: 1 },
        { id: 'q6', question: '"a,b,c".split(",") returns?', options: ['["a", "b", "c"]', '"abc"', '"a,b,c"', 'Error'], correctAnswer: 0 },
        { id: 'q7', question: '"  hi  ".strip() returns?', options: ['"  hi  "', '"hi"', '"hi  "', '"  hi"'], correctAnswer: 1 },
        { id: 'q8', question: 'f-string syntax?', options: ['f"text {var}"', '"text {var}"', '"text" + var', 'format(var)'], correctAnswer: 0 },
        { id: 'q9', question: '\\n represents?', options: ['New line', 'Tab', 'Quote', 'Space'], correctAnswer: 0 },
        { id: 'q10', question: '"Python"[::2] returns?', options: ['Pto', 'Pyhn', 'Ptohn', 'Python'], correctAnswer: 0 }
      ]
    },
    summary: 'Strings are text sequences. Indexing accesses characters [0], [-1] from end. Slicing gets substrings [start:end:step]. Methods: upper(), lower(), title(), capitalize() change case. find(), count(), startswith(), endswith() search. strip(), replace(), split(), join() modify. f-strings format: f"text {variable}". Escape chars: \\n newline, \\t tab, \\\\" quote, \\\\\\\\ backslash.'
  },
  {
    id: 'python-basic-ch8-functions',
    title: 'Chapter 8: Functions',
    introduction: 'Learn to write reusable code with functions. Master parameters, return values, scope, and function design patterns.',
    topics: ['Defining Functions', 'Calling Functions', 'Parameters and Arguments', 'Return Values', 'Default Parameters', 'Variable Scope', 'Lambda Functions'],
    content: `# Functions - Reusable Code

## What are Functions?
Functions are reusable blocks of code that perform specific tasks.

## Why Use Functions?
1. **Reusability**: Write once, use many times
2. **Organization**: Break code into logical pieces
3. **Readability**: Give names to code blocks
4. **Testing**: Test functions independently

## Defining Functions
\`\`\`python\ndef greet(name):\n    """Greet a person"""\n    print(f"Hello, {name}!")\n\ngreet("Ali")  # Hello, Ali!\n\`\`\`

## Parameters and Arguments
\`\`\`python\n# Parameter: name (in definition)\n# Argument: "Ali" (when calling)\ndef greet(name):\n    print(f"Hello, {name}!")\n\ngreet("Ali")\n\`\`\`

## Multiple Parameters
\`\`\`python\ndef introduce(name, age):\n    print(f"{name} is {age} years old")\n\nintroduce("Ali", 25)\n\`\`\`

## Return Values
\`\`\`python\ndef add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(result)  # 8\n\`\`\`

## Default Parameters
\`\`\`python\ndef greet(name="Guest"):\n    print(f"Hello, {name}!")\n\ngreet()           # Hello, Guest!\ngreet("Ali")      # Hello, Ali!\n\`\`\`

## Variable Scope
\`\`\`python\nglobal_var = "I'm global"\n\ndef my_func():\n    local_var = "I'm local"\n    print(global_var)  # Works\n\nprint(local_var)  # Error!\n\`\`\``,
    codeExamples: [
      {
        title: 'Simple Function',
        code: 'def greet():\n    print("Hello!")\n    print("Welcome to Python")\n\ngreet()\ngreet()\ngreet()',
        explanation: 'Function defined with def. Call with function name and (). Code runs each time called.'
      },
      {
        title: 'Function with Parameters',
        code: 'def greet(name):\n    print(f"Hello, {name}!")\n\ngreet("Ali")\ngreet("Sara")\ngreet("Ahmed")',
        explanation: 'Parameters accept values. Arguments pass values. Function works with any name.'
      },
      {
        title: 'Function with Multiple Parameters',
        code: 'def introduce(name, age, city):\n    print(f"{name} is {age} and lives in {city}")\n\nintroduce("Ali", 25, "Karachi")\nintroduce("Sara", 30, "Lahore")',
        explanation: 'Multiple parameters separated by commas. Arguments must match order.'
      },
      {
        title: 'Function with Return',
        code: 'def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(result)  # 8\n\nprint(add(10, 20))  # 30',
        explanation: 'Return sends value back. Can store in variable or use directly.'
      },
      {
        title: 'Function with Default Parameters',
        code: 'def greet(name="Guest", greeting="Hello"):\n    print(f"{greeting}, {name}!")\n\ngreet()                    # Hello, Guest!\ngreet("Ali")               # Hello, Ali!\ngreet("Ali", "Welcome")    # Welcome, Ali!',
        explanation: 'Default parameters used if no argument provided. Positional arguments still work.'
      },
      {
        title: 'Function with Multiple Returns',
        code: 'def calc(a, b):\n    return a + b, a - b, a * b\n\nsum_, diff, prod = calc(10, 5)\nprint(f"Sum: {sum_}, Diff: {diff}, Prod: {prod}")',
        explanation: 'Functions can return multiple values as tuple. Unpack into separate variables.'
      },
      {
        title: 'Lambda (Anonymous) Functions',
        code: 'add = lambda a, b: a + b\nprint(add(5, 3))  # 8\n\nsquare = lambda x: x ** 2\nprint(square(4))  # 16',
        explanation: 'Lambda creates small anonymous functions. Syntax: lambda params: expression.'
      }
    ],
    quiz: {
      id: 'python-basic-ch8-quiz',
      questions: [
        { id: 'q1', question: 'Keyword to define function?', options: ['func', 'def', 'function', 'define'], correctAnswer: 1 },
        { id: 'q2', question: 'Return sends back?', options: ['Value', 'Function', 'Error', 'Nothing'], correctAnswer: 0 },
        { id: 'q3', question: 'Can function have no return?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 0 },
        { id: 'q4', question: 'Parameter is?', options: ['Variable in definition', 'Value when calling', 'Return value', 'Function name'], correctAnswer: 0 },
        { id: 'q5', question: 'Argument is?', options: ['Variable in definition', 'Value when calling', 'Return value', 'Function name'], correctAnswer: 1 },
        { id: 'q6', question: 'Default parameter means?', options: ['Used if no argument', 'Required', 'Optional', 'Both a and c'], correctAnswer: 3 },
        { id: 'q7', question: 'Local variable scope?', options: ['Inside function', 'Everywhere', 'Outside function', 'Global'], correctAnswer: 0 },
        { id: 'q8', question: 'Lambda is?', options: ['Anonymous function', 'Class', 'Loop', 'Variable'], correctAnswer: 0 },
        { id: 'q9', question: 'Can return multiple values?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 0 },
        { id: 'q10', question: 'Function call uses?', options: ['()', '[]', '{}', '<>'], correctAnswer: 0 }
      ]
    },
    summary: 'Functions are reusable code blocks. Define with def function_name(parameters):. Parameters accept values, arguments pass values. Return sends value back. Default parameters used if no argument. Local variables only exist inside function. Lambda creates small anonymous functions: lambda x: x + 1.'
  },
  {
    id: 'python-basic-ch9-exception',
    title: 'Chapter 9: Exception Handling',
    introduction: 'Learn to handle errors gracefully. Master try-except blocks, multiple exceptions, finally, and error handling best practices.',
    topics: ['What are Exceptions?', 'Try-Except Blocks', 'Multiple Exceptions', 'Finally Clause', 'Raising Exceptions', 'Custom Error Messages'],
    content: `# Exception Handling - Error Management

## What are Exceptions?
Exceptions are errors that occur during program execution.

## Common Exceptions
- **ZeroDivisionError**: Dividing by zero
- **ValueError**: Invalid value
- **TypeError**: Wrong type
- **FileNotFoundError**: File doesn't exist
- **IndexError**: Invalid index
- **KeyError**: Invalid dictionary key

## Why Handle Exceptions?
1. **Prevent Crashes**: Program continues running
2. **User-Friendly**: Show helpful messages
3. **Debugging**: Easier to find problems
4. **Cleanup**: Close files, connections

## Try-Except Block
\`\`\`python\ntry:\n    # Code that might fail\n    result = 10 / 0\nexcept ZeroDivisionError:\n    # Handle error\n    print("Cannot divide by zero!")\n\`\`\`

## Multiple Exceptions
\`\`\`python\ntry:\n    # Risky code\n    result = int("abc")\nexcept ValueError:\n    print("Invalid number!")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")\n\`\`\`

## Catch All Exceptions
\`\`\`python\ntry:\n    result = 10 / 0\nexcept Exception as e:\n    print(f"Error: {e}")\n\`\`\`

## Finally Clause
Always executes (cleanup):

\`\`\`python\ntry:\n    file = open("data.txt")\n    # process file\nfinally:\n    file.close()  # Always closes\n\`\`\``,
    codeExamples: [
      {
        title: 'Basic Try-Except',
        code: 'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Error: Cannot divide by zero!")\n    result = 0\n\nprint(f"Result: {result}")',
        explanation: 'Try block contains risky code. Except catches specific error. Program continues instead of crashing.'
      },
      {
        title: 'Multiple Except Blocks',
        code: 'try:\n    num = int(input("Enter number: "))\n    result = 10 / num\n    print(result)\nexcept ValueError:\n    print("Error: Invalid number!")\nexcept ZeroDivisionError:\n    print("Error: Cannot divide by zero!")',
        explanation: 'Different except blocks handle different errors. Each handles specific exception type.'
      },
      {
        title: 'Catch All Exceptions',
        code: 'try:\n    result = 10 / 0\nexcept Exception as e:\n    print(f"An error occurred: {e}")\n    print(f"Error type: {type(e).__name__}")',
        explanation: 'Exception catches any error. as e stores error object. Shows error message.'
      },
      {
        title: 'Try-Except-Else',
        code: 'try:\n    result = 10 / 2\nexcept ZeroDivisionError:\n    print("Error!")\nelse:\n    print("No errors!")\n    print(f"Result: {result}")',
        explanation: 'Else runs if no exception. Code in else only executes when try succeeds.'
      },
      {
        title: 'Try-Except-Finally',
        code: 'try:\n    print("Opening file...")\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Error occurred!")\nfinally:\n    print("Always executes - cleanup here")',
        explanation: 'Finally always runs, whether error or not. Use for cleanup: close files, connections.'
      },
      {
        title: 'Complete Error Handling',
        code: 'def safe_divide(a, b):\n    try:\n        result = a / b\n        return result\n    except ZeroDivisionError:\n        return "Error: Division by zero"\n    except TypeError:\n        return "Error: Numbers required"\n    finally:\n        print("Division attempt completed")\n\nprint(safe_divide(10, 2))  # 5.0\nprint(safe_divide(10, 0))  # Error message',
        explanation: 'Complete pattern: try risky code, handle specific errors, finally for cleanup. Function returns safely.'
      }
    ],
    quiz: {
      id: 'python-basic-ch9-quiz',
      questions: [
        { id: 'q1', question: 'Keyword for error handling?', options: ['try', 'catch', 'handle', 'error'], correctAnswer: 0 },
        { id: 'q2', question: 'Catches exception?', options: ['except', 'catch', 'handle', 'error'], correctAnswer: 0 },
        { id: 'q3', question: 'Always executes?', options: ['finally', 'always', 'ensure', 'cleanup'], correctAnswer: 0 },
        { id: 'q4', question: 'Runs if no error?', options: ['else', 'except', 'finally', 'always'], correctAnswer: 0 },
        { id: 'q5', question: '10/0 raises?', options: ['ZeroDivisionError', 'ValueError', 'TypeError', 'IndexError'], correctAnswer: 0 },
        { id: 'q6', question: 'int("abc") raises?', options: ['ValueError', 'TypeError', 'ZeroDivisionError', 'IndexError'], correctAnswer: 0 },
        { id: 'q7', question: 'Can have multiple except?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 0 },
        { id: 'q8', question: 'Exception as e stores?', options: ['Error object', 'Message', 'Type', 'Code'], correctAnswer: 0 },
        { id: 'q9', question: 'Finally runs when?', options: ['Always', 'Only on error', 'Only on success', 'Never'], correctAnswer: 0 },
        { id: 'q10', question: 'Best practice?', options: ['Catch specific errors', 'Catch all', 'Ignore errors', 'No handling'], correctAnswer: 0 }
      ]
    },
    summary: 'Exception handling prevents crashes. Try block contains risky code. Except catches specific errors. Multiple except blocks handle different errors. Else runs if no exception. Finally always executes (cleanup). Catch specific errors, not all. Use for file operations, user input, network calls.'
  },
  {
    id: 'python-basic-ch10-file',
    title: 'Chapter 10: File Handling',
    introduction: 'Learn to read from and write to files. Master file operations, different file modes, context managers, and working with text files.',
    topics: ['Opening Files', 'Reading Files', 'Writing Files', 'File Modes', 'Context Managers (with)', 'Appending Files', 'File Paths'],
    content: `# File Handling - Working with Files

## Why File Handling?
Programs need to:
- Save data permanently
- Read configuration files
- Process large datasets
- Create logs and reports

## Opening Files
\`\`\`python\n# Open file\nfile = open("data.txt", "r")\n\n# Always close!\nfile.close()\n\`\`\`

## File Modes
- **"r"**: Read (default)
- **"w"**: Write (overwrites)
- **"a"**: Append (add to end)
- **"r+"**: Read and write
- **"b"**: Binary mode

## Context Manager (Recommended)
\`\`\`python\n# Automatically closes\nwith open("data.txt", "r") as file:\n    content = file.read()\n# File closed automatically\n\`\`\`

## Reading Files
\`\`\`python\nwith open("data.txt", "r") as f:\n    content = f.read()      # All content\n    \nwith open("data.txt", "r") as f:\n    lines = f.readlines()   # List of lines\n    \nwith open("data.txt", "r") as f:\n    for line in f:          # Line by line\n        print(line)\n\`\`\`

## Writing Files
\`\`\`python\n# Creates or overwrites\nwith open("output.txt", "w") as f:\n    f.write("Hello World\\n")\n    f.write("Second line\\n")\n\`\`\`

## Appending Files
\`\`\`python\n# Adds to end\nwith open("output.txt", "a") as f:\n    f.write("New line\\n")\n\`\`\``,
    codeExamples: [
      {
        title: 'Read Entire File',
        code: 'with open("data.txt", "r") as file:\n    content = file.read()\n    print(content)',
        explanation: 'with statement opens file. read() gets all content. File closes automatically.'
      },
      {
        title: 'Read File Line by Line',
        code: 'with open("data.txt", "r") as file:\n    for line in file:\n        print(line.strip())',
        explanation: 'Loop through file line by line. strip() removes newline character.'
      },
      {
        title: 'Read All Lines as List',
        code: 'with open("data.txt", "r") as file:\n    lines = file.readlines()\n    print(lines)\n    print(f"Total lines: {len(lines)}")',
        explanation: 'readlines() returns list of all lines. Each line includes \\n.'
      },
      {
        title: 'Write to File',
        code: 'with open("output.txt", "w") as file:\n    file.write("Line 1\\n")\n    file.write("Line 2\\n")\n    file.write("Line 3\\n")\n\nprint("File written!")',
        explanation: '"w" mode creates or overwrites file. write() adds text. Include \\n for new lines.'
      },
      {
        title: 'Append to File',
        code: 'with open("output.txt", "a") as file:\n    file.write("Appended line\\n")\n    file.write("Another line\\n")\n\nprint("Lines appended!")',
        explanation: '"a" mode adds to end without deleting existing content.'
      },
      {
        title: 'Read and Write Combined',
        code: '# First write\nwith open("data.txt", "w") as f:\n    f.write("Hello\\n")\n    f.write("World\\n")\n\n# Then read\nwith open("data.txt", "r") as f:\n    content = f.read()\n    print(content)',
        explanation: 'Combine write and read operations. Write first, then read to verify.'
      }
    ],
    quiz: {
      id: 'python-basic-ch10-quiz',
      questions: [
        { id: 'q1', question: 'Open file for reading?', options: ['open("file.txt", "r")', 'open("file.txt", "w")', 'read("file.txt")', 'file.open()'], correctAnswer: 0 },
        { id: 'q2', question: 'Write mode?', options: ['"w"', '"r"', '"a"', '"rw"'], correctAnswer: 0 },
        { id: 'q3', question: 'Append mode?', options: ['"a"', '"w"', '"r"', '"app"'], correctAnswer: 0 },
        { id: 'q4', question: 'Read all content?', options: ['read()', 'readAll()', 'getContent()', 'load()'], correctAnswer: 0 },
        { id: 'q5', question: 'Read all lines?', options: ['readlines()', 'read()', 'getLines()', 'lines()'], correctAnswer: 0 },
        { id: 'q6', question: 'with statement does?', options: ['Auto closes file', 'Opens file', 'Creates file', 'Deletes file'], correctAnswer: 0 },
        { id: 'q7', question: 'Write adds newline?', options: ['\\n', '\\t', '\\r', '\\s'], correctAnswer: 0 },
        { id: 'q8', question: '"w" mode does?', options: ['Overwrites', 'Appends', 'Reads', 'Copies'], correctAnswer: 0 },
        { id: 'q9', question: 'Close file needed with with?', options: ['No', 'Yes', 'Sometimes', 'Always'], correctAnswer: 0 },
        { id: 'q10', question: 'strip() does?', options: ['Removes whitespace', 'Adds space', 'Copies', 'Deletes'], correctAnswer: 0 }
      ]
    },
    summary: 'File handling reads/writes data. open("file", "mode") opens files. Modes: "r" read, "w" write (overwrites), "a" append. read() gets all content, readlines() gets list of lines. with statement auto-closes files. Always use with for safety. write() adds text, include \\n for new lines.'
  },
  {
    id: 'python-basic-ch11-oop',
    title: 'Chapter 11: Basic OOP Introduction',
    introduction: 'Introduction to Object-Oriented Programming. Learn classes, objects, attributes, methods, and basic OOP concepts.',
    topics: ['What is OOP?', 'Classes and Objects', '__init__ Method', 'Attributes', 'Methods', 'Self Keyword', 'Creating Multiple Objects'],
    content: `# Basic OOP Introduction

## What is OOP?
Object-Oriented Programming organizes code using objects and classes.

## Why OOP?
1. **Organization**: Group related data and functions
2. **Reusability**: Create multiple objects from one class
3. **Modularity**: Easier to maintain and debug
4. **Real-world modeling**: Objects represent real things

## Classes and Objects
- **Class**: Blueprint/template
- **Object**: Instance of a class

\`\`\`python\nclass Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def bark(self):\n        return "Woof!"\n\n# Create objects\nmy_dog = Dog("Buddy", 3)\nyour_dog = Dog("Max", 5)\n\`\`\`

## __init__ Method
Constructor - runs when object created:

\`\`\`python\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\`\`\`

## Self Keyword
Refers to current object:

\`\`\`python\nclass Car:\n    def __init__(self, brand):\n        self.brand = brand  # self.brand is attribute\n    \n    def display(self):\n        return self.brand\n\`\`\``,
    codeExamples: [
      {
        title: 'Simple Class',
        code: 'class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def bark(self):\n        return f"{self.name} says Woof!"\n\nmy_dog = Dog("Buddy", 3)\nprint(my_dog.name)  # Buddy\nprint(my_dog.age)   # 3\nprint(my_dog.bark())  # Buddy says Woof!',
        explanation: 'Class defines blueprint. __init__ initializes object. self refers to current object. Create objects with ClassName().'
      },
      {
        title: 'Multiple Objects',
        code: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f"Hi, I am {self.name}"\n\nperson1 = Person("Ali", 25)\nperson2 = Person("Sara", 30)\n\nprint(person1.greet())  # Hi, I am Ali\nprint(person2.greet())  # Hi, I am Sara',
        explanation: 'One class creates multiple objects. Each has its own data. Methods work independently.'
      },
      {
        title: 'Class with Multiple Methods',
        code: 'class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n        self.marks = []\n    \n    def add_mark(self, mark):\n        self.marks.append(mark)\n    \n    def average(self):\n        if len(self.marks) > 0:\n            return sum(self.marks) / len(self.marks)\n        return 0\n\nstudent = Student("Ali", 10)\nstudent.add_mark(85)\nstudent.add_mark(90)\nprint(f"Average: {student.average()}")',
        explanation: 'Classes can have multiple methods. Methods can modify attributes. Objects maintain state.'
      }
    ],
    quiz: {
      id: 'python-basic-ch11-quiz',
      questions: [
        { id: 'q1', question: 'OOP stands for?', options: ['Object-Oriented Programming', 'Object Original Programming', 'Oriented Object Program', 'Operational Object Process'], correctAnswer: 0 },
        { id: 'q2', question: 'Class is?', options: ['Blueprint', 'Object', 'Function', 'Variable'], correctAnswer: 0 },
        { id: 'q3', question: 'Object is?', options: ['Instance of class', 'Blueprint', 'Function', 'Module'], correctAnswer: 0 },
        { id: 'q4', question: 'Constructor method?', options: ['__init__', '__new__', '__create__', '__start__'], correctAnswer: 0 },
        { id: 'q5', question: 'self refers to?', options: ['Current object', 'Class', 'Function', 'Module'], correctAnswer: 0 },
        { id: 'q6', question: 'Create object syntax?', options: ['ClassName()', 'new ClassName()', 'create ClassName()', 'object ClassName()'], correctAnswer: 0 },
        { id: 'q7', question: 'Access attribute?', options: ['obj.attr', 'obj->attr', 'obj::attr', 'obj.attr()'], correctAnswer: 0 },
        { id: 'q8', question: 'Can have multiple objects?', options: ['Yes', 'No', 'Sometimes', 'Never'], correctAnswer: 0 },
        { id: 'q9', question: 'Methods are?', options: ['Functions in class', 'Variables', 'Objects', 'Attributes'], correctAnswer: 0 },
        { id: 'q10', question: '__init__ runs when?', options: ['Object created', 'Class defined', 'Method called', 'Program starts'], correctAnswer: 0 }
      ]
    },
    summary: 'OOP organizes code with objects. Class is blueprint, object is instance. __init__ is constructor - runs when object created. self refers to current object. Attributes store data, methods are functions. Create objects: obj = ClassName(). Access: obj.attribute, obj.method(). Multiple objects from one class.'
  },
  {
    id: 'python-basic-ch12-project',
    title: 'Chapter 12: Basic Python Project',
    introduction: 'Combine all basic concepts into a complete project. Build a Student Management System using variables, functions, file handling, and OOP.',
    topics: ['Project Planning', 'Code Structure', 'Implementing Features', 'File Operations', 'Error Handling', 'Testing'],
    content: `# Basic Python Project - Student Management System

## Project Overview
Create a complete Student Management System that:
1. Adds new students
2. Views all students
3. Searches for students
4. Updates student info
5. Deletes students
6. Saves data to file

## Features
- Menu-driven interface
- Store student data (name, age, grade, marks)
- Calculate averages
- Save/load from file
- Error handling

## Code Structure
1. Student class
2. Functions for each operation
3. Main menu loop
4. File handling`,
    codeExamples: [
      {
        title: 'Complete Student Management System',
        code: 'class Student:\n    def __init__(self, name, age, grade):\n        self.name = name\n        self.age = age\n        self.grade = grade\n        self.marks = []\n    \n    def add_mark(self, mark):\n        self.marks.append(mark)\n    \n    def average(self):\n        if len(self.marks) > 0:\n            return sum(self.marks) / len(self.marks)\n        return 0\n    \n    def __str__(self):\n        return f"{self.name}, {self.age}, Grade {self.grade}, Avg: {self.average():.1f}"\n\nstudents = []\n\ndef add_student():\n    name = input("Name: ")\n    age = int(input("Age: "))\n    grade = input("Grade: ")\n    student = Student(name, age, grade)\n    students.append(student)\n    print("Student added!")\n\ndef view_students():\n    if not students:\n        print("No students!")\n        return\n    for s in students:\n        print(s)\n\ndef search_student():\n    name = input("Search name: ")\n    for s in students:\n        if s.name.lower() == name.lower():\n            print(f"Found: {s}")\n            return\n    print("Not found!")\n\ndef save_to_file():\n    with open("students.txt", "w") as f:\n        for s in students:\n            f.write(f"{s.name},{s.age},{s.grade},{s.marks}\\n")\n    print("Saved!")\n\ndef main():\n    while True:\n        print("\\n=== Student Management ===")\n        print("1. Add Student")\n        print("2. View Students")\n        print("3. Search Student")\n        print("4. Save to File")\n        print("5. Exit")\n        \n        choice = input("Choice: ")\n        \n        if choice == "1":\n            add_student()\n        elif choice == "2":\n            view_students()\n        elif choice == "3":\n            search_student()\n        elif choice == "4":\n            save_to_file()\n        elif choice == "5":\n            print("Bye!")\n            break\n        else:\n            print("Invalid!")\n\nif __name__ == "__main__":\n    main()',
        explanation: 'Complete project combining all basics: Class for Student, functions for operations, list to store objects, file handling, menu loop. Run and test all features!'
      }
    ],
    quiz: {
      id: 'python-basic-ch12-quiz',
      questions: [
        { id: 'q1', question: 'Class defines?', options: ['Blueprint', 'Object', 'Function', 'Variable'], correctAnswer: 0 },
        { id: 'q2', question: '__str__ returns?', options: ['String representation', 'Name', 'Age', 'Marks'], correctAnswer: 0 },
        { id: 'q3', question: 'List stores?', options: ['Multiple items', 'One item', 'Only numbers', 'Only strings'], correctAnswer: 0 },
        { id: 'q4', question: 'Append adds to?', options: ['End of list', 'Start', 'Middle', 'Random'], correctAnswer: 0 },
        { id: 'q5', question: 'File mode for write?', options: ['"w"', '"r"', '"a"', '"rw"'], correctAnswer: 0 },
        { id: 'q6', question: 'while True creates?', options: ['Infinite loop', 'One iteration', 'No loop', 'Error'], correctAnswer: 0 },
        { id: 'q7', question: 'if __name__ == "__main__" checks?', options: ['Direct run', 'Import', 'Both', 'Neither'], correctAnswer: 0 },
        { id: 'q8', question: 'input() returns?', options: ['String', 'Integer', 'Float', 'Boolean'], correctAnswer: 0 },
        { id: 'q9', question: 'int() converts to?', options: ['Integer', 'String', 'Float', 'Boolean'], correctAnswer: 0 },
        { id: 'q10', question: 'f-string uses?', options: ['f"text {var}"', '"text" + var', '"text %s" % var', 'format()'], correctAnswer: 0 }
      ]
    },
    summary: 'Project combines all basic Python concepts: Classes define Student blueprint. Objects store individual students. List holds multiple students. Functions handle operations. File handling saves data. Menu loop provides interface. Error handling prevents crashes. Test all features and extend with your own ideas!'
  }
];
