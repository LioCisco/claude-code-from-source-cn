# CLAUDE.md

## What Is This Project?

"Claude Code from Source" — a technical book analyzing the architecture of Anthropic's Claude Code CLI, reverse-engineered from source maps leaked via npm. Written in the style of an O'Reilly technical book.

## Project Structure

```
claude-code-from-source/
  README.md                    # Book cover, TOC, key patterns
  CLAUDE.md                    # This file
  book/                        # The book content (18 chapters as markdown)
    ch01-architecture.md
    ch02-bootstrap.md
    ch03-state.md
    ch04-api-layer.md
    ch05-agent-loop.md
    ch06-tools.md
    ch07-concurrency.md
    ch08-sub-agents.md
    ch09-fork-agents.md
    ch10-coordination.md
    ch11-memory.md
    ch12-extensibility.md
    ch13-terminal-ui.md
    ch14-input-interaction.md
    ch15-mcp.md
    ch16-remote.md
    ch17-performance.md
    ch18-epilogue.md
  prompts/                     # Reusable prompts for book generation
  web/                         # Static web app (Astro — future)
  .reference/                  # Local-only material (gitignored)
    src/                       # The original source files
    analysis-notes/            # Raw analysis from exploration phase
```

## Key Rules

### Content Rules
- **No verbatim source code.** All code blocks must be pseudocode with different variable names. The book teaches patterns, not implementations.
- **Mermaid for diagrams.** Use ```mermaid fenced code blocks. They render on GitHub and in the web app.
- **Each chapter: opening → body → Apply This.** The Apply This section has exactly 5 transferable patterns.
- **One concept, one home.** Don't explain the same thing in two chapters. Cross-reference instead.

### Voice
- Expert peer explaining to another expert. Direct, opinionated, no filler.
- "This is clever because..." not "It should be noted that..."
- Every sentence teaches something or sets up the next thing that teaches.

### Git Rules
- `.reference/` is gitignored — never commit source files or raw analysis
- Squash before pushing if commits contain sensitive content in history
- Commit messages: what changed and why, not what files were touched

## Repo
- GitHub: alejandrobalderas/claude-code-from-source
- Future domain: TBD (considering claude-code-from-source.com)

## Tech Stack (Web App — Future)
- Astro for static site generation
- React components where needed
- Tailwind for styling
- Mermaid.js for diagram rendering
- GitHub Pages for hosting

## Book Stats
- 18 chapters, 7 parts + epilogue
- ~6,200 lines of markdown
- ~400 pages equivalent
- 25+ Mermaid diagrams
- Produced by 36 AI agents across ~6 hours
