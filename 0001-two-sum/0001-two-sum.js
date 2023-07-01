/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []

    for (let i=0; nums.length>i; i++) {
        let rest = target - nums[i]
        for (let j=i+1; nums.length>j; j++) {
            if (nums[j] == rest) {
                result.push(i)
                result.push(j)
                break
            }
        }

        if (result.length >= 2) {
            break;
        }
    }

    return result
};