class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

// Отримання даних від користувача
let name = prompt("Введіть ім'я працівника:");
let surname = prompt("Введіть прізвище працівника:");
let rate = parseFloat(prompt("Введіть ставку за день роботи:"));
let days = parseInt(prompt("Введіть кількість відпрацьованих днів:"));

// Створення об'єкта працівника за введеними даними
let worker1 = new Worker(name, surname, rate, days);

// Виведення зарплати працівника
console.log(worker1.getSalary());
