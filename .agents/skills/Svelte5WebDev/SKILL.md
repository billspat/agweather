// ~/.gemini/config/skills/svelte5/SKILL.md

---
name: svelte5
description: Builds and refactors Svelte 5 and SvelteKit components, runes ($state, $derived, $effect, $props), and static or full-stack web apps using official Svelte AI documentation and @sveltejs/mcp validation. Use when working in a Svelte/SvelteKit codebase or creating .svelte files. Do not use for Python, R, PHP/Laravel, or non-Svelte projects.
---

# Svelte 5 & SvelteKit Development Workflow

Follow modern **Svelte 5** conventions and verify all generated components against Svelte's official AI tooling before finishing.

## 1. Enforce Svelte 5 Idioms (No Svelte 4 Legacy Syntax)
- **Reactivity:** Use `$state`, `$state.raw`, `$derived`, and `$derived.by`. Never use `writable`/`readable` stores for local component state or `$:` reactive statements.
- **Side effects:** Use `$effect` sparingly (DOM sync, third-party libraries); prefer `$derived` for computed values.
- **Props & events:** Use `let { propName = defaultVal, ...rest } = $props();` and `$bindable()` instead of `export let`. Use standard HTML event attributes (`onclick={handler}`) and callback props instead of `on:click` or `createEventDispatcher`.
- **Composition:** Use `{#snippet name(...)}` and `{@render name(...)}` instead of `<slot>`.

## 2. Look Up Official Svelte 5 Docs On Demand
Before writing unfamiliar Svelte 5 or SvelteKit APIs, fetch only the relevant documentation section rather than guessing:
- **Preferred (CLI / MCP):** Run `npx -y @sveltejs/mcp list-sections` to find exact section paths, then fetch only what is needed with `npx -y @sveltejs/mcp get-documentation 'svelte/$state,svelte/snippet'` (or call the `list-sections` / `get-documentation` MCP tools if the `svelte` MCP server is active).
- **Web fallback:** If `npx` is unavailable, fetch the documentation index at `https://svelte.dev/llms.txt` or the compact reference at `https://svelte.dev/docs/svelte/llms-small.txt` and read only the target section. Avoid fetching `llms-full.txt` unless explicitly requested.

## 3. Validate Every Edited `.svelte` File
After creating or modifying any `.svelte` file, run Svelte's static analyzer:
```bash
npx -y @sveltejs/mcp svelte-autofixer <path/to/Component.svelte>
