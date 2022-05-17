//hour
//if hour is between 6am to 12 pm : Good Morning
//if hour is between 12pm to 6 pm : Good Afternoon
//otherwise : Good Evening



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

for (let i = 0; i <= 5; i++) {
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
let select =['red', 'green'];
select[2] = 'blue';
console.log(select[0]);