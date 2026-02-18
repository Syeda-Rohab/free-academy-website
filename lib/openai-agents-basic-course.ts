// OpenAI Agents SDK Basic Course - Complete
import { Chapter } from './types';

export const openaiAgentsBasicCourse: Chapter[] = [
  {
    id: 'openai-basic-ch1-setup',
    title: 'Chapter 1: Installation & Setup',
    introduction: 'Set up OpenAI Agents SDK and configure your development environment.',
    topics: ['Installation', 'API Key Setup', 'Environment Variables', 'First Agent'],
    content: `# Installation & Setup

## 1.1 Install OpenAI Agents SDK
Run this command in your terminal:
pip install openai-agents

## 1.2 Get API Key
1. Go to https://platform.openai.com
2. Sign in or create account
3. Navigate to API Keys section
4. Create new secret key

## 1.3 Set Environment Variable
Windows PowerShell: Set environment variable OPENAI_API_KEY
Windows CMD: set OPENAI_API_KEY=your-key
Mac/Linux: export OPENAI_API_KEY=your-key

## 1.4 Verify Installation
from openai_agents import Agent
print("OpenAI Agents SDK installed!")

Setup Complete - Ready to build agents!`,
    codeExamples: [
      {
        title: 'Installation Check',
        code: 'pip install openai-agents\nfrom openai_agents import Agent\nprint("Success!")',
        explanation: 'Install and verify the SDK is working'
      },
      {
        title: 'Environment Setup',
        code: 'import os\nfrom openai_agents import Agent\n\nos.environ["OPENAI_API_KEY"] = "sk-..."\n\nagent = Agent(name="Helper", instructions="You are helpful.")\nresult = agent.run("Hello!")\nprint(result.output)',
        explanation: 'Set API key and run your first agent'
      }
    ],
    quiz: {
      id: 'openai-basic-ch1-quiz',
      questions: [
        { id: 'q1', question: 'How do you install OpenAI Agents SDK?', options: ['pip install openai-agents', 'npm install openai-agents', 'yarn add openai-agents', 'pip install openai'], correctAnswer: 0 },
        { id: 'q2', question: 'Where do you get the API key?', options: ['platform.openai.com', 'openai.com', 'api.openai.com', 'console.openai.com'], correctAnswer: 0 },
        { id: 'q3', question: 'Which class creates an agent?', options: ['Agent', 'Bot', 'Assistant', 'Worker'], correctAnswer: 0 },
        { id: 'q4', question: 'What are required agent parameters?', options: ['name and instructions', 'name only', 'model only', 'instructions only'], correctAnswer: 0 },
        { id: 'q5', question: 'How do you run an agent?', options: ['agent.run()', 'agent.execute()', 'agent.start()', 'agent.call()'], correctAnswer: 0 }
      ]
    },
    summary: 'Install with pip, get API key from platform.openai.com, set environment variable, and create your first agent.'
  },
  {
    id: 'openai-basic-ch2-intro',
    title: 'Chapter 2: Introduction to Agents',
    introduction: 'Learn what agents are and how to create them with basic configuration.',
    topics: ['What are Agents', 'Agent Creation', 'Name & Instructions', 'Running Agents'],
    content: `# Introduction to Agents

## 2.1 What is an Agent?
An agent is an AI entity that can:
- Understand natural language
- Follow instructions
- Perform tasks autonomously
- Use tools to accomplish goals

## 2.2 Creating Your First Agent
from openai_agents import Agent

agent = Agent(
    name="Helper",
    instructions="You are a helpful assistant."
)

## 2.3 Agent Parameters
- name: Identifier for your agent
- instructions: System prompt defining behavior
- model: LLM to use (optional, defaults to gpt-4o)

## 2.4 Running an Agent
result = agent.run("Hello, can you help me?")
print(result.output)

Agents are autonomous AI entities!`,
    codeExamples: [
      {
        title: 'Simple Agent',
        code: 'from openai_agents import Agent\n\nagent = Agent(\n    name="Helper",\n    instructions="You are a helpful assistant."\n)\n\nresult = agent.run("What is 2+2?")\nprint(result.output)',
        explanation: 'Create and run a basic agent'
      },
      {
        title: 'Agent with Custom Instructions',
        code: 'from openai_agents import Agent\n\nagent = Agent(\n    name="Math Tutor",\n    instructions="You are a math tutor. Explain concepts clearly and provide step-by-step solutions."\n)\n\nresult = agent.run("Explain Pythagorean theorem")\nprint(result.output)',
        explanation: 'Agent with specialized instructions'
      }
    ],
    quiz: {
      id: 'openai-basic-ch2-quiz',
      questions: [
        { id: 'q1', question: 'What is an agent?', options: ['Autonomous AI entity', 'Database', 'API endpoint', 'Function'], correctAnswer: 0 },
        { id: 'q2', question: 'What defines agent behavior?', options: ['Instructions', 'Name', 'Model', 'Tools'], correctAnswer: 0 },
        { id: 'q3', question: 'Default model for agents?', options: ['gpt-4o', 'gpt-3.5', 'gpt-4', 'claude'], correctAnswer: 0 },
        { id: 'q4', question: 'Method to execute agent?', options: ['run()', 'execute()', 'call()', 'start()'], correctAnswer: 0 },
        { id: 'q5', question: 'Agent output is in?', options: ['result.output', 'result.text', 'result.response', 'result.message'], correctAnswer: 0 }
      ]
    },
    summary: 'Agents are autonomous AI entities created with name and instructions, executed using run() method.'
  },
  {
    id: 'openai-basic-ch3-model',
    title: 'Chapter 3: Model Configuration',
    introduction: 'Configure agent models, temperature, and other parameters for optimal output.',
    topics: ['Model Selection', 'Temperature', 'Max Tokens', 'Top P'],
    content: `# Model Configuration

## 3.1 Available Models
GPT-4o (Recommended): agent = Agent(name="Agent", model="gpt-4o")
GPT-4: agent = Agent(name="Agent", model="gpt-4")
GPT-4 Turbo: agent = Agent(name="Agent", model="gpt-4-turbo")

## 3.2 Temperature Setting
Controls randomness (0.0 to 1.0):
- 0.0: Deterministic, focused
- 0.5: Balanced
- 1.0: Creative, diverse

agent = Agent(name="Creative Writer", temperature=0.8)

## 3.3 Max Tokens
Limit response length:
agent = Agent(name="Summarizer", max_tokens=500)

## 3.4 Top P (Nucleus Sampling)
Alternative to temperature:
agent = Agent(name="Agent", top_p=0.9)

Model configuration complete!`,
    codeExamples: [
      {
        title: 'Model Selection',
        code: 'from openai_agents import Agent\n\nagent1 = Agent(name="FastAgent", model="gpt-4o")\nagent2 = Agent(name="SmartAgent", model="gpt-4")\nresult = agent1.run("Hello!")\nprint(result.output)',
        explanation: 'Choose appropriate model for your use case'
      },
      {
        title: 'Temperature Control',
        code: 'from openai_agents import Agent\n\ncreative = Agent(\n    name="Writer",\n    temperature=0.9,\n    instructions="Write creative stories"\n)\n\nfactual = Agent(\n    name="FactChecker",\n    temperature=0.1,\n    instructions="Provide accurate facts"\n)',
        explanation: 'Adjust temperature for different use cases'
      }
    ],
    quiz: {
      id: 'openai-basic-ch3-quiz',
      questions: [
        { id: 'q1', question: 'Recommended default model?', options: ['gpt-4o', 'gpt-3.5', 'gpt-4', 'gpt-4-turbo'], correctAnswer: 0 },
        { id: 'q2', question: 'Temperature range?', options: ['0.0 to 1.0', '0 to 100', '1 to 10', '0 to 10'], correctAnswer: 0 },
        { id: 'q3', question: 'High temperature produces?', options: ['More creative output', 'More accurate output', 'Faster output', 'Shorter output'], correctAnswer: 0 },
        { id: 'q4', question: 'max_tokens controls?', options: ['Response length', 'Input length', 'Processing speed', 'Cost only'], correctAnswer: 0 },
        { id: 'q5', question: 'Temperature 0.0 means?', options: ['Deterministic', 'Most creative', 'Random', 'Error'], correctAnswer: 0 }
      ]
    },
    summary: 'Select model (gpt-4o recommended), adjust temperature (0-1), set max_tokens for response length control.'
  },
  {
    id: 'openai-basic-ch4-io',
    title: 'Chapter 4: Input/Output Handling',
    introduction: 'Learn how to handle user inputs and process agent outputs effectively.',
    topics: ['User Input', 'Output Parsing', 'Error Handling', 'Response Types'],
    content: `# Input/Output Handling

## 4.1 Basic Input/Output
from openai_agents import Agent

agent = Agent(name="Helper")
result = agent.run("What is Python?")
print(result.output)

## 4.2 Multi-turn Conversation
result1 = agent.run("I want to learn Python")
result2 = agent.run("What should I start with?")
result3 = agent.run("How long will it take?")

## 4.3 Handling Different Output Types
result = agent.run("List 3 fruits")
print(result.output)

## 4.4 Error Handling
try:
    result = agent.run("Your query")
    print(result.output)
except Exception as e:
    print("Error:", e)

Input/Output handling complete!`,
    codeExamples: [
      {
        title: 'Basic I/O',
        code: 'from openai_agents import Agent\n\nagent = Agent(name="Helper")\n\nuser_input = "Explain machine learning"\nresult = agent.run(user_input)\n\nprint("User:", user_input)\nprint("Agent:", result.output)',
        explanation: 'Basic input and output handling'
      },
      {
        title: 'Error Handling',
        code: 'from openai_agents import Agent\n\nagent = Agent(name="Helper")\n\ntry:\n    result = agent.run("What is AI?")\n    print(result.output)\nexcept Exception as e:\n    print("An error occurred:", e)\n    print("Please try again")',
        explanation: 'Handle errors gracefully'
      }
    ],
    quiz: {
      id: 'openai-basic-ch4-quiz',
      questions: [
        { id: 'q1', question: 'How to access agent output?', options: ['result.output', 'result.text', 'result.message', 'result.response'], correctAnswer: 0 },
        { id: 'q2', question: 'Method to run agent?', options: ['run()', 'execute()', 'process()', 'handle()'], correctAnswer: 0 },
        { id: 'q3', question: 'Error handling uses?', options: ['try/except', 'if/else', 'catch', 'handle'], correctAnswer: 0 },
        { id: 'q4', question: 'Multi-turn means?', options: ['Multiple exchanges', 'Single query', 'Batch processing', 'Parallel calls'], correctAnswer: 0 },
        { id: 'q5', question: 'Output type is?', options: ['Text string', 'JSON', 'Dictionary', 'List'], correctAnswer: 0 }
      ]
    },
    summary: 'Use run() for input, access output via result.output, handle errors with try/except blocks.'
  },
  {
    id: 'openai-basic-ch5-pydantic',
    title: 'Chapter 5: Pydantic Structured Outputs',
    introduction: 'Learn to use Pydantic models for structured, validated agent outputs.',
    topics: ['Pydantic Models', 'Structured Output', 'Validation', 'Type Safety'],
    content: `# Pydantic Structured Outputs

## 5.1 What is Pydantic?
Pydantic provides data validation using Python type annotations.

from pydantic import BaseModel

class Person(BaseModel):
    name: str
    age: int
    email: str

## 5.2 Using Pydantic with Agents
from openai_agents import Agent
from pydantic import BaseModel

class Response(BaseModel):
    answer: str
    confidence: float

agent = Agent(
    name="QA",
    output_type=Response
)

result = agent.run("What is AI?")
print(result.output.answer)
print(result.output.confidence)

## 5.3 Benefits
- Type Safety: Compile-time checking
- Validation: Automatic data validation
- Documentation: Clear output structure
- IDE Support: Autocompletion

Structured outputs complete!`,
    codeExamples: [
      {
        title: 'Basic Pydantic Model',
        code: 'from openai_agents import Agent\nfrom pydantic import BaseModel\n\nclass BookInfo(BaseModel):\n    title: str\n    author: str\n    year: int\n\nagent = Agent(\n    name="BookAssistant",\n    output_type=BookInfo,\n    instructions="Provide book information in structured format"\n)\n\nresult = agent.run("Tell me about 1984 by Orwell")\nprint("Title:", result.output.title)\nprint("Author:", result.output.author)\nprint("Year:", result.output.year)',
        explanation: 'Use Pydantic for structured book information'
      },
      {
        title: 'Complex Pydantic Model',
        code: 'from openai_agents import Agent\nfrom pydantic import BaseModel\nfrom typing import List\n\nclass Recipe(BaseModel):\n    name: str\n    ingredients: List[str]\n    steps: List[str]\n    time_minutes: int\n\nagent = Agent(\n    name="Chef",\n    output_type=Recipe,\n    instructions="Provide recipes in structured format"\n)\n\nresult = agent.run("Pasta carbonara recipe")\nprint("Recipe:", result.output.name)\nprint("Ingredients:", result.output.ingredients)\nprint("Time:", result.output.time_minutes, "mins")',
        explanation: 'Complex structured output with lists'
      }
    ],
    quiz: {
      id: 'openai-basic-ch5-quiz',
      questions: [
        { id: 'q1', question: 'Pydantic is used for?', options: ['Data validation', 'Web scraping', 'Database', 'GUI'], correctAnswer: 0 },
        { id: 'q2', question: 'BaseModel is from?', options: ['pydantic', 'openai_agents', 'typing', 'models'], correctAnswer: 0 },
        { id: 'q3', question: 'output_type parameter does?', options: ['Defines response structure', 'Sets model type', 'Configures temperature', 'Limits tokens'], correctAnswer: 0 },
        { id: 'q4', question: 'Structured output benefit?', options: ['Type safety', 'Faster execution', 'Less cost', 'More tokens'], correctAnswer: 0 },
        { id: 'q5', question: 'Access structured field?', options: ['result.output.field', 'result.field', 'result.data.field', 'result.response.field'], correctAnswer: 0 }
      ]
    },
    summary: 'Pydantic models provide structured, validated outputs with type safety and IDE support.'
  },
  {
    id: 'openai-basic-ch6-runner',
    title: 'Chapter 6: Runner & Agent Loop',
    introduction: 'Understand how the runner executes agents and manages the agent loop.',
    topics: ['Runner Basics', 'Agent Loop', 'Execution Flow', 'State Management'],
    content: `# Runner & Agent Loop

## 6.1 What is Runner?
Runner manages agent execution and conversation flow.

from openai_agents import Agent, Runner

agent = Agent(name="Helper")
runner = Runner()

result = runner.run(agent, "Hello!")
print(result.output)

## 6.2 Agent Loop
The loop processes:
1. User input
2. Agent reasoning
3. Tool execution (if any)
4. Response generation
5. Output delivery

## 6.3 Direct vs Runner
Direct execution: result = agent.run("Hello")
With Runner: result = runner.run(agent, "Hello")

## 6.4 State Management
Runner maintains conversation state:
runner = Runner()
result1 = runner.run(agent, "I like Python")
result2 = runner.run(agent, "Why is it good?")

Runner and agent loop complete!`,
    codeExamples: [
      {
        title: 'Basic Runner Usage',
        code: 'from openai_agents import Agent, Runner\n\nagent = Agent(\n    name="Assistant",\n    instructions="You are helpful"\n)\n\nrunner = Runner()\nresult = runner.run(agent, "What is Python?")\n\nprint(result.output)',
        explanation: 'Use Runner for agent execution'
      },
      {
        title: 'Conversation with Runner',
        code: 'from openai_agents import Agent, Runner\n\nagent = Agent(\n    name="Tutor",\n    instructions="You are a programming tutor"\n)\n\nrunner = Runner()\n\nresult1 = runner.run(agent, "I want to learn Python")\nprint(result1.output)\n\nresult2 = runner.run(agent, "What should I learn first?")\nprint(result2.output)',
        explanation: 'Runner maintains conversation context'
      }
    ],
    quiz: {
      id: 'openai-basic-ch6-quiz',
      questions: [
        { id: 'q1', question: 'Runner is used for?', options: ['Executing agents', 'Creating agents', 'Training models', 'API calls'], correctAnswer: 0 },
        { id: 'q2', question: 'Agent loop processes?', options: ['Input to output', 'Only input', 'Only output', 'Errors only'], correctAnswer: 0 },
        { id: 'q3', question: 'Runner maintains?', options: ['Conversation state', 'API keys', 'Model config', 'Tools only'], correctAnswer: 0 },
        { id: 'q4', question: 'Direct execution uses?', options: ['agent.run()', 'runner.run()', 'execute()', 'process()'], correctAnswer: 0 },
        { id: 'q5', question: 'Runner from module?', options: ['openai_agents', 'runner', 'agents', 'sdk'], correctAnswer: 0 }
      ]
    },
    summary: 'Runner manages agent execution, maintains conversation state, and processes the agent loop.'
  },
  {
    id: 'openai-basic-ch7-sessions',
    title: 'Chapter 7: Sessions (Conversation Memory)',
    introduction: 'Learn how sessions maintain conversation history and context across interactions.',
    topics: ['Session Basics', 'Conversation History', 'Context Management', 'Session Persistence'],
    content: `# Sessions - Conversation Memory

## 7.1 What are Sessions?
Sessions maintain conversation history across multiple interactions.

from openai_agents import Agent, Runner

agent = Agent(name="Assistant")
runner = Runner()

result1 = runner.run(agent, "My name is Alice")
result2 = runner.run(agent, "What is my name?")
print(result2.output)

## 7.2 Session ID
session_id = "user-123"
runner.run(agent, "Hello", session_id=session_id)
runner.run(agent, "Remember this", session_id=session_id)

## 7.3 Clear Session
runner.reset(session_id)

## 7.4 Session Benefits
- Context: Remembers previous messages
- Continuity: Natural conversations
- Personalization: User-specific data
- Efficiency: No need to resend context

Sessions complete!`,
    codeExamples: [
      {
        title: 'Basic Session',
        code: 'from openai_agents import Agent, Runner\n\nagent = Agent(\n    name="MemoryBot",\n    instructions="Remember user details"\n)\n\nrunner = Runner()\n\nrunner.run(agent, "I live in New York")\nresult = runner.run(agent, "Where do I live?")\nprint(result.output)',
        explanation: 'Session maintains conversation memory'
      },
      {
        title: 'Multiple Sessions',
        code: 'from openai_agents import Agent, Runner\n\nagent = Agent(name="Assistant")\nrunner = Runner()\n\nrunner.run(agent, "I like Python", session_id="user1")\nrunner.run(agent, "I prefer Java", session_id="user2")',
        explanation: 'Different sessions for different users'
      }
    ],
    quiz: {
      id: 'openai-basic-ch7-quiz',
      questions: [
        { id: 'q1', question: 'Sessions are used for?', options: ['Conversation memory', 'API authentication', 'Model selection', 'Error handling'], correctAnswer: 0 },
        { id: 'q2', question: 'Session ID helps?', options: ['Track conversations', 'Identify users', 'Store data', 'All of above'], correctAnswer: 0 },
        { id: 'q3', question: 'Reset session with?', options: ['runner.reset()', 'session.clear()', 'agent.reset()', 'runner.clear()'], correctAnswer: 0 },
        { id: 'q4', question: 'Session maintains?', options: ['Conversation history', 'API keys', 'Model config', 'Tools'], correctAnswer: 0 },
        { id: 'q5', question: 'Multiple sessions for?', options: ['Different users', 'Same user', 'Different models', 'Different tools'], correctAnswer: 0 }
      ]
    },
    summary: 'Sessions maintain conversation history, enable context-aware responses, and support multiple users.'
  },
  {
    id: 'openai-basic-ch8-tools',
    title: 'Chapter 8: Function Tools',
    introduction: 'Learn to create and use Python functions as tools for your agents.',
    topics: ['What are Tools', 'Function Tools', 'Tool Registration', 'Tool Execution'],
    content: `# Function Tools

## 8.1 What are Tools?
Tools extend agent capabilities beyond text generation.

from openai_agents import Agent, function_tool

@function_tool
def get_weather(city: str) -> str:
    """Get weather for a city"""
    return "Weather in " + city + ": Sunny, 25C"

agent = Agent(
    name="WeatherBot",
    tools=[get_weather]
)

result = agent.run("What is weather in London?")
print(result.output)

## 8.2 Tool Function Requirements
- Must have docstring
- Type-annotated parameters
- Return string or Pydantic model

## 8.3 Multiple Tools
@function_tool
def calculate(a: int, b: int) -> int:
    """Add two numbers"""
    return a + b

@function_tool
def greet(name: str) -> str:
    """Greet someone"""
    return "Hello, " + name + "!"

agent = Agent(
    name="Helper",
    tools=[calculate, greet]
)

Function tools complete!`,
    codeExamples: [
      {
        title: 'Simple Function Tool',
        code: 'from openai_agents import Agent, function_tool\nfrom datetime import datetime\n\n@function_tool\ndef get_time() -> str:\n    """Get current time"""\n    return datetime.now().strftime("%H:%M")\n\nagent = Agent(\n    name="TimeBot",\n    tools=[get_time],\n    instructions="Use tools when needed"\n)\n\nresult = agent.run("What time is it?")\nprint(result.output)',
        explanation: 'Create and use a simple tool'
      },
      {
        title: 'Multiple Function Tools',
        code: 'from openai_agents import Agent, function_tool\n\n@function_tool\ndef add(a: int, b: int) -> int:\n    """Add two numbers"""\n    return a + b\n\n@function_tool\ndef multiply(a: int, b: int) -> int:\n    """Multiply two numbers"""\n    return a * b\n\nagent = Agent(\n    name="MathBot",\n    tools=[add, multiply]\n)\n\nresult1 = agent.run("Add 5 and 3")\nresult2 = agent.run("Multiply 4 and 6")\nprint(result1.output)\nprint(result2.output)',
        explanation: 'Agent with multiple calculation tools'
      }
    ],
    quiz: {
      id: 'openai-basic-ch8-quiz',
      questions: [
        { id: 'q1', question: 'Tools extend agent?', options: ['Capabilities', 'Memory', 'Speed', 'Cost'], correctAnswer: 0 },
        { id: 'q2', question: 'Function tool decorator?', options: ['@function_tool', '@tool', '@agent_tool', '@api'], correctAnswer: 0 },
        { id: 'q3', question: 'Tool must have?', options: ['Docstring', 'Return type', 'Parameters', 'All of above'], correctAnswer: 0 },
        { id: 'q4', question: 'Tools passed in?', options: ['tools list', 'config', 'params', 'args'], correctAnswer: 0 },
        { id: 'q5', question: 'Tool execution is?', options: ['Automatic', 'Manual', 'Scheduled', 'Random'], correctAnswer: 0 }
      ]
    },
    summary: 'Function tools extend agent capabilities using Python functions with @function_tool decorator.'
  },
  {
    id: 'openai-basic-ch9-handoffs',
    title: 'Chapter 9: Basic Handoffs',
    introduction: 'Learn agent-to-agent delegation using handoffs for specialized tasks.',
    topics: ['What are Handoffs', 'Creating Handoffs', 'Agent Delegation', 'Multi-Agent Flow'],
    content: `# Basic Handoffs

## 9.1 What are Handoffs?
Handoffs allow agents to delegate tasks to other specialized agents.

from openai_agents import Agent, handoff

billing_agent = Agent(
    name="BillingAgent",
    instructions="Handle billing questions"
)

support_agent = Agent(
    name="SupportAgent",
    instructions="Handle technical support",
    handoffs=[handoff(billing_agent)]
)

## 9.2 How Handoffs Work
1. User asks question
2. Support agent identifies billing topic
3. Handoff transfers to BillingAgent
4. BillingAgent responds

## 9.3 Handoff Syntax
from openai_agents import handoff

agent1 = Agent(name="Agent1")
agent2 = Agent(
    name="Agent2",
    handoffs=[handoff(agent1)]
)

## 9.4 Benefits
- Specialization: Each agent has expertise
- Modularity: Separate concerns
- Scalability: Add agents easily
- Maintainability: Update independently

Handoffs complete!`,
    codeExamples: [
      {
        title: 'Basic Handoff',
        code: 'from openai_agents import Agent, handoff\n\nmath_agent = Agent(\n    name="MathExpert",\n    instructions="Solve math problems"\n)\n\ngeneral_agent = Agent(\n    name="GeneralHelper",\n    instructions="General questions, handoff math to expert",\n    handoffs=[handoff(math_agent)]\n)\n\nresult = general_agent.run("What is 25 * 4?")\nprint(result.output)',
        explanation: 'Handoff to specialized math agent'
      },
      {
        title: 'Multiple Handoffs',
        code: 'from openai_agents import Agent, handoff\n\nbilling = Agent(name="Billing", instructions="Handle billing")\nshipping = Agent(name="Shipping", instructions="Handle shipping")\n\ncustomer_service = Agent(\n    name="CustomerService",\n    instructions="Route to appropriate department",\n    handoffs=[handoff(billing), handoff(shipping)]\n)\n\nresult = customer_service.run("Where is my order?")\nprint(result.output)',
        explanation: 'Multiple handoffs for different topics'
      }
    ],
    quiz: {
      id: 'openai-basic-ch9-quiz',
      questions: [
        { id: 'q1', question: 'Handoffs are for?', options: ['Agent delegation', 'Data transfer', 'API calls', 'Error handling'], correctAnswer: 0 },
        { id: 'q2', question: 'Handoff function from?', options: ['openai_agents', 'handoffs', 'agents', 'tools'], correctAnswer: 0 },
        { id: 'q3', question: 'Handoffs parameter in?', options: ['Agent constructor', 'runner.run()', 'agent.run()', 'tool call'], correctAnswer: 0 },
        { id: 'q4', question: 'Handoff benefit?', options: ['Specialization', 'Speed', 'Cost reduction', 'Simplicity'], correctAnswer: 0 },
        { id: 'q5', question: 'Can have multiple handoffs?', options: ['Yes', 'No', 'Only 2', 'Only 3'], correctAnswer: 0 }
      ]
    },
    summary: 'Handoffs enable agent-to-agent delegation for specialized task handling and modular design.'
  },
  {
    id: 'openai-basic-ch10-tracing',
    title: 'Chapter 10: Simple Tracing',
    introduction: 'Learn to trace and debug agent execution with simple tracing.',
    topics: ['What is Tracing', 'Enable Tracing', 'View Traces', 'Debug Agents'],
    content: `# Simple Tracing

## 10.1 What is Tracing?
Tracing shows agent execution steps for debugging.

from openai_agents import Agent, Runner

agent = Agent(name="Helper")
runner = Runner()

result = runner.run(
    agent,
    "Hello",
    trace=True
)

## 10.2 Trace Output
Shows:
- Input received
- Agent reasoning
- Tool calls (if any)
- Output generated

## 10.3 Debugging with Traces
result = runner.run(
    agent,
    "Query",
    trace="verbose"
)

## 10.4 Benefits
- Debugging: Find issues
- Understanding: See agent thinking
- Optimization: Improve prompts
- Learning: Understand flow

Tracing complete!`,
    codeExamples: [
      {
        title: 'Basic Tracing',
        code: 'from openai_agents import Agent, Runner\n\nagent = Agent(\n    name="Helper",\n    instructions="You are helpful"\n)\n\nrunner = Runner()\n\nresult = runner.run(\n    agent,\n    "What is Python?",\n    trace=True\n)\n\nprint(result.output)',
        explanation: 'Enable tracing to see execution details'
      },
      {
        title: 'Verbose Tracing',
        code: 'from openai_agents import Agent, Runner\n\nagent = Agent(\n    name="DebugAgent",\n    instructions="Explain your reasoning"\n)\n\nrunner = Runner()\n\nresult = runner.run(\n    agent,\n    "Solve: 2 + 2 * 3",\n    trace="verbose"\n)\n\nprint(result.output)',
        explanation: 'Verbose tracing shows detailed reasoning'
      }
    ],
    quiz: {
      id: 'openai-basic-ch10-quiz',
      questions: [
        { id: 'q1', question: 'Tracing is used for?', options: ['Debugging', 'Performance', 'Security', 'Cost'], correctAnswer: 0 },
        { id: 'q2', question: 'Enable tracing with?', options: ['trace=True', 'debug=True', 'verbose=True', 'log=True'], correctAnswer: 0 },
        { id: 'q3', question: 'Trace shows?', options: ['Execution steps', 'Only output', 'Only input', 'Errors only'], correctAnswer: 0 },
        { id: 'q4', question: 'Verbose trace value?', options: ['verbose', 'detailed', 'full', 'debug'], correctAnswer: 0 },
        { id: 'q5', question: 'Tracing helps with?', options: ['Understanding flow', 'Faster execution', 'Less cost', 'More features'], correctAnswer: 0 }
      ]
    },
    summary: 'Tracing enables debugging by showing agent execution steps, reasoning, and tool calls.'
  }
];
