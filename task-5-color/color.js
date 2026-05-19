// ============================================================
// Завдання 6 — Парсер кольорів
// ============================================================

const NAMED_COLORS = {
  red:   { r: 255, g: 0,   b: 0 },
  green: { r: 0,   g: 128, b: 0 },
  blue:  { r: 0,   g: 0,   b: 255 },
  white: { r: 255, g: 255, b: 255 },
  black: { r: 0,   g: 0,   b: 0 },
};

/**
 * Парсить колір у одному з форматів:
 *
 *   #FF8800              → { r: 255, g: 136, b: 0 }
 *   #f80                 → { r: 255, g: 136, b: 0 }  (короткий hex)
 *   rgb(255, 136, 0)     → { r: 255, g: 136, b: 0 }
 *   rgb(255,136,0)       → те саме (без пробілів)
 *   red                  → { r: 255, g: 0, b: 0 }     (named)
 *   "invalid", ""        → null
 *
 * Поверніть null для invalid input.
 */
function parseColor(str) {
  // TODO
}

// ============================================================
// Тестові кейси
// ============================================================
// console.log(parseColor("#FF8800"));            // { r: 255, g: 136, b: 0 }
// console.log(parseColor("#f80"));               // { r: 255, g: 136, b: 0 }
// console.log(parseColor("rgb(255, 136, 0)"));   // { r: 255, g: 136, b: 0 }
// console.log(parseColor("rgb(255,136,0)"));     // { r: 255, g: 136, b: 0 }
// console.log(parseColor("red"));                // { r: 255, g: 0, b: 0 }
// console.log(parseColor("invalid"));            // null
// console.log(parseColor(""));                   // null
// console.log(parseColor("#GGG"));               // null
