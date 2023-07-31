/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const uniqueArr = []
    const result = []

    if (nums1.length >= nums2.length) {
        for (const item1 of nums1) {
            for (const item2 of nums2) {
                if (item1 == item2) {
                    uniqueArr.push(item2)
                }
            }
        }
    } else {
        for (const item2 of nums2) {
            for (const item1 of nums1) {
                if (item2 == item1) {
                    uniqueArr.push(item1)
                }
            }
        }
    }

    for (const item of uniqueArr) {
        if (result.length == 0) {
            result.push(item)
        } else {
            let isDuplicate = false
            for (res of result) {
                if (res == item) {
                    isDuplicate = true
                }
            }

            if (!isDuplicate) {
                result.push(item)
            }
        }
    }

    console.log('uniqueArr',uniqueArr)
    console.log('result', result)

    return result
};