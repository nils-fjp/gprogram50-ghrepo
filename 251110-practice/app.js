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

// 2. "Eldoria"

// 3. "Ashfall"

// 4. "Pearl"

// 5. 5

// 6. "Ashfall"

// 7. "Farlig zon"
output = "";
// 8. "Säker zon"
output = "";
// 9. "Farlig zon"
output = "";
// 10. 2300
totalValue = 0;
// 11. "Health Potion Sword "
output = "";
// 12. 3
count = 0;
// 13. 1
count = 0;
// 14. 355
for (const world of gameWorlds) {
    for (const zone of world.zones) {
        for (const lootItem of zone.loot) {
            totalValue += lootItem.value;
        }
    }
}
console.log(totalValue);
totalValue = 0;
// 15. 300
totalValue = 0;
// 16. "Burning Plains"

// 17. "Lava Lake"

// 18. "FA"
output = "";
// 19. 200

// 20. 1
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
