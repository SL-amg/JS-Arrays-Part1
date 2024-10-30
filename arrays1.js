/*   
1. Create an array and name it `groceries`, add 6 groceries to it
2. Print the second element from the array `groceries`
3. Print how many elements are in the array (i.e length of the array)
4. Print the last element in the array 

*/

const groceries = ["Milk", "Cat food", "apples", "Water", "Chips", "Steak"];
console.log(groceries[0]);
console.log(groceries[1]);
console.log(groceries[2]);
console.log(groceries[3]);
console.log(groceries[4]);
console.log(groceries[5]);
console.log(groceries); // to print as a list

console.log(` The Number of elements in the array is: ` + groceries.length);
console.log(` The last element in the array is : ` + groceries[5]);

/*
5. Remove the last element from the array and print it
6. Add two new and different elements to the end of the array 
7. Create a new array named `firstThreeItems` and it’s elements are the first three elements from the `groceries` array.
*/

const lastOne = groceries.pop(); // to remove last element
console.log(`After removing the last element, the array is as following:`);
console.log(groceries);
console.log(`The element that was removed from the array is: ` + lastOne);
/* we can use
array.shift(); // Removes the first element
or
let index = 2; // index of the element to remove (in this case, element 3)
array.splice(index, 1); // Removes 1 element at index 2
or
let array = [1, 2, 3, 4, 5];
delete array[2]; not recommended
console.log(array); // Output: [1, 2, empty, 4, 5]
*/

let newItems = groceries.push("Carrots", "Banana"); // to add 2 elements to the array
console.log(`Array after adding two elements:`);
console.log(groceries);
console.log(`The element that are added to the array are: ` + newItems);

const firstThreeItems = groceries.slice(0, 3);
console.log(`The old array is:`);
console.log(groceries);
console.log(`The new array is:`);
console.log(firstThreeItems);
/*
for same array size
let oldArray = [1, 2, 3, 4, 5];
let newArray = oldArray.slice();
console.log(newArray); // Output: [1, 2, 3, 4, 5]

for copying and adding
let oldArray = [1, 2, 3];
let newArray = oldArray.concat([4, 5]);
console.log(newArray); // Output: [1, 2, 3, 4, 5]
*/

/* Extra challange:
1. Delete the 3rd element in the array (we assumed we used the groceires array not new Array)
2. Insert a new element at the beginning of the array
3. Remove the first two elements and replace them with “ketchup” and “chili”
*/

console.log(`The array is as following before starting this challange: `);
console.log(groceries);
let n = 3
let index = n-1;
let deletedelement= groceries.splice(index, 1);
console.log(`The array is as following after deleting the 3rd element: `);
console.log(groceries);
console.log(`The deleted element is: `);
console.log(deletedelement);

/* use unshift to add to the top rather tahn pop */
let addednew = groceries.unshift("pizza");
console.log(`The array is as following after adding an element to the top : `);
console.log(groceries);
console.log(`The new element added is: `);
console.log(addednew);

/* Remove the first two elements and replace them with “ketchup” and “chili” */

let addedTwoItems = groceries.unshift("Ketchup", "chili");
console.log(`The array is as following after adding 2 elements to the top : `);
console.log(groceries);
let replacedElements= groceries.splice(2, 2);
console.log(`The array is as following after deleting the 3rd element: `);
console.log(groceries);
