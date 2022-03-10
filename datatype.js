/**1: Write a program to swap two variables?
	E.g.  Let’s say you have two variable a = 5  and b = 6, 
    your program should swap these two value that mean after execution
     of function if you print a  and b the value should be 6 and 5 */  
     
var a = 5, b = 6
var result 
result = a
a=b
b=result  
console.log("value of a",a)
console.log("value of b",b)

/**2: Write a program which prints the last digit of an Integer value?
	E.g Let’s say you have a variable a =23 then it prints 3 as the last digit is 3
 */
var a=23
 var lastDigit = a%10
console.log("last digit", lastDigit )

/**3: Create a program that:
●	Calculates the sum of 1+2+3+4...+98+99
●	Prints the sum of 1+2+3+4...+98+99

O/p should be 4950. Use Normal math operator to calculate the sum
 */

  var total = 0;
    for(var i = 1; i <= 99; i++){
      total = total+ i;
    }
console.log("Sum", total)





/*4: Write a program that checks if the number is negative or positive.
	If input is 5 then it should print positive and if input is -1 then it should print negative
*/

function posiNegetive(n){
    if(n>0){
        return 'Positive'
    }else{
        return "Negative"
    }
}
console.log("result", posiNegetive(-1))
console.log("result", posiNegetive(5))


/* 5: Write a program to print all the even numbers from 1 to 100;*/
for(let i=1; i<=100;i++){
    if(i%2==0){
        console.log("even", i)
    }
}

/*6: Write a program to print all the odd numbers from 100 to 200; */
for(let i=100; i<=200;i++){
    if(i%2==1){
        console.log("odd", i)
    }
}


