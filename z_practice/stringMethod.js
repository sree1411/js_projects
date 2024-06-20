// if (!/^\d{10}$/.test(num)) uses a regular expression to check if the input contains exactly 10 digits. ^\d{10}$ means:
// ^ asserts the start of the string.
// \d{10} matches exactly 10 digits.
// $ asserts the end of the string.
/*

*/

let arr = [1,2,4,2,3,5,6,7,4,3,1]
let res = arr.reduce((acc, curr)=>{
    if(!acc.includes(curr)){
        acc.push(curr);
    }
    return acc;
}, [])
console.log(res)