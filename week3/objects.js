const john = {
    name: "John", //property
    age: 38,
    eyeColor: "green",
    isMarried: false,
    greet: greetFunc,
}

let jan = {
    name: "Jan",
    age: 40,
    eyeColor: "blue",
    isMarried: false,
    greet: function greetFunc() {
        console.log("Hello dear, " + this.name + ".");
}

 //this.name - this is when you insert 
}

//john.greet();
//jan.greet();
    
//accessing object in comsole: person.age, person[age]

/*fullName: function()  {
    console.log("Hello dear, " + this.name + ".");
}*/