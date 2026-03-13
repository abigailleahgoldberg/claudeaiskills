export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'how-to-write-better-claude-prompts-2026',
    title: 'How to Write Better Claude Prompts in 2026',
    seoTitle: 'How to Write Better Claude Prompts in 2026 | Claude AI Skills',
    seoDescription: 'Learn practical techniques to write Claude prompts that get better results. No theory -- just what actually works in 2026.',
    date: '2026-02-03',
    category: 'Prompting',
    readTime: '5 min read',
    excerpt: 'Most people write prompts the same way they search Google. That does not work with Claude. Here is what does.',
    content: `Most people write prompts the same way they search Google. Short, vague, keyword-heavy. That does not work with Claude. Claude responds to clarity, context, and structure -- not keyword matching.

Here are the techniques that produce better results right now.

**Give Claude a role before the task**

Before you describe what you want, tell Claude who it is. "You are a senior copywriter with 10 years of B2B experience" produces sharper output than jumping straight into the request. Claude adjusts its vocabulary, assumptions, and depth based on the role you assign.

**State the format explicitly**

If you want bullet points, say so. If you want a table, say table. If you want three paragraphs and no headers, specify that. Claude will not guess your preferred format -- it will pick one, and it may not be the one you want.

**Provide the context Claude cannot see**

Claude does not know your audience, your brand voice, or your constraints. Tell it. "Write this for mid-market CFOs who are skeptical of AI" gives Claude something to work with. "Write a blog post about AI" does not.

**Use constraints to sharpen output**

Word limits, reading level targets, and tone restrictions all help. "Under 200 words, eighth-grade reading level, no jargon" will get you a tighter result than an open-ended prompt every time.

**Iterate, do not start over**

When you get a response that is close but not right, follow up directly. "Make it more direct" or "cut the second paragraph" works better than rewriting the whole prompt. Claude holds context well. Use that.

**Show an example when the format is unusual**

If you need output in a very specific structure -- a particular JSON schema, a branded template, a niche format -- paste an example. Claude will mirror it. This is faster than describing the format in words.

**Split complex tasks into steps**

Ask Claude to do one thing at a time for multi-part tasks. "First, give me five angles for this article. Then we will pick one and outline it." Chaining steps produces better results than one massive prompt trying to do everything.

The common thread: Claude performs best when it knows who it is, who it is writing for, what format you need, and what constraints apply. Give it that information upfront.

Ready to put Claude to work for your business? [Book a free consultation](https://thevoiceofcash.com/consultation).`,
  },
  {
    slug: 'claude-vs-chatgpt-which-ai-is-right-for-your-business',
    title: 'Claude vs ChatGPT: Which AI Is Right for Your Business?',
    seoTitle: 'Claude vs ChatGPT: Which AI Is Right for Your Business? | Claude AI Skills',
    seoDescription: 'A direct comparison of Claude and ChatGPT for business use. See which AI handles writing, coding, analysis, and complex reasoning better.',
    date: '2026-02-10',
    category: 'Comparison',
    readTime: '6 min read',
    excerpt: 'Claude and ChatGPT are both capable AI tools, but they are built differently and they behave differently. Here is what that means for your business.',
    content: `Claude and ChatGPT are both capable AI tools, but they are built differently and they behave differently. Choosing between them is not about which one is "better" -- it is about which one fits your specific work.

**Long documents: Claude wins**

Claude's context window is large. It can hold entire contracts, research papers, or codebase files in a single session and reason across all of it. ChatGPT has improved here, but Claude handles very long documents with more consistency. If your work involves analyzing or summarizing lengthy content, Claude has the edge.

**Writing quality: Claude is more natural**

Claude tends to produce cleaner, more direct prose. It avoids the filler phrases and vague hedging that ChatGPT sometimes defaults to. For business writing -- emails, reports, proposals -- Claude output typically requires less editing.

**Coding: ChatGPT with Code Interpreter has advantages**

If you need to run code, debug interactively, or work with data files inside the chat, ChatGPT's Code Interpreter gives it an edge. Claude can write excellent code, but it does not have a native execution environment in the same way.

**Following complex instructions: Claude is more precise**

Claude is notably good at following multi-step instructions and maintaining constraints throughout a long response. If you say "use no passive voice and keep every paragraph under three sentences," Claude will track that. ChatGPT sometimes drifts.

**Plugins and integrations: ChatGPT has more**

The ChatGPT ecosystem is larger. More third-party integrations, more plugins, a bigger community of custom GPTs. If you want to connect your AI to existing tools through a pre-built integration, ChatGPT likely has more options today.

**Safety and tone: Claude is more conservative**

Claude is designed to be cautious. This is useful in some contexts and frustrating in others. For regulated industries or situations where you need an AI that will not go off the rails, Claude's conservative defaults are a feature. For creative or edgy content, they can feel like a constraint.

**The bottom line**

Use Claude when you need: long document analysis, clean business writing, precise instruction-following, or complex reasoning tasks.

Use ChatGPT when you need: code execution in chat, a broader plugin ecosystem, or tasks where you have existing workflows built around it.

Most businesses end up using both. They are not substitutes -- they are different tools for different jobs.

Ready to put Claude to work for your business? [Book a free consultation](https://thevoiceofcash.com/consultation).`,
  },
  {
    slug: '10-claude-skills-every-professional-should-know',
    title: '10 Claude Skills Every Professional Should Know',
    seoTitle: '10 Claude Skills Every Professional Should Know | Claude AI Skills',
    seoDescription: 'Ten practical Claude skills that save time and improve output quality for professionals. Start using these today.',
    date: '2026-02-15',
    category: 'Skills',
    readTime: '7 min read',
    excerpt: 'These ten skills separate people who get real value from Claude from people who use it occasionally and shrug.',
    content: `These ten skills separate people who get real value from Claude from people who use it occasionally and shrug. None of them require technical knowledge -- just practice.

**1. Role assignment**

Start every task with "You are a [specific expert]." Claude performs better with a clear identity. "You are a tax attorney reviewing this contract" produces different output than "review this contract."

**2. Output format control**

Specify exactly how you want information returned. Table, numbered list, JSON, prose with headers -- Claude follows format instructions precisely. This cuts editing time significantly.

**3. Iterative refinement**

Use Claude as a drafting partner, not a one-shot generator. Ask for a first draft, then refine it through follow-up prompts. "Make it shorter" or "lead with the second point" works better than regenerating from scratch.

**4. Document summarization**

Paste long documents and ask Claude to extract specific information. "What are the payment terms and liability clauses in this contract?" gets you targeted answers faster than reading manually.

**5. Tone matching**

Share an example of your existing writing and ask Claude to match it. "Here is a sample of how I write. Use this style for the following email." Claude can learn your voice from a short sample.

**6. Structured brainstorming**

Use Claude to generate options before you decide. "Give me 10 angles for this article, one sentence each." Review the list and pick the best one. Faster than blank-page thinking.

**7. Devil's advocate analysis**

Ask Claude to argue against your plan. "What are the strongest objections to this proposal?" Claude will find weaknesses you missed. Use this before presenting to stakeholders.

**8. Template creation**

Ask Claude to turn a one-off piece into a reusable template. "Turn this email into a template I can reuse for similar situations." Save the template and skip the writing next time.

**9. Data interpretation**

Paste a spreadsheet or dataset and ask specific questions. Claude can identify patterns, flag outliers, and suggest conclusions. No formulas required.

**10. Chain of thought prompting**

For complex problems, ask Claude to "think step by step" before giving an answer. This produces more accurate reasoning, especially for logic problems, math, or multi-variable decisions.

Practice these consistently and you will spend less time prompting and more time using the output.

Ready to put Claude to work for your business? [Book a free consultation](https://thevoiceofcash.com/consultation).`,
  },
  {
    slug: 'how-to-use-claude-for-content-creation',
    title: 'How to Use Claude for Content Creation (With Real Examples)',
    seoTitle: 'How to Use Claude for Content Creation | Claude AI Skills',
    seoDescription: 'Practical guide to using Claude for blog posts, social media, email, and video scripts -- with real prompt examples.',
    date: '2026-02-20',
    category: 'Use Cases',
    readTime: '6 min read',
    excerpt: 'Claude can handle most of your content production -- but only if you prompt it right. Here are the workflows that work.',
    content: `Claude can handle most of your content production -- but only if you prompt it right. Generic prompts produce generic content. Specific prompts produce usable output. Here is how to do it across the most common content types.

**Blog posts**

Do not ask Claude to "write a blog post about X." Instead, give it a structure. "Write a 600-word blog post with this format: opening hook (2 sentences), three main points with examples, and a closing call to action. Topic: why small businesses should use AI for customer service. Audience: business owners with no technical background."

That level of specificity produces a first draft you can actually edit rather than rewrite.

**Social media**

Batch your social content. "Write 10 LinkedIn posts about prompt engineering. Each post should be under 150 words, start with a hook, and end with a question. Use a conversational tone." Then pick the best ones. You get a week of content in five minutes.

**Email sequences**

Claude writes good email sequences when you define the goal for each email. "Write a 3-email welcome sequence for new subscribers to a Claude training newsletter. Email 1: set expectations. Email 2: deliver one quick win. Email 3: invite them to book a call." Specify the goal, not just the topic.

**Video scripts**

For video, ask Claude to write in the way you speak. Share a transcript of something you have said before, then say "write a 90-second script in this speaking style about [topic]." Claude will adapt its output to match your natural rhythm.

**Repurposing existing content**

Paste an existing blog post and ask Claude to turn it into social posts, an email, a script outline, and a FAQ. One piece of content becomes five. This is one of the highest-leverage uses of Claude for content teams.

**What Claude does not do well**

Claude does not know your audience as well as you do. It does not know which topics landed in the past. It does not know your current offers or timing. You still need to bring that strategy. Claude handles execution -- you handle direction.

Use Claude to produce first drafts and variations. Use your judgment to select and edit. That combination is faster than either one alone.

Ready to put Claude to work for your business? [Book a free consultation](https://thevoiceofcash.com/consultation).`,
  },
  {
    slug: 'claude-prompt-engineering-basics-that-actually-work',
    title: 'Claude Prompt Engineering: The Basics That Actually Work',
    seoTitle: 'Claude Prompt Engineering: The Basics That Work | Claude AI Skills',
    seoDescription: 'Skip the hype. Here are the prompt engineering fundamentals that reliably improve Claude output quality.',
    date: '2026-02-25',
    category: 'Prompting',
    readTime: '5 min read',
    excerpt: 'Prompt engineering does not need to be complicated. These fundamentals will improve your results starting with your next prompt.',
    content: `Prompt engineering does not need to be complicated. Most of the "advanced techniques" are just specific applications of a few core principles. Master these and you will outperform most Claude users.

**Principle 1: Clarity beats cleverness**

Write prompts the way you would brief a smart new employee. Assume they are capable but have no background knowledge of your situation. Be explicit about what you need, who it is for, and what success looks like.

A vague prompt: "Write something about our new product launch."

A clear prompt: "Write a 250-word email announcement for our new project management tool. Audience: existing customers who currently use spreadsheets. Goal: get them to try the free trial. Tone: direct and confident, not salesy."

**Principle 2: Constraints improve output**

Open-ended prompts produce open-ended responses. Add constraints and you get sharper output. Word count limits, format requirements, and tone specifications all help.

If you are not happy with Claude's output, add more constraints before rewriting the whole prompt.

**Principle 3: Examples are worth a thousand descriptions**

If you need Claude to write in a specific style or format, show it an example. Paste one and say "write something similar." Claude will match tone, length, vocabulary, and structure better from an example than from a description.

**Principle 4: One task at a time**

Prompts that ask Claude to do five things at once produce five mediocre results. Break complex tasks into steps. Finish one before starting the next. This is especially true for research, analysis, and writing tasks that require different thinking modes.

**Principle 5: Ask for reasoning on important decisions**

For analysis or decision-support tasks, ask Claude to show its work. "Explain your reasoning step by step" or "walk me through how you reached that conclusion" helps you catch errors and evaluate the output more accurately.

**Principle 6: Tell Claude what to avoid**

Negative instructions work well. "Do not use passive voice," "avoid jargon," "do not include an introduction or summary" -- Claude follows exclusion instructions reliably. Use them when you know what you do not want.

These six principles cover 80% of what makes a prompt effective. Practice them until they are automatic.

Ready to put Claude to work for your business? [Book a free consultation](https://thevoiceofcash.com/consultation).`,
  },
  {
    slug: 'how-to-use-claude-api-for-business-automation',
    title: 'How to Use Claude API for Business Automation',
    seoTitle: 'How to Use Claude API for Business Automation | Claude AI Skills',
    seoDescription: 'A practical guide to automating business workflows with the Claude API. Covers authentication, prompting, and real automation examples.',
    date: '2026-03-03',
    category: 'Advanced',
    readTime: '8 min read',
    excerpt: 'The Claude API lets you build AI into your business workflows without a UI. Here is how to get started and what to build first.',
    content: `The Claude API lets you embed Claude directly into your business processes. No chat interface required. You send a request, Claude responds, your system does something with that response. That loop is the foundation of AI automation.

Here is a practical guide to getting started.

**Authentication and setup**

Get an API key from console.anthropic.com. Store it as an environment variable -- never hardcode it in your application. Every API call includes this key in the header.

The API accepts a model name, a system prompt, and a user message. The system prompt is where you define Claude's role and behavior for that specific workflow. The user message is the input your system provides at runtime.

**Start with simple extraction tasks**

The easiest automation wins are information extraction tasks. Feed Claude unstructured data -- customer emails, support tickets, form submissions -- and ask it to extract structured information.

Example: an e-commerce company routes customer emails through Claude. The system prompt says "Extract: customer name, order number, issue type (return/exchange/damage/question), and urgency (high/medium/low). Return as JSON." Every email comes out as clean structured data, routed automatically to the right team.

**Content generation at scale**

If you produce a lot of similar content -- product descriptions, job postings, report summaries, social posts -- the API lets you generate it programmatically. Build a template, inject your variables, send the request, store the output.

A real estate company uses this to generate property descriptions from a spreadsheet of specs. They pipe each row through Claude, get a polished paragraph back, and load it directly into their CMS. What took hours now runs unattended.

**Classification and routing**

Claude is good at classifying inputs into categories you define. Feed it a support ticket and ask "which of these five departments should handle this?" Feed it a lead and ask "which sales tier does this prospect fall into?" The responses drive automated routing logic.

**Error handling matters**

API calls can fail. Build retry logic. Validate that Claude's output matches your expected format before passing it downstream. If you expect JSON, parse it and handle exceptions. Production automations need error handling -- assume things will go wrong occasionally.

**Cost management**

The API charges per token. Monitor your usage. For high-volume automations, keep system prompts short, use the smallest model that works for the task, and cache responses when the input is the same.

**Where to start**

Pick one repetitive task your team does every week that involves reading or writing text. Build a simple script that sends that input to Claude and returns structured output. Test it manually, then automate the trigger. That is your first automation.

Ready to put Claude to work for your business? [Book a free consultation](https://thevoiceofcash.com/consultation).`,
  },
  {
    slug: 'getting-started-with-claude-no-nonsense-guide',
    title: 'Getting Started with Claude: A No-Nonsense Guide',
    seoTitle: 'Getting Started with Claude: A No-Nonsense Guide | Claude AI Skills',
    seoDescription: 'New to Claude? This guide covers the basics quickly so you can start getting real value from it today.',
    date: '2026-03-08',
    category: 'Getting Started',
    readTime: '4 min read',
    excerpt: 'Claude is not complicated, but there is a right way and a wrong way to use it. This guide gets you started on the right side.',
    content: `Claude is not complicated, but there is a right way and a wrong way to use it. This guide gets you started on the right side.

**What Claude is**

Claude is a large language model built by Anthropic. You interact with it through text. You type something, it responds. What makes it useful is the quality and flexibility of those responses -- and the fact that it can handle a huge range of tasks.

**Getting access**

Go to claude.ai and create an account. The free tier works for most basic tasks. The paid plan (Claude Pro) gives you more messages per day, access to the most capable models, and priority access when servers are busy. For business use, start with Pro.

**Your first conversation**

Start with something you actually need done. Do not experiment with random prompts -- use a real task from your work. Write an email, summarize a document, draft a plan, explain a concept. Using real work makes the learning stick.

**How to structure a prompt**

Three parts: context, task, format.

Context: who is Claude, who is the audience, what is the background.
Task: what do you want Claude to do.
Format: how do you want the output structured.

You do not need all three every time, but adding them improves results. A prompt with all three is almost always better than a prompt with just the task.

**What Claude handles well**

Writing, editing, summarizing, analyzing, brainstorming, coding, explaining, translating, structuring information. For most knowledge work tasks, Claude can handle a first draft or provide a useful starting point.

**What Claude handles poorly**

Real-time information (Claude's training data has a cutoff), personal memory between separate conversations (unless you use a tool with memory features), and tasks that require verified facts about recent events.

**One thing to remember**

Claude does not know what you know. It does not know your business, your audience, or your preferences unless you tell it. The more context you provide upfront, the better the output. Think of every prompt as a brief -- the more complete the brief, the better the result.

Start with one task today. See what it produces. Refine the prompt once. That cycle -- try, evaluate, refine -- is how you get good at using Claude quickly.

Ready to put Claude to work for your business? [Book a free consultation](https://thevoiceofcash.com/consultation).`,
  },
  {
    slug: 'building-custom-claude-skills-guide',
    title: 'Building Custom Claude Skills: A Step-by-Step Guide',
    seoTitle: 'Building Custom Claude Skills: A Step-by-Step Guide',
    seoDescription: 'Learn what a Claude skill is, how to structure it with SKILL.md and scripts, and how to test and iterate to build reliable AI capabilities.',
    date: '2026-03-13',
    category: 'Tutorials',
    readTime: '8 min read',
    excerpt: "A Claude skill is a structured package that gives an AI agent a reliable, reusable capability. Here's how to build one from scratch — SKILL.md, scripts, reference files, and all.",
    content: `A Claude skill is more than a prompt. It is a structured package — a directory of files — that gives an AI agent a reliable, reusable capability with consistent behavior. If you've used Claude and found yourself writing the same context-setting instructions repeatedly, or noticed that complex tasks need reference materials to work well, skills are the architecture that solves both problems.

This guide walks you through building a custom Claude skill from scratch.

## What a Claude Skill Actually Is

A skill is a directory containing at minimum a \`SKILL.md\` file, which describes what the skill does, how to use it, and what resources are available. Most production skills also include a \`scripts/\` directory with executable scripts, and a \`references/\` or \`data/\` directory with reference materials the skill needs.

The mental model: a skill is like hiring a specialist. A generalist Claude can try to do anything, but a Claude equipped with a custom skill has the specialist's tools, reference materials, and documented workflow for a specific task. The skill doesn't make Claude smarter — it makes Claude better-prepared for a specific job.

Skills are read at runtime. When a task matches a skill's description, the agent reads the \`SKILL.md\` file and follows its instructions. The skill file is the bridge between "Claude in general" and "Claude doing this specific thing reliably."

## Anatomy of a Skill

### SKILL.md

The central file. Everything else orbits around it. A well-written \`SKILL.md\` includes:

**Description:** A clear statement of what the skill does and when to use it. This is used for skill matching — the agent reads this to determine if the skill applies to a given task. Write it as a precise trigger condition, not a marketing description.

\`\`\`markdown
## When to Use This Skill
Use when: user asks to transcribe audio files, convert speech to text, or process audio content.
NOT for: real-time transcription, video transcription (extract audio first), or files over 25MB.
\`\`\`

**Prerequisites and setup:** What the agent needs before running the skill. API keys, dependencies, environment variables, required tools.

\`\`\`markdown
## Prerequisites
- OPENAI_API_KEY must be set in environment
- Python 3.9+ required
- Install: pip install openai
\`\`\`

**Step-by-step instructions:** The actual workflow the agent follows. Don't assume the agent will figure out the right order — specify it. The more explicit you are here, the more consistent the skill's behavior.

\`\`\`markdown
## Process
1. Check that the audio file exists and is under 25MB
2. Run scripts/transcribe.py with the file path as argument
3. Review the output for obvious errors
4. Save the transcript to the specified output location
5. Report the word count and any flagged uncertainties
\`\`\`

**Output format:** What the final output should look like. If you want a specific format, specify it here. Don't leave it to interpretation.

**Error handling:** What to do when things go wrong. Which errors are recoverable, which require human intervention, and what information to include in error reports.

### The scripts/ Directory

Scripts are the executable heart of a skill. They handle the parts of a task that are better done by code than by language model: API calls, file processing, data transformation, external service integration.

A good skill script:

- Does one thing and does it well
- Accepts arguments from the command line (so the agent can call it with \`exec\`)
- Handles errors explicitly and prints useful error messages
- Outputs its result in a format the agent can parse — plain text, JSON, or a file

Keep scripts simple. A script that does too much becomes hard to debug and hard to reuse. If a skill needs to do several distinct things, give it several scripts and have the \`SKILL.md\` orchestrate them.

Example script structure:
\`\`\`
skills/
  my-skill/
    SKILL.md
    scripts/
      process.py       # Core processing logic
      validate.py      # Input validation
      format_output.py # Output formatting
    references/
      template.md      # Output template
      examples/        # Example inputs and outputs
        example_input.txt
        example_output.txt
\`\`\`

### Reference Files

Reference files give the skill stable knowledge it needs to do its job correctly. This might be:

- **Templates:** Document templates, output formats, email structures
- **Configuration:** Settings that change occasionally but shouldn't be hardcoded in scripts
- **Examples:** Input/output examples that help the agent calibrate what "good output" looks like
- **Reference data:** Lookup tables, product catalogs, industry terms — anything the agent needs to consult but shouldn't generate from scratch

The distinction between reference files and just putting context in the \`SKILL.md\` is practical: \`SKILL.md\` is for instructions. Reference files are for data. If you find your \`SKILL.md\` getting very long because you're including a lot of data, that data probably belongs in a reference file.

## Building Your First Skill

Let's walk through building a simple skill: a blog post formatter that takes a rough draft and formats it according to a specific template.

**Step 1: Define what the skill does**

Before writing a single file, write one sentence: "This skill [does what] [for what input] [to produce what output]."

"This skill takes a rough blog post draft and formats it according to our standard template, adding appropriate headers, fixing formatting inconsistencies, and checking SEO elements."

That sentence becomes the core of your \`SKILL.md\` description.

**Step 2: Write the SKILL.md**

\`\`\`markdown
# Blog Post Formatter

## Description
Format rough blog drafts to match the standard template. Use when given a draft blog post that needs formatting, headers, or SEO review.

## Prerequisites
No external dependencies required. Template is at references/template.md.

## Process
1. Read the draft content provided by the user
2. Read references/template.md to understand the required structure
3. Reformat the draft to match the template structure:
   - Add H2 headers for each major section
   - Format the introduction paragraph (2-3 sentences, no jargon)
   - Add the standard CTA section at the end
   - Check that the title is under 60 characters
4. Review the formatted post for consistency
5. Output the formatted post in a code block labeled "Formatted Post"
6. Provide a brief summary of changes made

## Output Format
- Formatted post in a code block
- Summary list of changes made
- Word count of final post

## Common Issues
- If the draft has no clear sections, ask the user to identify the main topics before formatting
- If the draft is under 300 words, flag it as too short before formatting
\`\`\`

**Step 3: Create the reference template**

\`\`\`markdown
# [Title — under 60 chars]

[Introduction: 2-3 sentences. What is this post about? Who is it for?]

## [Section 1 Header]

[Section content]

## [Section 2 Header]

[Section content]

[Additional sections as needed]

## Summary

[3-5 bullet points summarizing key takeaways]

---

Ready to put this into practice? [Book a free consultation](/consultation).
\`\`\`

**Step 4: Test it**

Point the agent at the skill and give it a rough draft. Does it follow the instructions? Does the output match the template? Does it handle edge cases (too-short drafts, drafts with no clear sections) the way you specified?

First runs rarely produce exactly what you want. Take notes on where the behavior diverges from your intent and update the \`SKILL.md\` to be more explicit about those cases.

## Testing and Iteration

The testing loop for skills is: run the skill on a test input, compare output to expected output, identify the gap, update the SKILL.md or scripts, repeat.

Keep a \`tests/\` directory in your skill with example inputs and expected outputs. This gives you a baseline to compare against when you make changes — you can verify that an improvement in one area didn't break behavior in another.

The most common iteration pattern:

1. Skill works for the common case but fails on edge cases → add explicit edge case handling to SKILL.md
2. Skill's output format is inconsistent → add more specific output format instructions with examples
3. Skill calls a script but the script fails silently → add error handling to the script and error recovery steps to SKILL.md
4. Skill is too general and produces different results on similar inputs → add examples to the references directory to anchor expected behavior

Skills improve through iteration. The first version will have gaps. That's expected. The discipline is documenting those gaps and closing them systematically.

## When to Build a Skill vs. Just Prompt

Build a skill when:
- You're going to do the same type of task more than a few times
- The task requires reference materials that need to stay current
- The task involves executable scripts or external API calls
- You want consistent behavior across different sessions and contexts
- Other people or agents will need to use the same capability

Skip the skill when:
- It's a one-off task
- The task is simple enough that a single clear prompt works reliably
- You're still exploring the right approach

Skills are an investment. They take time to build well. They pay off when you're running the same capability repeatedly and need it to be reliable.

Ready to put Claude to work for your business? [Book a free consultation](https://thevoiceofcash.com/consultation).`,
  },
];
