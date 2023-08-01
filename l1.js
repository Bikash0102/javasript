"use strict";

console.log("hello world");
var bikash="bikash";
console.log(bikash);
bikash="priya";
console.log(bikash);
// no error without data type to slove this use strict
let akshay="name";
console.log(akshay);
let value1=10;
console.log(value1**2 );
const pi=22/7;
console.log(pi);
console.log(akshay[0]);
console.log(akshay.length);
let h="   bikash ";
// remove space by trim 
//strings are imutable 
 let k=h.trim();
 h=k;
 console.log(k);
 console.log(h);
 let r=h.toUpperCase();
 h=r;
 
 console.log(r);
 let ri="amazon";
 let newslice=ri.slice(0,4)
//  only 0 to 3 will print not 4
console.log(newslice);
console.log(typeof(ri));
// to convert int to String
let a=10;
a=10+"";
console.log(typeof(a));
// ro convert to string to int 
let mys="34";
mys=+mys;
console.log(typeof(mys));
// string concatenation 
let  string1="bikku";
let string2="coder";
let skill=string1+" "+string2;
console.log(skill);
// template string 
let roll=27;
let name1="bikash";
let aboutme=`my name is ${name1}and my roll is ${roll}`;
console.log(aboutme);
console.log(typeof null);
// limit of let 
let age=1234;

let k1=BigInt(age);
console.log(k1);
// comparison operator 
let num1=5;
let num2=1;
console.log  (num1>num2);
let j1=5;
let ki="5";
console.log (j1==ki);
console.log (j1===ki);
// tenary operator age
let ages=8;
let drink=ages>=5?"child":"adult"
console.log(drink);



