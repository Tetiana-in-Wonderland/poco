/* Construct for loops that accomplish the following tasks:
• Print the numbers 0 - 20, one number per line.*/
for (let i = 0; i <= 20; i = i + 1) 
    {
    console.log (i);
    }


/* • Print only the ODD values from 3 - 29, one number per line.*/
for (let i = 3; i <= 29; i = i + 2) 
    {
    console.log (i);
    }


/*• Print the EVEN numbers 12 down to -14 in descending order, one number per line.*/
for (let i =12; i >=-14; i--) 
    {
    console.log (i);
    }


/*• Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3. */
for (let i =50; i >=20; i--) 
    if (i%3===0) console.log (i);
    else if (i%3===1) continue;

    