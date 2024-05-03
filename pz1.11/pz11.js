function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Приклад виклику функції
const inputArray = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
const result = removeDuplicates(inputArray);
console.log(result); // Результат: [1, 2, 4, 5, 7, 8, 3, 6]
