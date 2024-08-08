// Date Objects
// new Date()
let now = new Date();
console.log(now);
// new Date(milliseconds)
let now1 = new Date(1);
console.log(now1);
// new Date(date String)
let date = new Date("1998-06-25")
console.log(date);
// Short Date Format
let date1 = new Date("06/25/1998")
console.log(date1);
// Long Date Format
let date2 = new Date("Jun 25 1998")
console.log(date2);
let date3 = new Date("25 Jun 1998")
console.log(date3);
// new Date(year,month,day,hours,minutes,seconds,milliseconds)
let time1 = new Date(2021, 0, 20, 4, 12, 11, 0);
console.log(time1);
// AutoCorrection in Date Object
let dateValue = new Date(2024, 0, 32);
console.log(dateValue)
//Get Date
let getDate = new Date(1998,7,15,1,3,14,0);
console.log(getDate.getFullYear());
console.log(getDate.getMonth());
console.log(getDate.getDate());
console.log(getDate.getHours());
console.log(getDate.getMinutes());
console.log(getDate.getSeconds());
//Set Date
let setDate = new Date(1998,06,25);
setDate.setFullYear(2021);
setDate.setDate(1);
console.log(setDate)