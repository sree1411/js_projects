// 1. write a script to print all array values in the console.
// let arr =[1,2,3,4,5,6,7,8,9]
// console.log(arr)

//For the Given array: [23,34,54,0,4,7] print all the Array values using a for loop. 
// Expected output: 23 34 54 0 4 7

// let arr = [23,34,54,0,4,7]
// for(var i=0; i<=arr.length-1; i++){
//     console.log(arr[i])
// }

// print all numbers in an array except the first element. Expected output: 34 54 0 4 7
// let arr = [23,34,54,0,4,7]
// // for(var i=1; i<=arr.length -1; i++){
// //     console.log(arr[i])
// // }
// //  or
// let newarr = arr.splice(1)
// newarr.forEach((el)=>{
//     console.log(el)
// })

// Print all elements in an array except the last element Expected output: 23 34 54 0 4

// let arr = [23,34,54,0,4,7]

// // for(var i=0; i<arr.length-1; i++){
// //     console.log(arr[i])
// // }

// arr.splice(arr.length - 1, 1)
// console.log(arr)
 
// Print all the numbers from last index to first index Expected output: 7 4 0 54 34 23

// let arr = [23,34,54,0,4,7]

// for(var i= arr.length-1; i>=0 ; i--){
//       console.log(arr[i])
// }

// // Print all the numbers from last index to first index except the first element Expected output: 4 0 54 34 23

// let arr = [23,34,54,0,4,7]

// for(var i=arr.length-2; i>=0; i--){
//     console.log(arr[i])
// }

// // /Print all the numbers from last index to first index except the last element Expected output: 7 4 0 54 34

// let arr = [23, 34, 54, 0, 4, 7];

// for (var i = arr.length - 1; i >= 1; i--) {
//     console.log(arr[i]);
// }

// Print only the last 4 elements of an array. Expected output: 54 0 4 7

// let arr = [23, 34, 54, 0, 4, 7];
// for(var i=arr.length-4;i<=arr.length-1; i++){
//     console.log(arr[i])
// }

// For the Given array: [23,34,54,10,4,7] print the minimum number in an Array. Expected output: 4

// let arr = [23,34,54,10,4,7];
// let min = Math.min(...arr)
// let max = Math.max(...arr)
// console.log(min, max)
 
// let max = arr[0]
// let min = arr[0]

// for(var i=0; i<=arr.length-1; i++){
   
//     if(arr[i] < min){
//         min= arr[i]
//     }
    
//     if(arr[i] > max){
//         max= arr[i]
//     }
  
// }
// console.log("min", min)
// console.log("max", max)


// For the Given array: [23,34,54,10,4,7] sum of all the numbers in an Array. Expected output: 132

// let arr = [23,34,54,10,4,7];
// let sum = 0;

// arr.forEach((el)=>{
//   sum = sum + el
// });

// console.log(sum)

// For the Given array: [23,34,54,10,4,7] Average of all the numbers in an Array. Expected output: 22

// let arr = [23,34,54,10,4,7];
// let sum = 0;

// arr.forEach((el)=>{
//  sum = sum + el;
// });

// let res = sum/arr.length
// console.log(res)

// For the Given array: [23,34,54,10,4,7] print values that are greater than the given number. Given number: 20, Expected output: 23,34,54

// let arr = [23,34,54,10,4,7];
// let num = 20

// // for( var i=0; i<=arr.length-1; i++){
// //     if(num < arr[i]){
// //        console.log(arr[i])
// //     }
// // }
// arr.forEach((el)=>{
//   if(el > num){
//     console.log(el, "ele")
//   }
// })

// For the Given array: [23,34,54,10,4,7] print all the even numbers in an Array. Expected output: 34,54,10,4

// let arr = [23,34,54,10,4,7];
// let even =[];
// let odd =[]

// arr.forEach((el)=>{
//   if(el%2===0){
//     even.push(el)
//   }else{
//     odd.push(el)
//   }
// });

// console.log(even, "even")
// console.log(odd, "odd")


// // For the Given array: [23,-34,-54,10,-4,7] print all the positive numbers in an array. Expected output: 23,10,7

// let arr = [23,-34,-54,10,-4,7]
// let num = 0

