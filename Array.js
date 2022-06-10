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

let Sprad = [...Sem, 'a','b',...sems,'c','d'];
console.log(Sprad);