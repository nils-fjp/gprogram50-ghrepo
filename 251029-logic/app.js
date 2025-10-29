// array med tre element
const todos = ["städa", "gå ut", "handla mat"];
console.log(todos);

// läggtill 'äta mat' i todos
todos.push("äta mat");

// ta bort sista todo elementet
const sista = todos.pop();
console.log(todos.length);

const arrMix = ["string", 1, true];
console.log("arrMix:", arrMix);

const arrStr = ["string0", "string1", "string2"];
console.log("arrStr:", arrStr);

const arrInt = [1, 2, 3];
console.log("arrInt:", arrInt);

const arrBool = [true, false];
console.log("arrBool:", arrBool);

// bygg 3,4 olika objects

const userProfile = {
    userName: "nils",
    userEmail: "nils.fj.paulsson@proton.me",
    userPassword: "password",
    isAdmin: "true",
};

const laptop = {
    OS: "Windows 11",
    RAM: 17179869184,
    CPU: "Intel(R) Core(TM) Ultra 7 258V",
    keyboardLayout: "sv-SE",
};

const settings = {
    systemTheme: "dark",
    accentColor: "blue",
    backgroundImage: "%userprofile%PicturesWallpaper.jpg",
    defaultView: "home",
};

const users = [
    { name: "Ali", age: 32 },
    { name: "Nils", age: 120 },
    { name: "Olena", age: 3 },
];
console.log(users[0].name);

const products = [];

const SN940XHADS = {
    name: "Galaxy Book5 16GB",
    RAM: 16,
    price: 9000,
    color: "Mörk Silver",
    inStock: false,
};
const SN940XHALB = {
    name: "Galaxy Book5 16GB",
    RAM: 16,
    price: 9000,
    color: "Ljusblå",
    inStock: true,
};
const SN942XHADS = {
    name: "Galaxy Book5 32GB",
    RAM: 32,
    price: 12000,
    color: "Mörk Silver",
    inStock: true,
};
const SN942XHALB = {
    name: "Galaxy Book5 32GB",
    RAM: 32,
    price: 12000,
    color: "Ljusblå",
    inStock: false,
};

products.push(SN940XHADS);
console.log(products);

products.push(SN940XHALB);
console.log(products);

products.push(SN942XHADS);
console.log(products);

products.push(SN942XHALB);
console.log(products);

for (const item of products) {
    console.log("Produktnamn:", item.name);
    console.log("RAM:", item.RAM + "GB");
    console.log("Pris:", item.price + ":-");
    console.log("Färg:", item.color);
    if (item.inStock === true) {
        console.log("Lagerstatus: Finns I lager!");
    } else {
        console.log("Lagerstatus: Slutsåld");
    }
}
