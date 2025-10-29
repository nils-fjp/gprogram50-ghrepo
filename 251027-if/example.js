const number5 = 5;
const number5InString = '5'

console.log(number5 != number5InString)

5 != 5      // false
5 != '5'    // also false

let temperature = 25;
if (temperature > 20) {
    console.log("det är varmt idag!")
    console.log("ta på dig shorts.")
} else if (temperature < 20) {
        console.log("det är kallt")
}


if (isLoggedIn) {
    console.log("welcome!")
    
    // kapslad if-sats
    if (userRole === 'admin') {
        console.log('you have admin rights')
        }
    if (userRole === 'user') {
        console.log('you do not have have admin rights')
} else {
        console.log("please log in")
}

---

let ageOne = 20
let msgOne 
if (ageOne >= 18) {
    msgOne : "adult";
} else {
    msgOne : "minor";
}

let ageTwo = 20;
let msgTwo = (ageTwo >= 18) ? "adult" : "minor";
