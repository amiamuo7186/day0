/*Level 1 (Beginner)
Age Logger: Declare a variable age and assign a number to it. Log to the console: "You are [age] years old."
Temperature Check: Declare a variable temperature. If the temperature is strictly greater than 30, log "It's hot outside!". Otherwise, log "The weather is nice."
Even or Odd: Declare a variable number. Use the modulo operator (%) and an if/else statement to check if the number is even or odd, and log the result.
*/
// age logger 
let age =20;
console.log("You are"+" "+age+" "+"years old.")//You are 20 years old.
// Temperature Check 
let Temp=35;
if (Temp> 30){
    console.log("It's hot outside!")
}
else {
    console.log ("The weather is nice.")
}//It's hot outside!
// Even or Odd 
let numero =15;
if (numero % 2== 0){
    console.log (numero +" "+"is even")
}
else {
    console.log(numero +" "+ "is Odd")
}// 15 is Odd
/*Level 2 (Intermediate)
Grading System: Declare a variable score (0-100). Use if/else if/else statements to log "A" for 90-100, "B" for 80-89, "C" for 70-79, and "F" for anything below 70.
Max of Three: Declare three number variables. Write conditions to find and log the largest of the three numbers without using Math.max.
Leap Year Checker: Declare a year variable. Write a condition to check if it's a leap year (divisible by 4 AND NOT divisible by 100, UNLESS it's divisible by 400). Log true or false.*/

// grading System 
let score= 85;
if (score>=90 && score <=100){
    console.log("A")
}
else if(score >=80 && score <=89){
    console.log("B")
}
else if (score >=70 && score <=79){
    console.log ("C")
}
else {
    console.log ("F")
}//B

// Max of Three
let num1=3
let num2=7
let num3=1

if (num1>num2 && num1>num3 ){
    
        console.log(num1)
    

}else if (num2>num3){
    console.log (num2)
}else{
    console.log(num3)
} 

 //Leap Year Checker
 let year =2024;

 if ((year % 4==0 && year%100 !=0) || year%400 !=0){
    console.log( true )
 }else{
    console.log(false)
 }// false
 
 /*Level 3 (Advanced)
Basic Calculator: Declare variables num1, num2, and operator (a string like "+", "-", "*", "/"). Use a switch statement to perform the correct math operation and log the result. Handle division by zero.
Valid Triangle: Declare three variables representing the angles of a triangle. Check if they form a valid triangle (all three add up to exactly 180, and no angle is 0 or less).
BMI Calculator: Declare variables for weight (kg) and height (m). Calculate the BMI (weight / (height * height)). Log the BMI along with a category: "Underweight" (<18.5), "Normal" (18.5-24.9), or "Overweight" (>=25).*/

 //Grading System
 let num4 =5
 let num5=7
 let operator= "+"
 switch(operator){
    case "+": console.log ("la somme est "+ (num4 + num5) )
     break;
    case "-":console.log (" la soustarction est "+ (num4-num5))
     break
    case "*": console.log ("la multiplication est "+ (num4*num5))
     break
    case "/": if (num5!=0){
        console.log ("impossible de divisser sur 0")

      }
      else {
        console.log (" la division est "+ (num4/num5))
      }
     break 
    default:console.log("Réessayer une autre fois ") 
 }
// Valid Triangle 
let alpha = 30
let beta =45
let lamda=50
 if (alpha+beta+lamda <=180 && alpha+beta+lamda>=0){
    console.log( "c'est un triangle")

 }else {
    console.log ("retracer votre triangle")
 }//c'est un triangle
 //BMI Calculator
 let weight=40
 let height=1.72
 let BMI=(weight / (height * height))
 if(BMI<18.5){
    console.log("Underweight")
 }
 else if (BMI>18.5 && BMI<24.9){
    console.log("Normal")

 }
 else 
   { console.log("Overweight")}
 