/**
 * Map
 * Reduce
 * Filter
 * for
 * forEach
 */

// Map

const arr = [5,3,6,7,8];

function  double(x){
    return x*2;
}
const output1 = arr.map(double);
console.log(output1);


const output2 = arr.map(function double(x){
    return x*2;
});
console.log(output2);


const output3 = arr.map((x) => x*2);
console.log(output3);

// Filter

function greaterthenFour(x){
    return x > 4;
}

const output_filter = arr.filter(greaterthenFour);
console.log(output_filter);

const output_filter1 = arr.filter(function greaterthenFour(x){
    return x > 4;
});
console.log(output_filter1);

const output_filter2 = arr.filter((x) =>x > 4);
console.log(output_filter2);

// reduce

// Find Max, Min, aggregate value return 

function findSum(arr){
     let sum = 0;
     for(let i=0; i<arr.length; i++){
        sum = sum+ arr[i];
     }
     return sum;
}

//console.log(findSum(arr));

const output_reduce = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);

//console.log(output_reduce);

const output_reduce1 = arr.reduce(function(acc, curr){
    if(acc <curr) {
        acc= curr;
    } 
    return acc;
}, 0);

console.log(output_reduce1);


const users = [
    {firstName:"Digvijay", lastName:"singh", age:35},
    {firstName:"shivansh", lastName:"singh", age:5},
    {firstName:"Rajlaxmi", lastName:"singh", age:3},
    {firstName:"Aishini", lastName:"singh", age:7},
    {firstName:"Sonal", lastName:"singh", age:35},
]

const output_user = users.map(x =>{
    return x.firstName + " " + x.lastName;
})

console.log(output_user)

const output_user1 = users.reduce((acc, curr) =>{
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{acc[curr.age] = 1;}
    return acc;
}, {});

console.log(output_user1)

const output_filter_object = users.filter(x => x.age < 30).map(y => y.firstName) ;
console.log(output_filter_object);



