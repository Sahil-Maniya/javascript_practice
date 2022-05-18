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

{for (const element of colors) 
  console.log(element);
}

//Break and Continue

let z= 0;
while (z<=10 ) {
  // if (z ===6) break;
  if(z==5){
   continue;
    }
  console.log(z);
  z++;
}