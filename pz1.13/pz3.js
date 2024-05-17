class Random {
    static nextDouble(low, high) {
        return Math.random() * (high - low) + low;
    }

    static nextInt(low, high) {
        return Math.floor(Math.random() * (high - low)) + low;
    }

    static nextElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
}

// Отримання даних від користувача
let low = parseFloat(prompt("Введіть нижню межу діапазону:"));
let high = parseFloat(prompt("Введіть верхню межу діапазону:"));
let array = prompt("Введіть масив значень (через кому):").split(",");

// Виведення випадкового числа та елемента масиву
console.log("Випадкове число з діапазону:", Random.nextDouble(low, high));
console.log("Випадковий цілий:", Random.nextInt(low, high));
console.log("Випадковий елемент масиву:", Random.nextElement(array));
