var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, name) {
  return [name, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, name) {
  array.unshift(element);
  console.log(array);
}

function addElementToEndOfArray(array, element) {
  [...array, "element"]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push("element");
  console.log(array);
}

function accessElementInArray(array, index) {
  array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  console.log(array);
}

function removeElementFromBeginningOfArray(array) {
  array.slice();
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  console.log(array);
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
}
