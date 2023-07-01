/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const arr = s.split('')
    if (arr.length == 0 || arr.length == 1){
        return arr.length
    }

    let left = 0
    let right = 1
    let max = 0
    
    while (right <= arr.length) {
        if (right <= max) {
            right++
            continue
        }
        
        let newArr = arr.slice(left, right)
        const checkUnique = isUnique(newArr)
        if (checkUnique) {
            max = newArr.length
            right++
        } else {
            left++
            right++
        }        
    }

    return max
};

const isUnique = (arr) => {
    let temp = []
    for (const item of arr) {
        const find = temp.find((itemTemp) => itemTemp == item)
        if (find) {
            return false
        } else {
            temp.push(item)
        }
    }

    return true
}