function seconds(total) {
    return total % 60;
}

// Приклад виклику функції
const total = 125;
const remainder = seconds(total);
console.log(`Залишок від ділення числа ${total} на 60: ${remainder}`);
