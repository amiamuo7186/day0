// level 1
// Greeting function 
function greet (name){
    return(`hello, ${name} !`)
}
   // appel 
   let nom ="Oumaima" 
console.log(greet(nom))
// Arrow Addition 
const add=(a,b)=>a+b
    // appel 
    console.log (add(4,5))
// Square function
const Square= x=>x*x;
     // appel 
     console.log (Square(9))
// level 2
// Temperature Converter 
function celsiusToFahrenheit(c){
    return (c*(9/5)+32)
}
   // appel 
   console.log(celsiusToFahrenheit(37))

 // string Emptiness Check   
 const isEmpty=str =>{
    if(str==null||str==undefined || str ==" "){
        return true 
    }
    else {
        return false 
    }
 }
   // appel 
    let b
   console.log (isEmpty(b))
 // factorial Calculator   
 function factorial(n){
    let f=1
    for (let i=1; i <=n ;i++){
        f=f*i
    }
    return f
 }
   // appel 
  console.log(factorial(9))
 
  // level3 
  // Math Callback
  function calculate(a, b, operation){
    if(operation=="addition"){
        return a+b
    }
    else if (operation =="subtraction") {
        return a-b
    }
    else {
        console.log("ressailler ")
    }
  }
   const operation =a =>{
    let operation;
    if (a=="+"){
        operation="addition"
    }else if (a=="-"){
        operation="subtraction"
    }
    else{
        console.log("choisi entre + ou -")
    }
    return operation
        
   } 
   // appel 
   
   console.log (calculate(3,4,operation("+")))

// Closure Into 
const mult=(nub,multiplier)=>nub*multiplier
function createMultiplier(multiplier){
    
    return mult(5,multiplier)
}
// appel 
console.log(createMultiplier(7));

// Custom Filter Outline 
let odd = a =>{
    if (a%2==0){
        return false;
    }
    else{
        return true;
    }
}

function filterOddNumbers(arr, callback){
    let array_r=[];
    let j =0
for( let i=0 ;i< arr.length ;i++){
    if (odd(arr[i]) == true){
        array_r[j]= arr[i]
        j++
    }

  

}
return array_r
}

// appel 
console.log (filterOddNumbers([7,5,8,2,3,3],odd))


