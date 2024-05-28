
//STEP 1



//STEP 2

let currentDate = new Date();
let monthIndex = currentDate.getMonth();
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = monthNames[monthIndex];

console.log(monthName);


//STEP 3

let today = new Date();
let day = today.getDay();

if (day === 0 || day === 6) {
    console.log("It is weekend");
} else {
    console.log("It is not weekend");
}


//STEP 4

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

let yesterdayDayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][yesterday.getDay()];

console.log(yesterdayDayOfWeek);


//STEP 5

let today = new Date();
let dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });
let firstLetter = dayOfWeek.charAt(0);

console.log(firstLetter);


