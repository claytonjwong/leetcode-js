/**
 * @param {number[]} A
 * @return {number}
 */
var lengthOfLIS = (A, ans=1) => {
    if (A.length == 0) {
        return 0;
    }
    const N = A.length;
    var dp = Array(N).fill(1);
    for (var j=1; j < N; ++j) {
        for (var i=0; i < j; ++i) {
            if (A[i] < A[j]) {
                dp[j] = Math.max(dp[j], dp[i] + 1);
            }
        }
        ans = Math.max(ans, dp[j]);
    }
    return ans;
};

var A = [1,2,3];
const ans = lengthOfLIS(A);
console.log(ans);
