# nvidia-nim

Runs SoulForge entirely on [NVIDIA NIM](https://build.nvidia.com/models) — NVIDIA's hosted, OpenAI-compatible inference API at `integrate.api.nvidia.com`.

## What it changes

- Adds a custom `nvidia-nim` provider pointed at `https://integrate.api.nvidia.com/v1`, keyed off `NVIDIA_API_KEY`
- `defaultModel` → `nvidia-nim/deepseek-ai/deepseek-v3.1`
- `taskRouter` slots:
  - spark / webSearch / compact / semantic → `meta/llama-3.1-8b-instruct` (cheap + fast)
  - ember → `qwen/qwen2.5-coder-32b-instruct` (code agent)
  - desloppify → `meta/llama-3.3-70b-instruct`
  - verify / heavy reasoning → `deepseek-ai/deepseek-r1`
  - default → `deepseek-ai/deepseek-v3.1`
- `modelFallback` chains: deepseek-v3.1 → llama-3.3-70b, deepseek-r1 → qwq-32b, qwen-coder → llama-3.3-70b
- Reasoning effort `medium` (forwarded to NIM reasoning models via the OpenAI-compatible `reasoning_effort` body)
- Compaction v2, semantic synthetic summaries (limit 500), 16k repo-map budget
- `keyPriority: "app"`, desloppify + verifyEdits on

Bundled model list (`build.nvidia.com` IDs): Llama Nemotron Super 49B / Ultra 253B, DeepSeek R1 + V3.1, Qwen2.5-Coder-32B, QwQ-32B, Llama 3.3 70B, Llama 3.1 8B, GLM-4.6, Kimi K2. NIM also exposes `GET /v1/models`, so SoulForge auto-discovers anything else on your account.

User-specific fields (secrets, `onboardingComplete`, enabled `presets`) are intentionally omitted — your `~/.soulforge/config.json` still overrides everything.

## Prerequisites

- An NVIDIA account with an API key from <https://build.nvidia.com> (starts with `nvapi-`)
- `NVIDIA_API_KEY` exported in your environment, or set via `soulforge --set-key nvidia-nim <key>`

## Install

```bash
soulforge --plugin nvidia-nim
```

Then pick a model with `--model nvidia-nim/<model-id>`, e.g.:

```bash
soulforge --headless --model nvidia-nim/qwen/qwen2.5-coder-32b-instruct "explain this repo"
```