// arr.forEach((el)=>{
//   if(el > num){
//       console.log(el)
//   }
// })


// // For the Given array: [23,34,54,10,4,7] search if the given number is there in an array or not. Given number: 34, 
// // Expected output: true Given number: 26, Expected output: false

// let arr = [23,34,54,10,4,7]

// let num = +prompt("enter the number")

// let res = arr.find((el)=>{
//     if(el === num){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(res);

// let arr = [23,34,54,10,4,7]

// let num = +prompt("enter the number");

// let res = arr.includes(num)
// console.log(res)

//For the Given array: [23,34,54,10,34,7,23,10,34] print the total number of times an element found in the array. Given number: 23, Expected output: 2 Given number: 34, 
// Expected output: 3 Given number: 10, Expected output: 2 Given number: 54, Expected output: 1


// let arr = [23, 34, 54, 10, 34, 7, 23, 10, 34];
// // const initialValue = 0;
// // let countOccurrences =  arr.reduce((acc, el) => {
// //     acc[el] = (acc[el] || 0) + 1;
// //     return acc;
// // }, {});

// // console.log(countOccurrences);

// let countOccurrences =  arr.reduce((acc, el) => {
//       if(acc[el]=== undefined){
//          acc[el] = 1;
//       }else{
//         acc[el]++
//       }
//       return acc;
// }, {});

// console.log(countOccurrences);

// let arr = [23, 34, 54, 10, 34, 7, 23, 10, 34,7]

// //  let res = arr.reduce(function(a,b){
// //      if(a[b] === undefined){
// //         a[b] = 1
// //      }else{
// //         a[b]++
// //      }
// //      return a
     
// //  },{})
 
// //  console.log(res)
// duplicates//
// let res = arr.filter((el,i)=> arr.indexOf(el) === i)
// console.log(res)


// For the Given array: [23,34,54,10,4,7] print index of a given element in an Array. Given number: 23, Expected output: 0 Given number: 34, Expected output: 1 Given number: 10, Expected output: 3 Given number: 54, Expected output: 2


// let arr = [23, 34, 54, 10, 4, 7];
// function printIndex(arr, num) {
//     let index = arr.indexOf(num);
//     console.log(`Index of ${num}: ${index}`);
// }

// // Given numbers
// let numbersToFind = [23, 34, 54, 10];
// numbersToFind.forEach(num => printIndex(arr, num));

// function printIndex(arr, num){
//     let index = arr.indexOf(num);
//     console.log(`Index of ${num}: ${index}`);
     
// }
// let numbersToFind = [23, 34, 54, 10, 4, 7]
// numbersToFind.forEach((num)=> printIndex(arr, num))


// function printIndex(arr, num){
//   let index = arr.indexOf(num)
//   console.log(`num is ${num} and index is: ${index}`)
// }
// printIndex(arr, 54)
// printIndex(arr, 34)
// printIndex(arr, 10)


// For the Given array: [23,34,54,10,34,7,23,10,34] eliminate duplicates in a given array Expected output: 23,34,54,10,7

// let arr = [23,34,54,10,34,7,23,10,34]
// let res = arr.reduce((acc,el)=>{
//     if (!acc.includes(el)) {
//         acc.push(el);
//     }
//     return acc
// },[])

// console.log(res)

// a program to store an array into another array var ar = [23,34,54,10,4,7] var br = [ ] Expected output: br = [23,34,54,10,4,7]
// var ar = [23,34,54,10,4,7]
// var br=[...ar]
// console.log(br) or
// var ar = [23, 34, 54, 10, 4, 7];
// var br = ar.slice(); or 
// for (var i = 0; i < ar.length; i++) {
//     br.push(ar[i]);
// }


// Sort an array in ascending order. Given array: [23,34,54,10,4,7] Expected output: 4,7,10,23,34,54
// let arr = [23,34,54,10,4,7]
// let res = arr.sort((a,b)=>{
//     if(a>b){
//         return 1
//     }else{
//         return -1
//     }
// })
// console.log(res) or
// let res = arr.sort((a,b)=>a-b)
// console.log(res)

// Sort an array in ascending order. Given array: [23,34,54,10,4,7] 
// // Store only even numbers of a given array in another array.

