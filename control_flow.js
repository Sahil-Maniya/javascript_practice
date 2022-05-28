
// If..Else
let hour = 11;
{
  if (hour >= 6 && hour < 12)
    console.log('Good Morning');

  else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');

  else
    console.log('Good Evening');
}
//Swith...Case

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

if (role === 'Guest')
{
    console.log('Guest');
} 
else if (role === 'Moderator') console.log('Moderator');
else console.log('Unkown Users');

//For Loop
//for = (initialzed expresion ; condition ; increment expresion)  

for (let i = 0; i <= 5; i++) {             //  () = parathisise
  console.log(i);                 //statement
}

// while loop
let y = 0         //initialzed expresion
while (y <= 5) {      // condition
  console.log(y);    //statement
  y++;        //increment expresion
}

//do...while loop
let i = 0        //initialzed expresion
do {
  if (i) console.log(i);   //statement
  i++;                   //increment expresion
}
while (i <= 5);            // condition

//Array with for loop
let sam = [80, 93, 102, 110, 255];

for (let i = 0; i < sam.length; i++) {
  console.log(sam[i]);
}


//Array example
let v = 2;
let select = ['red', 'green'];
select[2] = 'blue';
console.log(select[v]);


let r = [255, 125, 95, 200, 150, 'dens'];

printArray(r)
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('index ' + i + ' is value ' + array[i] + '.');

  }
  console.log('All index is printed');
}

for (let i = 0; i < r.length; i++) {
  console.log(r[i]);
}

//For ... In  Loop 

const person = {
  Name: 'sahil',
  age: 18
};
for (let key in person)
  console.log(person[key]);

// For .. Of loop 

const colors = ['red', 'green', 'blue'];

for (const element of colors)
  console.log(element);


//Break and Continue

let z = 0;
while (z <= 10) {

  z++;
  if (z === 3) continue;

  // if (z ===9) break;

  console.log(z);
}



//Max Two Number

let number = max(10, 11);
console.log(number);

function max(a, b) {
  // if (a>b)  return b;
  // return a;

  let c = (a < b) ? a : b;
  return c;
}
                                                           // EXERCISE

//  (1) - landscape or portrait

console.log(islandscape(500, 700));

function islandscape( weight,height ) {
  let b = (weight < height);
  return b;
}

 //   (2) - Fizz Buzz

// Divisible by 3 => fizz
//Divisible by 5 => buzz
//Divisible by both 3 and 5 => fizzbuzz
//Not Divisible by 3 or 5 => input
// Not a Number => 'Not a Number'

const output = fizzbuzz(15);
console.log(output);

function fizzbuzz(output) {

  if (typeof output !== 'number')
    return 'Not A Number';

    if ((output % 3 === 0) && (output% 5 === 0))
    return 'Fizz Buzz';
    
    if (output % 5 === 0)
    return 'Buzz';
    
    if (output % 3 === 0)
    return 'Fizz';
    
  return output;
}

// (3) - Demerit Point

checkspeed(90);

function checkspeed(speed) {

  // const speedLimit =70;
  // const kmPerPoint = 5;


  if (speed <= 70)
    console.log('Ok');

  else {
      const point = Math.floor((speed - 70) / 5);
      if (point >= 12)
      console.log('License Suspended');

    else
   console.log('Point :', point );
    }
}

// (4) - Even and Odd Number

shownumbers(10);

function shownumbers(limit) {

  for (let i = 0; i <= limit; i++) {
    //  if (i % 2 ===0 ) console.log(i,'EVEN'); 
    //   else
    // console.log(i,'ODD'); 


    let count = (i % 2 === 0) ? " :EVEN" : " :ODD";
    console.log(i, count);
}
}

    // (5) - Count Truthy
    
    const array = [0,null,undefined,'',2,3, 'sam'];
    
    console.log(counttruthy(array));
    
     function counttruthy(array) {
       let count = 0;
       for (let  value of array) 
       if (value ) 
       count++;
       return count;   
       }

//  (6) - String Properties

let movie = {
    Name: 'a',
    year: 2022,
    rating: 4.5,
    director: 'b',
    directorz: 'b'
};

showproperties(movie);

function showproperties(movie) {
    for (let key in movie) {
        if (typeof movie[key] === 'string')
        console.log(key, movie[key]);
    }
}

//  (7) -  sum of multiple 3 and 5

console.log(sum(15));
function sum(limit) {

  let sum = null;
  for (let i = 0; i <= limit; i++)

      if (i % 3 === 0 || i % 5 === 0)
         sum = sum + i;

  return sum;
}

//  (8) -  Grad

const marks = [75,87,80];
console.log(calculategrad(marks));

function calculategrad(marks) {
 let sum = 0;
for (let mark of marks) {
  sum = sum + mark;
}
  let average = sum / marks.length;

  if (average < 30) return'Fail';
  if (average < 40) return'E1';
  if (average < 50) return'C2';
  if (average < 60) return'C1';
  if (average < 70) return'B2';
  if (average < 80) return'B1';
  if (average < 90) return'A2';
  return'A1';  
}

// (9) -  stars pattern

showstars1(5);

function showstars1(rows) {

  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let col = 1; col <= row; col++) {
      pattern += '*';
    }
   console.log(pattern);         
  }
}
 //  (10) - Prime Number

showprime(20);
function showprime(limit) {
  for(let number = 2; number<=limit; number++ ){

     let isprime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) 
      {
         isprime = false;
        break;
        
      }  
    }
      if (isprime)
      {
        console.log(number); 
      }
  }

} 

                                                       //   Star Pattern Exrcise
 showstars2(5);

 function showstars2(rows) {

   for (let row = 1; row <= rows; row++) {
     let pattern = '';
   for (let col = 1; col <=rows; col++) 
      pattern += '*';
     console.log(pattern);         
    }

 }



 showstars3(5);

 function showstars3(rows) {

   for (let row = 1; row <= rows; row++) {
     let pattern = '';
   for (let col = 1; col <=rows-row+1; col++) 
      pattern += '*';
     console.log(pattern);         
    }

 }


  showstars4(5);

 function showstars4(rows) {

   for (let row = 1; row <= rows; row++) {
     let pattern = '';
   for (let col = 1; col <=row; col++) {
  pattern += col;
}
     console.log(pattern);         
    }

 }


showstars5(5);

function showstars5(rows) {

  for (let row = 1; row <= 2 * rows; row++) {
      let totalcolsinrow = row > rows ? 2 * rows - row : row;
    let pattern = '';
  for (let col = 1; col <=totalcolsinrow; col++) 
     pattern += '*';
    console.log(pattern);         
   }

}


 showstars28(5);

 function showstars28(rows) {
//  debugger
  for (let row = 0; row < 2 * rows; row++) {
    
    let totalcolsinrow = row > rows ? 2 * rows - row : row;
    let pattern =  '';

    let noofspace = rows - totalcolsinrow;
    for (let s = 0; s < noofspace; s++) {
      pattern +=  ' ';
    }
    for (let col = 0; col <totalcolsinrow; col++) {
      pattern  += ' *';
    }
    console.log(pattern);
  }
}

showstar31(4);

function showstar31(n) {
  let orignalN = n;
  n = 2*n;
  for(let row = 0; row<=n; row++){
  let res = ''
  for(let col = 0; col<=n; col++){
  let ateveryindex = orignalN - Math.min (Math.min(row , col), Math.min(n - row , n - col));
  res = res + ateveryindex + " ";
}
console.log(res);
      
  } 
}

