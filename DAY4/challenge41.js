// challenge 1 Count Even and Odd Numbers
let numbers1 = [4, 7, 2, 9, 10, 13];
let count=0
for(let i =0;i<numbers1.length;i++){
    if(numbers1[i]%2===0){
        count++
    }
    
}
console.log(`even: ${count} odd: ${(numbers1.length)-count}`)

// challenge 2  Find the Largest Number
let numbers2 = [12, 5, 31, 8, 19];
function maximum(tab){
    max=tab[0]
    for(let i=0 ;i<tab.length ;i++){
        if(max<tab[i]){
            max=tab[i]
        }

    }
    return max
}
// test 
  console.log(maximum(numbers2))

// challenge 3 Count a Character Inside a String

let text = "javascript";
let character = "a";
let count3=0
for(let i=0;i<text.length;i++){
    if (text[i]==character){
        count3++
    }
}
console.log( count3)

// challenge4 Reverse a String Manually 
let word = "hello";
let reverse=""
for(let i= word.length-1;i>=0;i--){
    reverse=reverse+word[i]

}
console.log(reverse)

//Challenge 5 — Count Vowels
let count5=0
let text5 = "JavaScript is amazing";
text=text.toLowerCase()
for(let i =0;i<text5.length;i++){
    if(text5[i]=="a"|| text5[i]=="o"|| text5[i]=="e"||text5[i]=="u"||text5[i]=="i" ){
        count5++
    }
}
console.log(count5)

//Challenge 6 — Detect a Palindrome
let word6 = "level";
let test=true
for(let i=0;i<word6.length;i++){
    if (word6[i]!==word6[(word6.length-1)-i])
    {
        test=false
        break
    }

}
console.log(test)
// Challenge 7 — Find the Second Largest Number
let numbers = [12, 5, 20, 8, 20, 17];

// function secondLargest(tab){
//     let copie=tab
//     max=maximum(copie)
//     index=copie.indexOf(max)
//     copie.splice(index,1)
//     max2=maximum(copie)
//     return max2
// }
// console.log(secondLargest(numbers))// si on a la meme valeur de max il ne marche plus 

// autre methode 
function cherchermax(tab){7
    let max =maximum(tab)
  let max3=secondLargest2(tab,max)
  
//   console.log(max)
  function secondLargest2(tab,max){
    console.log (max)
     let max2=tab[0]
    for(let i=1;i<tab.length;i++){
        if (tab[i]>max2 && max!==max2){
            max2=tab[i]
            console.log(max2)
        }
        // console.log(max2)
    }return max2
}
return max3
}
console.log("          ")
console.log(cherchermax(numbers))// a refaire  week end 
