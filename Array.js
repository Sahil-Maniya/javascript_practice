// Adding Element

let Number = [3,4];
//End
Number.push(5,6);
//Begining
Number.unshift(1,2);
//Middle
Number.splice(2,0,'a','b');

console.log(Number);

//Finding Element(Primitives)

let Numbers = [1,2,3,4,5,'3','4'];
console.log(Numbers.indexOf('3'));
console.log(Numbers.indexOf(1));
console.log(Numbers.indexOf(1) !== -1);
console.log(Numbers.includes(4));

//Finding Element (Reference)

let cources = [
    {id:1 , Name:'a'},
    {id:2 , Name: 'b'},
];

console.log(cources.includes({id:1 , Name:'a'}));

//Arrow Function
 
let Cources = [
    {id:1 , Name:'a'},
    {id:2 , Name: 'b'},
];

let cource = (Cources.find(cource => cource.name === 'a'));
console.log(cource);

//Removing Element

let Numberss = [1,2,3,4,5];

//End
let Last =  Numberss.pop ()
console.log(Numberss);

//Begin
let First = Numberss.shift()
console.log(Numberss);

//Middle
Numberss.splice(2,3)
console.log(Numberss);

//Emptying an Arrays
let numbers = [1,2,3,4,5];
let another = numbers

//solution 1
numbers = [];
console.log(another); 

//solution 2 
numbers.length = 0;
console.log(numbers);

//solution 3
numbers.splice(0,numbers.length);
console.log(numbers);

//solution 4 
while(numbers.length>0);
numbers.pop();
console.log(numbers);

//   Combining and Sliceing Arrays

//Combining Array
let first = [1,2,3,4];
let second = [5,6,7,8];

let combine = first.concat(second);
console.log(combine);

//Slicing Array
let Firsts = [{id :2}];
let seconds= [4,5,6]; 

let combines = Firsts.concat(seconds);
Firsts[0].id = 10;

let slice = combines.slice();

console.log(slice);

//Sprad Operator

let Sem = [1,2,3,4];
let sems = [5,6,7,8];

let Sprad = [Sem, 'a','b',...sems,'c','d'];
console.log(Sprad);

// Iterating an Array

let Numbersss = [1,2,3,4,5];

for (const Number of Numbersss) {
    console.log(Number);
}
Numbersss.forEach((Number,index, c) => console.log('samssh', index,Number, c));

// Joined Array

let number = [1,2,3,4];
let Joined =  number . join(',');
console.log(Joined);

let message = 'This is my first message'
let parts = message .split(' ');
console.log(parts);

let combined = parts. join ('-');
console.log(combined);

//Sorting Array - Example =1

let Number1 = [2,3,1,5,4];
Number1.sort();
console.log(Number1);

Number1.reverse();
console.log(Number1);


//Sorting Array - Example =2 

let Cources1 = [
    {id :1 , name: 'Node.js'},
    {id : 2 , name : 'javascript'}
];

Cources1.sort (function(a,b){


//a<b => -1
//a>b => 1
//a===b => 0
let nameA = a.name.toUpperCase();
let nameB = b.name.toLowerCase(); 
if      (nameA<nameB) return -1
else if (nameA>nameB) return 1
return 0 
})

console.log(Cources1);

// Testing the Element of an Array

let number2= [1,2,3,4]

//every()
//some()
 let allpositive = number2.every(function(value){
 return value >=0;
 });
 console.log(allpositive);

 //Filtering an Array

 let number3 = [1,-1,-4,2,3,-5,4,5];

let filtered = number3.filter(n => n >=0)
console.log(filtered);

//Mapping an Array
let number4 = [2,3,-1,-7,4,5];


let iteam = number4
.filter(n=>n>=0)
.map(n=>({value:n}))
.filter(Object=>Object.value>= 1)
.map(Object => Object.value);

console.log(iteam);

//Redusing an Array 
let number5 = [1700,990,290,300];
debugger
//a=0,c=1 => a=1
//a=1,c=-1 => a=0
//a=0,c=2 => a=2
//a=2,c=3 => a=5

//a=0,c=1 => a=1
//a=1,c=-1 => a=0
//a=2,c=3 => a=5

const  sum = number5.reduce(
    (accumulator,currentValue) => accumulator + currentValue
);
// let sums = 0;
// for (let n of number5)
// sums= sums + n;

console.log(sum);
                                                       //Exercise

   //Exercise - 1 = Array from Range
let number6 = arrayfromRange(-1,7);
console.log(number6);

function arrayfromRange(min,max) {
    let output = []
    for(let i = min;i<= max;i++)
    output.push(i);
    return output;
}