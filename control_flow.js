//hour
//if hour is between 6am to 12 pm : Good Morning
//if hour is between 12pm to 6 pm : Good Afternoon
//otherwise : Good Evening

let sams = 999;
let den = 10000;

let gem = false;
let dfm = !gem;

console.log('dfm', dfm);

if (den !== sams) {
  console.log('hu chu sams');
}

let hour = 12;
{
  if (hour >= 6 && hour < 12)
    console.log('Good Morning');

  else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');

  else
    console.log('Good Evening');
}
//Swith...case

let role = 'Guest';

switch (role) {
  case 'Guest':
    console.log('Guest Users');
    break;
  case 'Moderator':
    console.log('Moderator Users');
    break;

  default:
    console.log('Unknown Users');

}

if (role === 'Guest') console.log('Guest');
else if (role === 'Moderator') console.log('Moderator');
else console.log('Unkown Users');

//For Loop
//for = (initialzed expresion ; condition ; increment expresion)  

for (let i = 0; i <= 5; i++) {             //  () = parathisise
console.log(i);                 //statement
}

 // while loop

let y = 0         //initialzed expresion
while(y<=5){      // condition
console.log(y);    //statement
      y++;        //increment expresion
}
//do...while loop

let i = 0        //initialzed expresion
do{
if(i)console.log(i);   //statement
i++;                   //increment expresion
}
while(i<=5);            // condition

//Array with for loop

let sam = [80, 93,102,110,255];

for(let i = 0; i < sam.length; i++ )
{
  console.log(sam[i]);
}


  //Array example
  let v = 2;
let select =['red', 'green'];
select[2] = 'blue';
console.log(select[v]);


let r = [255,125,95,200,150,'dens'];

printArray(r)
function printArray(array){
  for (let i = 0; i < array.length; i++) {
    console.log('index ' +i + ' is value ' + array[i] +'.');
  
  }
  console.log('All index is printed');
}

for(let i = 0;i <r.length;i++){
    console.log(r[i]);
  }

   //For ... In  Loop 
  
const person = {
  Name :'sahil',
  age:18
};
for(let key in person)
  console.log(person[key]);

// For .. Of loop 

  const colors = ['red','green','blue'];

for (const element of colors) 
  console.log(element);


//Break and Continue

let z= 0;
while (z <= 10 ) {

z++;
  if (z === 3) continue;
  
  // if (z ===9) break;
  
  console.log(z);
}



//Max Two Number

let number = max(10,11);
console.log(number);

function max(a,b) {
    // if (a>b)  return b;
    // return a;

   let c = (a<b) ? a:b;
   return c;
}

//   landscape

console.log(islandscape(5000,700));

function islandscape(weight,height) {
  let b = (weight<height);
  return b;
}


//Fizz Buzz

//Divisible by 3 => fizz
//Divisible by 5 => buzz
//Divisible by both 3 and 5 => fizzbuzz
//Not Divisible by 3 or 5 => input
// Not a Number => 'Not a Number'

const output = fizzbuzz();
console.log(output);

function fizzbuzz(input) {
  if (typeof input !=='number') 
  return 'Not A Number';

  if ((input % 3 ===0) && (input % 5 === 0 ))
  return 'Fizz Buzz';

  if(input % 3 === 0 )  
  return 'Fizz';

  if(input % 5 === 0)
  return 'Buzz';

  return input;
  }

//Demerit Point


checkspeed(90);

function checkspeed(speed) { 
// const speedLimit =70;
// const kmPerPoint = 5;


  if(speed<=70)
  console.log('Ok');

  else
   {
    const point = Math.floor((speed - 70)  /5);
    if (point>=12) 
    console.log('license suspended');  
    
    else
    console.log('Points',point);
  }
}


//Even and Odd Number

shownumbers(10);

function shownumbers(limit) {

for (let i = 0; i <= limit ; i++) {
//  if (i % 2 ===0 ) console.log(i,'EVEN'); 
//   else
// console.log(i,'ODD'); 


let select = (i % 2 === 0) ? "EVEN":"ODD";
console.log(i,select);
}
}



//String Properties

let movie = {
  Name : 'a',
  year : 2022,
  rating :4.5,
  director :'b'
};

for (const key in movie) {
   if (typeof movie [key] === number) 
  console.log(key, movie[key]); 
}

//sum of multiple 3 and 5

console.log(sum(10));

function sum(limit) {
  let sum = 0;
for (let i= 0; i<=limit; i++) 
if (i % 3 === 0 || i % 5 ===0 ) 
  sum += i;

  return sum; 
}

//stars

 showstars(5);

 function showstars(rows) {
   for (let row = 1; row <= rows; row++) {
     let pattern = '';
     for (let i = 0; i < row; i++) 
      pattern += '*';
console.log(pattern);       
     
     
   }
 }