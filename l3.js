let l1=10;
let l2=l1;
l1++;
console.log(l1);
console.log(l2);
// so change because spreate heap memory is created 
let arr1=["apple","grape","mango"];
console.log(arr1);
let arr2=arr1;
arr2.push("icecream");
console.log(arr1);

//colone a array
let array3=arr1.slice(0);
array3.push("nippu");
console.log(array3);
let array4=[...array3];
console.log(array4);
let array5=[].concat(array3);
console.log(array5);
//  loops in array 
for(let i=0;i<array5.length;i++)
{
    console.log(array5[i]);
}
for(let fruits of array4)
{
    console.log(fruits);
}
for(let index in array4)
{
    console.log(index);
}
// array destructing
let[value1,value2]=array4;
console.log(value1);
console.log(value2);
let[...arr6]=array4;
console.log(arr6);
