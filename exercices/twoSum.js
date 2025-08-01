let numbers = [2, 7, 11, 15]; // pas const sinon je ne pourrai pas en changer plus tard
let target = 9;


function twoSum(numbers, target){
    for (let i = 0 && let j = i+1; i < numbers.length && j<numbers.lenght; i++ && j++) {  /*il faut addiditonner deux nomber du tableau pour avoir target donc i et j*/
    if (numbers[i] + numbers[j] === target) {
          return [i, j];
    }
    }

}

console.log(twoSum([2, 7, 11, 15], 9));


