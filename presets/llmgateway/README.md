# llmgateway

Routes every supported provider through [LLM Gateway](https://llmgateway.io).

## What it changes

- Adds an `llmgateway` provider pointed at `https://api.llmgateway.io/v1`
- Rewrites Claude, GPT, Gemini model IDs to go through the gateway
- Sets `llmgateway/openai/gpt-4o-mini` as default

## Prerequisites

- An LLM Gateway account
- `LLMGATEWAY_API_KEY` exported in your environment

## Install

```bash
soulforge --plugin llmgateway
```
