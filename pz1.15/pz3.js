function countWordsStartingWithVowelsAndConsonants(text) {
    // Функція для перевірки, чи є літера голосною
    function isVowel(letter) {
        return ['a', 'e', 'i', 'o', 'u', 'y', 'а', 'е', 'є', 'и', 'і', 'о', 'у', 'ю', 'я'].includes(letter.toLowerCase());
    }

    const words = text.split(/\s+/); // Розбиваємо текст на слова
    let vowelCount = 0;
    let consonantCount = 0;

    // Перебираємо слова і рахуємо кількість слів, які починаються на голосні та приголосні літери
    for (const word of words) {
        if (word.length > 0) {
            if (isVowel(word[0])) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return {
        текст: text,
        голосних: vowelCount,
        приголосних: consonantCount
    };
}

// Функція для отримання введення користувача та виклику вищезазначеної функції
function getUserInputAndCountWords() {
    const text = prompt("Введіть текст:");
    const result = countWordsStartingWithVowelsAndConsonants(text);

    console.log(result);
}

// Викликаємо функцію для отримання введення користувача та обчислення кількості слів
getUserInputAndCountWords();