// let arr =  [23,34,54,10,4,7] 
// let even =[]
// arr.forEach((el,i)=>{
//    if(el%2 === 0){
//     even.push(el)
//    }
// })
// console.log(even)

// Reduce the each element of the array by 25% and store in a separate array.

// let arr =  [23,34,54,10,4,7] ;
// let res = arr.map((el)=>{
//   return el - el*(25/100)
// })
// console.log(res)

// create a duplicate array for a given array.
// let arr =  [23,34,54,10,4,7]
// let res = [...arr];
// console.log(res)

// let arr = [23, 34, 54, 10, 34, 7, 23, 10, 34, 1];
// let uniqueArray = [];
// let duplicatesSet = new Set();

// arr.forEach(item => {
//    if (uniqueArray.indexOf(item) === -1) {
//        uniqueArray.push(item);
//    } else {
//        duplicatesSet.add(item);
//    }
// });

// let duplicates = Array.from(duplicatesSet);

// console.log(uniqueArray, 'uni');
// console.log(duplicates, 'dup');

// print only the perfect squares in an array


// let arr = [23, 34, 54, 10, 34, 7, 23, 10, 34, 1,4,9]

// let perfectSquares = arr.filter(num => {
//     return Number.isInteger(Math.sqrt(num));
// });
// console.log(perfectSquares)

// // Print only the 2 digit numbers from an array

// let arr = [23, 34, 54, 10, 34, 7, 23, 10, 34, 1,4,9]

// arr.forEach((el)=>{
//   if(el >=10 && el <=99){
//     console.log(el)
//   }
// })


// Print only multiples of 5 from an array

// let arr = [23, 34, 54, 10, 34, 7, 23, 20, 34, 1,4,9]

// let num = 5

// arr.forEach((el)=>{
//   if(el%num === 0){
//     console.log(el)
//   }
// })

// Print only multiples of 2 AND 3 from an array
 
// let arr = [23, 34, 54, 10, 34, 7, 23, 20, 34, 1,4,9]

// let num1 = 2
// let num2 = 3

// arr.forEach((el)=>{
//   if(el%num1 === 0 && el%num2 === 0){
//     console.log(el)
//   }
// })

// Increment 5% for all the salaries in a given array

 
// let arr = [10000,20000,30000,35000,40000,42000]
// let amount = arr.map((el)=>{
//     let res = el + (el*5/100)
//     return res
// })
// console.log(amount)

// For every basic salary present in the array, add 40% HRA, 92% DA, 10% Tax and display the final output
// let arr = [10000,20000,30000,35000,40000,42000]
// let hrapercentage = 40/100
// let dapercentage = 92/100
// let taxpercentage = 10/100

// let res = arr.map((salary)=>{
//   let hra = salary * hrapercentage;
//   let da = salary * dapercentage;
//   let tax = salary*taxpercentage;
//    let finalSalary = salary + hra + da - tax
//    return finalSalary
// });
// console.log(res)

// For every salary, deduct 10% tax for salaries less than 50000 and deduct 12% tax for salaries more than 50000

// let arr = [10000,20000,30000,35000,40000,42000]
// let hrapercentage = 40/100
// let dapercentage = 92/100
// let taxpercentage1 = 10/100;
// let taxpercentage2 = 12/100

// let res = arr.map((salary)=>{
//   let hra = salary * hrapercentage;
//   let da = salary * dapercentage;
// //   let tax1 = salary*taxpercentage1;
// //   console.log(tax1, )
// //   let tax2 = salary*taxpercentage2
    
//   let grossSalary = hra + da+ salary;
//   console.log(grossSalary, "gross")

//    let finalSalary;

//   if(grossSalary<=50000){
//      finalSalary = grossSalary - (grossSalary * taxpercentage1)
//     //  console.log(finalSalary)
//   }else{
//      finalSalary = grossSalary - (grossSalary * taxpercentage2)
//     //  console.log(finalSalary, 'fi')
//   }

//    return finalSalary
// });
// console.log(res)


// Print only those odd numbers in a given array which are divisible by 3.
// let arr =  [23,34,54,10,34,7,23,10,34, 9, 12]
// arr.forEach((el)=>{
//   if(el%2 !== 0 && el%3 === 0){
//     console.log(el)
//   }
// })

