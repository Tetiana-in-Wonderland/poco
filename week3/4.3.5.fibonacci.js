

function generateFibonacci(num) 
{
    let fibonacci_list = [0, 1];
    
    for(let i = 2; i < num; i++) {
        let a = fibonacci_list[i-2];
        let b = fibonacci_list[i-1];
        let c = a + b;
        fibonacci_list.push(c);
    }
    return fibonacci_list
}
console.log(generateFibonacci(20));

/*function generateFibonacci(num) 
{
    let fibonacci_list = [0, 1];
    for(let i = 2; i < num; i++) 
    {
        let a = fibonacci_list[i];
        let b = fibonacci_list[i+1];
        let c = a + b;
        fibonacci_list.push(c);
    }
    return fibonacci_list

}
console.log(generateFibonacci(20))*/
