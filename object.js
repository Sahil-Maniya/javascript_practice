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
function creatCircle(radius) {   
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

    const Circle1 = {
        radius :1
    }

    circle.color = 'red',
    circle.draw = function(){} 

    // delete circle.color
    // delete circle.draw
    console.log(Circle1);


    //Function Are Object
  function Circle1(radius){
        this.radius = radius;
        this.draw = function(){
            console.log('draw');
        }
    }
      Circle1.call({},1);
      Circle1.apply({},[1,2,3]);

    const anothers = new Circle1(1);

    