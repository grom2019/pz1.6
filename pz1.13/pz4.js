function createGreetable(str) {
    const result = Object.create(createGreetable.prototype);
    result.str = str;
    return result;
}

createGreetable.prototype.greet = function(greeting) {
    return `${greeting}, ${this.str}!`;
};

// Типове використання
const g = createGreetable('Oleg');
console.log(g.greet('Hello'));
