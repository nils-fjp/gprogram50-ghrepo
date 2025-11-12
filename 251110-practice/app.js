// --- Setup (Nytt tema: Spelvärld) ---
const gameWorlds = [
    {
        id: "w1",
        name: "Eldoria",
        population: 1500,
        zones: [
            {
                id: "z1-a",
                name: "Fire Valley",
                safe: false,
                loot: [{ item: "Ruby", value: 100 }],
            },
            {
                id: "z1-b",
                name: "Ashfall",
                safe: false,
                loot: [
                    { item: "Obsidian", value: 50 },
                    { item: "Coal", value: 5 },
                ],
            },
        ],
    },
    {
        id: "w2",
        name: "Aquaheim",
        population: 800,
        zones: [
            {
                id: "z2-a",
                name: "Coral City",
                safe: true,
                loot: [{ item: "Pearl", value: 200 }],
            },
        ],
    },
];

const player = {
    username: "RiftWalker",
    level: 55,
    inventory: [
        { item: "Health Potion", quantity: 10 },
        { item: "Sword", quantity: 1 },
    ],
    currentZone: gameWorlds[0].zones[1], // Ref: Ashfall
};

// --- Funktioner ---
function getWorldPopulation(world) {
    return world.population;
}

function getZoneSafety(zone) {
    if (zone.safe) {
        return "Säker zon";
    }
    return "Farlig zon";
}

// Variabler som återställs för varje fråga
let totalValue = 0;
let output = "";
let count = 0;

// 1. "RiftWalker"
console.log("1.", player.username);
// 2. "Eldoria"
console.log("2.", gameWorlds[0].name);
// 3. "Ashfall"
console.log("3.", gameWorlds[0].zones[1].name);
// 4. "Pearl"
console.log("4.", gameWorlds[1].zones[0].loot[0].item);
// 5. 5
console.log("5.", gameWorlds[0].zones[1].loot[1].value);
// 6. "Ashfall"
console.log("6.", player.currentZone.name);
// 7. "Farlig zon"
output = getZoneSafety(gameWorlds[0].zones[0]);
console.log("7.", output);
output = "";
// 8. "Säker zon"
output = getZoneSafety(gameWorlds[1].zones[0]);
console.log("8.", output);
output = "";
// 9. "Farlig zon"
output = getZoneSafety(player.currentZone);
console.log("9.", output);
output = "";
// 10. 2300
for (const world of gameWorlds) {
    totalValue += getWorldPopulation(world);
}
console.log("10.", totalValue);
totalValue = 0;
// 11. "Health Potion Sword "
for (let i = 0; i < player.inventory.length; i++) {
    output += player.inventory[i].item + " ";
}
console.log("11.", output);
output = "";
// 12. 3
for (const world of gameWorlds) {
    for (const zone of world.zones) {
        count++;
    }
}
console.log("12.", count);
count = 0;
// 13. 1
for (const world of gameWorlds) {
    for (const zone of world.zones) {
        if (zone.safe === true) {
            count++;
        }
    }
}
console.log("13.", count);
count = 0;
// 14. 355
for (const world of gameWorlds) {
    for (const zone of world.zones) {
        for (const lootItem of zone.loot) {
            totalValue += lootItem.value;
        }
    }
}
console.log("14.", totalValue);
totalValue = 0;
// 15. 300
for (const world of gameWorlds) {
    for (const zone of world.zones) {
        for (const lootItem of zone.loot) {
            if (lootItem.value >= 100) {
                totalValue += lootItem.value;
            }
        }
    }
}
console.log("15.", totalValue);
totalValue = 0;
// 16. "Burning Plains"
player.currentZone.name = "Burning Plains";
console.log("16.", gameWorlds[0].zones[1].name);
// 17. "Lava Lake"
gameWorlds[0].zones[1].name = "Lava Lake";
console.log("17.", player.currentZone.name);
// 18. "FA"
player.currentZone.name = "Ashfall";
gameWorlds[0].zones.forEach((z) => {
    output += z.name[0]; // Första bokstaven
});
console.log("18.", output);
output = "";
// 19. 200
console.log("19.", gameWorlds[1].zones[0].loot[0]["value"]);
// 20. 1
if (player.level > 50 && getZoneSafety(player.currentZone) === "Farlig zon") {
    totalValue = 1;
} else {
    totalValue = 0;
}
console.log("20.", totalValue);
totalValue = 0;
// part 2
const findAllLootItems = (gameWorlds) => {
    let itemList = [];
    for (const world of gameWorlds) {
        for (const zone of world.zones) {
            for (const lootItem of zone.loot) {
                itemList.push(lootItem.item);
            }
        }
    }
    return itemList;
};
console.log(findAllLootItems(gameWorlds));
