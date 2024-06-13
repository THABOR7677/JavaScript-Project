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

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value ;
    document.getElementById("myH1").textContent = `hello ${username}`
}