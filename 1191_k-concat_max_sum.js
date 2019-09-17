/**
 * @param {number[]} A
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = (A, k) => {
  const MOD = 1e9 + 7,
        INF = 1e4 + 1;
  var kadane = (A, sum=0, ans=-INF) => { // https://en.wikipedia.org/wiki/Maximum_subarray_problem
    for (let x of A) {
      sum = Math.max(x, sum + x);
      ans = Math.max(ans, sum);
    }
    return [sum, ans];
  };
  var [sum, ans1] = kadane(A);
  var [sum, ans2] = kadane(A, sum);
  var [sum, ans3] = kadane(A, sum);
  const delta1 = ans2 - ans1,
        delta2 = ans3 - ans2;
  return k == 1 || delta1 == 0 ? ans1 : delta2 == 0 ? ans2 : ans1 + (delta1 * (k-1) % MOD);
};

const ans = kConcatenationMaxSum([-1,-2], 7);
console.log(ans);
