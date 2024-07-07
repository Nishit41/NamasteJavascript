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

const ageObj = users.reduce(function(acc,curr){
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