// find the sum Using .reduce

const arr = [2, 4, 8, 10];

const sum = arr.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

console.log(sum);
// output is 24 

const list = [4,6,8,20]
const max = list.reduce((max,curr)=>{
   if(curr>max){
    max=curr;
   } 
   return max;
},0)
console.log("max=>",max); //output is 20

const users = [
    {firstName:"Nishit",lastName:"Ranjan",age:'24'},
    {firstName:"Sagar",lastName:"Singh",age:'24'},
    {firstName:"Salman",lastName:"Khan",age:'60'},
    {firstName:"Karthik",lastName:"Aaryan",age:'32'},
]

// o/p should be {24:2,60:1,32:1}

const ageObj = users.reduce((acc,curr)=>{
   if(acc[curr.age]){
     acc[curr.age]= ++acc[curr.age]
   }
   else{
    acc[curr.age] = 1
   } 
  return acc;   
},{})
console.log(ageObj);

// find out whose age is less than 30;

const belowThirtyUsersName = users.reduce((acc,curr)=>{
    if(curr.age<30){
        acc.push(curr.firstName)
    }
    return acc
},[])
console.log(belowThirtyUsersName);


function totalVotes(arr) {
  return arr.reduce((totalVoters,voter)=>{
    if(voter.voted){
        totalVoters++
    }
    return totalVoters;
  },0)    
}

var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];



function shoppingSpree(arr) {
   return arr.reduce((totalPrice,model)=>{
     return totalPrice+=model.price
    },0)
}

var wishlist = [
   { title: "Tesla Model S", price: 90000 },
   { title: "4 carat diamond ring", price: 45000 },
   { title: "Fancy hacky Sack", price: 5 },
   { title: "Gold fidgit spinner", price: 2000 },
   { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist));

function flatten(arr) {
  return arr.reduce((flatArr,ele)=>{
    
    // flatArr.push(...ele)
    newArr = flatArr.concat(ele);
    console.log("new",newArr);
    return newArr
  },[])    
}

var arrays = [
   ["1", "2", "3"],
   [true],
   [4, 5, 6]
];

console.log(flatten(arrays)); 