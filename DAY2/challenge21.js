function afficherpairs(n){
    for(let i=0 ;i<=n;i++){
        if(i%2==0){
            return i
        }
       
    }
}
// appel 
console.log(afficherpairs(10))

// challenge 2
function compterPairs(nbr1,nbr2){
    let count=0
    for(let i=nbr1;i<=nbr2;i++){
        let cal= nbr1+nbr2+i
        if(cal%2===0){
            count=count+cal
            }

    }
    return count 
}
// appel 
console.log(compterPairs(2,6))

// challenge 3 
function construireTriangle(taille){
    let ligne=""
    for(let i=0;i<=taille;i++){
        ligne=ligne+i;
        console.log(ligne)

    }
    return ""
}
construireTriangle(4)

// challenge 4
function addition(a,b){
    return a+b
}

function calculer(nbr3,nbr4,callback){
    return( callback(nbr3,nbr4))
}
// appel 
console.log(calculer(10, 5, addition))

// Bonus callback

