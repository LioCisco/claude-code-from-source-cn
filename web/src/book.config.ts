export interface PartConfig {
  number: number;
  title: string;
  epigraph: string;
  chapters: number[];
}

export interface ChapterConfig {
  number: number;
  slug: string;
  title: string;
  description: string;
}

export const parts: PartConfig[] = [
  {
    number: 1,
    title: 'Foundations',
    epigraph: 'Before the agent can think, the process must exist.',
    chapters: [1, 2, 3, 4],
  },
  {
    number: 2,
    title: 'The Core Loop',
    epigraph: 'The heartbeat of the agent: stream, act, observe, repeat.',
    chapters: [5, 6, 7],
  },
  {
    number: 3,
    title: 'Multi-Agent Orchestration',
    epigraph: 'One agent is powerful. Many agents working together are transformative.',
    chapters: [8, 9, 10],
  },
  {
    number: 4,
    title: 'Persistence and Intelligence',
    epigraph: 'An agent without memory makes the same mistakes forever.',
    chapters: [11, 12],
  },
  {
    number: 5,
    title: 'The Interface',
    epigraph: 'Everything the user sees passes through this layer.',
    chapters: [13, 14],
  },
  {
    number: 6,
    title: 'Connectivity',
    epigraph: 'The agent reaches beyond localhost.',
    chapters: [15, 16],
  },
  {
    number: 7,
    title: 'Performance Engineering',
    epigraph: 'Making it all fast enough that humans don\'t notice the machinery.',
    chapters: [17, 18],
  },
];

export const chapters: ChapterConfig[] = [
  { number: 1, slug: 'ch01-architecture', title: 'The Architecture of an AI Agent', description: 'The 6 key abstractions, data flow, permission system, build system' },
  { number: 2, slug: 'ch02-bootstrap', title: 'Starting Fast — The Bootstrap Pipeline', description: '5-phase init, module-level I/O parallelism, trust boundary' },
  { number: 3, slug: 'ch03-state', title: 'State — The Two-Tier Architecture', description: 'Bootstrap singleton, AppState store, sticky latches, cost tracking' },
  { number: 4, slug: 'ch04-api-layer', title: 'Talking to Claude — The API Layer', description: 'Multi-provider client, prompt cache, streaming, error recovery' },
  { number: 5, slug: 'ch05-agent-loop', title: 'The Agent Loop', description: 'query.ts deep dive, 4-layer compression, error recovery, token budgets' },
  { number: 6, slug: 'ch06-tools', title: 'Tools — From Definition to Execution', description: 'Tool interface, 14-step pipeline, permission system' },
  { number: 7, slug: 'ch07-concurrency', title: 'Concurrent Tool Execution', description: 'Partition algorithm, streaming executor, speculative execution' },
  { number: 8, slug: 'ch08-sub-agents', title: 'Spawning Sub-Agents', description: 'AgentTool, 15-step runAgent lifecycle, built-in agent types' },
  { number: 9, slug: 'ch09-fork-agents', title: 'Fork Agents and the Prompt Cache', description: 'Byte-identical prefix trick, cache sharing, cost optimization' },
  { number: 10, slug: 'ch10-coordination', title: 'Tasks, Coordination, and Swarms', description: 'Task state machine, coordinator mode, swarm messaging' },
  { number: 11, slug: 'ch11-memory', title: 'Memory — Learning Across Conversations', description: 'File-based memory, 4-type taxonomy, LLM recall, staleness' },
  { number: 12, slug: 'ch12-extensibility', title: 'Extensibility — Skills and Hooks', description: 'Two-phase skill loading, lifecycle hooks, snapshot security' },
  { number: 13, slug: 'ch13-terminal-ui', title: 'The Terminal UI', description: 'Custom Ink fork, rendering pipeline, double-buffer, pools' },
  { number: 14, slug: 'ch14-input-interaction', title: 'Input and Interaction', description: 'Key parsing, keybindings, chord support, vim mode' },
  { number: 15, slug: 'ch15-mcp', title: 'MCP — The Universal Tool Protocol', description: '8 transports, OAuth for MCP, tool wrapping' },
  { number: 16, slug: 'ch16-remote', title: 'Remote Control and Cloud Execution', description: 'Bridge v1/v2, CCR, upstream proxy' },
  { number: 17, slug: 'ch17-performance', title: 'Performance — Every Millisecond and Token Counts', description: 'Startup, context window, prompt cache, rendering, search' },
  { number: 18, slug: 'ch18-epilogue', title: 'Epilogue — What We Learned', description: 'The 5 architectural bets, what transfers, where agents are heading' },
];

export function getPartForChapter(chapterNumber: number): PartConfig | undefined {
  return parts.find(p => p.chapters.includes(chapterNumber));
}

export function getChapterNumber(slug: string): number {
  const match = slug.match(/^ch(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

export function getAdjacentChapters(chapterNumber: number) {
  const idx = chapters.findIndex(c => c.number === chapterNumber);
  return {
    prev: idx > 0 ? chapters[idx - 1] : null,
    next: idx < chapters.length - 1 ? chapters[idx + 1] : null,
  };
}

export function isFirstChapterOfPart(chapterNumber: number): boolean {
  return parts.some(p => p.chapters[0] === chapterNumber);
}
