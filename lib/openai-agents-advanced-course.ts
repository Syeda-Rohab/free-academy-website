// OpenAI Agents SDK Advanced Course - Complete
import { Chapter } from './types';

export const openaiAgentsAdvancedCourse: Chapter[] = [
  {
    id: 'openai-adv-ch1-multi-agent',
    title: 'Chapter 1: Multi-Agent Systems',
    introduction: 'Build complex multi-agent systems with orchestration patterns and parallel execution.',
    topics: ['Multi-Agent Architecture', 'Agent Orchestration', 'Parallel Execution', 'Hierarchical Structures'],
    content: `# Multi-Agent Systems

## 1.1 Multi-Agent Architecture
Multiple agents working together to solve complex problems.

## 1.2 Orchestration Patterns
- Sequential: One after another
- Parallel: Multiple simultaneously
- Hierarchical: Parent-child structure
- Network: Mesh of agents

## 1.3 Parallel Execution
Use asyncio.gather for parallel agent execution.

## 1.4 Hierarchical Structure
Manager agent coordinates workers.

✓ Multi-agent systems complete!`,
    codeExamples: [
      {
        title: 'Sequential Multi-Agent',
        code: 'from openai_agents import Agent, handoff\n\nresearcher = Agent(name="Researcher", instructions="Gather information")\nanalyst = Agent(name="Analyst", instructions="Analyze findings", handoffs=[handoff(researcher)])\nresult = analyst.run("Research AI trends")\nprint(result.output)',
        explanation: 'Agents work sequentially with handoffs'
      },
      {
        title: 'Parallel Agent Execution',
        code: 'import asyncio\nfrom openai_agents import Agent\n\nasync def parallel_agents():\n    agent1 = Agent(name="Summarizer")\n    agent2 = Agent(name="Translator")\n    results = await asyncio.gather(\n        agent1.run("Summarize this"),\n        agent2.run("Translate to Spanish")\n    )\n    print("Summary:", results[0].output)\n    print("Translation:", results[1].output)\n\nasyncio.run(parallel_agents())',
        explanation: 'Run multiple agents in parallel'
      }
    ],
    quiz: {
      id: 'openai-adv-ch1-quiz',
      questions: [
        { id: 'q1', question: 'Multi-agent systems use?', options: ['Multiple agents', 'Single agent', 'No agents', 'Tools only'], correctAnswer: 0 },
        { id: 'q2', question: 'Orchestration patterns include?', options: ['Sequential, Parallel', 'Only sequential', 'Only parallel', 'Random'], correctAnswer: 0 },
        { id: 'q3', question: 'Parallel execution uses?', options: ['asyncio.gather', 'sequential', 'sync', 'loop'], correctAnswer: 0 },
        { id: 'q4', question: 'Hierarchical agents have?', options: ['Parent-child structure', 'Flat structure', 'No structure', 'Random structure'], correctAnswer: 0 },
        { id: 'q5', question: 'Agent communication via?', options: ['Handoffs', 'Direct call', 'API', 'Events'], correctAnswer: 0 }
      ]
    },
    summary: 'Multi-agent systems enable complex workflows through orchestration, parallel execution, and hierarchical structures.'
  },
  {
    id: 'openai-adv-ch2-hosted-tools',
    title: 'Chapter 2: Hosted Tools (WebSearchTool)',
    introduction: 'Use OpenAI hosted tools like WebSearchTool for internet access and external capabilities.',
    topics: ['Hosted Tools Overview', 'WebSearchTool', 'Built-in Tools', 'Tool Configuration'],
    content: `# Hosted Tools

## 2.1 What are Hosted Tools?
Pre-built tools provided by OpenAI.

## 2.2 WebSearchTool
Gives agents internet access for current information.

## 2.3 Other Hosted Tools
- FileSearchTool: Search files
- CodeInterpreterTool: Execute code
- DALLETool: Generate images

## 2.4 Multiple Hosted Tools
Combine multiple tools in tools list.

✓ Hosted tools complete!`,
    codeExamples: [
      {
        title: 'WebSearchTool Usage',
        code: 'from openai_agents import Agent, WebSearchTool\n\nagent = Agent(name="NewsResearcher", tools=[WebSearchTool()], instructions="Search the web for current information")\nresult = agent.run("What are the latest AI developments?")\nprint(result.output)',
        explanation: 'Agent with web search capabilities'
      },
      {
        title: 'Multiple Hosted Tools',
        code: 'from openai_agents import Agent, WebSearchTool, FileSearchTool\n\nagent = Agent(name="SuperAssistant", tools=[WebSearchTool(), FileSearchTool()], instructions="Use web and file search")\nresult = agent.run("Find latest Python news")\nprint(result.output)',
        explanation: 'Combine multiple hosted tools'
      }
    ],
    quiz: {
      id: 'openai-adv-ch2-quiz',
      questions: [
        { id: 'q1', question: 'Hosted tools provided by?', options: ['OpenAI', 'User', 'Third-party', 'Community'], correctAnswer: 0 },
        { id: 'q2', question: 'WebSearchTool provides?', options: ['Internet access', 'File access', 'Code execution', 'Image generation'], correctAnswer: 0 },
        { id: 'q3', question: 'WebSearchTool import from?', options: ['openai_agents', 'web_tools', 'search', 'tools'], correctAnswer: 0 },
        { id: 'q4', question: 'Multiple tools in?', options: ['tools list', 'config dict', 'params', 'args'], correctAnswer: 0 },
        { id: 'q5', question: 'Hosted tools are?', options: ['Pre-built', 'Custom', 'User-defined', 'External'], correctAnswer: 0 }
      ]
    },
    summary: 'Hosted tools like WebSearchTool provide pre-built capabilities for internet access and external integrations.'
  },
  {
    id: 'openai-adv-ch3-agents-as-tools',
    title: 'Chapter 3: Agents-as-Tools',
    introduction: 'Learn to use agents as tools within other agents for modular architectures.',
    topics: ['Agent-as-Tool Pattern', 'Wrapping Agents', 'Tool Interface', 'Composition'],
    content: `# Agents-as-Tools

## 3.1 Agent-as-Tool Pattern
Use entire agents as tools within other agents.

## 3.2 Benefits
- Modularity: Reuse agents
- Encapsulation: Hide complexity
- Composition: Build complex systems
- Scalability: Add capabilities easily

## 3.3 Agent Composition
Create agent hierarchy with manager coordinating workers.

✓ Agents-as-tools complete!`,
    codeExamples: [
      {
        title: 'Agent as Tool',
        code: 'from openai_agents import Agent, agent_tool\n\ncoder = Agent(name="Coder", instructions="Write and explain code")\n\n@agent_tool(coder)\ndef write_code(requirement: str) -> str:\n    """Write code using expert coder agent"""\n    pass\n\nmanager = Agent(name="ProjectManager", tools=[write_code])',
        explanation: 'Wrap agent as tool for reuse'
      },
      {
        title: 'Multiple Agents as Tools',
        code: 'from openai_agents import Agent, agent_tool\n\nresearcher = Agent(name="Researcher")\nanalyst = Agent(name="Analyst")\n\n@agent_tool(researcher)\ndef research(topic: str) -> str:\n    """Research topic"""\n    pass\n\n@agent_tool(analyst)\ndef analyze(data: str) -> str:\n    """Analyze data"""\n    pass\n\nmanager = Agent(name="Manager", tools=[research, analyze])',
        explanation: 'Multiple agents as tools in manager'
      }
    ],
    quiz: {
      id: 'openai-adv-ch3-quiz',
      questions: [
        { id: 'q1', question: 'Agents-as-tools pattern enables?', options: ['Agent composition', 'Tool creation', 'API calls', 'Error handling'], correctAnswer: 0 },
        { id: 'q2', question: 'Agent tool decorator?', options: ['@agent_tool', '@tool', '@function_tool', '@agent'], correctAnswer: 0 },
        { id: 'q3', question: 'Benefit of pattern?', options: ['Modularity', 'Speed', 'Cost reduction', 'Simplicity'], correctAnswer: 0 },
        { id: 'q4', question: 'Agent-as-tool wraps?', options: ['Entire agent', 'Only tools', 'Only functions', 'Only API'], correctAnswer: 0 },
        { id: 'q5', question: 'Composition enables?', options: ['Complex systems', 'Simple systems', 'No systems', 'Tools only'], correctAnswer: 0 }
      ]
    },
    summary: 'Agents-as-tools pattern enables modular composition by wrapping entire agents as reusable tools.'
  },
  {
    id: 'openai-adv-ch4-custom-tools',
    title: 'Chapter 4: Custom Tool Development',
    introduction: 'Build custom tools with advanced functionality and external API integrations.',
    topics: ['Custom Tool Creation', 'API Integration', 'Error Handling', 'Tool Optimization'],
    content: `# Custom Tool Development

## 4.1 Advanced Custom Tools
Create sophisticated tools with full control.

## 4.2 Tool with Validation
Validate inputs before processing.

## 4.3 Async Tools
Use async/await for async operations.

## 4.4 Error Handling
Handle errors gracefully in tools.

✓ Custom tool development complete!`,
    codeExamples: [
      {
        title: 'API Integration Tool',
        code: 'from openai_agents import Agent, function_tool\nimport requests\n\n@function_tool\ndef get_weather(city: str) -> str:\n    """Get weather from API"""\n    api_key = "your_api_key"\n    url = "https://api.weather.com/" + city\n    try:\n        response = requests.get(url, headers={"Authorization": api_key})\n        data = response.json()\n        return "Weather: " + str(data["condition"]) + ", Temp: " + str(data["temp"]) + "C"\n    except Exception as e:\n        return "Error: " + str(e)\n\nagent = Agent(name="WeatherBot", tools=[get_weather])',
        explanation: 'Custom tool with external API integration'
      },
      {
        title: 'Tool with Validation',
        code: 'from openai_agents import Agent, function_tool\nimport re\n\n@function_tool\ndef validate_email(email: str) -> str:\n    """Validate email format"""\n    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"\n    if not re.match(pattern, email):\n        return "Invalid email: " + email\n    return "Valid email: " + email\n\nagent = Agent(name="Validator", tools=[validate_email])',
        explanation: 'Custom tool with input validation'
      }
    ],
    quiz: {
      id: 'openai-adv-ch4-quiz',
      questions: [
        { id: 'q1', question: 'Custom tools can integrate?', options: ['External APIs', 'Only functions', 'Only files', 'Only databases'], correctAnswer: 0 },
        { id: 'q2', question: 'Error handling in tools uses?', options: ['try/except', 'if/else', 'catch', 'handle'], correctAnswer: 0 },
        { id: 'q3', question: 'Async tools use?', options: ['async/await', 'sync', 'callback', 'promise'], correctAnswer: 0 },
        { id: 'q4', question: 'Tool validation important for?', options: ['Input safety', 'Speed', 'Cost', 'Output'], correctAnswer: 0 },
        { id: 'q5', question: 'Custom tools defined with?', options: ['@function_tool', '@custom_tool', '@tool', '@api'], correctAnswer: 0 }
      ]
    },
    summary: 'Custom tools enable API integration, validation, and async operations with full control over functionality.'
  },
  {
    id: 'openai-adv-ch5-safety',
    title: 'Chapter 5: Safety & Guardrails',
    introduction: 'Implement input/output guardrails and moderation for safe agent deployment.',
    topics: ['Input Guardrails', 'Output Guardrails', 'Moderation API', 'Validation Logic'],
    content: `# Safety & Guardrails

## 5.1 Input Guardrails
Validate and filter user inputs.

## 5.2 Output Guardrails
Filter agent responses before showing to users.

## 5.3 Moderation API
Use OpenAI Moderation API for content safety.

## 5.4 Custom Validation Logic
Implement domain-specific validation.

✓ Safety & guardrails complete!`,
    codeExamples: [
      {
        title: 'Input Guardrail',
        code: 'from openai_agents import Agent\n\ndef input_guardrail(user_input: str) -> bool:\n    """Validate user input"""\n    blocked = ["hack", "exploit", "illegal", "attack"]\n    for word in blocked:\n        if word in user_input.lower():\n            return False\n    return True\n\nagent = Agent(name="SafeBot")\nuser_input = "How to learn Python?"\nif input_guardrail(user_input):\n    result = agent.run(user_input)\n    print(result.output)\nelse:\n    print("Input blocked")',
        explanation: 'Filter unsafe user inputs'
      },
      {
        title: 'Output Guardrail',
        code: 'from openai_agents import Agent\n\ndef output_guardrail(output: str) -> str:\n    """Filter agent output"""\n    if any(word in output.lower() for word in ["dangerous", "illegal"]):\n        return "I cannot provide that information."\n    return output\n\nagent = Agent(name="SafeBot")\nresult = agent.run("Tell me about security")\nsafe_output = output_guardrail(result.output)\nprint(safe_output)',
        explanation: 'Filter agent responses for safety'
      }
    ],
    quiz: {
      id: 'openai-adv-ch5-quiz',
      questions: [
        { id: 'q1', question: 'Input guardrails validate?', options: ['User input', 'Agent output', 'API response', 'Tool result'], correctAnswer: 0 },
        { id: 'q2', question: 'Output guardrails filter?', options: ['Agent response', 'User input', 'API call', 'Tool output'], correctAnswer: 0 },
        { id: 'q3', question: 'Moderation API from?', options: ['OpenAI', 'User', 'Custom', 'Third-party'], correctAnswer: 0 },
        { id: 'q4', question: 'Guardrails improve?', options: ['Safety', 'Speed', 'Cost', 'Features'], correctAnswer: 0 },
        { id: 'q5', question: 'Validation logic checks?', options: ['Content safety', 'Performance', 'Cost', 'Speed'], correctAnswer: 0 }
      ]
    },
    summary: 'Guardrails ensure safety through input validation, output filtering, and moderation API integration.'
  },
  {
    id: 'openai-adv-ch6-streaming',
    title: 'Chapter 6: Streaming Responses',
    introduction: 'Implement streaming responses for real-time agent output generation.',
    topics: ['Streaming Basics', 'Stream Handler', 'Real-time Output', 'Stream Events'],
    content: `# Streaming Responses

## 6.1 What is Streaming?
Get agent output in real-time as it is generated.

## 6.2 Stream Handler
Process each chunk as it arrives.

## 6.3 Stream with Events
Handle different event types in stream.

## 6.4 Benefits
- UX: Users see progress
- Latency: Perceived faster response
- Engagement: Real-time interaction
- Debugging: See generation process

✓ Streaming responses complete!`,
    codeExamples: [
      {
        title: 'Basic Streaming',
        code: 'from openai_agents import Agent\n\nagent = Agent(name="Streamer", instructions="Write detailed responses")\nprint("Generating response...")\nfor chunk in agent.run_stream("Write a short story"):\n    print(chunk, end="", flush=True)\nprint("\\nGeneration complete!")',
        explanation: 'Stream agent output in real-time'
      },
      {
        title: 'Stream with Events',
        code: 'from openai_agents import Agent\n\nagent = Agent(name="EventStreamer", tools=[my_tool])\nfor event in agent.run_stream("Process this"):\n    if hasattr(event, "type"):\n        if event.type == "text":\n            print(event.content, end="")\n        elif event.type == "tool_call":\n            print("\\nUsing tool:", event.name)\n    else:\n        print(event, end="", flush=True)',
        explanation: 'Handle different stream events'
      }
    ],
    quiz: {
      id: 'openai-adv-ch6-quiz',
      questions: [
        { id: 'q1', question: 'Streaming provides?', options: ['Real-time output', 'Batch output', 'Delayed output', 'No output'], correctAnswer: 0 },
        { id: 'q2', question: 'Stream method is?', options: ['run_stream()', 'stream()', 'run_realtime()', 'generate_stream()'], correctAnswer: 0 },
        { id: 'q3', question: 'Streaming improves?', options: ['User experience', 'Accuracy', 'Cost', 'Security'], correctAnswer: 0 },
        { id: 'q4', question: 'Stream chunk printed with?', options: ['print(chunk, end="")', 'print(chunk)', 'echo chunk', 'write chunk'], correctAnswer: 0 },
        { id: 'q5', question: 'flush=True does?', options: ['Immediate output', 'Buffered output', 'Delayed output', 'No output'], correctAnswer: 0 }
      ]
    },
    summary: 'Streaming enables real-time output generation, improving user experience with visible progress.'
  },
  {
    id: 'openai-adv-ch7-context',
    title: 'Chapter 7: Context Management',
    introduction: 'Manage conversation context effectively for multi-turn interactions.',
    topics: ['Context Window', 'Context Limits', 'Context Compression', 'Memory Strategies'],
    content: `# Context Management

## 7.1 Context Window
Maximum tokens agent can process.

## 7.2 Context Limits
- gpt-4o: 128K tokens
- gpt-4: 8K-32K tokens
- gpt-3.5: 16K tokens

## 7.3 Context Compression
Compress old messages to fit limits.

## 7.4 Memory Strategies
- Sliding Window: Keep recent messages
- Summarization: Summarize old messages
- Selective: Keep important messages
- Hybrid: Combine strategies

✓ Context management complete!`,
    codeExamples: [
      {
        title: 'Context Window Management',
        code: 'from openai_agents import Agent, Runner\n\nagent = Agent(name="LongContextBot", model="gpt-4o", max_tokens=8192)\nrunner = Runner()\nfor i in range(20):\n    result = runner.run(agent, "Message " + str(i))\n    print(result.output)',
        explanation: 'Manage long conversations with large context'
      },
      {
        title: 'Context Compression',
        code: 'from openai_agents import Agent\n\ndef compress_history(messages: list, max_messages: int = 10) -> list:\n    """Compress conversation history"""\n    if len(messages) <= max_messages:\n        return messages\n    return messages[:2] + messages[-8:]\n\nagent = Agent(name="SmartContextBot", instructions="Use compressed context")\ncompressed = compress_history(long_conversation)\nresult = agent.run("Continue...", context=compressed)',
        explanation: 'Compress context to fit limits'
      }
    ],
    quiz: {
      id: 'openai-adv-ch7-quiz',
      questions: [
        { id: 'q1', question: 'Context window is?', options: ['Max tokens', 'Min tokens', 'Speed limit', 'Cost limit'], correctAnswer: 0 },
        { id: 'q2', question: 'gpt-4o context size?', options: ['128K tokens', '8K tokens', '32K tokens', '16K tokens'], correctAnswer: 0 },
        { id: 'q3', question: 'Context compression helps?', options: ['Fit limits', 'Increase speed', 'Reduce cost', 'Improve accuracy'], correctAnswer: 0 },
        { id: 'q4', question: 'Sliding window keeps?', options: ['Recent messages', 'All messages', 'First messages', 'Random messages'], correctAnswer: 0 },
        { id: 'q5', question: 'Summarization strategy?', options: ['Summarize old', 'Delete all', 'Keep all', 'Ignore context'], correctAnswer: 0 }
      ]
    },
    summary: 'Context management handles conversation history through compression, limits, and memory strategies.'
  },
  {
    id: 'openai-adv-ch8-human-loop',
    title: 'Chapter 8: Human-in-the-Loop',
    introduction: 'Implement human approval and intervention in agent workflows.',
    topics: ['Human Approval', 'Intervention Points', 'Feedback Loop', 'Manual Override'],
    content: `# Human-in-the-Loop

## 8.1 Human Approval
Require human confirmation for critical actions.

## 8.2 Intervention Points
Check before critical operations.

## 8.3 Feedback Loop
Collect human feedback on outputs.

## 8.4 Manual Override
Allow human control over agent actions.

✓ Human-in-the-loop complete!`,
    codeExamples: [
      {
        title: 'Approval Workflow',
        code: 'from openai_agents import Agent\n\ndef require_approval(action: str) -> bool:\n    """Require human approval"""\n    print("\\nACTION:", action)\n    response = input("Approve? (y/n): ")\n    return response.lower() == "y"\n\nagent = Agent(name="SafeExecutor", instructions="Describe actions clearly")\nresult = agent.run("Send email to team")\nif require_approval(result.output):\n    print("Action approved and executed")\nelse:\n    print("Action denied")',
        explanation: 'Human approval for agent actions'
      },
      {
        title: 'Feedback Collection',
        code: 'from openai_agents import Agent\n\ndef collect_feedback(output: str) -> dict:\n    """Collect human feedback"""\n    print("\\nOutput:", output)\n    rating = input("Rating (1-5): ")\n    comments = input("Comments: ")\n    return {"rating": int(rating), "comments": comments}\n\nagent = Agent(name="FeedbackBot")\nresult = agent.run("Generate report")\nfeedback = collect_feedback(result.output)\nprint("Feedback saved:", feedback)',
        explanation: 'Collect and save human feedback'
      }
    ],
    quiz: {
      id: 'openai-adv-ch8-quiz',
      questions: [
        { id: 'q1', question: 'Human-in-the-loop requires?', options: ['Human approval', 'No approval', 'Auto approval', 'System approval'], correctAnswer: 0 },
        { id: 'q2', question: 'Intervention points are for?', options: ['Critical actions', 'All actions', 'No actions', 'Simple actions'], correctAnswer: 0 },
        { id: 'q3', question: 'Feedback loop collects?', options: ['Human feedback', 'System logs', 'API response', 'Tool output'], correctAnswer: 0 },
        { id: 'q4', question: 'Manual override allows?', options: ['Human control', 'Auto control', 'No control', 'System control'], correctAnswer: 0 },
        { id: 'q5', question: 'Approval function returns?', options: ['Boolean', 'String', 'Integer', 'Object'], correctAnswer: 0 }
      ]
    },
    summary: 'Human-in-the-loop enables approval workflows, intervention points, and feedback collection for safe operations.'
  },
  {
    id: 'openai-adv-ch9-tracing',
    title: 'Chapter 9: Advanced Tracing & Visualization',
    introduction: 'Implement advanced tracing, logging, and visualization for agent debugging.',
    topics: ['Advanced Tracing', 'Log Aggregation', 'Visualization', 'Performance Monitoring'],
    content: `# Advanced Tracing & Visualization

## 9.1 Advanced Tracing
Detailed execution traces with metadata.

## 9.2 Log Aggregation
Centralized logging for monitoring.

## 9.3 Visualization Tools
- Logfire: Real-time tracing
- AgentOps: Operations monitoring
- LangSmith: Trace visualization
- Custom Dashboards: Grafana, Kibana

## 9.4 Performance Monitoring
Track execution metrics and latency.

✓ Advanced tracing complete!`,
    codeExamples: [
      {
        title: 'Detailed Tracing',
        code: 'from openai_agents import Agent, Runner\n\nagent = Agent(name="TracedBot")\nrunner = Runner()\nresult = runner.run(agent, "Explain quantum computing", trace="detailed", trace_metadata={"user_id": "user-123", "session_id": "session-abc"})\nprint("Output:", result.output)\nprint("Trace ID:", result.trace_id)',
        explanation: 'Enable detailed tracing with metadata'
      },
      {
        title: 'Log Aggregation',
        code: 'from openai_agents import Agent\nimport logging\n\nlogging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")\nlogger = logging.getLogger("AgentLogger")\nagent = Agent(name="LoggedBot")\nlogger.info("Agent execution started")\nresult = agent.run("Test query")\nlogger.info("Result: " + result.output)',
        explanation: 'Aggregate logs for monitoring'
      }
    ],
    quiz: {
      id: 'openai-adv-ch9-quiz',
      questions: [
        { id: 'q1', question: 'Advanced tracing includes?', options: ['Metadata', 'Only output', 'Only input', 'Errors only'], correctAnswer: 0 },
        { id: 'q2', question: 'Log aggregation helps?', options: ['Centralized logs', 'Faster execution', 'Less cost', 'More features'], correctAnswer: 0 },
        { id: 'q3', question: 'Visualization tool example?', options: ['Logfire', 'Firelog', 'Logvisor', 'Vislog'], correctAnswer: 0 },
        { id: 'q4', question: 'Trace metadata contains?', options: ['Custom data', 'Only errors', 'Only output', 'Only input'], correctAnswer: 0 },
        { id: 'q5', question: 'Performance monitoring tracks?', options: ['Execution metrics', 'Only errors', 'Only output', 'Only input'], correctAnswer: 0 }
      ]
    },
    summary: 'Advanced tracing provides detailed execution visibility with metadata, logging, and visualization tools.'
  },
  {
    id: 'openai-adv-ch10-multi-turn',
    title: 'Chapter 10: Multi-turn Conversations',
    introduction: 'Build sophisticated multi-turn conversation flows with context retention.',
    topics: ['Conversation Flow', 'Context Retention', 'State Management', 'Conversation Patterns'],
    content: `# Multi-turn Conversations

## 10.1 Conversation Flow
Maintain context across multiple exchanges.

## 10.2 Context Retention
Session maintains conversation history.

## 10.3 State Management
Runner manages conversation state.

## 10.4 Conversation Patterns
- Q&A: Question and answer
- Tutorial: Step-by-step guidance
- Interview: Structured questions
- Support: Problem resolution

✓ Multi-turn conversations complete!`,
    codeExamples: [
      {
        title: 'Multi-turn Conversation',
        code: 'from openai_agents import Agent, Runner\n\nagent = Agent(name="TutorBot", instructions="Teach programming step by step")\nrunner = Runner()\nprint("Starting lesson...")\nresult1 = runner.run(agent, "I want to learn Python")\nprint("Bot:", result1.output)\nresult2 = runner.run(agent, "What should I start with?")\nprint("Bot:", result2.output)\nresult3 = runner.run(agent, "Show me variables")\nprint("Bot:", result3.output)',
        explanation: 'Multi-turn conversation with context'
      },
      {
        title: 'Session-based Conversation',
        code: 'from openai_agents import Agent, Runner\n\nagent = Agent(name="SupportBot")\nrunner = Runner()\nuser_session = "user-123-support"\nrunner.run(agent, "I have a billing issue", session_id=user_session)\nrunner.run(agent, "I was charged twice", session_id=user_session)\nresult = runner.run(agent, "Resolve this", session_id=user_session)\nprint(result.output)',
        explanation: 'Session-based multi-turn support'
      }
    ],
    quiz: {
      id: 'openai-adv-ch10-quiz',
      questions: [
        { id: 'q1', question: 'Multi-turn conversations need?', options: ['Context retention', 'No context', 'Single turn', 'No memory'], correctAnswer: 0 },
        { id: 'q2', question: 'Session ID helps?', options: ['Track conversation', 'Identify user', 'Store data', 'All of above'], correctAnswer: 0 },
        { id: 'q3', question: 'Conversation patterns include?', options: ['Q&A, Tutorial', 'Only Q&A', 'Only Tutorial', 'Random'], correctAnswer: 0 },
        { id: 'q4', question: 'Context retention enables?', options: ['Natural conversation', 'Fast response', 'Less cost', 'Simple output'], correctAnswer: 0 },
        { id: 'q5', question: 'Runner maintains?', options: ['Conversation state', 'API keys', 'Model config', 'Tools only'], correctAnswer: 0 }
      ]
    },
    summary: 'Multi-turn conversations maintain context across exchanges for natural, coherent interactions.'
  },
  {
    id: 'openai-adv-ch11-error-recovery',
    title: 'Chapter 11: Error Recovery & Retry Logic',
    introduction: 'Implement robust error handling and automatic retry mechanisms.',
    topics: ['Error Types', 'Retry Strategies', 'Fallback Handlers', 'Error Recovery'],
    content: `# Error Recovery & Retry Logic

## 11.1 Error Types
- API Errors: Rate limits, timeouts
- Network Errors: Connection issues
- Validation Errors: Invalid input
- Tool Errors: Tool execution failures

## 11.2 Retry Logic
Use exponential backoff for retries.

## 11.3 Fallback Handlers
Handle when all retries fail.

## 11.4 Error Recovery
Graceful degradation on failures.

✓ Error recovery complete!`,
    codeExamples: [
      {
        title: 'Retry with Backoff',
        code: 'from openai_agents import Agent\nimport time\n\ndef run_with_retry(agent, query, max_retries=3):\n    """Run agent with retry logic"""\n    for attempt in range(max_retries):\n        try:\n            print("Attempt", attempt + 1)\n            return agent.run(query)\n        except Exception as e:\n            if attempt == max_retries - 1:\n                print("All retries failed:", e)\n                raise\n            wait_time = 2 ** attempt\n            print("Retrying in", wait_time, "s")\n            time.sleep(wait_time)\n    return None\n\nagent = Agent(name="RetryBot")\nresult = run_with_retry(agent, "Process this")\nprint(result.output)',
        explanation: 'Automatic retry with exponential backoff'
      },
      {
        title: 'Fallback Handler',
        code: 'from openai_agents import Agent\n\ndef fallback_handler(error: Exception) -> str:\n    """Handle errors gracefully"""\n    error_msg = str(error).lower()\n    if "rate" in error_msg:\n        return "Too many requests. Please wait."\n    if "timeout" in error_msg:\n        return "Request timed out. Try again."\n    if "connection" in error_msg:\n        return "Connection error. Check internet."\n    return "Service unavailable. Try later."\n\nagent = Agent(name="RobustBot")\ntry:\n    result = agent.run("Query")\nexcept Exception as e:\n    result = type("Result", (), {"output": fallback_handler(e)})()\nprint(result.output)',
        explanation: 'Graceful fallback for different error types'
      }
    ],
    quiz: {
      id: 'openai-adv-ch11-quiz',
      questions: [
        { id: 'q1', question: 'Retry logic helps with?', options: ['Transient errors', 'All errors', 'No errors', 'Permanent errors'], correctAnswer: 0 },
        { id: 'q2', question: 'Exponential backoff uses?', options: ['2^attempt', 'attempt*2', 'attempt+2', 'attempt^2'], correctAnswer: 0 },
        { id: 'q3', question: 'Fallback handler runs when?', options: ['All retries fail', 'First error', 'No errors', 'Success'], correctAnswer: 0 },
        { id: 'q4', question: 'API error example?', options: ['Rate limit', 'Invalid input', 'Wrong query', 'Bad logic'], correctAnswer: 0 },
        { id: 'q5', question: 'Error recovery improves?', options: ['Reliability', 'Speed', 'Cost', 'Features'], correctAnswer: 0 }
      ]
    },
    summary: 'Error recovery with retry logic and fallback handlers ensures robust, reliable agent operations.'
  },
  {
    id: 'openai-adv-ch12-rate-limiting',
    title: 'Chapter 12: Rate Limiting & Cost Management',
    introduction: 'Implement rate limiting and manage API costs effectively.',
    topics: ['Rate Limits', 'Token Management', 'Cost Tracking', 'Optimization'],
    content: `# Rate Limiting & Cost Management

## 12.1 Rate Limits
OpenAI API has request and token limits.

## 12.2 Token Management
Estimate and limit token usage.

## 12.3 Cost Tracking
Track token usage and calculate costs.

## 12.4 Optimization
Optimize for cost and performance.

✓ Rate limiting complete!`,
    codeExamples: [
      {
        title: 'Rate Limiter',
        code: 'from openai_agents import Agent\nimport time\n\nclass RateLimiter:\n    def __init__(self, rpm=60):\n        self.requests = []\n        self.rpm = rpm\n    def wait_if_needed(self):\n        now = time.time()\n        self.requests = [r for r in self.requests if now - r < 60]\n        if len(self.requests) >= self.rpm:\n            sleep_time = 60 - (now - self.requests[0])\n            print("Rate limit. Waiting", round(sleep_time, 1), "s")\n            time.sleep(sleep_time)\n        self.requests.append(now)\n\nlimiter = RateLimiter(rpm=20)\nagent = Agent(name="RateLimitedBot")\nfor i in range(10):\n    limiter.wait_if_needed()\n    result = agent.run("Query " + str(i))\n    print("Result", i, ":", result.output[:50])',
        explanation: 'Rate limiter to respect API RPM limits'
      },
      {
        title: 'Cost Tracker',
        code: 'from openai_agents import Agent\n\nclass CostTracker:\n    def __init__(self):\n        self.total_tokens = 0\n        self.prices = {"gpt-4o": 0.005, "gpt-4": 0.03}\n    def add_usage(self, tokens: int):\n        self.total_tokens += tokens\n    def get_cost(self, model: str) -> float:\n        price = self.prices.get(model, 0.01)\n        return (self.total_tokens / 1000) * price\n\ntracker = CostTracker()\nagent = Agent(name="CostTrackerBot", model="gpt-4o")\nresult = agent.run("Write a story")\ntracker.add_usage(len(result.output) // 4)\nprint("Tokens used:", tracker.total_tokens)\nprint("Cost: $", round(tracker.get_cost("gpt-4o"), 4))',
        explanation: 'Track token usage and costs'
      }
    ],
    quiz: {
      id: 'openai-adv-ch12-quiz',
      questions: [
        { id: 'q1', question: 'Rate limiting prevents?', options: ['API limit exceeded', 'Fast execution', 'High cost', 'Errors'], correctAnswer: 0 },
        { id: 'q2', question: 'RPM stands for?', options: ['Requests per minute', 'Rate per million', 'Rounds per minute', 'Ratio per month'], correctAnswer: 0 },
        { id: 'q3', question: 'Token estimation uses?', options: ['len/4', 'len/2', 'len*4', 'len'], correctAnswer: 0 },
        { id: 'q4', question: 'Cost tracking helps?', options: ['Budget management', 'Faster execution', 'Better output', 'More features'], correctAnswer: 0 },
        { id: 'q5', question: 'Exponential backoff waits?', options: ['Increasing time', 'Same time', 'Decreasing time', 'No time'], correctAnswer: 0 }
      ]
    },
    summary: 'Rate limiting and cost management ensure sustainable API usage within budget and limits.'
  },
  {
    id: 'openai-adv-ch13-observability',
    title: 'Chapter 13: Observability (Logfire, AgentOps)',
    introduction: 'Implement comprehensive observability with Logfire, AgentOps, and monitoring tools.',
    topics: ['Observability Basics', 'Logfire Integration', 'AgentOps Setup', 'Monitoring Dashboards'],
    content: `# Observability

## 13.1 What is Observability?
Ability to understand internal state from outputs.

Three Pillars:
- Logs: Event records
- Metrics: Quantitative measurements
- Traces: Request flow

## 13.2 Logfire Integration
Real-time tracing and monitoring.

## 13.3 AgentOps Setup
Agent analytics and tracking.

## 13.4 Monitoring Dashboards
- Logfire: Real-time traces
- AgentOps: Agent analytics
- Grafana: Custom metrics
- Kibana: Log visualization

✓ Observability complete!`,
    codeExamples: [
      {
        title: 'Logfire Integration',
        code: 'import logfire\nfrom openai_agents import Agent\n\nlogfire.configure(token="your-token")\nagent = Agent(name="ObservedBot", instructions="You are monitored")\nwith logfire.span("Agent run: {query}", query="Hello"):\n    result = agent.run("Hello")\n    logfire.info("Response: {output}", output=result.output[:100])\nprint("Traced in Logfire dashboard")',
        explanation: 'Integrate Logfire for tracing'
      },
      {
        title: 'AgentOps Setup',
        code: 'import agentops\nfrom openai_agents import Agent\n\nagentops.init(api_key="your-agentops-key")\nagent = Agent(name="TrackedBot")\nagentops.start_session()\ntry:\n    result = agent.run("Process this")\n    print(result.output)\n    agentops.end_session("Success")\nexcept Exception as e:\n    agentops.end_session("Failed", str(e))\nprint("Analytics in AgentOps dashboard")',
        explanation: 'Track agent analytics with AgentOps'
      }
    ],
    quiz: {
      id: 'openai-adv-ch13-quiz',
      questions: [
        { id: 'q1', question: 'Observability includes?', options: ['Logs, Metrics, Traces', 'Only logs', 'Only metrics', 'Only traces'], correctAnswer: 0 },
        { id: 'q2', question: 'Logfire is for?', options: ['Tracing', 'Cost tracking', 'Rate limiting', 'Error handling'], correctAnswer: 0 },
        { id: 'q3', question: 'AgentOps provides?', options: ['Analytics', 'Tracing', 'Logging', 'All of above'], correctAnswer: 0 },
        { id: 'q4', question: 'Monitoring dashboards show?', options: ['Real-time data', 'Only historical', 'Only errors', 'Only success'], correctAnswer: 0 },
        { id: 'q5', question: 'Observability improves?', options: ['Debugging', 'Speed', 'Cost', 'Features'], correctAnswer: 0 }
      ]
    },
    summary: 'Observability with Logfire and AgentOps provides comprehensive monitoring, tracing, and analytics.'
  },
  {
    id: 'openai-adv-ch14-deployment',
    title: 'Chapter 14: Deployment Patterns',
    introduction: 'Deploy agents to production with best practices for scalability and reliability.',
    topics: ['Deployment Options', 'Containerization', 'Cloud Deployment', 'Production Best Practices'],
    content: `# Deployment Patterns

## 14.1 Deployment Options
- Local: Development/testing
- Docker: Containerized deployment
- Cloud: AWS, GCP, Azure, Vercel
- Serverless: Lambda, Cloud Functions

## 14.2 Docker Containerization
Build and run agents in containers.

## 14.3 Environment Variables
Store configuration in environment.

## 14.4 Production Checklist
- Environment variables
- Error handling
- Logging configured
- Rate limiting
- Health checks
- Monitoring setup
- Backup strategy
- Security hardened

✓ Deployment patterns complete!`,
    codeExamples: [
      {
        title: 'Docker Deployment',
        code: '# Dockerfile\nFROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nENV PYTHONUNBUFFERED=1\nENV LOG_LEVEL=INFO\nCMD ["python", "agent.py"]\n\n# Build and run:\n# docker build -t myagent .\n# docker run -e OPENAI_API_KEY=$OPENAI_API_KEY myagent',
        explanation: 'Containerize agent with Docker'
      },
      {
        title: 'Production Agent',
        code: 'from openai_agents import Agent, Runner\nimport os\nimport logging\n\nlogging.basicConfig(level=os.getenv("LOG_LEVEL", "INFO"), format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")\nlogger = logging.getLogger("ProductionAgent")\n\nagent = Agent(name="ProductionBot", model=os.getenv("MODEL", "gpt-4o"), max_tokens=int(os.getenv("MAX_TOKENS", "4096")))\nrunner = Runner()\n\ndef health_check():\n    """Health check endpoint"""\n    try:\n        result = runner.run(agent, "Say hello")\n        return True\n    except Exception as e:\n        logger.error("Health check failed: " + str(e))\n        return False\n\nif __name__ == "__main__":\n    logger.info("Agent started")\n    result = runner.run(agent, "Process request")\n    logger.info("Result: " + result.output[:100])',
        explanation: 'Production-ready agent with logging and health checks'
      }
    ],
    quiz: {
      id: 'openai-adv-ch14-quiz',
      questions: [
        { id: 'q1', question: 'Deployment options include?', options: ['Docker, Cloud, Serverless', 'Only local', 'Only cloud', 'Only Docker'], correctAnswer: 0 },
        { id: 'q2', question: 'Docker provides?', options: ['Containerization', 'Virtualization', 'Emulation', 'Simulation'], correctAnswer: 0 },
        { id: 'q3', question: 'Environment variables store?', options: ['Configuration', 'Code', 'Data', 'Output'], correctAnswer: 0 },
        { id: 'q4', question: 'Production checklist includes?', options: ['All of above', 'Error handling', 'Logging', 'Monitoring'], correctAnswer: 0 },
        { id: 'q5', question: 'Health check verifies?', options: ['Agent working', 'Cost', 'Speed', 'Features'], correctAnswer: 0 }
      ]
    },
    summary: 'Deployment patterns cover Docker, cloud platforms, environment configuration, and production best practices.'
  }
];
