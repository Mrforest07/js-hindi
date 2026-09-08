// Dates

 let myData = new Date()
console.log(myData.toString());
 console.log(myData.toDateString());
 console.log(myData.toLocaleString());
console.log(typeof myData);

 let myCreatedDate=new Date(2024,0,23)
 console.log(myCreatedDate.toDateString());

 let myCreatedDateOne=new Date(2024,0,23,5,3)
 console.log(myCreatedDateOne.toLocaleString());

 let myCreatedDateTwo=new Date("01-14-2025")
 console.log(myCreatedDateTwo.toLocaleString());

 let myTimeStamp=Date.now()

 console.log(myTimeStamp)

let newDate=new Date()
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:"Asia/Kolkata"
})