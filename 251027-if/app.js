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
