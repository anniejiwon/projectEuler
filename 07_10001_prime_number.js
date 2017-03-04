/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
we can see that the 6th prime is 13.

What is the 10001st prime number?
*/

const isPrime = num => {
    if (num < 2) return false
    if (num ===2) return true
    for (let i=2; i<num; i++) {
        if (num%i === 0) return false
    } 
    return true
}

const nthPrimeNumber = num => {
    let primes = []
    let start = 1
    while (primes.length < num) {
        if (isPrime(start)) primes.push(start++)
        else start++
    }
    return primes[primes.length-1]
}

console.log(nthPrimeNumber(10001))
