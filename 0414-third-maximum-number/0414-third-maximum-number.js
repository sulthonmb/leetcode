/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let firstMaxNumber = null
    let secondMaxNumber = null
    let thirdMaxNumber = null

    for (const item of nums) {
        if (firstMaxNumber == null) {
            firstMaxNumber = item
        }

        if (item > firstMaxNumber) {
            firstMaxNumber = item
        }
    }

    for (const item of nums) {
        if ((item > secondMaxNumber || secondMaxNumber == null) && item < firstMaxNumber) {
            secondMaxNumber = item
        }
    }

    for (const item of nums) {
        if ((item > thirdMaxNumber || thirdMaxNumber == null) && item < secondMaxNumber && item < firstMaxNumber) {
            thirdMaxNumber = item
        }
    }


    console.log('firstMaxNumber', firstMaxNumber)
    console.log('secondMaxNumber', secondMaxNumber)
    console.log('thirdMaxNumber', thirdMaxNumber)

    if (thirdMaxNumber == null && secondMaxNumber == null) {
        return firstMaxNumber
    }

    if (thirdMaxNumber == null && secondMaxNumber) {
        return firstMaxNumber
    }

    return thirdMaxNumber
};