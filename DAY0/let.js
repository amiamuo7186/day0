//declaration des variables pour faire des opreations
// somme 
let a=15
let b=18 
let c=a+b
 console.log("la somme est" +c);
//autrement 
let d =null
d=a+b
console.log(d);
// la division 
d=d/c
console.log("resultat est " +d);
// operation matematique 
let e =c * b +(a-d)
console.log(e)
// chaine de caractere 
a = "welcome"
b= "home"
console.log(a+b) // afficher sans espace 
console.log(22 + "")// convertir to string 
c=toString(c)
console.log(" age + c")// n'affiche pas la valeur de c
console.log("age" + c)
// number with string 
console.log(a +" " + b +" "+ d);
// boolean 
 let i =true
 let j = false 
 console.log(i && j) 
 console.log (i && !j )
 console.log ( a && i)
 console.log (a && j)// js string are truthy ( vraie)
console.log ( ""&& i)// le vide 
let y =null 
console.log(y && i)// null 