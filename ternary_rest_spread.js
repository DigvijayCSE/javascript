/**
 * Ternary
 * Rest
 * Spred
 * https://www.youtube.com/watch?v=gQWOLRKGPsA
 */

// Ternary

var age = 35;
if (age < 18){
    text = "kid"
}else{
    text = "adult";
}
console.log(text);

const text1 = age <18 ? "kid" : "adult";

console.log(text1);

// Spread --  unpacks elements [] {}

const numbers  = [1,2,4];
const newNumbers = [...numbers];
console.log(newNumbers);


// Merge
const oldNumbers  = [1,2,4];
const newNum = [5,6,7];
const merge_array = [...oldNumbers, ...newNum]
console.log(merge_array);

//compose
const oldNumbers1  = [1,2,4];
const newNum2 = [5,6,7];
const merge_array2 = [100, ...oldNumbers, ...newNum, 200]
console.log(merge_array2);

//String

const channel = 'javascript';
console.log([...channel]);


// Object 
// clone shallow copy

const order = {
    id:1,
    date:'26/12/2023',
    name: 'Digvijay',
    items :[
        '1',
        '2'
    ]
}

const newOrder = {
    ...order,
    name:'Ranvijay',
    age: 35

}
console.log(newOrder);

// Merge 2Object
const user = {
    name:'Rakesh',
    city:'Bangalore'
}

const address = {
    street: 'Main street'
}

const newUser = {
    ...user,
    ...address
}
console.log(newUser);

// Rest --- packs   elements 

function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(2, 4))

function sum1(...num){
    return num[0] + num[1] +num[2];
}

console.log(sum1(2, 4, 3))


// DIsructuring

const user12 =  {
    name :'Digvijay',
    city : 'Bangalore',
    pincode:560068,
    phone:8088109615




    
}

const {name, pincode} = user12;

console.log(name );
console.log(pincode );


const user123 =  {
    name1 :'Digvijay',
    city : 'Bangalore',
    pincode:560068
}

const {name1, ...address_user123} = user123;

console.log(name1 );
console.log(address_user123 );




