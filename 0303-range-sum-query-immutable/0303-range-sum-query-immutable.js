/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    console.log('nums',nums)
    this.val = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let result = 0;
    if (left <= right) {
        for (let i=left; i<=right; i++) {
            result += this.val[i];
        }   
    }
    
    return result
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */