// scripts/postbuild-fix-extensions.js
const fs = require('fs');
const path = require('path');

const dist = path.resolve(__dirname, '..', 'dist');

if (!fs.existsSync(dist)) {
  console.log('dist not found, skipping extension fix');
  process.exit(0);
}

function walk(dir, cb) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, cb);
    else if (stat.isFile() && full.endsWith('.js')) cb(full);
  }
}

function patchFile(file) {
  let s = fs.readFileSync(file, 'utf8');
  const before = s;

  // Replace import/export specifiers that start with ./ or ../ and do not already have a known extension
  s = s.replace(/((?:from|import)\s+['"])(\.\.?\/[^'"]+?)(['"])/g, (m, prefix, spec, quote) => {
    // Only patch relative specifiers
    if (!spec.startsWith('./') && !spec.startsWith('../')) return m;
    // If already has an extension we recognize, leave it
    if (spec.match(/\.(js|mjs|cjs|json|jsx|ts|tsx)$/i)) return m;
    return `${prefix}${spec}.js${quote}`;
  });

  // Also handle export ... from "..."
  s = s.replace(/(export\s+.+?\s+from\s+['"])(\.\.?\/[^'"]+?)(['"])/g, (m, prefix, spec, quote) => {
    if (!spec.startsWith('./') && !spec.startsWith('../')) return m;
    if (spec.match(/\.(js|mjs|cjs|json|jsx|ts|tsx)$/i)) return m;
    return `${prefix}${spec}.js${quote}`;
  });

  if (s !== before) {
    fs.writeFileSync(file, s, 'utf8');
    console.log('patched', path.relative(process.cwd(), file));
  }
}

walk(dist, patchFile);
console.log('postbuild extension fix complete');