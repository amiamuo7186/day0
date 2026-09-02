// level 1

// while loop Counting
 let i=1
 while (i<=20){
    console.log(i)
    i++
 }

 // sum of first 100 Numbers
 let sum=0 
 for(let i=0;i<=100;i++){
      sum = sum+i
    //   console.log("la somme est ", sum)
 }
 console.log("la somme est ", sum)

 // Multiplication Table 
 let x=5
 for (let i=1; i <=10;i++){
    console.log(x +" * " +i+" = "+(x*i) )
 }

 // level 2
 // fizzBuzz 
 for(let i =1;i<=50;i++){
    if (i%3===0 && i%5===0){
        console.log("fizzBuzz")
    }
    else if (i%3===0){
        console.log("Fizz")
    }
    else if (i%5===0){
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
 }
 console.log("              ")
 // Count Vowels 
 let nom = "casablanca" ;
 let count=0
 for (let j =0;j<nom.length;j++){
    if (nom[j]=== "a"|| nom[j]=== "i"|| nom[j]=== "o"||nom[j]=== "u"||nom[j]=== "e"){
        count++
    }
 }
  console.log(count)
  // Square of Stars 
  for(let i = 0 ; i < 5 ; i++){
    for(let j = 0 ; j < 5 ; j++){
       process.stdout.write("*")
    }
   process.stdout.write("\n")
  }

  // level 3 

  // Prime Numbers

  console.log("2")
  for(let i=3 ;i<=50;i++){
    for (let j=2;j<i ;j++){
        if (i % j === 0){
            break
        }
        else {
            console.log(i)
        }
        }
       
    }

// Right-Angled Tringle 