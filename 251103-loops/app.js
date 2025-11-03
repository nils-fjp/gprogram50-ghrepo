// objects
const baseConfig = {
    theme: "dark",
    version: 1.2,
};

const userA = {
    name: "Anna",
    age: 30,
    tags: [
        { id: 1, val: "dev" },
        { id: 2, val: "js" },
    ],
    config: { ...baseConfig, notify: true },
};

let copy = { ...userA };
copy.tags.push({ id: 5, val: "new" });
console.log(userA.tags.length);

console.log("copy: ", copy);
console.log("userA: ", userA);

// loops
const fruits = ["Apple", "Banana", "Berry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    const div = document.createElement("div");
    const body = document.querySelector("body");
    div.textContent = fruits[i];
    div.className = `${fruits[i]} - ${i}`;

    console.log(div);
    //document.appendChild(div);
}

console.log(fruits);

const person = {
    name: "Alice",
    age: 30,
    city: "Malmö",
};

const simpleArray = [10, 20, 30, 40, 50];

const userList = [
    { name: "Eva", score: 100 },
    { name: "Adam", score: 80 },
    { name: "Olle", score: 95 },
];

const scores = {
    round1: 50,
    round2: 75,
    round3: 90,
};

const mixedData = ["Text", 5, true, null, "Hej"];

const matrix = [
    [1, 2],
    [3, 4],
    [5, 6],
];

// Variabler som återställs för varje fråga
let totalSum = 0;
let resultString = "";
let loopCounter = 0;

for (const key in person) {
    console.log(person[key]);
}

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        totalSum += matrix[i][j];
    }
}
console.log(totalSum);
