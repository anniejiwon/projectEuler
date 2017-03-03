/*
Largest palindrome product
A palindromic number reads the same both ways. The largest 
palindrome made from the product of two 2-digit numbers 
is 9009 = 91 × 99.

Find the largest palindrome made from the product of 
two 3-digit numbers.
*/


const isPalindrome = input => {
    let checkPalindrome = String(input).split('').reverse()

    if (String(input).split('').join('') === checkPalindrome.join('')) return true
    return false
}


const largestPalindrome = () => {
    let largestNum = 0
    for (let num1 = 999; num1>100; num1--) {
        for (let num2 = 999; num2 >= 100; num2--) {
            if (isPalindrome(num1*num2) && largestNum < (num1*num2)) {
                largestNum = num1*num2
            }
        }
    }
    return largestNum
}

console.log(largestPalindrome())
