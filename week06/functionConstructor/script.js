function Person(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName
    this.dateOfBirth = new Date(dateOfBirth);

    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }

    this.age = function() {
        return new Date().getFullYear() - this.dateOfBirth.getFullYear();
    }

    this.toString = function() {
        return `${this.fullName()} is ${this.age()} years old.`;
    }
}

const myStudent = new Person("Someone", "Someone", "07-06-2004");

console.log(myStudent.fullName());
console.log(myStudent.age());
console.log(myStudent.toString());