/* //https://edabit.com/challenge/GLbuMfTtDWwDv2F73 */
function countTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === true) {
        count++;
      }
    }
    return count;
  }