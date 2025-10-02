//13. Write a palindrome function

// function palindromes(word){
//     let arr = []
//     let reversed
//     for (i = word.length; i > 0; i--){
//         arr[word.length - i] = word.substring(i - 1, i)
//     }
//     reversed = arr.join("")

//     if (word === reversed){
//         return true
//     }
//     return false
// }

// console.log(palindromes('racecar')) // true
// console.log(palindromes('tacos')) // false



//14. Create a function that returns a specific member of the Fibonacci sequence

// function fibonacci(num){
//     const series = [0, 1]
//     for (i=1; i <= num; i++){
//         series[i+1] = series[i] + series[i-1]
//     }
//     return series[num]
// }

// console.log(fibonacci(4)); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// console.log(fibonacci(6)); // returns 8



//15. Your job is to write a function that takes the array and returns an array of titles:

// const books = [
//     {
//         title: 'Book',
//         author: 'Name'
//     },
//     {
//         title: 'Book2',
//         author: 'Name2'
//     }
// ]

// let getTheTitles = books.map((book) => 
//     book.title
// )

// console.log(getTheTitles) // ['Book','Book2']



//16. Given an array of objects representing people with a birth and death year, return the oldest person.

// const people = [
//     {
//         name: "Jack",
//         birthYear: 1964,
//         deathYear: 1994
//     },
//     {
//         name: "Mary",
//         birthYear: 1952,
//         deathYear: 2011
//     },
//     {
//         name: "Bertha",
//         birthYear: 1984,
//         deathYear: 2020
//     },
//     {
//         name: "John",
//         birthYear: 1977
//     },
//     {
//         name: "Lexi",
//         birthYear: 1999
//     },
// ]
// const presentYear = new Date().getFullYear()

// const oldest = people
//     .filter((person) => {
//         return person.deathYear == undefined
//     })
//     .reduce((prev, next) => {
//         a = presentYear - prev.birthYear
//         b = presentYear - next.birthYear
//         return (a > b) ? prev : next
//     })

// console.log(oldest)