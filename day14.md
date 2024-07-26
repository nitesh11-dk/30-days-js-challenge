
# Day 14: Classes

## Tasks/Activities

### Activity 1: Class Definition

#### Task 1:
Define a class `Person` with properties `name` and `age`, and a method to return a greeting message. Create an instance of the class and log the greeting message.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Welcome " + this.name);
    }
}

let person1 = new Person("Nitesh", 18);
person1.greet();
```

#### Task 2:
Add a method to the `Person` class that updates the `age` property and logs the updated age.

```javascript
Person.prototype.ageUpdate = function(updateBy) {
    this.age += updateBy;
    console.log(this.age);
}

person1.ageUpdate(3);
```

### Activity 2: Class Inheritance

#### Task 3:
Define a class `Student` that extends the `Person` class. Add a property `studentId` and a method to return the student ID. Create an instance of the `Student` class and log the student ID.

```javascript
class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    getStudentID() {
        return this.studentID;
    }
}

const student1 = new Student("Rakesh", 14, 1234);
console.log(student1.getStudentID());
```

#### Task 4:
Override the greeting method in the `Student` class to include the student ID in the message. Log the overridden greeting message.

```javascript
Student.prototype.greet = function() {
    console.log(`Hello ${this.name}, and your ID is ${this.studentID}`);
}

const student2 = new Student("Akshay", 18, 342342);
student2.greet();
```

### Activity 3: Static Methods and Properties

#### Task 5:
Add a static method to the `Person` class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

```javascript
Person.greet23 = function() {
    console.log("Hello everyone");
}

Person.greet23();
```

#### Task 6:
Add a static property to the `Student` class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

```javascript
class Students extends Person {
    static StudentCount = 0;

    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
        Students.StudentCount += 1;
    }

    static getTotalStudents() {
        console.log(`The total number of students is ${this.StudentCount}`);
    }

    getStudentID() {
        return this.studentID;
    }
}

let stu1 = new Students("Nitesh", 16, 1234);
let stu2 = new Students("Nitesh", 16, 1234);
let stu3 = new Students("Nitesh", 16, 1234);

Students.getTotalStudents();
```

### Activity 4: Getters and Setters

#### Task 7:
Add a getter method to the `Person` class to return the full name (assume a `firstName` and `lastName` property). Create an instance and log the full name using the getter.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._fullName = name;
    }

    get fullName() {
        return `This full name is ${this._fullName.toUpperCase()}`;
    }

    set fullName(value) {
        this._fullName = value;
    }

    greet() {
        console.log("Welcome " + this.name);
    }
}

let person1 = new Person("Nitesh", 12);
console.log(person1.fullName);

person1.fullName = "Rakesh";
console.log(person1.fullName);
```

### Activity 5: Private Fields (Optional)

#### Task 9:
Define a class `Account` with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

```javascript
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
```

#### Task 10:
Create an instance of the `Account` class and test the deposit and withdraw methods, logging the balance after each operation.

```javascript
let acc = new Account(400);
acc.deposit(100000000);
console.log(acc.getBalance());
acc.withdraw(30000);
console.log(acc.getBalance());
```
