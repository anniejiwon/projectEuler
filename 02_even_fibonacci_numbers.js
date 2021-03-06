/*
Each new term in the Fibonacci sequence is generated by adding the 
previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do 
not exceed four million, find the sum of the even-valued terms.
*/



//fibonacci memoization - this avoids using two recursive calls to find the nth fib

//store the data for expensive function calls in a cache/global
let globalFibs = []

const fibonacci = n => {
    if (n === 0) return 1
    if (n === 1) return 2
    if (n > 1) {
        if (!globalFibs[n-1]) globalFibs[n-1] = fibonacci(n-1)
        if (!globalFibs[n-2]) globalFibs[n-2] = fibonacci(n-2)
    }
    return globalFibs[n-1] + globalFibs[n-2]
}


const sumEvenFibs = () => {
    let start = 0
    while (fibonacci(start) <= 4000000) {
        globalFibs.push(fibonacci(start++))   
    }

    return globalFibs.filter(num => {
        if (num % 2 === 0) return num
    }).reduce((start,next) => {return start+next},0)
}



console.log(sumEvenFibs())
