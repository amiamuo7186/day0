// function 
// des fonction avec parametre sans return
let d // pour que la variable peut etre utiliser exterieur de la fct 
function somme(a,b){
    d=a+b
}
// fonction avec des arguments 
const result =somme(3,7)
console.log (result)// undefined (car pas de return )
console.log(d)// 10
// function de multiplication  avec return 
function multiplication(a,b){
    return a*b
}
// appel de fct 
const res=multiplication(8,6)
console.log(res)//48 
// fonction flechés 
const puissance=x => x*x;// le return est implicites 
   // appel 
   console.log(puissance(7))// 49 
// les fonctions No parameters 
  function salutation(){
     return"salut"
  }
  // appel 
   console.log (salutation())// salut 
// fonction anonyme 
const add=(l,m) => l+m;
//appel 
console.log (add(7,9))// 16
// call back functions 
function nom (name,Callback){
    console.log('hello '+name)
    Callback()
}
function age(){
    console.log('how old are u')

}
  // appel 
  nom('oum',age)
 console.log("                                     ")

function noom (name,Callback){
    
    
    return('hello '+name+" " +Callback())
}
function àge(){
    
    return ('how old are u')


}
  // appel 
   console.log(noom('oum',àge))