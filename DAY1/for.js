// boucle for  calculation 
let somme =0
for (let i =0; i<=5;i++){
    somme= somme+i
    console.log(somme)  // affiche calcule de la somme de depart au final 
}

console.log("       ")// pour separation dans l affichage 
// somme 
somme =0
for (let i =0; i<=5;i++){
    somme= somme+i    
}
console.log(somme) // affiche seulement la somme final dans ce cas 15

console.log("       ")// pour separation dans l affichage
//parcours inverse ou decrementation 
for (let i =18; i>0;i--){
    console.log(i)// affiche de 18 à 1 
}
console.log("        ") // pour separation dans l affichage
// plus d'une seule condition 
let a= 12

for(let i = 0; i<10 ; i++)
{
    console.log(i)
    a = i / a 
    console.log(a)
}  

console.log("        ") // pour separation dans l affichage


for (let i=0;i<3;i++){
    for (let j=3;j>0;j--){
        console.log (i,j)
       
    }
   
}
console.log("        ") // pour separation dans l affichage

for (let i=0;i<3;i++){
    // console.log("for 1")
    for (let j=3;j>0;j--){
        // console.log("for 2")
        console.log (i,j)
        if (i==j){ break}
    }
   
}
console.log("        ") // pour separation dans l affichage

let j // il faut declarer j  
for (let i=0;i<3;i++){
    for ( j=3;j>0;j--){
        console.log (i,j)
       
    }
  if (i==j){ break}
}
console.log("        ") // pour separation dans l affichage




