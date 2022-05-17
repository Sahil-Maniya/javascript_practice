 //console.log('Hello World') 
 //let name = "Sahil";
 //console.log(Name);   
 //let firstname = 'Sahil';
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


 let  selection= sum(10,20);
 function  sum(c,d) {
  sum =c*d;
return sum;   
 }
 console.log(sum);


                                                                                 // OPRATORS

                                                                // Arithmetic Opratores

  let a = 10;
  let b = 5 ;

                        //Adition
     console.log(a+b);

                        //Subtration
     console.log(a-b);  
     
                        //Divison
     console.log(a/b);

                       //Multiplication
     console.log(a*b);

                      //Exponentiation
     console.log(a**b); // a**b =  10*5 (10*10*10*10*10 = 100000)

                     //Remember of divison
     console.log(a%b);
     
                    //incriment
     let x = 10
     console.log('value of x', ++x);
 
                  //Decriment
     let y = 11
     console.log('value of y', --y);


                                                                  // Assignment Oprators

let c = 50;    //Assignment oprator
let d = 30;

               //Addition assignment
    console.log( c+=d );  //c = c + d

              // Subtraction Assignment
   console.log( c-=d );//c = c - d

             //Multiplication Assignment
    console.log( c*=d ); //c = c * d
    
            //Division Assignment
    console.log( c/=d );//c = c / d

           //Remainder Assignment
    console.log( c%=d );//c = c % d

          //Exponentiation Assignment
    let m = 5;
    let n = 3 ;
    console.log( m**=n );//m = m ** n (5 * 5 * 5 = 125)

                                                          // Comparison oprator(boolien = true or false )
                                                    //Equal to    
    let u = 6;
    let v = '6';
    console.log(u==v);//true not datatype check                                                 
    let q = 5;
    let p = 6;                                                     
     console.log(q==p); //false
     let Q = 5;
     let P = 5;
     console.log(Q==P);//true
   
                                                    //Strict equal to (type + value )
     let g = 5;
     let h = '5';
     let sam = '1'== true;


     console.log('personal ex','1'=== true);
     console.log(g===h);//false  datatype check  
     let G = 5;
     let H = 5;
     console.log(G===H);//true
     let U = 5;
     let V = 6;
     console.log(U===V);//false

                                                    //Not equal to
     let i = 5;
     let j = 5;
     console.log(i!=j);//false not datatype check
     let r = 5;
     let s = 5;
     console.log(r!=s);//false
     let R = 5;
     let S = 6;
     console.log(R!=S);//true
  
                                                   //Strict not equal to  (type + value)
     let I = 5;
     let J = '5';
     console.log(I!==J);//true datatype check
     let e = 6;
     let f = 6;
     console.log(e!==f);//false
     let E = 6;
     let F = 7;
     console.log(E!==F);//true

                                                 //	Greater than       
     let k = 5;
     let l = 4;
     console.log(k>l);//true
     let K = 5;
     let L = 6;
     console.log(K>L);//false

                                                //Greater than or equal to
     let w = 5;
     let z = 5;
     console.log(w>=z);// true  not greater than but equal to
     let W = 5;
     let Z = 6;
     console.log(W>=Z);//false not greater than and not equal to  
  
                                               //Less than
     let o = 5;
     let t = 6;
     console.log(o<t);//true
     let O = 5;
     let T = 4;
     console.log(O<T);//false

                                              //Less than or equal to
     let ab = 5;
     let bc = 5;
     console.log(ab<=bc);//true  not less than but equal to
     let AB = 5;
     let BC = 4;
     console.log(AB<=BC);//false  not less than and not equal to
                                                               //Logocal Oprator
            //  Logical AND(&&)
            let highincome = true;
            let loweincome = false;
            console.log(highincome&&loweincome);
            //Logical OR(||)
            let hightemperature = true;
            let lowtemperature = false;
            console.log(hightemperature||lowtemperature); 
            //Lgical NOT(!)
            let highestincome = true;
            let lowestincome  = false;
           lowestincome=!highestincome
            console.log('highestincome' , lowestincome);                               
