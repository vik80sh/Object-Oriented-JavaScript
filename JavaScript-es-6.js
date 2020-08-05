console.log("-----------------------ES-6-----------------------");

/*
    Protype inheritance in class syntax 

*/

/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw cirlce')
    }
}

The class syxtax is
*/


class CircleEs6 {
    constructor(radius) {
        this.radius = radius;
        this.move = function () {
            console.log('Move method ');
        };
    }
    dra(){
        console.log("Circle draw outside constructor, which will come inside Circle object prototype")
    }
}

const CircleObject = new CircleEs6()

/*
 type of Circle is : Function :P
 because this is not real class, we are just converting old stntax to new Stntax
*/

sayHello() // Not arror
//sayGoodBye() => error

function sayHello(){}
// Function Declaration

const sayGoodBye = function(){};
const number = 1;
// Function Expression 

/*
    function Expression can't use before initalize, it will give error
    but
    function Declaration can use before initalize.

    function Expression terminate with ;
    function declearation doesnt need ; to terminate

*/


// Class Declaration
class CircleX {

}

// Class Expression 
const SquareX = class{

}
/*
    we can't create object before class in declaration as well as Expression

    we are not using Class Expression anywhere we are using class Declaration everywhere
*/


class Circle1 {
    constructor(radius) {
        this.radius = radius;
    }
    // Instance Method
    draw(){
        console.log("Circle draw outside constructor, which will come inside Circle object prototype")
    }

    //Static Method
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle1(radius)
    }
}

const CircleObject1 = new Circle1()
/*
CircleObject1.parse('{"radius":1}');
it will give error, because it is not avaliable inside object
it is excessable by class only.

*/
const circle1Obj = Circle1.parse('{"radius":1}')
console.log(" circle1Obj ",circle1Obj)

/*
    circle1Obj  
    Circle1 {radius: 1}
    radius: 1
    __proto__:
        constructor: class Circle1
        draw: ƒ draw()
        __proto__: Object

*/


const YzCircle = function(){
    this.draw = function(){
        console.log(this)
    }
}
const yzC = new YzCircle();

//Method call
yzC.draw();
/* console of this 

YzCircle {draw: ƒ}
    draw: ƒ ()
    __proto__:
    onstructor: ƒ ()
    __proto__: Object

*/


const drawX = yzC.draw;

//function call
drawX()


/*
console of this is window object
1. In drawX, I am keeping refrence of draw function.
2. and Calling drawx function so we are getting windows object.

Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
Circle: ƒ Circle(radius)
CircleProtoType: ƒ CircleProtoType(r)
CirlceForAbstraction: ƒ CirlceForAbstraction(radius)
GetParams: ƒ (t)
...
...
...

if we use strict mode console log will give undefine
*/
class Yz11Circle {
    draw() {
        console.log(this);
    }
}
const Yz11 = new Yz11Circle();
const draw = Yz11.draw;
draw()
/*
    undifine
    because class itself running in strict mode
*/


console.log("===================abstraction using ES-6==================")
/*
 Means Implementing Private property using ES-6
*/

const _r = Symbol();
/*
 Symbol is a function we call to generate the symbol,
 it is uniq identifier when ever we call Symbol it gives
 different identifier.

 Symbol() === Symbol()  // false, because it gives always new uniq indentifier


 this.radius = radius
 this['radius'] = radius 
 both line are same
*/


const _radius = Symbol();
const _draw = Symbol();
class PrivateCircle {
   constructor(radius){
       this[_radius] = radius
   }
   [_draw](){

   }
}

const sym = new PrivateCircle(1);
console.log("---- ",sym)
/*
PrivateCircle {Symbol(): undefined}
    Symbol(): undefined
    __proto__:
        constructor: class PrivateCircle
        Symbol(): ƒ [_draw]()
        __proto__: Object

    

    So here no _radius property present, so we can't excess.
*/

const key = Object.getOwnPropertySymbols(sym)

/*
 key = array of all symbol 
 
 console.log(key)
 [Symbol()]
*/

console.log(sym[key[0]]); // 1



const _red = new WeakMap();
const _move = new WeakMap();

console.log(" rad Weekmap ",_red)
class CirclePrivateProperty {
    constructor(radius){
        _red.set(this,radius);  // setting weekmap properties
        _move.set(this,()=>{
            console.log('Move ',this)
        });
    }
    draw(){
        _move.get(this)()  // move is a function 
        console.log("Radius",_red.get(this));
        console.log("Inside draw function")
    }
    // es-6 property 
    get _red(){
        return _red.get(this)
    }
    set _red(val){
        _red.set(this,val);
    }
}

const privCircle = new CirclePrivateProperty(2)
privCircle.draw()
/*

Move  CirclePrivateProperty {}
Radius 2
Inside draw function

*/


console.log("===========Inheritance in ES-6============")

class A {
    constructor(color){
        this.color=color   // not any error
    }
    move(){
        console.log("Class A Method Move")
    }
}

class B extends A {
    constructor(color){
        // gives error, you have to call parent construct here
        // so super super keyword to call parent costructor
        super(color) // Now any Not error
    }
    draw(){
        console.log("Class B Method Draw")
    }
    move(){ // overriding move method

        //if you want to use parent move method use super
        super.move() // output : Class A Method Move
        console.log("Class B Move")
    }
}

const B_Obj = new B();
console.log(B_Obj)
/*
B {}
    __proto__: A
    constructor: class B
    draw: ƒ draw()
        __proto__:
        constructor: class A
        move: ƒ move()
        __proto__: Object
*/

const _stack =new WeakMap()
class StackImplementation {
    constructor(){
        _stack.set(this,[])
    }
    get _stack(){
        return _stack.get(this);
    }
    push(obj){
        _stack.get(this).push(obj)
    }
    pop(){
        const stackArray = _stack.get(this)
        if(stackArray.length==0)
            throw new Error('Stack is Empty')
        return stackArray.pop()
    }
    peek(){
        const stackArray = _stack.get(this)
        if(stackArray.length==0)
            throw new Error('Stack is Empty')
        return stackArray[stackArray.length -1 ]
    }
    get count(){
        return _stack.get(this).length;
    }
} 

const s_ar = new StackImplementation();
  