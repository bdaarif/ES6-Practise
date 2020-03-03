// ADDED ALL ARRAY VALUE IN ONE ARRAY

const ages = [12,10,52,65,78,69,10];
const ages2 = [15, 10, 8, 65];
const ages3 = [5, 10, 18, 60];
const allages = ages.concat(ages2).concat([105]).concat(ages3);
const allages2 = [...ages,...ages2,1050,...ages3];

console.log(allages);
console.log(allages2);

// fIND MAX VALUE BY THREEdots
const a = 100;
const b  = 80;
const c = 700;
const max = Math.max(a,b,c);
console.log(max);

const all = [100,80,1200]
const maximum = Math.max(...all);
console.log(maximum);

