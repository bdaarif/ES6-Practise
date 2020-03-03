// function doubleIt(num){
//     return num*2;
// }

// const doubleIt = function myFunc(num){
//     return num *2;
// }
// Single ParaMeter
const doubleIt = num => num * 5;
const result = doubleIt(50);
console.log(result);

// Doule ParaMeter
const add = (x,y) => x+y;
const result1 = add(10,18);
console.log(result1);
// No ParaMeter
const give5 = () =>5;
const result3 = give5();
console.log(result3);
// Multi work by function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff ;
    return result;
}
const result4 = doMath(7,5);
console.log(result4);






