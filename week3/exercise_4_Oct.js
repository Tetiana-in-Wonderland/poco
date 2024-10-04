
const cars = [
    {
        brand: "Mercedes",
        model: "G45",
        color: "red",
        year_built: 2014, 
        current_mileage: 10_000,
    },
    {
        brand: "BMW",
        model: "M5",
        color: "black",
        year_built: 2020, 
        current_mileage: 1_000,
    },
    {
        brand: "Volkswagen",
        model: "Golf",
        color: "yellow",
        year_built: 2000, 
        current_mileage: 1_240_000,
    },
]

const car2 = cars[1]; 
car2.color = "green";
console.log(car2);

//console.log(car2.model); we can write in simpler way
console.log(cars[1].model);

cars.sort()

//example apart from cars array
let numbers = [11,2,22,1];
numbers.sort(
    (a, b) => a - b

); //alternative of bubble sort
console.log(numbers);


function compare_numbers(a,b) {
    return a - b;
}
numbers.sort(compare_numbers);
console.log(numbers);
//end of example

cars.sort(
    (a,b) => a.year_built - b.year_built
)

for (let i = 0; i < cars.length; i++) {
    //console.log((i+1) + ". " + cars[i].brand + " " + cars[i].model + ", " + cars[i].color);
    let car = cars[i];
    console.log(`${i+1}. ${car.brand} ${car.model}, ${car.color}, built in ${car.year_built}`);

//    let tetiana = i;
//    console.log(tetiana);
}

let str = "hello world!".padEnd(8).substring(0, 8);
console.log(str);

str = "hello world!".padEnd(5).substring(0, 5);
console.log(str);

//makeFixedWidthString()
//str = "hello world!!!!!!!!!!!!!!!!!!!!";
//console.log(makeFixedWidthString(str, 12));

let filename = "email@email.com";
let parts = filename.split("@");
console.log(parts.split("."));
console.log(parts[0]);



