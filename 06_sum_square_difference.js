/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const sumSquareDifference = (num1,num2) => {
    let nums1 = range(num1,num2)
    let nums2 = range(num1,num2)

    for (let i=0; i<nums1.length; i++) {
        nums1[i] = nums1[i]*nums1[i] 
    }
    
    nums1 = nums1.reduce((start,next) => {
        return start + next
    },0)
    nums2 = nums2.reduce((start,next) => {
        return start + next
    },0)

    return Math.abs(nums1-(nums2*nums2))
}

const range = (num1,num2) => {
    let result = []
    while(num1 <= num2) {
        result.push(num1++)
    }
    return result
}


console.log(sumSquareDifference(0,100))
