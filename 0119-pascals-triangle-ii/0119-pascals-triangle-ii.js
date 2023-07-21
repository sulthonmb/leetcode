/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const result = []
  for (let i=0; i<=rowIndex; i++) {
      const arr = []
      for (let j=0; j<=i; j++) {
          if (arr.length == 0) {
              arr.push(j+1)
          } else {
              if (!result[i-1][j]) {
                  arr.push(1)
              } else {
                  arr.push(result[i-1][j-1] + result[i-1][j])
              }
          }
      }
      result.push(arr)
  }  

  return result[result.length-1]
};