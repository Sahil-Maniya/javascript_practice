// Object Oriented Programing

 let circle = {
     radius:1,
     x :2,
     location : {
         x:1,
         X:2
     },
     isvisible : true,
     draw :function() {
     console.log(circle);
    }     
 };
 circle.draw('draw');

//Factory Function
function creatCircle1(radius) {   
    debugger 
return{
    radius,
    // location,
    // isvisible,
    draw :  function () {
    }     
};
}
    const Circle = creatCircle1(1);
    console.log(Circle);

    //Constructor Function

    function Circle1(radius){
        this.radius = radius;
        this.draw = function(){
            console.log('draw');
        }
    }

    const another = new Circle1(1);

    //  Dynamic Nature  of Object 

    const Circle2 = {
        radius :1
    }

    Circle2.color = 'red',
    Circle2.draw = function(){} 

    // delete circle.color
    // delete circle.draw
    console.log(Circle2);


    //Function Are Object
  function Circle3(radius){
        this.radius = radius;
        this.draw = function(){
            console.log('draw');
        }
    }
      Circle3.call({},1);
      Circle3.apply({},[1,2,3]);

    const anothers = new Circle3(1);

                            //Value vs Reference

    // Primitives are copied by value

    let a = 4;
    let b = a;
    
    b = a +7;


    console.log(a);
    console.log(b);

    // Object are copied by refernce

     let A = {value:20};
     let B = A;

    B.pass =  32;

     console.log(A);
     console.log(B);

              // 
     let Number= 10;
     function increse (Number) {
         Number++;
     }
        increse(Number);
        console.log(Number);
                //
        let Object= {value : 10};
     function increse (Object) {
        Object.value++;
     }
        increse(Object);
        console.log(Object);

//  Enumrating Properties  Of An Object

const circle4 = {
    radius : 1,
    draw () {
        console.log('draw');
    }
};

for (const key in circle4) 
 console.log(circle4[key]);

//  for (let key  of Object.keys(circle4)) 
// console.log(key);

// for (let entry  of Object.entries(circle4)) 
// console.log(entry);    

   if ('color' in circle4) 
   console.log('yes');
       
   //  Cloning an Object

   let circle6 = {
       radius:1,
       draw(){
           console.log('draw');
       }

   };

   let another1 = {};
   for (const key in circle6)
         another1[ key ] = circle6[key];
           
//   let another6 = Object.assign({},circle6)  ;  

let another2 = {...circle6}
console.log(another1);


//   Math

//  Math.floor 
console.log(Math.floor(4.25));
console.log(Math.floor(7.90));
console.log(Math.floor(5.98));


//Math.max
console.log(Math.max(1,5,7,8));
console.log(Math.max(-8,-1,-2,-5));

//Math.min
console.log(Math.min(56,98,34,90));
console.log(Math.min(-90,-78,-56));

//Math.pow
console.log(Math.pow(5,3));
console.log(Math.pow(-9,2));

//Math.round
console.log(Math.round(5.45 ),Math.round( 5.51), Math.round (6.49));
console.log(Math.round(-1.6),Math.round(-8.5),Math.round(-9.4));



// String

// String Primitives
let message = 'hi';
console.log(message);

// String Object
let another3 = new String ('hi');
console.log(another3);


let messages = 'This is My First Message'
console.log(messages.length);
console.log(messages[0]);
console.log(messages[1]);
console.log(messages.includes('My'));
console.log(messages.startsWith('This'));
console.log(messages.replace('First','Second'));
console.log(messages.toUpperCase());
console.log(messages.trimLeft());

//Escape Notation

//single quote(')
let Message = 'this is my \'second message'
console.log(Message);

//double quote(")
let Messages = 'this is \" my second message'
console.log(Messages);

//	backslash(\)
let messanger = 'this is \\ my second message'
console.log(messanger);

// new line(n)
let Messanger = 'this is  my \n second message'
console.log(Messanger);

//	carriage return (r)
let  contain =  'this\r is  my second message'
console.log(contain);

// vertical tab (v)
let Contain = 'this is \v my second message'
console.log(Contain);

//form feed(f)
let contains = 'this is \f my second message'
console.log(contains);


//Templet Literel
let Name = 'john';
let another4 = 
`hi ${Name} ${2+5} ,

thak you for joining my mailing list.

regard,
sahil`;
console.log(another4);

//Date

let now = new Date();
console.log(now);

let now1=new Date('May 11 2018 09:00');
console.log(now1);

                                          //Exercise

//Address

let address = {
  street :'a',
  city : 'b',
  zipcode :'c' 
};

function showaddress(address) {
  for (const key in address) 
     console.log(key ,address[key]);
    }
  
showaddress(address);
