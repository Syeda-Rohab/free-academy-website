// Complete Python Advanced Course - Chapters 11-15

import { Chapter } from './types';

export const pythonAdvancedChapters2: Chapter[] = [
  {
    id: 'python-advanced-ch11-collections',
    title: 'Chapter 11: Collections Module',
    introduction: 'Master Python\'s collections module for advanced data structures. Learn Counter, defaultdict, OrderedDict, namedtuple, and deque.',
    topics: ['Counter', 'defaultdict', 'OrderedDict', 'namedtuple', 'deque', 'ChainMap', 'defaultdict vs dict', 'Performance Benefits'],
    content: `# Collections Module

## 1. Counter
Count hashable objects:

\`\`\`python
from collections import Counter

# Count characters
text = "hello world"
char_count = Counter(text)
print(char_count)  # Counter({'l': 3, 'o': 2, ...})

# Count words
words = ["apple", "banana", "apple", "orange"]
word_count = Counter(words)
print(word_count)  # Counter({'apple': 2, ...})

# Most common
print(word_count.most_common(2))  # [('apple', 2), ...]
\`\`\`

## 2. defaultdict
Dict with default values:

\`\`\`python
from collections import defaultdict

# Default int (0)
d = defaultdict(int)
d["count"] += 1  # No KeyError!
print(d["count"])  # 1

# Default list
d = defaultdict(list)
d["fruits"].append("apple")
print(d["fruits"])  # ['apple']

# Default set
d = defaultdict(set)
d["tags"].add("python")
\`\`\`

## 3. OrderedDict
Dict that remembers insertion order:

\`\`\`python
from collections import OrderedDict

od = OrderedDict()
od["first"] = 1
od["second"] = 2
od["third"] = 3

# Items in insertion order
for key, value in od.items():
    print(key, value)
\`\`\`

## 4. namedtuple
Lightweight immutable objects:

\`\`\`python
from collections import namedtuple

# Define
Person = namedtuple('Person', ['name', 'age', 'city'])

# Create
p = Person("Ali", 25, "Karachi")
print(p.name)  # Ali
print(p.age)   # 25

# Unpack
name, age, city = p
\`\`\`

## 5. deque
Double-ended queue (fast append/pop):

\`\`\`python
from collections import deque

d = deque([1, 2, 3])
d.append(4)      # Right
d.appendleft(0)  # Left
d.pop()          # Right
d.popleft()      # Left

# Rotate
d.rotate(1)  # Shift right
\`\`\``,
    codeExamples: [
      {
        title: 'Counter for Frequency',
        code: 'from collections import Counter\n\n# Count letters in word\nword = "programming"\nletter_count = Counter(word)\nprint(letter_count)  # Counter({\'r\': 2, \'m\': 2, ...})\n\n# Most common letters\nprint(letter_count.most_common(3))  # [(\'r\', 2), (\'m\', 2), (\'o\', 1)]\n\n# Combine counters\nc1 = Counter(a=3, b=1)\nc2 = Counter(a=1, b=2)\nprint(c1 + c2)  # Counter({\'a\': 4, \'b\': 3})',
        explanation: 'Counter counts hashable objects. most_common(n) returns top n. Can add/subtract counters.'
      },
      {
        title: 'defaultdict for Grouping',
        code: 'from collections import defaultdict\n\n# Group words by first letter\nwords = ["apple", "banana", "apricot", "blueberry", "cherry"]\ngrouped = defaultdict(list)\n\nfor word in words:\n    grouped[word[0]].append(word)\n\nprint(grouped)  # defaultdict(list, {\'a\': [\'apple\', \'apricot\'], ...})\n\n# Count occurrences\ncounts = defaultdict(int)\nfor word in words:\n    counts[len(word)] += 1\n\nprint(counts)  # defaultdict(int, {5: 2, 9: 2, 6: 1})',
        explanation: 'defaultdict provides default value for missing keys. list for grouping, int for counting.'
      },
      {
        title: 'namedtuple for Data Structures',
        code: 'from collections import namedtuple\n\n# Define structure\nStudent = namedtuple(\'Student\', [\'name\', \'grade\', \'age\'])\n\n# Create instances\ns1 = Student("Ali", "A", 20)\ns2 = Student("Sara", "B", 21)\n\n# Access by name\nprint(s1.name)   # Ali\nprint(s1.grade)  # A\n\n# Convert to dict\nprint(s1._asdict())  # OrderedDict([...])\n\n# Replace (returns new instance)\ns3 = s1._replace(age=21)\nprint(s3)  # Student(name=\'Ali\', grade=\'A\', age=21)',
        explanation: 'namedtuple creates lightweight classes. Access by field name. Immutable. _asdict(), _replace() methods.'
      },
      {
        title: 'deque for Queue/Stack',
        code: 'from collections import deque\n\n# As queue (FIFO)\nqueue = deque()\nqueue.append("first")\nqueue.append("second")\nprint(queue.popleft())  # "first"\n\n# As stack (LIFO)\nstack = deque()\nstack.append("first")\nstack.append("second")\nprint(stack.pop())  # "second"\n\n# Fixed-size buffer\nbuffer = deque(maxlen=5)\nfor i in range(10):\n    buffer.append(i)\nprint(buffer)  # deque([5, 6, 7, 8, 9], maxlen=5)',
        explanation: 'deque supports O(1) append/pop from both ends. maxlen creates fixed-size buffer.'
      },
      {
        title: 'OrderedDict for LRU Cache',
        code: 'from collections import OrderedDict\n\nclass LRUCache:\n    def __init__(self, capacity):\n        self.cache = OrderedDict()\n        self.capacity = capacity\n    \n    def get(self, key):\n        if key in self.cache:\n            self.cache.move_to_end(key)\n            return self.cache[key]\n        return -1\n    \n    def put(self, key, value):\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.capacity:\n            self.cache.popitem(last=False)\n\ncache = LRUCache(2)\ncache.put(1, "a")\ncache.put(2, "b")\nprint(cache.get(1))  # "a"',
        explanation: 'OrderedDict maintains insertion order. move_to_end() updates position. popitem(last=False) removes oldest.'
      }
    ],
    quiz: {
      id: 'python-advanced-ch11-quiz',
      questions: [
        { id: 'q1', question: 'Counter is for?', options: ['Counting', 'Sorting', 'Filtering', 'Mapping'], correctAnswer: 0 },
        { id: 'q2', question: 'defaultdict provides?', options: ['Default values', 'Empty dict', 'None', 'Error'], correctAnswer: 0 },
        { id: 'q3', question: 'OrderedDict remembers?', options: ['Insertion order', 'Alphabetical', 'Value order', 'Random'], correctAnswer: 0 },
        { id: 'q4', question: 'namedtuple creates?', options: ['Immutable objects', 'Mutable', 'List', 'Set'], correctAnswer: 0 },
        { id: 'q5', question: 'deque is?', options: ['Double-ended queue', 'Single queue', 'Stack', 'List'], correctAnswer: 0 },
        { id: 'q6', question: 'Counter.most_common(2) returns?', options: ['Top 2', 'Bottom 2', 'All', 'Random'], correctAnswer: 0 },
        { id: 'q7', question: 'defaultdict(int) defaults to?', options: ['0', '1', 'None', ''], correctAnswer: 0 },
        { id: 'q8', question: 'defaultdict(list) defaults to?', options: ['[]', '{}', 'None', '0'], correctAnswer: 0 },
        { id: 'q9', question: 'namedtuple access with?', options: ['.field', '[field]', 'get()', '[]'], correctAnswer: 0 },
        { id: 'q10', question: 'deque.append() adds to?', options: ['Right', 'Left', 'Middle', 'Random'], correctAnswer: 0 },
        { id: 'q11', question: 'deque.appendleft() adds to?', options: ['Left', 'Right', 'Middle', 'Random'], correctAnswer: 0 },
        { id: 'q12', question: 'maxlen creates?', options: ['Fixed size', 'Unlimited', 'Dynamic', 'Variable'], correctAnswer: 0 }
      ]
    },
    summary: 'Collections module: Counter counts objects (most_common). defaultdict provides default values (int=0, list=[]). OrderedDict remembers insertion order. namedtuple creates immutable objects with named fields. deque is double-ended queue (O(1) append/pop). maxlen creates fixed-size buffer.'
  },
  {
    id: 'python-advanced-ch12-numpy',
    title: 'Chapter 12: NumPy and Pandas Introduction',
    introduction: 'Introduction to data science with NumPy arrays and Pandas DataFrames. Learn array operations, data manipulation, and analysis.',
    topics: ['NumPy Arrays', 'Array Operations', 'Broadcasting', 'Indexing and Slicing', 'Pandas DataFrame', 'Series', 'Data Selection', 'Basic Statistics', 'Data Cleaning'],
    content: `# NumPy and Pandas Introduction

## 1. NumPy Arrays
\`\`\`python
import numpy as np\n\n# Create arrays\narr = np.array([1, 2, 3, 4, 5])\narr2d = np.array([[1, 2], [3, 4]])\n\n# Special arrays\nzeros = np.zeros((3, 3))\nones = np.ones((3, 3))\nrange_arr = np.arange(0, 10, 2)\nrandom_arr = np.random.rand(3, 3)\n\`\`\`

## 2. Array Operations
\`\`\`python\narr = np.array([1, 2, 3, 4, 5])\n\n# Element-wise operations\narr + 10      # [11, 12, 13, 14, 15]\narr * 2       # [2, 4, 6, 8, 10]\narr ** 2      # [1, 4, 9, 16, 25]\n\n# Aggregations\narr.sum()     # 15\narr.mean()    # 3.0\narr.std()     # Standard deviation\narr.max()     # 5\narr.min()     # 1\n\`\`\`

## 3. Broadcasting
\`\`\`python\na = np.array([[1, 2, 3], [4, 5, 6]])\nb = np.array([10, 20, 30])\n\nresult = a + b  # [[11, 22, 33], [14, 25, 36]]\n\`\`\`

## 4. Indexing and Slicing
\`\`\`python\narr = np.array([1, 2, 3, 4, 5])\narr[0]      # 1\narr[1:4]    # [2, 3, 4]\narr[arr > 3] # [4, 5] (boolean indexing)\n\`\`\`

## 5. Pandas DataFrame
\`\`\`python\nimport pandas as pd\n\n# Create DataFrame\ndf = pd.DataFrame({\n    'Name': ['Ali', 'Sara', 'Ahmed'],\n    'Age': [20, 21, 22],\n    'Grade': ['A', 'B', 'A']\n})\n\n# View data\ndf.head()      # First rows\ndf.info()      # Info about df\ndf.describe()  # Statistics\n\`\`\`

## 6. Data Selection
\`\`\`python\ndf['Name']           # Column\ndf.loc[0]            # Row by label\ndf.iloc[0]           # Row by position\ndf[df['Age'] > 20]   # Filtered rows\n\`\`\``,
    codeExamples: [
      {
        title: 'NumPy Array Basics',
        code: 'import numpy as np\n\n# Create arrays\narr = np.array([1, 2, 3, 4, 5])\narr2d = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Array properties\nprint(f"Shape: {arr.shape}")      # (5,)\nprint(f"Dimensions: {arr.ndim}")  # 1\nprint(f"Size: {arr.size}")        # 5\n\n# 2D array indexing\nprint(arr2d[0, 1])    # 2\nprint(arr2d[:, 1])    # [2, 5] (column)\nprint(arr2d[0, :])    # [1, 2, 3] (row)',
        explanation: 'NumPy arrays have shape, ndim, size. Index with [row, col] for 2D. : selects all.'
      },
      {
        title: 'NumPy Operations',
        code: 'import numpy as np\n\narr = np.array([1, 2, 3, 4, 5])\n\n# Element-wise\nprint(arr + 10)   # [11 12 13 14 15]\nprint(arr * 2)    # [ 2  4  6  8 10]\nprint(arr ** 2)   # [ 1  4  9 16 25]\n\n# Aggregations\nprint(f"Sum: {arr.sum()}")      # 15\nprint(f"Mean: {arr.mean()}")    # 3.0\nprint(f"Std: {arr.std()}")      # 1.414\nprint(f"Max: {arr.max()}")      # 5\nprint(f"Min: {arr.min()}")      # 1',
        explanation: 'NumPy operations are element-wise. Aggregations: sum, mean, std, max, min.'
      },
      {
        title: 'Boolean Indexing',
        code: 'import numpy as np\n\narr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])\n\n# Boolean conditions\nprint(arr > 5)           # [False, ..., True, True]\nprint(arr[arr > 5])      # [6, 7, 8, 9, 10]\nprint(arr[arr % 2 == 0]) # [2, 4, 6, 8, 10]\nprint(arr[(arr > 3) & (arr < 8)])  # [4, 5, 6, 7]',
        explanation: 'Boolean indexing filters arrays. & for and, | for or, ~ for not.'
      },
      {
        title: 'Pandas DataFrame Creation',
        code: 'import pandas as pd\n\n# From dictionary\ndf = pd.DataFrame({\n    "Name": ["Ali", "Sara", "Ahmed", "Fatima"],\n    "Age": [20, 21, 22, 20],\n    "Grade": ["A", "B", "A", "A+"],\n    "Marks": [85, 78, 92, 95]\n})\n\nprint(df)\nprint(f"\\nShape: {df.shape}")\nprint(f"\\nColumns: {df.columns}")\nprint(f"\\nIndex: {df.index}")',
        explanation: 'DataFrame from dictionary. Columns become DataFrame columns. Index auto-generated.'
      },
      {
        title: 'Pandas Data Selection',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "Name": ["Ali", "Sara", "Ahmed"],\n    "Age": [20, 21, 22],\n    "Marks": [85, 78, 92]\n})\n\n# Column selection\nprint(df["Name"])      # Series\nprint(df[["Name", "Age"]])  # DataFrame\n\n# Row selection\nprint(df.loc[0])       # By label\nprint(df.iloc[0])      # By position\n\n# Filtered rows\nprint(df[df["Marks"] > 80])\nprint(df[(df["Age"] > 20) & (df["Marks"] > 80)])',
        explanation: 'loc[] by label, iloc[] by position. Boolean filtering for conditions.'
      },
      {
        title: 'Pandas Statistics',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "Marks": [85, 78, 92, 95, 88],\n    "Age": [20, 21, 22, 20, 21]\n})\n\n# Basic statistics\nprint(df.describe())\nprint("Mean Marks:", df["Marks"].mean())\nprint("Median Marks:", df["Marks"].median())\nprint("Std Marks:", df["Marks"].std())\n\n# Group by\ngrades = pd.DataFrame({\n    "Grade": ["A", "B", "A", "A", "B"],\n    "Marks": [85, 78, 92, 95, 80]\n})\nprint(grades.groupby("Grade")["Marks"].mean())',
        explanation: 'describe() gives statistics. mean, median, std for aggregations. groupby for grouping.'
      }
    ],
    quiz: {
      id: 'python-advanced-ch12-quiz',
      questions: [
        { id: 'q1', question: 'NumPy is for?', options: ['Numerical computing', 'Web dev', 'GUI', 'Database'], correctAnswer: 0 },
        { id: 'q2', question: 'NumPy array is?', options: ['ndarray', 'array', 'list', 'tuple'], correctAnswer: 0 },
        { id: 'q3', question: 'arr.shape returns?', options: ['Tuple', 'List', 'Int', 'String'], correctAnswer: 0 },
        { id: 'q4', question: 'arr.sum() does?', options: ['Sum all', 'Count', 'Average', 'Max'], correctAnswer: 0 },
        { id: 'q5', question: 'Boolean indexing uses?', options: ['Conditions', 'Index', 'Label', 'Key'], correctAnswer: 0 },
        { id: 'q6', question: 'Pandas DataFrame is?', options: ['2D table', '1D array', '3D cube', 'List'], correctAnswer: 0 },
        { id: 'q7', question: 'Pandas Series is?', options: ['1D array', '2D table', '3D cube', 'Dict'], correctAnswer: 0 },
        { id: 'q8', question: 'df.head() returns?', options: ['First rows', 'Last rows', 'All rows', 'Columns'], correctAnswer: 0 },
        { id: 'q9', question: 'df.loc[] uses?', options: ['Label', 'Position', 'Index', 'Key'], correctAnswer: 0 },
        { id: 'q10', question: 'df.iloc[] uses?', options: ['Position', 'Label', 'Index', 'Key'], correctAnswer: 0 },
        { id: 'q11', question: 'groupby groups by?', options: ['Column', 'Row', 'Index', 'Value'], correctAnswer: 0 },
        { id: 'q12', question: 'describe() shows?', options: ['Statistics', 'Data', 'Columns', 'Index'], correctAnswer: 0 }
      ]
    },
    summary: 'NumPy: ndarray for numerical computing. Operations are element-wise. Broadcasting aligns arrays. Boolean indexing filters. Aggregations: sum, mean, std, max, min. Pandas: DataFrame (2D table), Series (1D). loc[] by label, iloc[] by position. describe() for statistics. groupby() for grouping.'
  },
  {
    id: 'python-advanced-ch13-web',
    title: 'Chapter 13: Web Frameworks Introduction',
    introduction: 'Introduction to Python web frameworks. Learn Flask basics, routing, templates, and building simple web applications.',
    topics: ['Flask Basics', 'Routing', 'Templates', 'Forms', 'Sessions', 'Redirects', 'API Endpoints', 'Database Integration', 'Deployment Basics'],
    content: `# Web Frameworks - Flask Introduction

## 1. Flask Basics
\`\`\`python
from flask import Flask\n\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return "Hello, World!"\n\nif __name__ == '__main__':\n    app.run(debug=True)\n\`\`\`

## 2. Routing
\`\`\`python\n@app.route('/about')\ndef about():\n    return "About Page"\n\n@app.route('/user/<name>')\ndef user(name):\n    return f"Hello {name}"\n\n@app.route('/post/<int:post_id>')\ndef post(post_id):\n    return f"Post {post_id}"\n\`\`\`

## 3. Templates (Jinja2)
\`\`\`python\nfrom flask import render_template\n\n@app.route('/hello/<name>')\ndef hello(name):\n    return render_template('hello.html', name=name)\n\n# templates/hello.html\n# <h1>Hello {{ name }}!</h1>\n# {% if name %}\n#   <p>Welcome!</p>\n# {% endif %}\n\`\`\`

## 4. Forms
\`\`\`python\nfrom flask import request\n\n@app.route('/login', methods=['GET', 'POST'])\ndef login():\n    if request.method == 'POST':\n        username = request.form['username']\n        return f"Welcome {username}"\n    return render_template('login.html')\n\`\`\`

## 5. JSON API
\`\`\`python\nfrom flask import jsonify\n\n@app.route('/api/users')\ndef get_users():\n    return jsonify([\n        {"id": 1, "name": "Ali"},\n        {"id": 2, "name": "Sara"}\n    ])\n\`\`\``,
    codeExamples: [
      {
        title: 'Basic Flask App',
        code: 'from flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef home():\n    return "<h1>Welcome to My Website</h1>"\n\n@app.route("/about")\ndef about():\n    return "<h1>About Page</h1>"\n\n@app.route("/contact")\ndef contact():\n    return "<h1>Contact Us</h1>"\n\nif __name__ == "__main__":\n    app.run(debug=True)\n\n# Run: python app.py\n# Visit: http://localhost:5000',
        explanation: 'Flask app with routes. @app.route decorator maps URLs to functions. debug=True for development.'
      },
      {
        title: 'Dynamic Routes',
        code: 'from flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/user/<name>")\ndef greet_user(name):\n    return f"<h1>Hello, {name}!</h1>"\n\n@app.route("/post/<int:post_id>")\ndef get_post(post_id):\n    return f"<h1>Post #{post_id}</h1>"\n\n@app.route("/multiply/<int:a>/<int:b>")\ndef multiply(a, b):\n    return f"<h1>{a} × {b} = {a * b}</h1>"\n\nif __name__ == "__main__":\n    app.run(debug=True)',
        explanation: 'Dynamic routes with <variable>. Converters: <int:id>, <float:price>, <string:name>.'
      },
      {
        title: 'HTML Templates',
        code: 'from flask import Flask, render_template\n\napp = Flask(__name__)\n\n@app.route("/hello/<name>")\ndef hello(name):\n    return render_template("hello.html", name=name, title="Greeting")\n\n# templates/hello.html:\n# <!DOCTYPE html>\n# <html>\n# <head><title>{{ title }}</title></head>\n# <body>\n#   <h1>Hello, {{ name }}!</h1>\n#   {% if name == "Admin" %}\n#     <p>Admin access granted</p>\n#   {% endif %}\n# </body>\n# </html>',
        explanation: 'render_template renders HTML files. {{ variable }} for interpolation. {% %} for control flow.'
      },
      {
        title: 'Form Handling',
        code: 'from flask import Flask, request, render_template\n\napp = Flask(__name__)\n\n@app.route("/login", methods=["GET", "POST"])\ndef login():\n    if request.method == "POST":\n        username = request.form.get("username")\n        password = request.form.get("password")\n        # Validate and process\n        return f"Welcome, {username}!"\n    return render_template("login.html")\n\n# templates/login.html:\n# <form method="POST">\n#   <input type="text" name="username">\n#   <input type="password" name="password">\n#   <button type="submit">Login</button>\n# </form>',
        explanation: 'methods=["GET", "POST"] accepts both. request.form gets POST data. request.method checks method.'
      },
      {
        title: 'JSON API Endpoint',
        code: 'from flask import Flask, jsonify, request\n\napp = Flask(__name__)\n\n# Sample data\nusers = [\n    {"id": 1, "name": "Ali", "age": 25},\n    {"id": 2, "name": "Sara", "age": 22}\n]\n\n@app.route("/api/users", methods=["GET"])\ndef get_users():\n    return jsonify(users)\n\n@app.route("/api/users/<int:user_id>", methods=["GET"])\ndef get_user(user_id):\n    user = next((u for u in users if u["id"] == user_id), None)\n    if user:\n        return jsonify(user)\n    return jsonify({"error": "User not found"}), 404\n\n@app.route("/api/users", methods=["POST"])\ndef create_user():\n    data = request.get_json()\n    users.append(data)\n    return jsonify(data), 201\n\nif __name__ == "__main__":\n    app.run(debug=True)',
        explanation: 'jsonify() creates JSON responses. GET retrieves, POST creates. Status codes: 200 OK, 201 Created, 404 Not Found.'
      }
    ],
    quiz: {
      id: 'python-advanced-ch13-quiz',
      questions: [
        { id: 'q1', question: 'Flask is?', options: ['Web framework', 'Database', 'GUI', 'Testing'], correctAnswer: 0 },
        { id: 'q2', question: '@app.route does?', options: ['Maps URL', 'Creates app', 'Runs server', 'Handles errors'], correctAnswer: 0 },
        { id: 'q3', question: 'debug=True enables?', options: ['Auto-reload', 'Faster', 'Slower', 'Production'], correctAnswer: 0 },
        { id: 'q4', question: '<name> in route is?', options: ['Variable', 'Static', 'Fixed', 'Constant'], correctAnswer: 0 },
        { id: 'q5', question: 'render_template renders?', options: ['HTML', 'JSON', 'Text', 'XML'], correctAnswer: 0 },
        { id: 'q6', question: '{{ name }} is?', options: ['Jinja2 syntax', 'Python', 'HTML', 'CSS'], correctAnswer: 0 },
        { id: 'q7', question: 'request.form gets?', options: ['POST data', 'GET data', 'JSON', 'Headers'], correctAnswer: 0 },
        { id: 'q8', question: 'methods=["POST"] allows?', options: ['POST only', 'GET only', 'Both', 'None'], correctAnswer: 0 },
        { id: 'q9', question: 'jsonify() returns?', options: ['JSON', 'HTML', 'Text', 'XML'], correctAnswer: 0 },
        { id: 'q10', question: 'Status 200 means?', options: ['OK', 'Created', 'Not Found', 'Error'], correctAnswer: 0 },
        { id: 'q11', question: 'Status 404 means?', options: ['Not Found', 'OK', 'Created', 'Error'], correctAnswer: 0 },
        { id: 'q12', question: 'Status 201 means?', options: ['Created', 'OK', 'Not Found', 'Error'], correctAnswer: 0 }
      ]
    },
    summary: 'Flask web framework: Flask(__name__) creates app. @app.route maps URLs. Dynamic routes with <variable>. render_template renders HTML. Jinja2: {{ var }} for output, {% %} for logic. request.form for POST data. methods=["GET", "POST"]. jsonify() for JSON APIs. Status codes: 200 OK, 201 Created, 404 Not Found.'
  },
  {
    id: 'python-advanced-ch14-testing',
    title: 'Chapter 14: Testing and Debugging',
    introduction: 'Learn to write tests and debug Python code. Master unittest, pytest, debugging techniques, and best practices.',
    topics: ['Why Testing?', 'unittest Module', 'Test Cases', 'Test Fixtures', 'pytest Basics', 'Assertions', 'Mocking', 'Debugging with pdb', 'Logging', 'Test-Driven Development'],
    content: `# Testing and Debugging

## 1. Why Testing?
- Catch bugs early
- Ensure code works
- Prevent regressions
- Document behavior

## 2. unittest Module
\`\`\`python
import unittest\n\ndef add(a, b):\n    return a + b\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(2, 3), 5)\n        self.assertEqual(add(-1, 1), 0)\n    \n    def test_add_floats(self):\n        self.assertAlmostEqual(add(0.1, 0.2), 0.3, places=7)\n\nif __name__ == '__main__':\n    unittest.main()\n\`\`\`

## 3. Test Fixtures
\`\`\`python\nclass TestDatabase(unittest.TestCase):\n    def setUp(self):\n        # Run before each test\n        self.db = create_database()\n    \n    def tearDown(self):\n        # Run after each test\n        self.db.close()\n    \n    def test_query(self):\n        result = self.db.query("SELECT *")\n        self.assertIsNotNone(result)\n\`\`\`

## 4. pytest Basics
\`\`\`python\n# test_math.py\ndef add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 0\n\n# Run: pytest test_math.py\n\`\`\`

## 5. Common Assertions
\`\`\`python\nassertEqual(a, b)       # a == b\nassertNotEqual(a, b)    # a != b\nassertTrue(x)           # x is True\nassertFalse(x)          # x is False\nassertIsNone(x)         # x is None\nassertRaises(Error)     # Raises exception\n\`\`\`

## 6. Debugging with pdb
\`\`\`python\nimport pdb\n\ndef buggy_function(x):\n    pdb.set_trace()  # Breakpoint\n    result = x * 2\n    return result\n\n# Commands:\n# n (next), c (continue), q (quit)\n# p variable (print), l (list)\n\`\`\``,
    codeExamples: [
      {
        title: 'unittest Test Case',
        code: 'import unittest\n\ndef add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\nclass TestMathOperations(unittest.TestCase):\n    def test_add_positive(self):\n        self.assertEqual(add(2, 3), 5)\n    \n    def test_add_negative(self):\n        self.assertEqual(add(-1, -1), -2)\n    \n    def test_subtract(self):\n        self.assertEqual(subtract(5, 3), 2)\n    \n    def test_add_floats(self):\n        self.assertAlmostEqual(add(0.1, 0.2), 0.3, places=7)\n\nif __name__ == "__main__":\n    unittest.main()\n\n# Run: python test_math.py\n# Or: python -m unittest test_math.py',
        explanation: 'unittest.TestCase for tests. Methods starting with test_ are test cases. assertEqual checks equality.'
      },
      {
        title: 'Test Fixtures with setUp/tearDown',
        code: 'import unittest\n\nclass TestListOperations(unittest.TestCase):\n    def setUp(self):\n        # Run before each test\n        self.test_list = [1, 2, 3]\n        print(f"\\nSetting up test")\n    \n    def tearDown(self):\n        # Run after each test\n        del self.test_list\n        print("Tearing down test")\n    \n    def test_append(self):\n        self.test_list.append(4)\n        self.assertEqual(len(self.test_list), 4)\n    \n    def test_pop(self):\n        item = self.test_list.pop()\n        self.assertEqual(item, 3)\n        self.assertEqual(len(self.test_list), 2)\n\nif __name__ == "__main__":\n    unittest.main()',
        explanation: 'setUp() runs before each test. tearDown() runs after. Setup fresh state for each test.'
      },
      {
        title: 'pytest Simple Tests',
        code: '# test_calculator.py\n\ndef add(a, b):\n    return a + b\n\ndef multiply(a, b):\n    return a * b\n\ndef test_add():\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 0\n    assert add(0, 0) == 0\n\ndef test_multiply():\n    assert multiply(3, 4) == 12\n    assert multiply(5, 0) == 0\n\ndef test_add_strings():\n    assert add("hello", " ") == "hello "\n\n# Run: pytest test_calculator.py\n# Or: pytest -v test_calculator.py (verbose)',
        explanation: 'pytest simpler than unittest. Just assert statements. Functions starting with test_. Run with pytest command.'
      },
      {
        title: 'Testing Exceptions',
        code: 'import unittest\n\ndef divide(a, b):\n    if b == 0:\n        raise ValueError("Cannot divide by zero")\n    return a / b\n\nclass TestDivide(unittest.TestCase):\n    def test_divide_normal(self):\n        self.assertEqual(divide(10, 2), 5)\n    \n    def test_divide_by_zero(self):\n        with self.assertRaises(ValueError):\n            divide(10, 0)\n    \n    def test_divide_floats(self):\n        self.assertAlmostEqual(divide(7, 2), 3.5)\n\nif __name__ == "__main__":\n    unittest.main()',
        explanation: 'assertRaises checks for exceptions. with self.assertRaises(Error): tests code that should raise.'
      },
      {
        title: 'Debugging with pdb',
        code: 'import pdb\n\ndef calculate_average(numbers):\n    pdb.set_trace()  # Execution stops here\n    total = sum(numbers)\n    count = len(numbers)\n    average = total / count\n    return average\n\n# Debug commands:\n# n - Execute next line\n# c - Continue execution\n# q - Quit debugger\n# p variable - Print variable\n# l - List current code\n# h - Help\n\n# Run normally, then debug interactively\ncalculate_average([1, 2, 3, 4, 5])',
        explanation: 'pdb.set_trace() creates breakpoint. Execution pauses. Use commands to step through code.'
      },
      {
        title: 'Logging for Debugging',
        code: 'import logging\n\n# Configure logging\nlogging.basicConfig(\n    level=logging.DEBUG,\n    format="%(asctime)s - %(levelname)s - %(message)s"\n)\n\ndef process_data(data):\n    logging.debug(f"Processing: {data}")\n    \n    if not data:\n        logging.warning("Empty data received")\n        return None\n    \n    result = [x * 2 for x in data]\n    logging.info(f"Processed {len(data)} items")\n    \n    return result\n\n# Levels: DEBUG, INFO, WARNING, ERROR, CRITICAL\nprocess_data([1, 2, 3])\nprocess_data([])',
        explanation: 'logging module for debug output. Levels: DEBUG (detailed), INFO (normal), WARNING (warning), ERROR (error). Better than print().'
      }
    ],
    quiz: {
      id: 'python-advanced-ch14-quiz',
      questions: [
        { id: 'q1', question: 'unittest module is for?', options: ['Testing', 'Debugging', 'Logging', 'Profiling'], correctAnswer: 0 },
        { id: 'q2', question: 'Test class inherits from?', options: ['unittest.TestCase', 'unittest.Test', 'TestCase', 'Test'], correctAnswer: 0 },
        { id: 'q3', question: 'Test methods start with?', options: ['test_', 'check_', 'assert_', 'run_'], correctAnswer: 0 },
        { id: 'q4', question: 'assertEqual checks?', options: ['a == b', 'a != b', 'a > b', 'a < b'], correctAnswer: 0 },
        { id: 'q5', question: 'setUp runs?', options: ['Before each test', 'After each test', 'Once', 'Never'], correctAnswer: 0 },
        { id: 'q6', question: 'tearDown runs?', options: ['After each test', 'Before each test', 'Once', 'Never'], correctAnswer: 0 },
        { id: 'q7', question: 'pytest uses?', options: ['assert', 'assertEqual', 'assertEquals', 'check'], correctAnswer: 0 },
        { id: 'q8', question: 'assertRaises checks?', options: ['Exception', 'Value', 'Type', 'None'], correctAnswer: 0 },
        { id: 'q9', question: 'pdb is for?', options: ['Debugging', 'Testing', 'Logging', 'Profiling'], correctAnswer: 0 },
        { id: 'q10', question: 'pdb.set_trace() does?', options: ['Sets breakpoint', 'Runs test', 'Logs', 'Exits'], correctAnswer: 0 },
        { id: 'q11', question: 'logging.DEBUG is for?', options: ['Detailed info', 'Warnings', 'Errors', 'Critical'], correctAnswer: 0 },
        { id: 'q12', question: 'Best logging level for production?', options: ['WARNING or ERROR', 'DEBUG', 'INFO', 'NOTSET'], correctAnswer: 0 }
      ]
    },
    summary: 'Testing: unittest module with TestCase. Test methods start with test_. assertEqual, assertTrue, assertFalse, assertRaises. setUp() before each test, tearDown() after. pytest simpler with assert. Debugging: pdb.set_trace() for breakpoints. n (next), c (continue), q (quit), p (print). Logging: DEBUG, INFO, WARNING, ERROR, CRITICAL levels.'
  },
  {
    id: 'python-advanced-ch15-project',
    title: 'Chapter 15: Advanced Python Project',
    introduction: 'Build a complete advanced project combining all concepts. Create a REST API with Flask, database, authentication, testing, and deployment.',
    topics: ['Project Planning', 'Flask REST API', 'Database with SQLAlchemy', 'User Authentication', 'JWT Tokens', 'API Documentation', 'Testing API', 'Error Handling', 'Deployment'],
    content: `# Advanced Python Project - REST API with Flask

## Project Overview
Build a complete Task Management API with:
- User registration and login
- JWT authentication
- CRUD operations for tasks
- Database with SQLAlchemy
- Input validation
- Error handling
- Testing

## Project Structure
\`\`\`\ntask_api/\n    app.py\n    models.py\n    routes.py\n    auth.py\n    config.py\n    tests/\n        test_api.py\n    requirements.txt\n\`\`\`

## Features
1. User registration/login
2. JWT token authentication
3. Create, read, update, delete tasks
4. Filter tasks by status
5. Secure password hashing
6. Input validation
7. Comprehensive testing`,
    codeExamples: [
      {
        title: 'Complete Flask REST API',
        code: 'from flask import Flask, request, jsonify\nfrom flask_sqlalchemy import SQLAlchemy\nfrom flask_jwt_extended import JWTManager, create_access_token, jwt_required\nfrom werkzeug.security import generate_password_hash, check_password_hash\nfrom datetime import datetime\n\napp = Flask(__name__)\napp.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///tasks.db"\napp.config["JWT_SECRET_KEY"] = "your-secret-key"\napp.config["JWT_ACCESS_TOKEN_EXPIRES"] = 3600\n\ndb = SQLAlchemy(app)\njwt = JWTManager(app)\n\n# Models\nclass User(db.Model):\n    id = db.Column(db.Integer, primary_key=True)\n    username = db.Column(db.String(80), unique=True, nullable=False)\n    password = db.Column(db.String(120), nullable=False)\n    tasks = db.relationship("Task", backref="owner", lazy=True)\n\nclass Task(db.Model):\n    id = db.Column(db.Integer, primary_key=True)\n    title = db.Column(db.String(100), nullable=False)\n    description = db.Column(db.Text)\n    completed = db.Column(db.Boolean, default=False)\n    created_at = db.Column(db.DateTime, default=datetime.utcnow)\n    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)\n\n# Routes\n@app.route("/register", methods=["POST"])\ndef register():\n    data = request.get_json()\n    if User.query.filter_by(username=data["username"]).first():\n        return jsonify({"error": "Username exists"}), 400\n    \n    user = User(\n        username=data["username"],\n        password=generate_password_hash(data["password"])\n    )\n    db.session.add(user)\n    db.session.commit()\n    return jsonify({"message": "User created"}), 201\n\n@app.route("/login", methods=["POST"])\ndef login():\n    data = request.get_json()\n    user = User.query.filter_by(username=data["username"]).first()\n    \n    if not user or not check_password_hash(user.password, data["password"]):\n        return jsonify({"error": "Invalid credentials"}), 401\n    \n    token = create_access_token(identity=user.id)\n    return jsonify({"token": token}), 200\n\n@app.route("/tasks", methods=["GET"])\n@jwt_required()\ndef get_tasks():\n    from flask_jwt_extended import get_jwt_identity\n    user_id = get_jwt_identity()\n    tasks = Task.query.filter_by(user_id=user_id).all()\n    \n    return jsonify([{\n        "id": t.id,\n        "title": t.title,\n        "description": t.description,\n        "completed": t.completed,\n        "created_at": t.created_at.isoformat()\n    } for t in tasks]), 200\n\n@app.route("/tasks", methods=["POST"])\n@jwt_required()\ndef create_task():\n    from flask_jwt_extended import get_jwt_identity\n    data = request.get_json()\n    user_id = get_jwt_identity()\n    \n    task = Task(\n        title=data["title"],\n        description=data.get("description", ""),\n        user_id=user_id\n    )\n    db.session.add(task)\n    db.session.commit()\n    \n    return jsonify({\n        "id": task.id,\n        "title": task.title,\n        "message": "Task created"\n    }), 201\n\n@app.route("/tasks/<int:task_id>", methods=["PUT"])\n@jwt_required()\ndef update_task(task_id):\n    from flask_jwt_extended import get_jwt_identity\n    user_id = get_jwt_identity()\n    task = Task.query.filter_by(id=task_id, user_id=user_id).first()\n    \n    if not task:\n        return jsonify({"error": "Task not found"}), 404\n    \n    data = request.get_json()\n    task.title = data.get("title", task.title)\n    task.description = data.get("description", task.description)\n    task.completed = data.get("completed", task.completed)\n    \n    db.session.commit()\n    return jsonify({"message": "Task updated"}), 200\n\n@app.route("/tasks/<int:task_id>", methods=["DELETE"])\n@jwt_required()\ndef delete_task(task_id):\n    from flask_jwt_extended import get_jwt_identity\n    user_id = get_jwt_identity()\n    task = Task.query.filter_by(id=task_id, user_id=user_id).first()\n    \n    if not task:\n        return jsonify({"error": "Task not found"}), 404\n    \n    db.session.delete(task)\n    db.session.commit()\n    return jsonify({"message": "Task deleted"}), 200\n\nif __name__ == "__main__":\n    with app.app_context():\n        db.create_all()\n    app.run(debug=True)',
        explanation: 'Complete REST API with Flask. SQLAlchemy for database. JWT for authentication. CRUD operations for tasks. Password hashing with werkzeug. Error handling with proper status codes.'
      },
      {
        title: 'Testing the API',
        code: 'import unittest\nimport json\nfrom app import app, db, User, Task\n\nclass TestTaskAPI(unittest.TestCase):\n    def setUp(self):\n        app.config["TESTING"] = True\n        app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///test.db"\n        self.client = app.test_client()\n        with app.app_context():\n            db.create_all()\n    \n    def tearDown(self):\n        with app.app_context():\n            db.session.remove()\n            db.drop_all()\n    \n    def test_register(self):\n        response = self.client.post("/register",\n            json={"username": "test", "password": "password123"})\n        self.assertEqual(response.status_code, 201)\n    \n    def test_login(self):\n        # First register\n        self.client.post("/register",\n            json={"username": "test", "password": "password123"})\n        \n        # Then login\n        response = self.client.post("/login",\n            json={"username": "test", "password": "password123"})\n        self.assertEqual(response.status_code, 200)\n        self.assertIn("token", json.loads(response.data))\n    \n    def test_create_task(self):\n        # Register and login\n        self.client.post("/register",\n            json={"username": "test", "password": "password123"})\n        login_resp = self.client.post("/login",\n            json={"username": "test", "password": "password123"})\n        token = json.loads(login_resp.data)["token"]\n        \n        # Create task\n        headers = {"Authorization": f"Bearer {token}"}\n        response = self.client.post("/tasks",\n            json={"title": "Test Task"},\n            headers=headers)\n        self.assertEqual(response.status_code, 201)\n\nif __name__ == "__main__":\n    unittest.main()',
        explanation: 'Test API with unittest. setUp creates test database. test_client() for HTTP requests. Test registration, login, task creation.'
      },
      {
        title: 'Requirements and Deployment',
        code: '# requirements.txt\nFlask==3.0.0\nFlask-SQLAlchemy==3.1.1\nFlask-JWT-Extended==4.6.0\nWerkzeug==3.0.1\npython-dotenv==1.0.0\n\n# .env\nFLASK_ENV=development\nJWT_SECRET_KEY=your-secret-key-change-in-production\nDATABASE_URL=sqlite:///tasks.db\n\n# Run locally:\n# pip install -r requirements.txt\n# python app.py\n\n# Deploy to production:\n# 1. Set FLASK_ENV=production\n# 2. Use production database (PostgreSQL)\n# 3. Set strong JWT_SECRET_KEY\n# 4. Use gunicorn: gunicorn -w 4 app:app\n# 5. Deploy to Heroku, Railway, or VPS',
        explanation: 'requirements.txt lists dependencies. .env for environment variables. Production: use gunicorn, strong secrets, proper database.'
      }
    ],
    quiz: {
      id: 'python-advanced-ch15-quiz',
      questions: [
        { id: 'q1', question: 'REST API uses?', options: ['HTTP methods', 'FTP', 'SMTP', 'WebSocket'], correctAnswer: 0 },
        { id: 'q2', question: 'GET is for?', options: ['Retrieve', 'Create', 'Update', 'Delete'], correctAnswer: 0 },
        { id: 'q3', question: 'POST is for?', options: ['Create', 'Retrieve', 'Update', 'Delete'], correctAnswer: 0 },
        { id: 'q4', question: 'PUT is for?', options: ['Update', 'Create', 'Retrieve', 'Delete'], correctAnswer: 0 },
        { id: 'q5', question: 'DELETE is for?', options: ['Delete', 'Create', 'Update', 'Retrieve'], correctAnswer: 0 },
        { id: 'q6', question: 'JWT is for?', options: ['Authentication', 'Database', 'Testing', 'Logging'], correctAnswer: 0 },
        { id: 'q7', question: 'SQLAlchemy is?', options: ['ORM', 'Database', 'API', 'Framework'], correctAnswer: 0 },
        { id: 'q8', question: 'Password hashing uses?', options: ['generate_password_hash', 'encrypt', 'encode', 'secure'], correctAnswer: 0 },
        { id: 'q9', question: 'Status 201 means?', options: ['Created', 'OK', 'Accepted', 'Success'], correctAnswer: 0 },
        { id: 'q10', question: 'Status 400 means?', options: ['Bad Request', 'Not Found', 'Error', 'Unauthorized'], correctAnswer: 0 },
        { id: 'q11', question: 'Status 401 means?', options: ['Unauthorized', 'Forbidden', 'Not Found', 'Error'], correctAnswer: 0 },
        { id: 'q12', question: 'Status 404 means?', options: ['Not Found', 'Bad Request', 'Unauthorized', 'Error'], correctAnswer: 0 },
        { id: 'q13', question: 'Bearer token sent in?', options: ['Authorization header', 'Body', 'Query', 'Cookie'], correctAnswer: 0 },
        { id: 'q14', question: '@jwt_required() protects?', options: ['Route', 'Database', 'Model', 'Config'], correctAnswer: 0 },
        { id: 'q15', question: 'gunicorn is?', options: ['WSGI server', 'Database', 'Framework', 'Testing'], correctAnswer: 0 }
      ]
    },
    summary: 'Advanced project: Flask REST API with SQLAlchemy database. JWT authentication for secure routes. User registration/login with password hashing. CRUD operations for tasks. Proper HTTP methods (GET, POST, PUT, DELETE). Status codes (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found). Testing with unittest. Deployment with gunicorn.'
  }
];
