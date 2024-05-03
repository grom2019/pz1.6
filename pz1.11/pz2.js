function perimeter(side, count) {
    return side * count;
}

// Приклад виклику функції
const sideLength = 5;
const numberOfSides = 6;
const result = perimeter(sideLength, numberOfSides);
console.log(`Периметр правильного багатокутника зі стороною ${sideLength} та ${numberOfSides} сторонами: ${result}`);
