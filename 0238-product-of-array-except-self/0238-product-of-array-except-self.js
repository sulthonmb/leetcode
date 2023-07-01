/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const arrLeft = []
    const arrRight = []
    const arr = []
    let max = 0;

    for (let i=0; nums.length>i; i++) {
        arrLeft[i] = max

        if (i == 0) {
            max = nums[i]
        } else {
            max = max * nums[i]
        }
    }

    max = 0;
    for (let i=nums.length-1; 0 <= i; i--){
        arrRight[i] = max

        if (i == nums.length-1) {
            max = nums[i]
        } else {
            max = Math.imul(max, nums[i])
        }
    }

    for (let i=0; nums.length>i; i++) {
        if (i == 0 || i == nums.length-1) {
            arr.push(arrLeft[i] + arrRight[i])
        } else {
            arr.push(arrLeft[i] * arrRight[i])
        }
    }

    return arr
};