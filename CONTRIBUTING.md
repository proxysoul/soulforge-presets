# Contributing

Thanks for adding a preset. Keep it small, focused, useful.

## Add a preset

1. Copy the template:

   ```bash
   cp -r presets/_template presets/<your-preset>
   ```

2. Edit `presets/<your-preset>/preset.json`. Required: `name`, `version`. Add only the sections you actually configure.

3. Write a short `README.md` next to it. What it does, who it is for, prerequisites.

4. Register it in `registry.json`:

   ```json
   "<your-preset>": {
     "url": "https://raw.githubusercontent.com/proxysoul/soulforge-presets/main/presets/<your-preset>/preset.json",
     "description": "One line",
     "tags": ["routing"],
     "author": "yourhandle"
   }
   ```

5. Open a PR. CI validates the schema and the registry/folder mapping.

## Rules

- One preset per PR
- No secrets or API keys, use ${VAR} placeholders
- Bump `version` (semver) on changes
- `name` field must match the folder name and the registry key

## Local validation

```bash
npx ajv-cli validate -s schema.json -d "presets/*/preset.json" --strict=false
```
