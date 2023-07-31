/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const length = nums.length 
    const result = []
    const seen = []

    for (const item of nums) {
        seen[item] = true
    }

    for (let i=1; i<=length; i++) {
        if (!seen[i]) {
            result.push(i)
        }
    }

    return result
};