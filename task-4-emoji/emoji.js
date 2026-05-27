// ============================================================
// Завдання 5 — Перекладач емодзі
// ============================================================

const dictionary = {
  "сонце":    "☀️",
  "хмара":    "☁️",
  "дощ":      "🌧️",
  "сніг":     "❄️",
  "блискавка":"⚡",
  "серце":    "❤️",
  "усмішка":  "😊",
  "сум":      "😢",
  "сміх":     "😂",
  "кава":     "☕",
  "піца":     "🍕",
  "яблуко":   "🍎",
  "собака":   "🐶",
  "кіт":      "🐱",
  "книга":    "📚",
  "телефон":  "📱",
  "комп":     "💻",
};

/**
 * Перекладає слова в тексті на емодзі.
 *
 * - Case-insensitive: "СОНЦЕ", "Сонце", "сонце" → "☀️"
 * - Розділові знаки зберігаються: "сонце," → "☀️,"
 * - Слова, яких немає у словнику, лишаються без змін
 *
 * translate("сьогодні сонце і усмішка")
 * // "сьогодні ☀️ і 😊"
 */
function translate(text) {
  let correctText = text.toLowerCase().split(/([^а-яіїєґa-z]+)/i);
  const result = [];
  for (let i = 0; i < correctText.length; i++) {
    if(dictionary[correctText[i]]){
      result.push(dictionary[correctText[i]]);
    }
    else
      result.push(correctText[i]);
  }
  return result.join("");
}

/**
 * Зворотний переклад: емодзі → слово (українською).
 */
function translateReverse(text) {
  let dividedText = text.split(" ");
  const result = [];
  for (let i = 0; i < dividedText.length; i++) {
    const foundWord = Object.keys(dictionary).find((value) => dictionary[value]===dividedText[i]);
    if(foundWord) result.push(foundWord);
    else result.push(dividedText[i]);
  }
  return result.join(" ");
}

// ============================================================
// Тестові кейси
// ============================================================
console.log(translate("сьогодні сонце і усмішка"));
// // "сьогодні ☀️ і 😊"
//
console.log(translate("СОНЦЕ і Хмара. Дощ?"));
// // "☀️ і ☁️. 🌧️?"
//
console.log(translateReverse("☀️ і ☁️"));
// // "сонце і хмара"
