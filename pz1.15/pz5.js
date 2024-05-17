function countWordFrequency() {
    const text = prompt("Введіть текст:");

    // Регулярний вираз для вилучення слів з тексту
    const words = text.match(/\b\w+\b/g);

    // Об'єкт для збереження частоти повторення слів
    const wordFrequency = {};

    // Обчислюємо частоту повторення кожного слова
    for (const word of words) {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }

    return wordFrequency;
}

// Викликаємо функцію для обчислення частоти повторення слів
const frequency = countWordFrequency();
console.log(frequency);
