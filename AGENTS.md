# AGENTS.md

## Svelte Code style

- Always use TypeScript
- Prefer tailwind over inline CSS
- Always use Svelte 5 runes (i.e. `$state` and `$derived`) and updated event handlers (i.e. `onclick` instead of `on:click`). That means not using the `$.` notation.
- You type props as an object with properties. e.g. `let {loading, text}: {loading: bool, text: string} = $props();`
- Use double quotes, semicolons, and indent with four spaces. For other similar rules review .prettierrc.json.
- Use functional patterns where possible.
- Avoid using $effect where possible.

## Instructions

- When reading, writing, updating, or patching files, always use relative paths from the project root.
- Before finishing a task, always run `pnpm format` and `pnpm check` and fix any issues.
