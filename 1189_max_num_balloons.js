/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const cnt = [...text].reduce((A, ch) => {
    A[ch] = (A[ch] || 0) + 1;
    return A;
  }, {});
  const ans = Math.min(cnt['b'], cnt['a'], cnt['l'] / 2, cnt['o'] / 2, cnt['n']);
  return ans ? Math.floor(ans) : 0;
};

const ans = maxNumberOfBalloons('balon');
console.log(ans);