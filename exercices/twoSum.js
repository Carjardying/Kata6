let numbers = [2, 7, 11, 15]; // pas const sinon je ne pourrai pas en changer plus tard
let target = 9;

function twoSum(numbers, target) {
  /*il faut addiditonner deux nomber du tableau pour avoir target donc i et j*/
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) { /* j = 1+i pour as avoir deux fois le meme nombre */
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum(numbers, target));
