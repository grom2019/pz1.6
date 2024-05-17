function pluck(array, key) {
    return array.map(item => item[key]);
}

let characters = [
    {name: "barney", age: 36},
    {name: "fred", age: 40},
    {name: "oles", age: 20}
];

console.log(pluck(characters, 'name')); // ['barney', 'fred']
