// Here's the formatted version of the questions:

// # Day 14: Classes

// ## Tasks/Activities:

// ### Activity 1: Class Definition

// // #### Task 1:
// // Define a class `Person` with properties `name` and `age`, and a method to return a greeting message. Create an instance of the class and log the greeting message.

// class Person {

//     constructor (name, age){
//         this.name = name ;
//         this.age = age ; 
        
//     }

//     greet(){
//         console.log(  "  welcome " + this.name )
//     }
// }

// let person1 = new Person("nitesh", 18) ;
// // console.log(person1)
// // person1.greet();



// // #### Task 2:
// // Add a method to the `Person` class that updates the `age` property and logs the updated age.

// Person.prototype.ageUpdate = function (upadteBy){

//     // this.age = this.age + upadteBy ;
//     this.age += upadteBy ;
//     console.log(this.age);


// }

// // person1.ageUpdate(3)



// // ### Activity 2: Class Inheritance

// // #### Task 3:
// // Define a class `Student` that extends the `Person` class. Add a property `studentId` and a method to return the student ID. Create an instance of the `Student` class and log the student ID.




// class Student extends Person {
//     constructor(name , age ,studentID){
//         super(name , age); // ye batadna ye padega ki kya kya leke ana hai appko 
//         this.studentID = studentID ;



//     }

//     getStudentID (){
//         return this.studentID ;
//     }
// }

// const student1 = new Student( "Rakesh",14 , 1234 )
// // console.log(student1.getStudentID())







// // #### Task 4:
// // Override the greeting method in the `Student` class to include the student ID in the message. Log the overridden greeting message.


// Student.prototype.greet = function (){
//     console.log(`hello ${this.name} and you  Id is ${this.studentID}`)
// }

// const student2 = new Student("Akshay", 18 , 342342)

// // student2.greet();



// // ### Activity 3: Static Methods and Properties

// // #### Task 5:
// // Add a static method to the `Person` class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

// Person.prototype.greet23 = function (){
//     console.log("hello everyone")
//  }  // * ye static method nahi hai , q kii yye Person se banane wale instance  me hai aur instance ye  mwthod ko use kar sakta hai 

// Person.greet23 = function (){
//     console.log("hello everyone")
// } // * ye static method hai , qkii ye Person se banane wale instance  me nahi hai aur instance ye  mwthod ko use kar nahi kar sakta hai bas khud class hii kar sakta hai yinko access 

// //? Jab hum method ko class ke saath directly attach karte hain, aur wo method class ke instances ke liye available nahi hota, to us method ko static method kehte hain. 


// // #### Task 6:
// // Add a static property to the `Student` class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.



// class Students extends Person {

//     static StudentCount = 0 ;
//     constructor(name , age ,studentID){
//         super(name , age); // ye batadna ye padega ki kya kya leke ana hai appko 
//         this.studentID = studentID ;
//         Students.StudentCount += 1 ;
        
        
//     }
    
//     static getTotalStudents (){
//         console.log(`the total numbers of student are ${this.StudentCount}`)
//     }

//     getStudentID (){
//         return this.studentID ;
//     }
// }

// let stu1= new Students("nitesh" , 16 , 1234)
// let stu2= new Students("nitesh" , 16 , 1234)
// let stu3= new Students("nitesh" , 16 , 1234)

// // Students.getTotalStudents();



// ### Activity 4: Getters and Setters

// #### Task 7:
// Add a getter method to the `Person` class to return the full name (assume a `firstName` and `lastName` property). Create an instance and log the full name using the getter.


// #### Task 8:
// Add a setter method to the `Person` class to update the name properties (`firstName` and `lastName`). Update the name using the setter and log the updated full name.

class Person {

    constructor (name, age){
        this.name = name ;
        this.age = age ; 
        this._fullName = name ;
    }

    get  fullName(){
        return ` this full name is ${this._fullName.toUpperCase()}`
    }

    set fullName(value){
           this._fullName = value  ; 
    }

    // setter method tab chalta hai jab vo peoperty ko hum set kar  rahe hai 

    greet(){
        console.log(  "  welcome " + this.name )
    }
}

let  person1 = new Person("nitesh", 12 , 13123)

// console.log(person1.fullName)

person1.fullName = "Rakesh "
// console.log(person1.fullName)






// ### Activity 5: Private Fields (Optional)

// #### Task 9:
// Define a class `Account` with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    // Private fields
    #balance;

    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
        }
        this.#balance = initialBalance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.#balance += amount;
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient funds");
        }
        this.#balance -= amount;
    }

    // Method to check balance
    getBalance() {
        return this.#balance;
    }
}



//  ! #private fileds 

// Invalid operations (will throw errors)
// console.log(acc.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
// acc.#balance = 2000; // SyntaxError: Private field '#balance' must be declared in an enclosing class


// #### Task 10:
// Create an instance of the `Account` class and test the deposit and withdraw methods, logging the balance after each operation.


let acc = new Account(400) ;
acc.deposit(100000000) ;
console.log(acc.getBalance())
acc.withdraw(30000);
console.log(acc.getBalance())


