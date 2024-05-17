function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Приклад виклику функції
const inputtArray = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log("Вхідний масив:", inputtArray);
const result2 = removeDuplicates(inputtArray);
console.log("Результат (без дублікатів):", result2);

