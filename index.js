//Variables

// let x;
// x = 100; 

// let age = 25;
// let price = 10.99;
// let gpa = 2.5;

// console.log(`You are ${age} years old`);
// console.log(`The Price is $${Price}`);
// console.log(`Your GPA is: ${gpa}`);

// let FirstName = "Thabo";
// let FavFood = "Burgar";
// let email = "Thabo77@gmail.com"

// console.log(typeof FirstName);
// console.log(`Your Name if ${FirstName}`);
// console.log(`Your favourite food is ${FavFood}`);
// console.log(`Your email is: ${email}`);


// How to accept user Input

// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `hello ${username}`
// }

// type Coversion = Change the datatype of value to another( Strings, numbers, booleans)

// let x = "Burgar";
// let y = "Burgar";
// let z = "Burgar";

// x = Number(x);
// y = String(y);
// z = Boolean(z);


// console.log(x, typeof x)
// console.log(y, typeof y)
// console.log(z, typeof z)


// Const = a variable that cant be changed

const PI = 3.14159;
let radius;
let circumference;


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm"
}