# soulforge-presets

Community config presets for [SoulForge](https://github.com/proxysoul/soulforge).

A preset is a single JSON file bundling routing rules, providers, themes, hooks, and prompts. Drop one into SoulForge with a name or URL and the config merges into your setup.

## Install a preset

```bash
soulforge --plugin llmgateway
soulforge --plugin https://raw.githubusercontent.com/proxysoul/soulforge-presets/main/presets/llmgateway/preset.json
soulforge --plugin ./local-preset.json
```

Stackable. Later flags win. User config in `~/.soulforge/config.json` still overrides everything.

## Browse

See [`registry.json`](./registry.json) for the full index, or open the `presets/` folder.

| Preset | Description |
| ------ | ----------- |
| `llmgateway` | Routes every provider through LLM Gateway with sane defaults |
| `nvidia-nim` | Runs SoulForge on NVIDIA NIM with task routing across Nemotron, DeepSeek, Qwen |

## Contribute

1. Copy `presets/_template/` to `presets/<your-preset>/`
2. Fill in `preset.json` and `README.md`
3. Add an entry to `registry.json`
4. Open a PR

CI validates every PR against [`schema.json`](./schema.json). Read [`CONTRIBUTING.md`](./CONTRIBUTING.md) for details.

## License

MIT