// Print the elements present in the second half of the array.

// let arr =  [23,34,54,10,34,7,23,10,34, 9, 12]
//use math.floor also
// for (var i = parseInt(arr.length/2); i<=arr.length-1; i++){
//     console.log(arr[i])
// }

// Write a program to remove elements from an array which are not in the ascending order Ex: Original array: [12,34,11,56,37,98,23,67,109,45] Output : [12,34,56,98,109]
// let arr =  [12,34,11,56,37,98,23,67,109,45]
// let result =[]
 
// let res = arr.reduce(function(prev, curr){
//    if(curr >=prev){
//      result.push(curr)
//      return curr;
//    }else{
//     return prev;
//    }
      
// }, -Infinity)
 
// console.log(result, "res")

// var ar = [19,12,23,4,15];
// var br = [26,37,18,79,10];
// a)Write script to merge array as the values of ar in the first and values of br next
//     Expected output: [19,12,23,4,15,26,37,18,79,10];
// b)Write script to merge array as the values of ar in the first and values of br next
//     Expected output: [26,37,18,79,10,19,12,23,4,15];


// var ar = [19,12,23,4,15];
// var br = [26,37,18,79,10];
// let res1 = [...ar, ...br]
// let res2 =[...br, ...ar]
// console.log(res1)
// console.log(res2)

// var ar = [1,2,3,7,8,9];
// var br = [4,5,6];
// Expected output: [1,2,3,4,5,6,7,8,9];

// var ar = [1,2,3,7,8,9];
// var br = [4,5,6];
// let res = [...ar, ...br]
// let output = res.sort((a,b)=>a-b)
// console.log(output)


// insert An Element Desired or Specific Position In An Array

// var arr = [1,2,3,7,8,9,2,3,11];
// var res = arr.reduce((acc, ele)=>{
//     if(!acc.includes(ele)){
//         acc.push(ele)
//     }
//     return acc;
// },[])
 
// console.log(res)
// let res = arr.filter((ele, i)=>{
//        return (arr.indexOf(ele)) === i
// })
// console.log(res)


// Check String Is Palindrome Or Not Using For Loop

// function palindrom(str){
//     let rev = str.split("").reverse().join("")
//     if(rev == str){
//         return true
//     }
//     return false
// }
// let str1 = "sree"
// let str2 =  "anna"
// let str3 = 1001
// let str4 = str3.toString()
// console.log( palindrom(str1))
// console.log( palindrom(str2))
// console.log( palindrom(str4))

// Convert All Input String Simultaneously Into Asterisk ( * )
// function convertString(strings){
//     return strings.map(str => "*".repeat(str.length))
  
// }
// let res= convertString(["sree", "renati", "loremepsum"])
// console.log(res)
 
// // Count the total number of even and odd elements in an array.

// let arr =  [26,37,18,79,10,19,12,23,4,15,2]
// let even =[]
// let odd =[]

// arr.forEach((el)=>{
//   if(el%2=== 0){
//     even.push(el)
//   }else{
//     odd.push(el)
//   }
// })
// console.log(even.length, "even")
// console.log(odd.length, "odd")
//

// //Get the second largest element in an array.

// let arr =  [26,37,18,79,10,19,12,23,4,15,2]
// let res = arr.sort((a,b)=>{
//    if(a>b){
//     return -1
//    }else{
//     return 1
//    }
// })
 
// let result  = res
// console.log(result[1])

// Get the second largest element in an array.

// let arr = [26, 37, 18, 79, 10, 19, 12, 23, 4, 15, 2];

// let highest = -Infinity; // Initialize highest number to negative infinity
// let lowest = Infinity; // Initialize lowest number to positive infinity

// arr.forEach(num => {
     
//     if (num > highest) {
//         highest = num; // Update highest number if current number is greater
//     }
    
//     if (num < lowest) {
//         lowest = num; // Update lowest number if current number is smaller
//     }
// });

// console.log("Highest number:", highest);
// console.log("Lowest number:", lowest);

// Sort even and odd elements of the array separately.
// let arr =  [26,37,18,79,10,19,12,23,4,15,2]
// let even =[]
// let odd =[]

