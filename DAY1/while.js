let ok= 10// il faut tjrs donne une valeur avant le while 
while(ok<20 && ok >=10){
    console.log("Bravo ")
    ok++
}// affichage 10 fois de message 
console.log("       ")
while (ok<20){
//  ok <=10 ? console.log ("reviser et refaire" ) : console.log ("bravo")
 if (ok<=10){
    console.log ("reviser et refaire" )
 }
 else {
    console.log("bravo")}
ok++
}// rien ne va afficher car la variablre ok est deja été incrementee dans la boucle precedentes 
console.log(ok) // la valeur de ok =20
// meme principe de la boucle precedent ms avec new variable 
let k =15
while (k<20){ // True 
 k <=10 ? console.log ("reviser et refaire" ) : console.log ("bravo") 
k++
}
// do while 
let a=1
do {
console.log ("vous etre dans la page vraie")
a--
console.log(a);
}while(a !== -1)// affichage 2 fois 
// 
let i =5 ,x=0
do {
    x+=i
    console.log(x)
    i++
}while(i<8)// il va afficher 5,11,18
