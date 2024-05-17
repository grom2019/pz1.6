function reverseAndSquareArray(arr) {
    // Перевертаємо масив
    const reversedArray = arr.reverse();

    // Підносимо до квадрату числові значення та залишаємо інші значення без змін
    const squaredArray = reversedArray.map(item => {
        if (typeof item === 'number') {
            return item ** 2; // Підносимо до квадрату, якщо число
        } else {
            return item; // Залишаємо без змін, якщо не число
        }
    });

    // Перевертаємо результат
    const reversedResult = squaredArray.reverse();

    return { inputArray: arr, resultArray: reversedResult };
}

// Приклад використання
const inputArray = [1.5, 2, 3, 'a', 'b', 4];
const { inputArray: input, resultArray: result } = reverseAndSquareArray(inputArray);
console.log("Вхідний масив:", input);
console.log("Результат :", result);
