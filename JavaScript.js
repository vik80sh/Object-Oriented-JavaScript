/*
    Four Concepts of Object Oriented Programming
        1. Encapsulation
        2. Abstraction
        3. Inheritance
        4. Polymorphism
        
        
     We combine group of functions and variables in a unit we 
     called it Object


*/


let baseSalary = 3000;
let roomRent = 2500;
let groceries = 1500;

function calculateSalary(baseSalary, roomRent, groceries) {
    return baseSalary + roomRent + groceries;

}

// object oriented stype

// Ecapsulation
const emplyeeSalary = {
    baseSalary: 3000,
    roomRent: 2500,
    groceries: 1500,
    getSalary: function () {
        return this.baseSalary + this.roomRent + this.groceries;
    }
}

console.log("Hey ", emplyeeSalary.getSalary())



// -----------Object--------------

const VarName = {}   // Object litral syntax

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('Draw');
    }
}

/*
    Circel Object has 3 member. radius, location, draw
    radius and location => are property 
        which can hold value is called property
    draw is function or Methiod
        which can define some logic

    If a object has one or more method we can say object has behavior
    
*/

function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log("Draw")
        }
    }
}

const circleX = createCircle(1);
circleX.draw()




/*
Constructor Function
    Naming convention : 1st letter should be a upper case

*/
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw ckirlce')
    }
}
const another = new Circle(1); 
/*
beacuse of new 
"this" value in Circle object has only radius and draw it will not take window object

for in loop , which can give all the properties and method

*/
for(let key in another){
    console.log("Key ",key) // radius , draw

    // want to value of all property
    console.log("hey - ",another[key]) // 1 , draw f(){...}

    if(typeof another[key]!== 'function')
        console.log(another[key])  // 10
}


// get all properties of an object

Object.keys(another) // ["radius","draw"]

// it is returning an array with all property and method



// in operater
if('radius' in another)
    console.log("yes present")  // yes present , bcz another has radius 




/*
    abstraction
*/


function Circle(radius){
    this.radius = radius;
    this.defaultLocation={x:0,y:0};
    this.computeOptimumLocation = function(){

    }
    this.draw = function(){
        console.log('draw ckirlce')
    }
}
const other = new Circle(1); 



/*
Why we need abstraction 
suppose for taking value radius doing some logic implemetation
and now somewhere from out side 
changed the value of 
another.radius = false

so it will break all the code

*/


function CirlceForAbstraction(radius){
    /*
        let color="red" 
        Q.    will color be excessable from out side
        A.      No, it is not assign any object (this) so it is a local variable
    */
   this.radius = radius;
   let defaultLocation={x:0,y:0};
   let computeOptimumLocation = function(x){

   }
   this.draw = function(){
       computeOptimumLocation(0.1)
       //this.radius
   }
   /*
    draw is called clouser function, it is calling a function itself
    clouser can acess parent function/properties  
    if you want to excess member of object inside draw use this
    keyword like this.radius
    
   */

   Object.defineProperty(this,'defaultLocation',{
       get:function(){
           return defaultLocation;
       },
       set:function(val){
        if(!val.x || !val.y)
            throw new Error("Invalid Lacation")
       }
   })
   /*
    with help of Object.defineProperty we can get local variable
    also outside the object,
    get function used for get the data value defaultLocation
    set function used for set the data value defaultLocation

    how to get data out side object
        let ob = new CirlceForAbstraction(1);
       get data console ob.defaultLocation 
        set data ob,defaultLocation = {x:3,y:4}

   */
}


let ob = new CirlceForAbstraction(2);
ob.defaultLocation={x:3,y:20}






// Excericse StopWatch


function Stopwatch(){
    let startTime,endTime,running,duration=0;

    this.start=function(){
        if(running)
            throw new Error("Stopwatch is running");
        running=true;
        startTime = new Date();
    }
    this.stop=function(){
        if(running){
            endTime=new Date();
            running=false
            duration =duration +  (endTime.getTime() - startTime.getTime())/1000;
        }
        else
            throw new Error("Stopwatch is not running")
    }
    this.reset=function(){
        ruuning=false;
        startTime=null;
        endTime=null
        duration=0;
    }
    Object.defineProperty(this,'duration',{
        get:function(){
            return duration;
        }
    })
}


/*
    whenever we create a Object it inheritated from a parent object
    which is most upper object(root object) in js
    which means when you create an object you get prototype of that
    Object which is same for all

*/

let x ={};
let y ={}
console.log("prototype ", x.__proto__  === y.__proto__)
let objectBase = Object.getPrototypeOf(x)

console.log(" objectBase objectBase ",objectBase)

let objc = x.toString()
/*
    1st if toString is available in x object it will use it
    otherwise it will check in prototype of object
    
    
    prototype is just a reglar object, Every Obejct has prototype 
    expect for root object
*/

let myArray=[];

/*
if you see it has different prototype and it's prototype has also
a prototype witch us same as obejct (x or y line 256,257)

means 

myArray ----Inherits---->ArrayObject-----
ArrayObject-----Inherits-----> Root Object


line number 132 , it is Circle constracter
let xyz = new Circle(10)

means xyz ----Inherits---->Circle constructer with all properties-----
Circle -----Inherits-----> Root Object
*/


