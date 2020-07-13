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

let person = {name:'Vikash'}

console.log(Object.keys(person)) // ["name"]

/*
    but if i do console.log(person.toString)

    i can't see method when i console keys 
    means i can't see properties of person which is inherited
    means from __proto__ properties

    how i can see all properies of __proto__ 

*/

let objectBasex  = Object.getPrototypeOf(person)

console.log(" objectBaseobjectBase ",objectBasex)

/*
    if you want to decsription about any properties
    have to use---> Object.getOwnPropertyDescriptor

*/
let descriptor = Object.getOwnPropertyDescriptor(objectBasex,'toString')
console.log(" descriptor descriptor  ",descriptor)
/*
    in toString properties i got
    1.  configurable:true   "Means can delete this member"
    2.  enumetrable:false    "means not visiable from outer object line 294"
    3.  writabke:true     "means we can override"

    1. configurable : 
    2.   
*/

 
Object.defineProperty(person,'name',{
    writable:false,
    enumerable:false,
    configurable:false
})
/*
    writable:false : now in person object name is not editable
    enumerable:false : and we can't see name properties in Object.key of persons
    configurable:false : we can't delete name properties
*/

person.name = "John"  
console.log(person.name) // Vikash : not editable
delete person.name // not delete


function CircleProtoType(r){
    this.radius = r;
}
CircleProtoType.prototype.draw= function(){
    console.log("-----protiotype-----")
}

const c1 = new CircleProtoType(1);
const c2 = new CircleProtoType(2);

for(key in c1)
    console.log("c1  ",key)
for(key in c2)
    console.log("c2  ",key)
/*
    For in loop return all members (instance + Prototype)
    we will get 
    JavaScript.js:356
        c1   radius
        c1   draw

JavaScript.js:358 
        c2   radius
        c2   draw
*/

console.log(Object.keys(c1)) // ["radius"]
/*
    Object.keys will return only instance member
    intance is ownProperty

*/
 
/*
    prototype inheritance

*/
function Shape(color){
    this.color=color

}
Shape.prototype.duplicate = function(){
    console.log(" --Shape prototype-");
}

function Sqaure(s){
    this.side = s;
}

/*
Sqaure.prototype = Object.create(Object.prototype)
if obejct not inheriting anyone, every object inherits Object prototype
(root object)
*/

Sqaure.prototype = Object.create(Shape.prototype)

/*
    Square object inherit Shape Object
*/

/*
    every object protype has constructor function 

    like 
    new Sqaure.prototype.constructor(1)
    it retutns Sqaure{side:1}
    
    sort form
    new Sqaure(1)
    it retutns Sqaure{side:1}

    but in this case
    Sqaure.prototype = Object.create(Shape.prototype)
    if i do new Sqaure.prototype.constructor(1)
        will get nothing
    new Sqaure.prototype.prototype.constructor(1)
    i will get 
    Shape{}
    becasue Sqaure has protoype of Shape that is why it is returning
    Shape constructor

    sh whenever we have to set prototype we should reset the 
    constructor properype again
    Sqaure.prototype.constructor = Square
*/
Sqaure.prototype.constructor = Square;

/*
    Square object is inherited Shape object but can see color property of
    Shape object visiable under Square object
    
    it is comes under 
    windos object

    let c = new Square(1,'red');
    console.log(c) // Square{side}

    console.log(window.color)   // red

    how to fix this problem

    so we have to call Shape Object under Square Obejct
    
function Sqaure(s,color){
    shape.call(color)  // this is call super constructor
    this.side = s;
}

now Square has 2 properties  side and color
*/
function Xyz(){
    this.x =10;
}

/*
so every time if i have to inherit other object then 
we have to do
Xyz.prototype = Object.create(Shape.prototype)
Xyz.prototype.constructor = Xyz;

so we will create a object which will help you that deal with inheritance
*/


function extend(Child,Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child
}

/*
    extend function is called intermediate function inheritance

*/