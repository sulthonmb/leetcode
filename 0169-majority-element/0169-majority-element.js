/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let max = 0
    let result = 0

    const uniqueNums = []

    for (const item of nums) {
        if (uniqueNums.includes(item)) {
            continue
        } else {
            const count = nums.filter((data) => data == item).length
            uniqueNums.push(item)
            if (count > max) {
                max = count
                result = item
            }
        }
    }

    return result
};