//  call back function 
function myname()
{
    console.log("bikash");

}
function coder(name)
{
    console.log(name);
    name();
    console.log("coder");

}
coder(myname);
//  function returing function 

function python()
{
    function c()
    {
        console.log("beginner language");
    }
    return c;
}
let l=python();
l();
