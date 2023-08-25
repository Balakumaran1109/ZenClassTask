function orderFood(delivery){
    console.log("Your order has placed");
    setTimeout(()=>{
        console.log("Your order is being prepared..");
        delivery();
    },5000)
}

function delivery(){
    console.log("Sit and relax");
    setTimeout(()=>{
        console.log(" Your order is ready!! will be delivered in 30 min");
    },5000)
}

orderFood(delivery);



