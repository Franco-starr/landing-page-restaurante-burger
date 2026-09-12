const svg = (inner, vb = '0 0 140 140') =>
  `<svg class="dish-art" viewBox="${vb}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`

export const dishes = {
  burger: svg(`
    <ellipse cx="70" cy="129" rx="45" ry="6" fill="#000" opacity=".18"/>
    <rect x="30" y="118" width="80" height="14" rx="7" fill="#d08c35"/>
    <rect x="30" y="118" width="80" height="5" rx="2.5" fill="#e5a452"/>
    <rect x="28" y="102" width="84" height="16" rx="8" fill="#7a4a2b"/>
    <rect x="32" y="108" width="76" height="3" rx="1.5" fill="#5c3020"/>
    <rect x="27" y="88" width="86" height="13" rx="3" fill="#f7b731"/>
    <rect x="113" y="90" width="4" height="9" rx="2" fill="#f7b731"/>
    <rect x="23" y="91" width="4" height="10" rx="2" fill="#f7b731"/>
    <rect x="30" y="75" width="80" height="11" rx="4" fill="#e74c3c"/>
    <ellipse cx="70" cy="78" rx="40" ry="2.5" fill="#c0392b" opacity=".45"/>
    <path d="M24 68c8-6 17-4 23 0s15 4 21 0 15-2 22 0 12 5 16 2l1 7H23v-7c2-1 2-1 1-2z" fill="#6ab04c"/>
    <path d="M30 59c0-20 17-34 40-34s40 14 40 34l-1 4H31z" fill="#e6a43c"/>
    <path d="M38 58c0-13 13-24 32-24" fill="none" stroke="#f5c15f" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="55" cy="36" rx="3" ry="1.8" fill="#ffedb8"/>
    <ellipse cx="70" cy="33" rx="3" ry="1.8" fill="#ffedb8"/>
    <ellipse cx="85" cy="37" rx="3" ry="1.8" fill="#ffedb8"/>
    <ellipse cx="63" cy="44" rx="3" ry="1.8" fill="#ffedb8"/>
    <ellipse cx="79" cy="45" rx="3" ry="1.8" fill="#ffedb8"/>
  `),

  fries: svg(`
    <ellipse cx="70" cy="120" rx="42" ry="6" fill="#000" opacity=".18"/>
    <rect x="60" y="46" width="8" height="60" rx="3" fill="#ffca28"/>
    <rect x="74" y="52" width="8" height="58" rx="3" fill="#f6b723"/>
    <rect x="48" y="58" width="8" height="52" rx="3" fill="#ffd54f"/>
    <rect x="88" y="62" width="7" height="50" rx="3" fill="#f9c02e"/>
    <path d="M44 70l4-14 4 14-4 46h-4z" fill="#ffca28"/>
    <path d="M92 74l3-12 4 12-4 40h-3z" fill="#fbbe2c"/>
    <path d="M46 74h52l-4 46H50z" fill="#d64541"/>
    <path d="M46 74h52v5c-4-3-24-3-52 0z" fill="#e05a54"/>
    <rect x="64" y="92" width="16" height="10" rx="2" fill="#fff" opacity=".85"/>
    <path d="M49 74h4v44h-4z" fill="#c0392b" opacity=".35"/>
  `),

  onion: svg(`
    <ellipse cx="70" cy="124" rx="40" ry="6" fill="#000" opacity=".18"/>
    <path d="M70 40a26 9 0 1 1 0 18 26 9 0 1 1 0-18zM70 47a15 5 0 1 0 0 10 15 5 0 1 0 0-10z" fill="#efb84a" fill-rule="evenodd"/>
    <path d="M70 52a26 9 0 1 1 0 18 26 9 0 1 1 0-18zM70 59a15 5 0 1 0 0 10 15 5 0 1 0 0-10z" fill="#e19c2f" fill-rule="evenodd"/>
    <path d="M70 64a26 9 0 1 1 0 18 26 9 0 1 1 0-18zM70 71a15 5 0 1 0 0 10 15 5 0 1 0 0-10z" fill="#c9842a" fill-rule="evenodd"/>
    <path d="M70 76a26 9 0 1 1 0 18 26 9 0 1 1 0-18zM70 83a15 5 0 1 0 0 10 15 5 0 1 0 0-10z" fill="#b4731f" fill-rule="evenodd"/>
    <path d="M48 88l-4 14 6 12-5 10zM92 88l4 14-6 12 5 10z" fill="#efb84a"/>
    <path d="M58 92c6-6 14-6 24-2s10 6 16 4v24H44V94c4 2 8 0 14-2z" fill="#f3c254"/>
  `),

  salad: svg(`
    <ellipse cx="70" cy="118" rx="40" ry="6" fill="#000" opacity=".18"/>
    <path d="M106 84a38 26 0 0 1-72 0z" fill="#8d6e63"/>
    <path d="M106 84a38 26 0 0 1-72 0z" fill="#7d5d50" opacity=".4"/>
    <path d="M32 84h76v6a38 8 0 0 1-76 0z" fill="#a1887f"/>
    <circle cx="56" cy="74" r="12" fill="#69a832"/>
    <circle cx="82" cy="70" r="13" fill="#7cb342"/>
    <circle cx="68" cy="80" r="11" fill="#8bc34a"/>
    <circle cx="58" cy="72" r="9" fill="#a5d66d" opacity=".7"/>
    <circle cx="84" cy="66" r="7" fill="#e74c3c"/>
    <circle cx="84" cy="66" r="4" fill="#f2635a"/>
    <circle cx="96" cy="76" r="5" fill="#e74c3c"/>
    <circle cx="96" cy="76" r="2.6" fill="#f2635a"/>
    <path d="M66 52c-6 8-2 14 6 16s12-2 14-10-8-8-14-8z" fill="#66a63a"/>
    <path d="M68 60l10-2" stroke="#5d9441" stroke-width="2" stroke-linecap="round"/>
  `),

  drink: svg(`
    <ellipse cx="70" cy="126" rx="34" ry="5" fill="#000" opacity=".18"/>
    <path d="M50 96l-7-64a4 4 0 0 1 4-5h46a4 4 0 0 1 4 5l-7 64a8 8 0 0 1-8 6H58a8 8 0 0 1-8-6z" fill="#ffd54f"/>
    <path d="M48 34h44" stroke="#fff" stroke-opacity=".55" stroke-width="3"/>
    <rect x="66" y="66" width="14" height="14" rx="3" fill="#fff" opacity=".6"/>
    <rect x="58" y="84" width="10" height="10" rx="2.5" fill="#fff" opacity=".5"/>
    <path d="M58 34c6 8 10 8 16 0s10-8 16 0" fill="none" stroke="#f6a623" stroke-width="4" stroke-linecap="round"/>
    <circle cx="72" cy="42" r="8" fill="#f6d32c"/>
    <circle cx="72" cy="42" r="8" fill="none" stroke="#dbaa1e" stroke-width="2"/>
    <path d="M72 42m5 0a5 5 0 1 0-10 0 5 5 0 1 0 10 0z" fill="none" stroke="#fff" stroke-opacity=".7"/>
    <path d="M78 22c6 6 12 8 18 6" fill="none" stroke="#ff7043" stroke-width="5" stroke-linecap="round"/>
    <path d="M60 110c4-3 8-3 12 0 4 3 8 3 12 0" fill="none" stroke="#2e7d32" stroke-width="3" stroke-linecap="round"/>
    <path d="M66 106c2 4 4 4 8 4s7-1 9-5" fill="#4caf50" stroke="none" stroke-width="0"/>
    <g fill="#2e7d32"><path d="M64 108c-2-6 2-10 7-9l-2 5-3 2z"/><path d="M78 108c4-4 9-4 11-1-4 2-7 2-11 1z"/></g>
  `),

  beer: svg(`
    <ellipse cx="70" cy="124" rx="40" ry="6" fill="#000" opacity=".18"/>
    <rect x="42" y="42" width="44" height="56" rx="6" fill="#f0c75e"/>
    <rect x="44" y="45" width="40" height="50" rx="4" fill="#f4d873"/>
    <path d="M42 74h44v40a6 6 0 0 1-10 0z" fill="#e0b13f"/>
    <path d="M42 74h44v4c-8 4-16 4-24 0H42z" fill="#c98f2c"/>
    <path d="M40 40c4-3 8-3 12 0s8 3 12 0 8-4 12 0" fill="none" stroke="#f7e7a8" stroke-width="3" stroke-linecap="round"/>
    <circle cx="60" cy="96" r="3" fill="#fff" opacity=".5"/>
    <circle cx="70" cy="88" r="2.4" fill="#fff" opacity=".45"/>
    <circle cx="54" cy="86" r="2.2" fill="#fff" opacity=".4"/>
    <path d="M90 52h8a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6h-12z" fill="none" stroke="#f7e7a8" stroke-width="3"/>
  `),

  milkshake: svg(`
    <ellipse cx="70" cy="126" rx="34" ry="5" fill="#000" opacity=".18"/>
    <path d="M54 104l-6-72a5 5 0 0 1 5-6h34a5 5 0 0 1 5 6l-6 72a7 7 0 0 1-7 6H61a7 7 0 0 1-7-6z" fill="#f7b8c8"/>
    <rect x="72" y="42" width="9" height="30" rx="4.5" fill="#fff" opacity=".55"/>
    <circle cx="52" cy="28" r="9" fill="#fff"/>
    <circle cx="66" cy="22" r="11" fill="#f8f4ef"/>
    <circle cx="80" cy="27" r="9" fill="#fff"/>
    <circle cx="70" cy="18" r="8" fill="#f3ecdf"/>
    <path d="M70 18c0-6 6-9 13-7" fill="none" stroke="#d64545" stroke-width="4" stroke-linecap="round"/>
    <circle cx="83" cy="11" r="4.5" fill="#e53935"/>
    <path d="M76 26c5-7 11-9 18-6" fill="none" stroke="#ffb3c1" stroke-width="5" stroke-linecap="round"/>
  `),

  brownie: svg(`
    <ellipse cx="70" cy="122" rx="42" ry="6" fill="#000" opacity=".18"/>
    <circle cx="72" cy="64" r="22" fill="#f7e7d8"/>
    <path d="M72 46c-8 2-13 9-12 18 10 1 13-3 12-18z" fill="#e8d3bd" opacity=".8"/>
    <path d="M38 120c2-26 10-40 32-42v26c-12-4-24-2-32 16z" fill="#6d3a2a"/>
    <path d="M104 120c-2-26-10-40-32-42v26c12-4 24-2 32 16z" fill="#5d3123"/>
    <rect x="40" y="82" width="60" height="8" rx="4" fill="#7d4430"/>
    <path d="M40 82h60v38c-8-4-16-4-24 0H64c-8-4-16-4-24 0z" fill="#7d4430"/>
    <path d="M40 82h60v38c-8-4-16-4-24 0H64c-8-4-16-4-24 0z" fill="#6d3a2a" opacity=".55"/>
    <rect x="62" y="70" width="16" height="14" rx="3" fill="#8a4b33"/>
  `),

  cheesecake: svg(`
    <ellipse cx="76" cy="122" rx="42" ry="6" fill="#000" opacity=".18"/>
    <path d="M58 56v52h52V56z" fill="#f3c96f"/>
    <ellipse cx="84" cy="56" rx="27" ry="9" fill="#f9dc9a"/>
    <path d="M58 100v6l50 8-50 8z" fill="#c1803a"/>
    <rect x="70" y="46" width="6" height="14" rx="2" fill="#b96a22"/>
    <circle cx="72" cy="44" r="5" fill="#e53935"/>
    <path d="M72 40c2-3 4-3 6-1" fill="none" stroke="#5d4037" stroke-width="2" stroke-linecap="round"/>
    <path d="M62 84c8-3 14-3 20 0s12 3 18 0" fill="none" stroke="#e0a83f" stroke-width="2" stroke-linecap="round" opacity=".6"/>
  `),

  churros: svg(`
    <ellipse cx="70" cy="122" rx="42" ry="6" fill="#000" opacity=".18"/>
    <rect x="30" y="86" width="80" height="14" rx="7" fill="#a8713f"/>
    <rect x="30" y="86" width="80" height="6" rx="3" fill="#b9814e"/>
    <g stroke="#efb04b" stroke-width="2.5">
      <path d="M84 24q24 10 18 40" fill="none" stroke-width="14" stroke-linecap="round"/>
      <path d="M84 24q24 10 18 40" fill="none" stroke-width="10" stroke-linecap="round" stroke="#f7c465"/>
    </g>
    <g>
      <path d="M78 30q-30 8-26 44" fill="none" stroke="#efb04b" stroke-width="12" stroke-linecap="round"/>
      <path d="M78 30q-30 8-26 44" fill="none" stroke="#f7c465" stroke-width="8" stroke-linecap="round"/>
    </g>
    <path d="M72 66q-4 2-4 8" fill="none" stroke="#f0a93f" stroke-width="10" stroke-linecap="round"/>
    <path d="M104 52c6 0 12-2 12-6-8-2-16 0-12 6z" fill="#5d4037"/>
    <circle cx="57" cy="34" r="2.5" fill="#fff" opacity=".8"/>
    <circle cx="69" cy="28" r="2.5" fill="#fff" opacity=".8"/>
    <circle cx="95" cy="40" r="2.5" fill="#fff" opacity=".8"/>
    <circle cx="80" cy="22" r="2.5" fill="#fff" opacity=".8"/>
  `),
}

