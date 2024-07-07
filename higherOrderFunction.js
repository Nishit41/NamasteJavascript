// A function takes takes fuction as 
// an arguments or return function is called higher order function

const radius = [3,1,2,4];

const area = function(radius){
    return Math.PI*radius*radius;
}

const circumference = function(radius){
    return 2*Math.PI*radius*radius
}

// calculate is a fuction which accept areafunction as logic,Hence it is higher order function 
const calculate = function (radius,logic){
    const output = [];
    for(let i=0;i<radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));


Array.prototype.calculate = function (logic){
    const output = [];
    for(let i=0;i<radius.length; i++){
        output.push(logic(this[i]))
    }
    return output
}

console.log("map replica=>",radius.calculate(area))
