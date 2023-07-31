/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const seenNums1 = []
    const seenNums2 = []
    const similarArr = []
    const uniqueArr = []
    const result = []

    for (let i=0; i<=nums1.length-1; i++) {
        if (!seenNums1[nums1[i]]) { 
            seenNums1[nums1[i]] = 0
        }

        seenNums1[nums1[i]]++ 
    }

    for (let i=0; i<=nums2.length-1; i++) {
        if (!seenNums2[nums2[i]]) { 
            seenNums2[nums2[i]] = 0
        }

        seenNums2[nums2[i]]++ 
    }

    if (nums1.length >= nums2.length) {
        for (const item1 of nums1) {
            for (const item2 of nums2) {
                if (item1 == item2) {
                    similarArr.push(item2)
                }
            }
        }
    } else {
        for (const item2 of nums2) {
            for (const item1 of nums1) {
                if (item2 == item1) {
                    similarArr.push(item1)
                }
            }
        }
    }

    for (const item of similarArr) {
        if (uniqueArr.length == 0) {
            uniqueArr.push(item)
        } else {
            let isDuplicate = false
            for (const unique of uniqueArr) {
                if (unique == item) {
                    isDuplicate = true
                }
            }

            if (!isDuplicate) {
                uniqueArr.push(item)
            }
        }
    }
    
    for (const item of uniqueArr) {
        if (seenNums1[item] <= seenNums2[item]) {
            for (let i=1; i<=seenNums1[item]; i++) {
                result.push(item)
            }
        } else {
            for (let i=1; i<=seenNums2[item]; i++) {
                result.push(item)
            }
        }
    }
    
    return result
};