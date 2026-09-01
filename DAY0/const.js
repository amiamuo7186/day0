//les constants 
const pi=3.14// non modifiable 
let r =7
let Surf = pi*r**2;
console.log("Surface "+Surf)
/*pi =pi+r
console.log(pi) erreur
/*const pi ; erreur */ 

const ok=true
const a=pi&&ok
console.log(a)

const b=ok&&pi//true
console.log(b)//3.14
const nok=false
const c=pi&&nok
console.log(c)//false 
const d=nok&&pi
console.log(d)//false


