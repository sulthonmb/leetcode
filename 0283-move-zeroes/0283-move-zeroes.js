/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let indexZero = null;
    for (let i=0; i<=nums.length-1; i++) {
        if (nums[i] == 0) {
            if (indexZero == null) {
                indexZero = i;
            }
        } else {
            if (indexZero != null) {
                nums[indexZero] = nums[i];
                nums[i] = 0
                i = indexZero
                indexZero = null
            }
            
        }
    }

    console.log('nums', nums)
};