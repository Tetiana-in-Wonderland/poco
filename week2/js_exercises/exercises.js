let i = 0
while (i < 10) {
    console.log ("Hello");
    i ++
}

let a = 2
while (a < 20) {
    console.log ("A" + a);
    a = a + 2
}

let i = 0
while (i > 10) {
    console.log ("Hello");
    i ++
}

for (let i = 0; i < 10; i = i + 2) 
    {
    console.log ("Hello Powercoders! i = " + i);
    }
    var number = 1;
    /*while (true) {
        console.log("number is " + number);
        if (number %5 === 0) {
            break;
        }
        number++;
    }
    console.log("last number after the loop is " + number);*/
    
    for (; (number % 5) !== 0; number++)
        {
        console.log("number is " + number);
        }
    console.log("last number after the loop is " + number)

    for (; number < 5; )
        {
        console.log("number is " + number);
        number ++
        }
    console.log("last number after the loop is " + number)