//Challenge Part 1
function addingToX(num) {
  let sum = 0;
  while (num > 0){
    sum += num;
    num--;
  }
  return sum;
}

// Test your answer (delete the //)
console.log(addingToX(1));  // 1
console.log(addingToX(2));  // 3
console.log(addingToX(3));  // 6
console.log(addingToX(10)); // 55

//Challenge Part 2

function arrayToX(num) {
  //create empty array
  let result = [];
  //while loop subtracting from num
  for (let i = 1; i <= num; i++){
    //index plugged into addingtoX function
    //push result into empty array
    result.push(addingToX(i));
  }
  return result;
}

//Test your answer (delete the //)
console.log(arrayToX(1));   // [1]
console.log(arrayToX(2));   // [1, 3]
console.log(arrayToX(3));   // [1, 3, 6]
console.log(arrayToX(10));  // [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]
