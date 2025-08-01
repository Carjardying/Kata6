function fizzbuzz(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("Fizzbuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  }

  // else if(number%5==true){
  //     console.log ==

  // }
}
fizzbuzz(3);
fizzbuzz(5);
fizzbuzz(15);
