// hoisting 
hello();
function hello()
{
    console.log("bikahs");
}
// it will run with out eerror 
// other function will give error 
  
console.log(a); 
// it will give undefined  but let will give erro 
var a=10;
// functions inside function 
function app(){
    const myFunc = () =>{
        console.log("hello from myFunc")
    }
    
    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }

    const mul = (num1, num2) => num1* num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(2,3));
}
app();

// lexical scope
const myVar = "value1";

function myApp(){
    

    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp(); 