const ICONS = {
  flame: '<path fill="currentColor" d="M12 2c1.6 3.2 6 5 6 9.8a6 6 0 0 1-12 0C6 7 10.4 5.2 12 2z"/><path fill="#0b0b0d" d="M12 8.5c.9 1.8 3 2.7 3 5.2a3 3 0 0 1-6 0c0-2.5 2.1-3.4 3-5.2z"/>',
  leaf: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 20C4 10 10 4 20 4c0 10-6 16-16 16z"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 20C8 16 12 12 16 8"/>',
  bolt: '<path fill="currentColor" d="M13 2 3 14h7l-1 8 11-14h-7l1-8z"/>',
  tag: '<path fill="currentColor" d="M20.6 13.4 12 4.8a2 2 0 0 0-1.4-.6H5a2 2 0 0 0-2 2v5.6c0 .5.2 1 .6 1.4l8.6 8.6a2 2 0 0 0 2.8 0l5.6-5.6a2 2 0 0 0 0-2.8z"/><circle cx="7.5" cy="7.5" r="1.5" fill="#0b0b0d"/>',
  star: '<path fill="currentColor" d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/>',
  clock: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>',
  pin: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></g>',
  phone: '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></g>',
  menu: '<path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="m6 6 12 12M18 6 6 18"/>',
  chevronL: '<path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="m14 6-6 6 6 6"/>',
  chevronR: '<path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="m10 6 6 6-6 6"/>',
  check: '<path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="m5 12 5 5 10-11"/>',
  instagram: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></g>',
  facebook: '<path fill="currentColor" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  x: '<path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M4 4l16 16M20 4L4 20"/>',
  whatsapp: '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.9-.9L3 21l1.9-4.7a8.4 8.4 0 0 1-1.9-5.3 8.5 8.5 0 0 1 8.5-8.5 8.4 8.4 0 0 1 8.5 9z"/><path d="M9 9.5c0 3 3.5 6.5 6.5 6.5l.5-1.5a.8.8 0 0 0-.8-1.2l-1 .2a.4.4 0 0 1-.5-.2 7 7 0 0 1-1.3-2.6.4.4 0 0 1 .2-.5l.3-.9a.8.8 0 0 0-.8-1.1H10a1 1 0 0 0-1 1z"/></g>',
}

export function icon(name, cls = '') {
  const inner = ICONS[name] || ''
  return `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`
}