// arr.forEach((el)=>{
//   if(el%2=== 0){
//     even.push(el)
//   }else{
//     odd.push(el)
//   }
// })

// let res = even.sort((a, b) => a - b);
// console.log(res)


//Find the reverse of an array.

// let arr =  [26,37,18,79,10,19,12,23,4,15,2]
// let res = arr.reverse()
// console.log(res)

// var person = {
//     "firstName" : "Harry",
//     "lastName" : "Potter",
//     "age": 30,
//     "gender": "male",
//     "skill" : "ReactJS",
//     "expertise": "Beginner"
// };

// Print the firstname.
// Print the lastname.
// Print the fullname("Harry Potter").
// If the age is less than 18, then print "false". If the age is more than 18, then print "true".

// console.log(person.firstName)
// console.log(person.lastName)

 
// function fullname(person){
//   return  person.firstName + person.lastName
// }
// console.log(fullname(person))
// console.log(`${person.firstName} ${person.lastName}`)

// if(person.age < 18){
//     console.log(false)
// }else{
//     console.log(true)
// }

// var marks = {
//     "maths" : 34,
//     "english" : 56,
//     "science": 32,
//     "hindi" : 75,
//     "social science": 65
// };


// // Print the marks of all the subjects.
// for(var mark in marks){
//     console.log(marks[mark])
// }

// Print the names of all the subjects from the given object.

// for(var mark in marks){
//     console.log(mark)
// }

// Count the number of subjects from the given object
//  let total = Object.keys(marks).length
//  console.log(total)


// Print the percentage of the marks of the student.

// let sum = 0;

// for(var mark in marks){
//     sum = sum + marks[mark]
// }
// let total = Object.keys(marks).length
// let percentage = sum/total
// console.log(percentage)

// Print only those subjects where the student scored more than 35.
// for(var mark in marks){
//     if(marks[mark] > 35){
//         console.log(mark)
//     }
// }

// Print the pass/fail status of the subjects provided 35 is the pass mark.
// for(var mark in marks){
//     if(marks[mark] > 35){
//         console.log(`${mark} is pass`)
//     }else{
//         console.log(`${mark} is fail`)
//     }
// }

//Count the number of passed subjects.

// let passedSub=[]

// for(var mark in marks){
//     if(marks[mark] > 35){
//         passedSub.push(mark)
//     }
// }
// console.log(passedSub.length)
//   let passedsub =0
// // for(var mark in marks){
// //     if(marks[mark] > 35){
// //          passedsub++ 
// //     }
// // }
// console.log(passedsub)

// Print only the failed subjects.
// for(var mark in marks){
//     if(marks[mark] < 35){
//         console.log(`${mark} is fail`)
//     } 
// }

// Count the number of failed subjects.
// let failedSub=[]

// for(var mark in marks){
//     if(marks[mark] > 35){
//         failedSub.push(mark)
//     }
// }
// console.log(failedSub.length)
// Print the least scored subject. and 
// Print the highest scored subject.
// let highest = -Infinity; // Initialize highest number to negative infinity
// let lowest = Infinity;
// let highestSubject = "";
// let lowestSubject = ""; 

// for(var mark in marks){
//     if(marks[mark]> highest){
//         highest = marks[mark]
//         highestSubject= mark
//     }

//     if(marks[mark]< lowest){
//         lowest = mark
//         lowestSubject= mark
//     }
// }

// console.log("Highest number:", highest, highestSubject);
// console.log("Lowest number:", lowest);

// let arr =[1,12,3,44,5,3,6,77,23,45]
// let res= Math.max(...arr)
// console.log(res)

// let max = 0
// let min = 0

// for(var mark in marks){
//     if(marks[mark] < min){
//         min= marks[mark]
//     }

//     if(marks[mark] > max){
//         max= marks[mark]
//     }
// }

// console.log("min", min)
// console.log("max", max)

// let min;
// for(var mark in marks){
//     if(min){
//         if(min > marks[mark])
//             min= marks[mark] ;
//     }else{
//         min= marks[mark]
        
//     }
// }
// console.log(min, "min")

// let max;
// for(var mark in marks){
//     if(max){
//         if(max < marks[mark])
//             max= marks[mark] ;
//     }else{
//         max= marks[mark]
        
//     }
// }
// console.log(max, "max")


