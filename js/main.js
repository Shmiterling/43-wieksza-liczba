let num1 = 2;
let num2 = 5;

function myFunction(num1, num2,) {
  if (num1 > num2) {
    return num1;
  } else if (num1 == num2) {
    console.log("Liczby są równe!")
  } else {
    return num2;
  }
}

console.log(myFunction(num1, num2))