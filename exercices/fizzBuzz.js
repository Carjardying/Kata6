function fizzbuzz(number) {
  let answer = [""];

  for (let i = 1; i <= number; i++) {
    if (number % 3 == 0 && number % 5 == 0) {
      //toujours commecner par celui-ci!!! sinon ça ne focntionne pas
      answer.push("Fizzbuzz");
    } else if (number % 3 == 0) {
      answer.push("Fizz");
    } else if (number % 5 == 0) {
      answer.push("Buzz");
    } else {
      answer.push(number);
    }
  }
  return answer;
}
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));