// var marks = {
//     "maths" : 34,
//     "english" : 56,
//     "science": 32,
//     "hindi" : 75,
//     "social science": 65
// };

// lowest marks
// let lowrest = Infinity
// let lowestSubject;

// for (var mark in marks){
//     if(marks[mark]< lowrest){
//         lowrest = marks[mark]
//         lowestSubject = lowrest
//     }
// }
// console.log(lowestSubject, "g")

 // 13. Check whether the student has passed in all the subjects or not.

//  var passedAllSubjects = true;
//  for (var subject in marks) {
//      if (marks[subject] < 35) {
//         console.log(marks[subject])
//          passedAllSubjects = false;
//          break;
//      }
//  }
//  console.log("\nHas the student passed in all subjects?", passedAllSubjects);

// Take the subject name from the student through prompt box and print the subject marks and pass/fail status.


// let mark = prompt("enter the name")

// if(mark in marks){
//     if(marks[mark] >=35){
//         console.log("pass")
//     }else{
//         console.log("fail")
//     }
     
// }else{
//     console.log("invalid subject")
// }
 

// var products = [
//     {
//         "name": "Duracell - AAA Batteries (4-Pack)",
//         "type": "HardGood",
//         "price": 5.49,
//         "category": "Household Batteries",
//         "manufacturer": "Duracell",				
//     },
//     {
//         "name": "Hard Rock TrackPak - Mac",
//         "type": "Software",
//         "price": 29.99,
//         "category": "Recording Equipment",
//         "manufacturer": "Hal Leonard",				
//     },
//     {
//         "name": "Duracell - AA 1.5V CopperTop Batteries (4-Pack)",
//         "type": "HardGood",
//         "price": 5.62,
//         "category": "Household Batteries",
//         "manufacturer": "Duracell",				
//     },
//     {
//         "name": "Energizer - MAX Batteries AA (4-Pack)",
//         "type": "HardGood",
//         "price": 5.32,
//         "category": "Household Batteries",
//         "manufacturer": "Energizer",				
//     },
//     {
//         "name": "METRA - Antenna Cable Adapter - Black",
//         "type": "HardGood",
//         "price": 13.99,
//         "category": "Antennas & Adapters",
//         "manufacturer": "Metra",				
//     },
//     {
//         "name": "WipeDrive Six - Mac|Windows",
//         "type": "Software",
//         "price": 23.99,
//         "category": "Maintenance Software",
//         "manufacturer": "White Canyon",				
//     }
// ];

// Print all the product names.

// products.map((product)=>{
//     return  console.log(product.name) 
// })

// Print all the hardgoods.
// let resultProduct =[]
// let res = products.filter((el)=>{
//      if(el.type ==="HardGood"){
//         // rresultProduct.push(el)
//          return el
//      }
// })
// // console.log(resultProduct)
// console.log(res)

// Print all the softwares

// let resultProduct =[]
// products.filter((el)=>{
//          if(el.type ==="Software"){
//             resultProduct.push(el)
//          }
//     })
//  console.log(resultProduct)   

// Print only the products manufactured by Duracell.

// let resultProduct =[]
// products.filter((el)=>{
//          if(el.manufacturer ==="Duracell"){
//             resultProduct.push(el)
//          }
//     })
//  console.log(resultProduct) 

// Print the product names in ascending order of their prices.

// let res = products.sort((a,b)=>{
//    let p1 = a.price
//    let p2= b.price

//    if(p1>p2){
//      return 1
//    }else{
//     return -1
//    }
// })
// console.log(res)

// Print only those products whose price is more than 14.99.

// let resultProduct =[]
// products.filter((el)=>{
//          if(el.price >=14.99){
//             resultProduct.push(el)
//          }
//     })
//  console.log(resultProduct) 

// Print only those products whose price is less than 9.99.


// let resultProduct =[]
// products.filter((el)=>{
//          if(el.price <9.99){
//             resultProduct.push(el)
//          }
//     })
//  console.log(resultProduct) 

// Print the total price of all the hardgoods.
// let sum = 0
// products.map((product)=>{
//     return sum = sum + product.price
// })
// console.log(sum)

// Print the average price of the softwares.

