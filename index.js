import {
    firstElement, allElementsExceptTheLastOne, LastElement, allElementsExceptTheFirstOne, elementInPosition,
    deleteArrayByValue, removeDuplicatesFromArray
} from './myFunctions.js';

import { names, numbers } from './data.js';

console.log(names);
console.log('1. First Element', firstElement(names));

console.log(names);
console.log('2. All elements except the last one', allElementsExceptTheLastOne(names));

console.log(names);
console.log('3. The last element', LastElement(names));

console.log(names);
console.log('4. All except the first one', allElementsExceptTheFirstOne(names));


console.log(names);
console.log('4. Position: ', elementInPosition(3, names));

console.log(names);
console.log('5. Delete array by value', deleteArrayByValue(names, 'Eric'));

console.log(names);
console.log('6. Remove duplicates', removeDuplicatesFromArray(names));

console.log(numbers);
console.log('1. First Element', firstElement(numbers));

console.log(numbers);
console.log('2. All elements except the last one', allElementsExceptTheLastOne(numbers));

console.log(numbers);
console.log('3. The last element', LastElement(numbers));

console.log(numbers);
console.log('4. All except the first one', allElementsExceptTheFirstOne(numbers));

console.log(numbers);
console.log('4. All except the first one', elementInPosition(numbers, 2));

console.log(numbers);
console.log('5. Delete array by value', deleteArrayByValue(numbers, 9));

console.log(numbers);
console.log('6. Remove duplicates', removeDuplicatesFromArray(numbers));