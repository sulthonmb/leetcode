/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let tmp = x.toString().split('')
    let result = false
    for(let i=0;i<tmp.length;i++){
        if(tmp[i] == tmp[tmp.length-(i+1)]) result = true 
        else return false
    }
    return result
};