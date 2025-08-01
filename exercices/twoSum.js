let numbers = [2, 7, 11, 15]; // pas const sinon je ne pourrai pas en changer plus tard
let target = 9;

function twoSum(numbers, target) {
  /*il faut addiditonner deux nomber du tableau pour avoir target donc i et j*/
  for (let i = 0; i < numbers.length; i++) {
    // premiere boucle pour le premier nombre
    for (let j = i + 1; j < numbers.length; j++) {
      /* j = 1+i pour pas avoir deux fois le meme nombre. Seconde boucle explqiée en bas de page */
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return "the numbers can't add up to the target"; // Il n'était pas demandé mais je voulais voir si j'avais bien compris
}

console.log(twoSum(numbers, target));

numbers = [3, 2, 4, 8, 5, 10];
target = 7;
console.log(twoSum(numbers, target));

numbers = [3, 2, 4, 8, 5]
target = 19
console.log(twoSum(numbers, target));

/** Si je dois comparer plus d'un élement avec 'tous les autres, il faut mettre une boucle dans une boucle (en tout as, tant que je ne sais pas si on peut le faire en une ligne) */
