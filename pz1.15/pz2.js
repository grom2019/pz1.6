function getExt(filePath) {
    const parts = filePath.split('.');
    if (parts.length === 1 || (parts[0] === "" && parts.length === 2)) {
        return ""; // Якщо немає розширення або шлях порожній
    }
    return parts.pop(); // Повертаємо останній елемент масиву, який і є розширенням
}

function getUserInputAndExtractExt() {
    const filePath = prompt("Введіть шлях до файлу:");
    const extension = getExt(filePath);
    
    if(extension === "") {
        console.log("Неможливо отримати розширення файлу. Введіть коректний шлях.");
    } else {
        console.log("Розширення файлу:", extension);
    }
}

// Викликаємо функцію для отримання введення користувача та вилучення розширення
getUserInputAndExtractExt();
