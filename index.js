 console.log('Hello World') 
 let name = "Sahil";
 console.log(Name);   
 let firstname = 'Sahil';
 //let secondname = 'Maniya';
 //console.log(firstname,secondname);  
//  const interestRate =0.3;
//  interestRate = 1;
//  console.log(interestRate);
//  let name = 'Sahil'; //String Literel
//  let age =    17; //Number Literel
//  let isaproved= true; //Boolean Literel
//  let firstname= undefined; //UNdefind Literel
//  let selectedocean= null;    //Null Literel
//    console.log(name,age,isaproved,firstname,selectedcolor);

 //object literel

 let person = {
     name: 'Sahil',   
     age:17
 };
 console.log(person);

     //dot notation is esier
 person.name='john';
 console.log(person.name);

      //bracket notation 
let seletion = 'name';
person[seletion]= 'Mary';
console.log(person['name']);

//Arry literel
let selectedcolor= ['red' , 'blue']; 
selectedcolor[2]= 'green';
console.log(selectedcolor);

//Function Literel
       //performing a task
function greet(name ,Lastname ) {
    console.log('Hello '+ name +  Lastname);  
};
greet('jhon' , 'Smith');
greet('Marry' , 'Smith');

     //calculating a value 
function square(Number) {
    return Number*Number;   
}
console.log(square(1));