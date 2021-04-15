var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, name) {
  return [name, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, name) {
  array.unshift(name);
  return(array);
}

function addElementToEndOfArray(array, name) {
  return [...array, name]
}

function destructivelyAddElementToEndOfArray(array, name) {
  array.push(name);
  console.log(array);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  console.log(array);
}

function removeElementFromBeginningOfArray(array) {
  array.slice();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  console.log(array);
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
  return array; 
}
