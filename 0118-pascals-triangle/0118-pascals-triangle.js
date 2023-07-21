/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];
    for (let i=0; i<numRows; i++) {
        const arr = []
        for (let j=0; j<=i; j++) {
            if (arr.length == 0) {
                arr.push(j+1)
            } else {
                if (!result[i-1][j]) {
                    arr.push(1)
                } else {
                    arr.push(result[i-1][j-1]+result[i-1][j])
                }
            }   
        }
        result.push(arr)
    }

    return result
};