function fizzbuzz(number) {
  let answer = [];

  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {   //toujours commecner par celui-ci!!! sinon ça ne focntionne pas
      answer.push("Fizzbuzz");
    } else if (i % 3 == 0) {
      answer.push("Fizz");
    } else if (i % 5 == 0) {
      answer.push("Buzz");
    } else {
      answer.push(String(i));
    }
  }
  return answer;
}
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));

