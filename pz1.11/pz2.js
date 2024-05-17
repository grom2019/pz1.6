function perimeter(side, count) {
    return side * count;
}

// Отримуємо введені користувачем значення 
const sideLength = parseFloat(prompt('Будь ласка, введіть довжину сторони: '));
const numberOfSides = parseInt(prompt('Будь ласка, введіть кількість сторін: '));

const result = perimeter(sideLength, numberOfSides);
console.log(`Периметр правильного багатокутника зі стороною ${sideLength} та ${numberOfSides} сторонами: ${result}`);
