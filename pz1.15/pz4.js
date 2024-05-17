function validateEmail() {
    const email = prompt("Будь ласка, введіть ваш email:");

    // Регулярний вираз для перевірки правильності формату email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        console.log("Ви ввели неправильний формат email. Будь ласка, введіть коректний email.");
        validateEmail(); // Запускаємо функцію ще раз, щоб користувач ввів правильний email
    } else {
        console.log("Email введений коректно:", email);
    }
}

// Викликаємо функцію перевірки email
validateEmail();
