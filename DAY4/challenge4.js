let tab= ["red","blue","green,"]
tab.push("grey ")// return la taille
tab.shift();// return the first element  
console.log (tab) // le tableau change 

// array Sum
let tabl=[4,3,1,5,8,9,1,5]
let sum=0
console.log(tabl.length)
let j=0
for(j; j<tabl.length; j++){
  sum +=tabl[j] 
}
console.log(sum);

//element existence 
function exist(tab1,val)
{
  for(let i =0;i<tab1.length;i++){
    if(tab1[i]==val){
      return true ;
    }   
    }
    return false;

  }
//test 
  console.log (exist(tabl,0))

// level 2
// find maximum
function maximum(tab){
  let max=tab[0]
  for (let i =0; i<tab.length;i++){
    if (max<tab[i]){
      max=tab[i];
    }
  }
  return max;
}
// test 
console.log(maximum(tabl))

//remove Duplicates 
 
 function Duplicates(tab2){
   let dupl=[];
   for (let i =0;i<tab2.length;i++){
     for (let j =0; j<dupl.length; j++){
       if (dupl[j]!== tab2[i]){
           dupl.push(tab2[i])
           }
     
      }
   }
   return dupl;
 }
 // test 
 console.log(Duplicates(tabl))