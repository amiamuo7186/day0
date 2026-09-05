// level 1
// length & Uppercase 
let str="bonjour tous le monde"
// console.log(str.length)// 21
// console.log(str.toUpperCase())//BONJOUR TOUS LE MONDE

// first & last char
function chercher(nom){
    let a= nom[0]
    let b=nom[nom.length-1]
    return(`first characters is ${a} and the last is ${b}`)
}
// console.log(chercher(str))//first characters is b and the last is e

// word Replacer 
let sent="I love apples"
// console.log(sent.replace('apples','bananas'))// I love bananas

// level 2 
// palindrome check 

function palindrome(nom){
    let check = ""
    
    for(let i =nom.length-1,j=0 ;i>=0;i--,j++){
       
            check= check + nom[i]
        
    }
    console.log( " avant : "+ nom)
    console.log( " apres " +check)
    if( nom===check ){
        return true 
    }
    else {
        return false 
    }
    
}

// console.log(palindrome("level"))// true 

// String Reversal
function reverse(nom){
    let check = ""
    
    for(let i =nom.length-1 ;i>=0;i--){
       
            check= check +nom[i]
    

        
    }
    console.log( " avant : "+ nom)
    console.log( " apres "  +check)
}
reverse("oumaima")// amiamuo

// Character Counter
function countChar(str, char){
    let count= 0
    for (let i=0;i<str.length;i++){
        if (str[i]==char){
            count++
 
        }
    }
    
return count

}
// console.log(countChar("hello","l"))// 

// level 3
// Capitalize words 
function Capitalize(str){
    let cap=""
   cap= str[0].toUpperCase()
    str=str.replace(str[0],cap)
    for(let i=0;i<str.length;i++){
        if(str[i]==" "){
           cap= str[i+1].toUpperCase()
            str=str.replace(str[i+1],cap)

        }
    }
    return str
}
// console.log(Capitalize("bonjour tous le monde"))// Bonjour Tous Le Monde

// String Compressor
function Compressor(str){
    let a=""
    let b=""
    let count=0
    for(let i=0;i<str.length;i++){
        for(let j=0;j<str.length;j++){
            
             if(str[i]==str[j]){
               
                
            a=str[i]
            count++
            i=j
            
            }
            
        }
       
    
        b=b+a+count
        count=0
    
    } 
    // b=b+a+count
    //     count=0
    
    
    return b 
}
// console.log(Compressor("bbbaaoooo"))

// // Anagram checker 
function  anagram(str, base_check){
    str=str.toUpperCase()
    base_check=str.toUpperCase()
    let ok=false 
    let save= base_check
    if (str.length !== base_check.length){
         ok =false 
    } 
    else{
        
        for (let i=0;i<str.length;i++){
            ok=false 
            for(let j=0;j<save.length;j++){
                if (str[i] == save[j]){
                    ok=true ;
                    save= save.slice(0,j)+ save.slice(j+1)
                    break
                }
         
            }

            if (!ok){ //!false = true
                return "ce n'est pas un anagram "
            }
            
        }
    }
    
    if (ok)
        return "cest un anagram "
    
}
console.log (anagram("listn","silent"))
