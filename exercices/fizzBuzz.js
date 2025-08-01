function fizzbuzz(number) {
  let answer = [];

  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {   //toujours commecner par celui-ci!!! sinon ça ne focntionne pas
      answer.push("Fizzbuzz");
    } else if (i % 3 == 0) { //on test i et pas number, sinon ça retourne number au lieu de donner les chiffres
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

/* Je ne comprends pas comment mon talbeau est sensné faire
"La fonction doit retourner un tableau de chaînes de caractères answer (indexé à partir de 1)."
un tableau commence toujours par l'index 0. 
Ce sera ma réponse finale, je veux commcner les autres exercices et il est déjà 11h20 */
