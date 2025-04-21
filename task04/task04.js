
//assignment 01

let input = prompt("print number from N - M");
let numbers = input.split("-");
let num1 = parseInt(numbers[0]);
let num2 = parseInt(numbers[1]);
let start = Math.min(num1 , num2);
let end = Math.max(num1 , num2);

for (let i = start ; i<= end ; i++){
    document.write(i + "<br>")
}
