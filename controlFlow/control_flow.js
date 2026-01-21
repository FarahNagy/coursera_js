let userRole = 'admin';
let accessLevel;

if(userRole === 'admin'){
    accessLevel = "Full access granted";
}
else if (userRole === 'manager'){
    accessLevel = "Limited access granted";
}
else {
    accessLevel = 'No access granted';
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === 'admin'){
        userMessage = "Welcome, Admin!";
    } else{
        userMessage = 'Welcome, User!';
    }
} else { 
    userMessage = 'Please log in to access the system.';
}
console.log("User Message:", userMessage);


let userType = "Subscriber";
let userCategory;


switch (userType.toLocaleLowerCase()){
    case 'admin':
        userCategory = 'Administrator';
        break;
    case 'manager':
        userCategory = 'Manager';
        break;
    case 'subscriber':
        userCategory = 'Subscriber';
        break;
    default:
        userCategory = 'Unknown';
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated? 'Authenticated' : 'Not authenticated';
console.log("Authentication Status:", authenticationStatus);

let access;
let role = 'Enrolled Member';

switch (role){
    case 'Employee':
        access = 'Dietary Access';
        break;
    case 'Enrolled Member':
        access = 'Dietary Services and one-on-one interaction with a dietician';
        break;
    case 'Subscriber':
        access = 'partail access to facilitate Dietary Services';
        break;
    default:
        access = 'You need to enroll or at least subscribe first to avail this facility.';
        break;
    
}

console.log("services user is eligible to avail: ", access);