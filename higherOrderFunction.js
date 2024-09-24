//definition=> a function which accept a function as an arguments or returns that function is called Higher order function

function a(){
 console.log()
}
// here a is the call back function and b is the higher order function

function b(a){
  a()
}
b(a);


// calculate area and circumference of given radius
const radius = [1,4,8,10]

const area = function(radius){
    return Math.PI*radius*radius
}


const circumference =  function(radius){
    return 2*Math.PI*radius*radius
}

const calculate = function (radius,logic){
    const output = []
    for(let i=0;i<radius.length;i++){
       output.push(logic(radius[i]));
    }
    return output;
}

const diameter = (radius)=>2*radius;

const res=calculate(radius,area);
const circum = calculate(radius,circumference);
const dia= calculate(radius,diameter);
console.log("area",res);
console.log("circumfere",circum);
console.log("diameter",dia);