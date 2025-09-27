//1. You have an array of user objects, each one has user.name.
//Write the code that converts it into an array of names.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = [john.name, pete.name, mary.name]

// console.log(names); // John, Pete, Mary
// console.log("hi world");



//2. Write the code to create another array from it, of objects with id and fullName,
//where fullName is generated from name and surname.

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((user) => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }))
//     /*
//     usersMapped = [
//       { fullName: "John Smith", id: 1 },
//       { fullName: "Pete Hunt", id: 2 },
//       { fullName: "Mary Key", id: 3 }
//     ]
//     */

// console.log(usersMapped[0].id) // 1
// console.log(usersMapped[0].fullName) // John Smith



//3. Write the function sortByAge(users) that gets an array of
// //objects with the age property and sorts them by age.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// function sortByAge(array){
//     return array.sort((a, b) => a.age - b.age)
// }

// sortByAge(arr);

// now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete



//4. Write the function getAverageAge(users) that gets an array of objects
//with property age and returns the average age.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// function getAverageAge(array){
//     return array.reduce((prev, next) =>
//         prev + next.age, 0
//     ) / array.length
// }

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28



// //5. Create a function groupById(arr) that creates an object from it, with id as the key, 
// //and array items as values.

// let users = [
//     { id: 'john', name: "John Smith", age: 20 },
//     { id: 'ann', name: "Ann Smith", age: 24 },
//     { id: 'pete', name: "Pete Peterson", age: 31 },
// ];


// // function groupById(array){
// //     return array.reduce((prev, next) => )
// // }

// function groupById(array) {
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {})
// }

// let usersById = groupById(users);
// console.log(usersById)

// /*
// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */