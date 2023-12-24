const user = {
    username: "Digvijay",
    price : 1000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage()

console.log(this);

// function Person(){
//     console.log(this);
// }
// Person()

// const  person = function(){
//     let usename = "Digvijay";
//     console.log(this.username);
// }
// person();

const  person = () => {
    let usename = "Digvijay";
    console.log(this.username);
    console.log(usename);
    console.log(this);
}
person();

// Arrow function Basic structure
// step1: () => {}
// step2: const arrowFunction = () =>{}


const addTwo = (num1, num2) => {
   return num1 + num2;
}

console.log(addTwo(3, 4))
// Implecit return
const addTwo2 = (num1, num2) => (num1 + num2)
console.log(addTwo2(3, 4))

const addTwo3 = (num1, num2) => ({username:"Digvijay" }) // VVI 

console.log(addTwo3(3, 4))