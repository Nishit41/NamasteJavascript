 console.log(x);
 // undefined 
 output(); 
 // will be print=> Hoisting Fn 
 console.log(output); // it will give complete function
 var x=10;
function output(){
    console.log("Hoisting Fn")
}
// The above output -> because of javascript has it's memory allocation phase during this time it will assign memory to variable and function
// while debugging this code can be seen in global space;

