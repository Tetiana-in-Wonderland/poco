//Create an object person with properties firstName, lastName, and a method fullName that returns the full name.

const person = {
    firstName: "Boris",
    lastName: "Godunov",
    fullname: function() {
        console.log(this.firstName +" "+this.lastName);
    }
}

person.fullname()

//Create an object student with properties name, age, and an array of objects representing courses (with courseName and grade). Write a function to log the student’s name and their course grades.

let student = {
    name: "Anna",
    age: 20,
    courses: 
        courseName: "Economics",
        grade: 89,
}