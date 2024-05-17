function seconds(total) {
    return total % 60;
}

// Отримуємо введене користувачем число
const input = prompt('Будь ласка, введіть число: ');
const total = parseInt(input); // Перетворюємо введене значення в число
const remainder = seconds(total);
console.log(`Залишок від ділення числа ${total} на 60: ${remainder}`);
