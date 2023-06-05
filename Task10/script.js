let countdown = (number,callback)=>{
     if(number>0){
        document.getElementById('count').innerHTML = number;
          setTimeout(timehandler =>{
            countdown(number - 1, callback)      
},1000)

}else{
        callback()
     }        
}

let display = ()=>{
    document.getElementById('count').innerHTML = "Happy Independence Day";
}

let handle = ()=>{
countdown(10,display)}
