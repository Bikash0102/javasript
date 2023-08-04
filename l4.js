const obj={
    name:"bikash",
    age:21,
    gender:"male",
}
console.log(obj);
console.log(obj.name);
console.log(obj.gender);
obj.love="priya";
console.log(obj);
console.log(obj["love"]);
obj["aim"]="earn money";
console.log(obj);
let key1=1;
let key2=2;
let value1="apple";
let value2="mango";
obj[key1]=value1;
obj[key2]=value2;
console.log(obj);
for(let name in obj)
{
  console.log(name,':',obj[name]);
}

let array1=[

    {
        names:"bikash",age:22,gender:"male",
    },
    {
        name:"nikail",age:23,gender:"male",
    },
    {
        name:"rahul",age:25,gender:"male",
    }
]
console.log(array1);
for(let d of array1)
{
    console.log(d.name)
}
// obj destrcuting 
const{age}=obj;
console.log(age);
const{age:ages,...left}=obj;
console.log(ages);
console.log(left);
const[{names,gender}]=array1;
console.log(names);
console.log(gender)