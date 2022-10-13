
function largestAndSmallest(array) {
  //declare an empty array
  let result = [];
  //sort arry from smallest to biggest
  array = array.sort(function (a, b) {  return a - b;  });
  //push first and last element onto array.
  result.push(array[0], array[array.length - 1]);
  //return result array
  return result
}

console.log(largestAndSmallest([1, 2, 3, 4, 5])); // should log [1, 5]
console.log(largestAndSmallest([90, 30, 44, 66, 10])); // should log [10, 90]
console.log(largestAndSmallest([16, -70, 122])); // should log [-70, 122]