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

// For Loop
//for = (initial expresion ; condition ; increment expresion)  

// for (let i = 0; i <= 5; i++) {
// if(i % 2!==0)console.log(i);
// }

let i = 0
while(i<=5){
console.log(i);
      i++;
}