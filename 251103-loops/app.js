// 251103
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
