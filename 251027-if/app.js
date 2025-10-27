let userLevel = 0;
let isAdmin = null;
let data = {
    isAdmin: true,
    isSignedIn: true,
};

let isSignedIn = null;
let userProfileData = null;

isAdmin = data.isAdmin;
isSignedIn = data.isSignedIn;

let showAdminSite = isSignedIn && isAdmin;

userLevel = userLevel || 1;
const canAccess = isAdmin && userLevel > 0;

console.log(canAccess);

userProfileData = userProfileData || "no data available";
console.log(userProfileData);

const setting = "Admin" && 0 && "User";

// 5. boolean math & coercion

const boolMath = true + true;
const boolCheck = boolMath == '2';

// 2 == '2'

console.log(typeof boolMath);
console.log(boolMath);
console.log(boolCheck);

// 6. nullCheck

const nullVar = null;
const nullCheck = nullVar == 0;
console.log(typeof nullVar);
console.log(typeof 0);
console.log(nullCheck);