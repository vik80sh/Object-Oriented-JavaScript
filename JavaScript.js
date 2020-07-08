/*
    Four Concepts of Object Oriented Programming
        1. Encapsulation
        2. Abstraction
        3. Inheritance
        4. Polymorphism
        
        

     We combine group of functions and variables in a unit we 
     called it Object






*/


let baseSalary=3000;
let roomRent = 2500;
let groceries = 1500;

function calculateSalary(baseSalary,roomRent,groceries) {
    return baseSalary + roomRent + groceries;
    
}

// object oriented stype

// Ecapsulation
const emplyeeSalary = {
    baseSalary:3000,
    roomRent:2500,
    groceries:1500, 
    getSalary: function(){
        return this.baseSalary + this.roomRent + this.groceries;
    } 
}

console.log("Hey ",emplyeeSalary.getSalary())  



// -----------Object--------------

const VarName={}   // Object litral syntax

const circle = {
    radius:1,
    location: {
        x:1,
        y:1
    },
    draw: function(){
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
















