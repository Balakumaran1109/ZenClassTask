
let display = document.createElement("div");
display.setAttribute("id", "display");
document.body.appendChild(display);



let button = document.createElement("button");
display.setAttribute("id", "button");
button.textContent = "Click here to start the countdown";
button.classList.add("btn", "btn-primary");
display.appendChild(button);


let countClick = document.getElementById("button");
countClick.addEventListener("click", function(){

setTimeout(()=>{
    display.innerText = "10";

    setTimeout(()=>{
        display.innerText = "9";

        setTimeout(()=>{
            display.innerText = "8";

            setTimeout(()=>{
                display.innerText = "7";

                setTimeout(()=>{
                    display.innerText = "6";

                    setTimeout(()=>{
                        display.innerText = "5";

                        setTimeout(()=>{
                            display.innerText = "4";

                            setTimeout(()=>{
                                display.innerText = "3";

                                setTimeout(()=>{
                                    display.innerText = "2";

                                    setTimeout(()=>{
                                        display.innerText = "1";

                                        setTimeout(()=>{
                                            display.innerText = "Happy Independance Day";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)


})
