

 //Object Literel

 let person = {
     name: 'Sahil',   
     age:17
 };
//  console.log(person);

     //Dot Notation is esier
 person.name='john';
//  console.log(person.name);

      //Bracket Notation 
let seletion = 'name';
person[seletion]= 'Mary';
// console.log(person['name']);

//Arry Literel
let testArray ={
    sam:'5',
    sam2:6,
    sam56:'test8',
    sam9:['test1'],
    sams:()=>{
        console.log('methodofobject');
    }
}
let test = new Date();
console.log(testArray);
let array = [1,2,3,'sam1', 'sam2', {
    sam:'1'
},['sams']];

// console.log(array, testArray);
let selectedcolor= ['red' , 'blue']; 

selectedcolor[3]='black'
selectedcolor[2]='jambali lilo'

console.log(selectedcolor[2]);

//Function Literel
       //Performing a task
function greet(name, Lastname) {
    square(5000000);
     return 'hi  '+ name + ' ' + Lastname + ' sas';
};
console.log('function', greet('jhon' , 'Smith')); 

      //Calculating a value 
function square(Number) {
    let sam = Number*Number;   
    console.log(sam);

}