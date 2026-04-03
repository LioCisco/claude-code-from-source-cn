/**
 * Remark plugin: converts ```mermaid code blocks into raw HTML
 * containers for client-side rendering by mermaid.js.
 *
 * Uses a custom class "mermaid-diagram" (NOT "mermaid") to avoid
 * mermaid's auto-detection race condition on DOMContentLoaded.
 * The mermaid-init.ts script handles rendering manually.
 */
export default function remarkMermaidRaw() {
  return (tree) => {
    walkTree(tree);
  };
}

function walkTree(node) {
  if (!node.children) return;

  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (child.type === 'code' && child.lang === 'mermaid') {
      // Store source as a data attribute to avoid any HTML parsing issues.
      // The diagram source goes in a hidden <script> tag which preserves content exactly.
      const encoded = encodeBase64(child.value);
      node.children[i] = {
        type: 'html',
        value: `<div class="mermaid-diagram" data-diagram="${encoded}"><div class="mermaid-loading">Loading diagram...</div></div>`,
      };
    } else {
      walkTree(child);
    }
  }
}

function encodeBase64(str) {
  return Buffer.from(str).toString('base64');
}
