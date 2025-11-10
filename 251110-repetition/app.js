// --- Setup ---
const productPrices = [100, 50, 200, 75, 150];

const users = [
    { id: 1, name: "Alex", level: "premium", age: 30 },
    { id: 2, name: "Bea", level: "basic", age: 25 },
    { id: 3, name: "Carl", level: "premium", age: 40 },
];

const appConfig = {
    title: "Min App",
    version: 2.5,
    features: ["login", "cart", "profile"],
};

// --- Funktioner ---
function isPremiumUser(user) {
    if (user.level === "premium") {
        return true;
    } else {
        return false;
    }
}

function getStatusMessage(code) {
    if (code === 200) return "OK";
    if (code === 404) return "Missing";
    return "Unknown";
}

// Variabler som återställs för varje fråga
let total = 0;
let result = "";
let counter = 0;
// 1.
console.log("1. appConfig.features[1] =", appConfig.features[1]);
// 2.
console.log("2. users[0].name =", users[0].name);
// 3.
result = getStatusMessage(404);
console.log("3. result =", result);
result = "";
// 4.
result = getStatusMessage(500);
console.log("4. result =", result);
result = "";
// 5.
if (isPremiumUser(users[0])) {
    result = "Ja";
} else {
    result = "Nej";
}
console.log("5. result =", result);
result = "";
// 6.
if (isPremiumUser(users[1])) {
    result = "Ja";
} else {
    result = "Nej";
}
console.log("6. result =", result);
result = "";
// 7.
for (let i = 0; i < productPrices.length; i++) {
    total += productPrices[i];
}
console.log("7. total =", total);
total = 0;
// 8.
for (const price of productPrices) {
    total += price;
}
console.log("8. total =", total);
total = 0;
// 9.
productPrices.forEach((price) => {
    if (price >= 100) {
        total += price;
    }
});
console.log("9. total =", total);
total = 0;
// 10.
for (const price of productPrices) {
    if (price === 200) {
        break;
    }
    total += price;
}
console.log("10. total =", total);
total = 0;
// 11.
for (const price of productPrices) {
    if (price < 100) {
        continue;
    }
    total += price;
}
console.log("11. total =", total);
total = 0;
// 12.
for (const key in appConfig) {
    result += key + " ";
}
console.log("12. result =", result);
result = "";
// 13.
for (const user of users) {
    if (isPremiumUser(user)) {
        counter++;
    }
}
console.log("13. counter =", counter);
counter = 0;
// 14.
for (let i = 0; i < appConfig.features.length; i++) {
    result += appConfig.features[i][0];
}
console.log("14. result =", result);
result = "";
// 15.
let i = 0;
while (i < productPrices.length) {
    total += productPrices[i];
    i++;
}
console.log("15. total =", total);
total = 0;
// 16.
let firstUser = users[0];
if (firstUser.age > 25 && firstUser.level === "premium") {
    result = "VIP";
}
console.log("16. result =", result);
result = "";
// 17.
let secondUser = users[1];
if (secondUser.age > 25 || secondUser.level === "premium") {
    result = "Aktiv";
} else {
    result = "Inaktiv";
}
console.log("17. result =", result);
result = "";
// 18.
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 35) {
        counter++;
    } else {
        counter--;
    }
}
console.log("18. counter =", counter);
counter = 0;
// 19.
for (const user of users) {
    result += isPremiumUser(user) + " ";
}
console.log("19. result =", result);
result = "";
// 20.
let codes = [200, 404, 200];
for (const c of codes) {
    result += getStatusMessage(c);
}
console.log("20. result =", result);
result = "";
