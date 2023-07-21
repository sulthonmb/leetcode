/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let doubleNumbers = []
    for (const item of nums) {
        const find = doubleNumbers.includes(item)
        if (find) {
            doubleNumbers = doubleNumbers.filter((data) => data != item)
        } else {
            doubleNumbers.push(item)
        }
    }

    return doubleNumbers[0]
};