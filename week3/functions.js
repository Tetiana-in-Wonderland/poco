function myFunction(arg1 = 5, arg2 = 3, arg3 = 1)
{
    //return arg1 + arg2 * arg3
    result = arg1 + arg2 * arg3;
    console.log(result); //actually prints result of calculation into console
    return result;
}

let data = myFunction(5, 3, 10);
let data2 = myFunction(30);
