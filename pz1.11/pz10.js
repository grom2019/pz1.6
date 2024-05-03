function reverseAndSquare(arr) {
    // Перевертаємо масив
    const reversedArr = arr.reverse();
    
    // Підносимо до квадрату числові значення
    const squaredArr = reversedArr.map(item => typeof item === 'number' ? item ** 2 : item);
    
    return squaredArr;
}
//перевірка


// Приклад виклику функції
const inputArray = [1, 2, 3, 'a', 'b', 'c'];
const result = reverseAndSquare(inputArray);
console.log(result); // Результат: [9, 4, 1, "b", "a", "c"]
