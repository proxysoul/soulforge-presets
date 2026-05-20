# llmgateway

Routes every supported provider through [LLM Gateway](https://llmgateway.io), plus proxysoul's opinionated defaults.

## What it changes

- Adds an `llmgateway` provider pointed at `https://api.llmgateway.io/v1`
- Rewrites Claude, GPT, Gemini model IDs to go through the gateway
- `defaultModel` → `llmgateway/claude-opus-4-6`
- `taskRouter` slots: spark/webSearch/compact/semantic on Haiku, ember/desloppify on Sonnet, verify/default on Opus-4-6
- `modelFallback` chains: Opus-4-6 → DeepSeek V4 Pro, Haiku → Gemini 2.5 Flash, Sonnet → Kimi K2.6
- Theme: `proxysoul-coffee` transparent, zero user-message/diff opacity
- Editor: `nvim`, `nvimConfig: "none"`, full LSP integration with `agentAccess: "off"`
- Compaction v2, semantic synthetic summaries (limit 500), 16k repo-map budget
- Nerd Font on, sidebyside diffs, vim hints off
- Disables: skills, editor, soul_vision, refactor, move/rename tools

User-specific fields (`onboardingComplete`, enabled `presets`, secrets) are intentionally omitted — your `~/.soulforge/config.json` still overrides everything.

## Prerequisites

- An LLM Gateway account
- `LLMGATEWAY_API_KEY` exported in your environment
- `nvim` on PATH
- A Nerd Font in your terminal

## Install

```bash
soulforge --plugin llmgateway
```
