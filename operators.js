/* 
Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".

If the number is a multiple of 3 the output should be "Fizz".
If the number given is a multiple of 5, the output should be "Buzz".
If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.

FizzBuzz(3) ➞ "Fizz"
FizzBuzz(5) ➞ "Buzz"
FizzBuzz(15) ➞ "FizzBuzz"
FizzBuzz(4) ➞ "4" 
*/

function FizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
	return 'FizzBuzz'
    } if (num % 3 === 0) {
	return 'Fizz'
    } if (num % 5 === 0) {
	return 'Buzz'
    } else {
	return num.toString();
    }
}

//testing our function by calling it 
console.log((FizzBuzz(3))) // --> Fizz
console.log((FizzBuzz(5))) // --> Buzz
console.log((FizzBuzz(15))) // --> Fizz Buzz
console.log((FizzBuzz(10))) // --> Buzz 
console.log((FizzBuzz(98))) // --> 98
