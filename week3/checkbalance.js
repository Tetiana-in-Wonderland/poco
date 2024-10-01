function checkBalance(price=5, currentBalance=3)
{   
    return currentBalance >= price;
    /*if (currentBalance >= price) {
        return true;
    }
    else {
        return false;
    }*/
}

let success = checkBalance(20,50);
if (success) {
    console.log("Purchase successful");
}
else {
    console.log("Not enough money");
}