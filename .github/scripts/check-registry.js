const fs = require('fs');
const path = require('path');
const reg = JSON.parse(fs.readFileSync('registry.json', 'utf8'));
const folders = fs.readdirSync('presets').filter((f) => !f.startsWith('_'));
const names = Object.keys(reg.presets);
const missing = folders.filter((f) => !names.includes(f));
const orphan = names.filter((n) => !folders.includes(n));
if (missing.length) { console.error('Folders without registry entry:', missing); process.exit(1); }
if (orphan.length) { console.error('Registry entries without folder:', orphan); process.exit(1); }
for (const name of names) {
  const p = path.join('presets', name, 'preset.json');
  if (!fs.existsSync(p)) { console.error('Missing preset.json:', p); process.exit(1); }
  const preset = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (preset.name !== name) { console.error('name mismatch in ' + p + ': ' + preset.name + ' vs folder ' + name); process.exit(1); }
}
console.log('OK:', names.length, 'presets validated');
