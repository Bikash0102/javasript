// function deceration 

function happbirthday()
{
    console.log("happy birthday")
} 
// function expression 
const happy=function()
{
    console.log("expression function");
}
happy();
happbirthday();
happbirthday();
happbirthday();
// paramater function 
function addition(a,b)
{
    return a+b;
}
const sub=function(a,b)
{
    return a-b;
}
console.log(sub(5,3));
console.log(addition(3,4));
// sum three paramter 
function iseven(a)
{
    if(a%2===0)
    {
        return true;
    }
    else
    {
        return false;
    }

}
console.log(iseven(2));

function inputs(a)
{
    return a[0];
}
console.log(inputs("bikash"));

function checks (a,b)
{
    for(let i=0;i<a.length;i++)
    {
        if(a[i]===b)
        {
            return true;
        }
    }
    return false;
}
let a=[2,4,5,6,7];
let b=2;
console.log(checks(a,b));
console.log(checks(a,3)); 
// arrow function 
const summu=(a,b)=>
{
    return a*b;

}
console.log(summu(5,4));

const div=(a,b)=>
{
    return a/b;

}
console.log(div(2,2));

const print=name=> console.log(name);
print("bikash");
