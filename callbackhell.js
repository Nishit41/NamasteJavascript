function a(){
    console.log("test")
}

function b(){
    console.log("javascript")
}

// b(); 
//now I want to call this function after 5sec before c

setTimeout(b,5000)

function c(){
    console.log("javascript library")
}

c();

//advantage
//because of callback Async code exist

//Problem related to callback
//Callbackhell

const cart = ["shoes","chair","table"]
//let say we have api createorder
APi.createOrder(cart,function(){
    api.proceedToPayment()
}
)
// hence this grows the code horizontally is call callback hell(pyramid of doom)
// createOrder takes control over proceed to payment api

