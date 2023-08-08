// rest parametrs 

function my(a,b,...c)
{
    console.log(a);
    console.log(b);
    console.log(c);

}
my(1,3,4,5,6,7);
mysum1(1,2,3,4,5,6,7);
function mysum1(...arry)
{
    let sum=0;
    for(let i of arry )
    {
        sum+=i;
    }
    console.log(sum);
}

// param destructuring 
//  used in objects  Aand react js
const person={
    firstname:"bikash",
    gender:"male",
} 
print(person);
function print({firstname,gender})
{
    console.log(firstname);
    console.log(gender);
}


