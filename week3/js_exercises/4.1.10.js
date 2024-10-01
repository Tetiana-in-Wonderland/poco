/* Define three variables for the LaunchCode shuttle:
• one for the starting fuel level,
• another for the number of astronauts aboard,
• and the third for the altitude the shuttle reaches.

Construct while loops to do the following:
a) Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive
value greater than 5000 but less than 30000.*/

let fuelStart, astronautsNumber;
let shuttleAltitude = 0;

do {
    fuelStart = Number(prompt("Enter fuel level, greater than 5 000 and less than 30 000: "))
}
    while (isNaN(fuelStart) || ((fuelStart) < 5000)|| ((fuelStart) > 30000));
/*b) Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the
entry by having the loop continue until the user enters an integer from 1 - 7.*/

do {
    astronautsNumber = Number(prompt("Enter the number of astronauts, from 1 to 7: "))
}
    while (isNaN(astronautsNumber) || ((astronautsNumber) < 1)|| ((astronautsNumber) > 7));

/*c) Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the
fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers. (Hint: The
loop should end when there is not enough fuel to boost the crew another 50 km, so the fuel level might
not reach 0). */

do {
    console.log("Current fuel status is " + (fuelStart = fuelStart - 100) + "l, current altitude is " + (shuttleAltitude = shuttleAltitude + 50) + "km.")
}
    while (fuelStart > 100);

if (fuelStart === 100) {
    console.log("You have " + fuelStart + "l of fuel left. It is enough to make another 50km.")
}