// let resultProduct =[]
// products.filter((el)=>{
//          if(el.type ==="Software"){
//             resultProduct.push(el)
//          }
//     })
// let avgPrice = resultProduct.map((product)=>{
//        return product.price
// })
 
// sum =0;

// for(var mark of avgPrice){
//    sum = sum + mark
// }
// console.log(sum/avgPrice.length)

// Print all the hardgoods.
 
 
// console.log(resultProduct)
 

// let softwares = products.filter((product)=>product.type === "Software")
// let totalprice = softwares.reduce((a,b)=>{
//       sum = a + b.price
//       console.log(sum)
//      return sum
// },0)
// console.log(totalprice/softwares.length)

var peoples = [
    {
    "firstname": "praveen",
    "lastname": "gubbala",
    "age": 36,
    "gender": "male",
    "city": "hyd",
    "salary": 10000
    },
    {
    "firstname": "srikanth",
    "lastname": "gubbala",
    "age": 32,
    "gender": "male",
    "city": "bengaluru",
    "salary": 20000
    },
    {
    "firstname": "pradeep",
    "lastname": "reddy",
    "age": 21,
    "gender": "male",
    "city": "hyd",
    "salary": 30000
    },
    {
    "firstname": "mounika",
    "lastname": "mudiraj",
    "age": 20,
    "gender": "female",
    "city": "nalgonda",
    "salary": 30000
    },
    {
    "firstname": "nikhil",
    "lastname": "m",
    "age": 22,
    "gender": "male",
    "city": "guntur",
    "salary": 2000
    },
    {
    "firstname": "riya",
    "lastname": "bhadouria",
    "age": 14,
    "gender": "female",
    "city": "indore",
    "salary": 40000
    }
    ];

// // Print all the firstnames.
//     peoples.forEach((people)=>{
//      console.log(people.firstname)
//     })

// Print all the full names.
//  peoples.forEach((people)=>{
//      console.log(`${people.firstname} ${people.lastname}`)
//     })

//Print only those names whose age is more than 25.
//peoples.filter((people)=>people.age>25).forEach((people)=>console.log(`${people.firstname} ${people.lastname}`))

//Print all female names.
//peoples.filter((people)=>people.gender === "female").forEach((people)=>console.log(`${people.firstname} ${people.lastname}`))

//Print only those names whose salary is more than 30000 and increase their salaries by 15%
// let total = peoples.filter((people)=>people.salary>30000).map((el)=>{
//   return el.salary = el.salary + (el.salary *0.15)
// })
// console.log(total)

// Using prompt, print only those names whose city is "hyd".
// let cityname = prompt("enter the city name")
// peoples.filter((people)=>people.city === cityname).forEach((people)=>console.log(people.firstname))

// Print the total salary of all the people.
// let totalsalary = peoples.reduce((a,b)=>{
//    return a + b.salary
// }, 0)
// console.log(totalsalary)

// Print all the firstnames whose salary is more than 30000.
// peoples.filter((people)=>people.salary>=30000).forEach((people)=>console.log(people.firstname))

// Print all the fullnames in the alphabetical order.
// peoples.sort((a,b)=>a.firstname.localeCompare(b.firstname)).forEach((people)=>{
//     console.log(`${people.firstname} ${people.lastname}`)
// })

//Print all the fullnames in the increasing order of their age.

// peoples.sort((a,b)=>a.age -b.age).forEach((people)=>{
//     console.log(`age:${people.age} ${people.firstname} ${people.lastname}`)
// })

// Print all the fullnames in the reverse alphabetical order.
// peoples.sort((a,b)=>b.firstname.localeCompare(a.firstname)).forEach((people)=>{
//         console.log(`${people.firstname} ${people.lastname}`)
//     })

//Print all the fullnames in the decreasing order of their salaries.

// peoples.sort((a,b)=>b.salary-a.salary).forEach((people)=>{
//     console.log(`salary:${people.salary} ${people.firstname} ${people.lastname}`)
// })

// Print all the cities in which the people live. There should not be any duplicate cities.
// let res = peoples.map((people)=>people.city).reduce((a,b)=>{
//    if(!a.includes(b)){
//        a.push(b)
//    }
//    return a;
// },[]);

// console.log(res)

