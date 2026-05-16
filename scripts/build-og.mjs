import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'og.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="60%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#dbeafe"/>
    </linearGradient>
    <linearGradient id="node" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="950" cy="180" r="240" fill="url(#glow)"/>
  <circle cx="200" cy="500" r="200" fill="url(#glow)" opacity="0.6"/>

  <!-- Network glyph -->
  <g transform="translate(960,290)">
    <circle cx="0" cy="-60" r="22" fill="url(#node)"/>
    <circle cx="70" cy="40" r="22" fill="url(#node)"/>
    <circle cx="-70" cy="40" r="22" fill="url(#node)"/>
    <circle cx="0" cy="120" r="16" fill="url(#node)" opacity="0.7"/>
    <line x1="0" y1="-40" x2="50" y2="20" stroke="#A855F7" stroke-width="2" opacity="0.55"/>
    <line x1="-50" y1="20" x2="0" y2="-40" stroke="#A855F7" stroke-width="2" opacity="0.55"/>
    <line x1="-50" y1="55" x2="0" y2="105" stroke="#A855F7" stroke-width="2" opacity="0.55"/>
    <line x1="50" y1="55" x2="0" y2="105" stroke="#A855F7" stroke-width="2" opacity="0.55"/>
  </g>

  <!-- Brand -->
  <g transform="translate(80,150)">
    <rect x="0" y="0" width="56" height="56" rx="12" fill="#ffffff" opacity="0.95"/>
    <g transform="translate(28,28)" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round">
      <circle cx="0" cy="-9" r="3.5" fill="#2563EB" stroke="none"/>
      <circle cx="9" cy="2" r="3.5" fill="#2563EB" stroke="none"/>
      <circle cx="-9" cy="2" r="3.5" fill="#2563EB" stroke="none"/>
      <line x1="0" y1="-5.5" x2="6.5" y2="-0.5"/>
      <line x1="-6.5" y1="-0.5" x2="0" y2="-5.5"/>
    </g>
    <text x="78" y="38" font-family="Rubik, system-ui, sans-serif" font-size="32" font-weight="700" fill="#ffffff">Atlas Nexus</text>
  </g>

  <!-- Headline -->
  <text x="80" y="320" font-family="Rubik, system-ui, sans-serif" font-size="78" font-weight="900" fill="url(#text)" letter-spacing="-2">Conseil, Opérations,</text>
  <text x="80" y="410" font-family="Rubik, system-ui, sans-serif" font-size="78" font-weight="900" fill="url(#text)" letter-spacing="-2">IA Agentique</text>

  <!-- Subline -->
  <text x="80" y="475" font-family="Nunito Sans, system-ui, sans-serif" font-size="28" font-weight="500" fill="#cbd5e1">Pour indépendants, équipes et PME.</text>

  <!-- URL pill -->
  <g transform="translate(80,530)">
    <rect x="0" y="0" width="240" height="48" rx="24" fill="#ffffff" opacity="0.12"/>
    <text x="22" y="31" font-family="Nunito Sans, system-ui, sans-serif" font-size="20" font-weight="600" fill="#ffffff">atlasnexus.tech</text>
  </g>
</svg>
`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outPath);
console.log('og.png written to', outPath);
