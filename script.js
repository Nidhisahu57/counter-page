let incre = document.getElementById("incre");
let decre = document.getElementById("decre");

let result = document.getElementById("result");
let reset = document.getElementById("reset");

// ----------------Increment by 1-------------------

let newIncrementValue = () => {
   let value = Number(result.innerText);
   if(value>= 0){
    value++;
   } else{
    value;
   }
    
    return value;
};



function increment(){
    document.querySelector("#result").innerText = newIncrementValue();
}

incre.addEventListener("click", increment);

// ----------------Decrement by 1-------------------

let newDecrementValue = () => {
    let value = Number(result.innerText);
    if(value> 0){
        value--;
       } else{
        value;
       }
     return value;
 };
 
 
 
 function decrement(){
     document.querySelector("#result").innerText = newDecrementValue();
 }
 
 decre.addEventListener("click", decrement);

// ----------------Reset Value-------------------
 
let newResetValue = () => {
    let value =Number(0);
     return value;
 };
 
 
 function resetValue(){
     document.querySelector("#result").innerText = newResetValue();
 }
 
 reset.addEventListener("click", resetValue);