//Print all names that starts with "p" and the firstname should be in UPPERCASE. e.g. PRAVEEN gubbala.
//  peoples.filter((people)=>people.firstname.toLowerCase().startsWith("p")).forEach((people)=> console.log(`${people.firstname.toUpperCase()} ${people.lastname}`))
 
// Write a program to print only numbers out of a given string
// Example: let us take pr34s2v9q4
// The output should be 3,4,2,9,4
                
// let inputString = "pr34s2v9q4";
// let numbers = inputString.match(/\d/g)
// if(numbers){
//     console.log(numbers.join(','))
// }else{
//     console.log("not found")
// }

// Eliminate Duplicate characters in given string
//         Example: ‘praveengubbala’ => ‘pravengubl’

// function elimateDuplicate(input){
//   let result = "";
//   for(var char of input){
//     if(!result.includes(char)){
//         result = result + char
//     }
//   }
//   return result;
// }
// let input = "praveendubbala"
// let unique = elimateDuplicate(input)
// console.log(unique)


// Sort a given string
        // Example: ‘praveen’=>’aeenprv’
// let name = "praveen"
// let res = name.split("").sort().join('');
// console.log(res)
 
// function formatCreditCardNumber(number) {
//     return number.match(/.{1,4}/g).join('-');
// }
// console.log(formatCreditCardNumber('6484638463487486')); // "6484-6384-6348-7486"


 
// function isValidCreditCard(number) {
//     // Check if the length is 16
//     if (number.length !== 16) {
//         return 'invalid (must be 16 digits)';
//     }
    
//     // Check if the input contains only digits
//     if (!/^\d{16}$/.test(number)) {
//         return 'invalid (must contain only numbers)';
//     }
    
//     return 'valid';
// }

// let input1 = '7463836483647454';
// let input2 = '74638364836474548';
// let input3 = '7463836w4836o745';

// console.log(isValidCreditCard(input1)); // Output: 'valid'
// console.log(isValidCreditCard(input2)); // Output: 'invalid (must be 16 digits)'
// console.log(isValidCreditCard(input3)); // Output: 'invalid (must contain only numbers)'


// Check whether a given number is a valid phone numbe

// function phoneNumber(num){
//   if(num.length !== 10){
//     return 'invalid (must be 10 digits)';
//   }

//   if (!/^\d{10}$/.test(num)){
//     return 'invalid (must contain only numbers)';
//   }
//   return 'valid';
// }
// console.log(phoneNumber("123456789"))
// console.log(phoneNumber("1234567891"))
// console.log(phoneNumber("123456789s"))


// Write a program to take a string and print only the numeric characters. Example: Input->‘Q1STR5684AK’; Output->‘15684’

// let number = "Q1STR5684AK"
// let res = number.match(/\d/g).join('')
// console.log(res)  //15684

// let number = "Q1STR5684AK"
// let res = number.match(/\D/g).join('')
// console.log(res)  //QSTRAK

// Append the calling code of India(+91) to a given phone number. Example: Input-> '9876543210'; Output-> '+919876543210'


// function phoneNumber(num){
//   if(num.startsWith('0')){
//      num = num.slice(1);
//   }
//   return '+91'+ num;
// }
 
// let res = phoneNumber("7396961806")
// console.log(res)
// let ph = res.match(/.{1,3}/g).join('-');
// console.log(ph)
 

// function countVowelsAndConsonants(name) {
//     const vowels = name.match(/[aeiou]/gi) || [];
//     const consonants = name.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
//     return { vowels: vowels, consonants: consonants };
// }

// const name = "sreekanth renati";
// const counts = countVowelsAndConsonants(name);
// console.log("Vowels:", counts.vowels);
// console.log("Consonants:", counts.consonants);


// function countVowelsAndConsonants(name) {
//     const vowels = name.match(/[aeiou]/gi) || [];
//     const consonants = name.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
//     return { vowels: vowels, consonants: consonants };
// }
//g is the globally and i is the case sensitive
// const name = "sreekanth renati";
// const counts = countVowelsAndConsonants(name);
// console.log("Vowels:", counts.vowels);
// console.log("Consonants:", counts.consonants);
// const vowels = name.match(/[aeiouAEIOU]/g) || [];
//accpts both lower and upper case