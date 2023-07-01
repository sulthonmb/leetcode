/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let arr = []

    for (let j=0; nums.length>j; j++) {
        console.log('j', j)
        console.log('nums[j]', nums[j])
        console.log('arr[nums[j]]',arr[nums[j]])

        if (arr[nums[j]] != undefined && Math.abs(arr[nums[j]] - j) <= k) {
            console.log(' Math.abs(arr[nums[j]] - j)', Math.abs(arr[nums[j]] - j))
            return true
        }

        arr[nums[j]] = j
    }

    return false
}

/* Sliding Window */
var containsNearbyDuplicateWithSlidingWindow = function(nums, k) {
    let left = 0
    let right = 1
    
    while (left <= nums.length-2) {
        if (right == nums.length-1 && left == nums.length-2 && nums[left] != nums[right]) {
            break;
        }

        if (nums[left] == nums[right] && left != right) {
            if (Math.abs(left - right) <= k) {
                return true
            } else {
                left++
                right = left+1
            }
        }

        if (nums[left] != nums[right] && right == nums.length-1) {
            left++
            right = left+1
        }

        if (nums[left] != nums[right] && right != nums.length-1) {
            right++
        }
    }

    return false
}

