import mermaid from 'mermaid';

function getMermaidTheme(): 'default' | 'dark' {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'default';
}

function initMermaid() {
  mermaid.initialize({
    startOnLoad: false,
    theme: getMermaidTheme(),
    fontFamily: 'var(--font-serif)',
    securityLevel: 'loose',
  });
}

async function renderSingle(el: HTMLElement) {
  const encoded = el.dataset.diagram;
  if (!encoded) return;

  const source = atob(encoded);
  try {
    const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
    const { svg } = await mermaid.render(id, source);
    el.innerHTML = svg;
    el.dataset.rendered = 'true';
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : String(err);
    console.warn('Mermaid render failed:', errMsg, '\nSource:', source.slice(0, 100));
    el.innerHTML = `<div style="color: #d97757; font-size: 0.75rem; padding: 0.5rem; border: 1px solid #d97757; border-radius: 0.25rem; margin-bottom: 0.5rem;">Diagram error: ${errMsg.slice(0, 200)}</div><pre style="color: var(--color-muted); font-size: 0.75rem; padding: 1rem; overflow-x: auto;">${source}</pre>`;
  }
}

// Lazy rendering with IntersectionObserver
function setupLazyRendering() {
  const containers = document.querySelectorAll<HTMLElement>('.mermaid-diagram');
  if (!containers.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          renderSingle(el);
        }
      }
    },
    { rootMargin: '200px' }
  );

  for (const el of containers) {
    observer.observe(el);
  }
}

// Re-render all on theme change
window.addEventListener('theme-changed', async () => {
  initMermaid();
  const containers = document.querySelectorAll<HTMLElement>('.mermaid-diagram[data-rendered="true"]');
  for (const el of containers) {
    await renderSingle(el);
  }
});

// Initialize
initMermaid();
setupLazyRendering();
