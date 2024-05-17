function numberToObject() {
    const inputNumber = parseInt(prompt("Введіть число від 0 до 9999:"));

    if (isNaN(inputNumber) || inputNumber < 0 || inputNumber > 9999) {
        console.log("Ви ввели недійсне число. Будь ласка, введіть число від 0 до 9999.");
        return {};
    }

    const units = inputNumber % 10;
    const tens = Math.floor((inputNumber % 100) / 10);
    const hundreds = Math.floor((inputNumber % 1000) / 100);
    const thousands = Math.floor(inputNumber / 1000);

    const result = {
        'одиниці': units,
        'десятки': tens,
        'сотні': hundreds,
        'тисячі': thousands
    };

    return result;
}

const resultObject = numberToObject();
console.log(resultObject);
