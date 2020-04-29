/*
 * 985. Sum of Even Numbers After Queries
 *
 * Q: https://leetcode.com/problems/sum-of-even-numbers-after-queries/
 * A: https://leetcode.com/problems/sum-of-even-numbers-after-queries/discuss/602219/Javascript-and-C%2B%2B-solutions
 */

let sumEvenAfterQueries = (A, updates, ans = []) => {
    let even = x => !(x % 2);
    let sum = A.reduce((a, b) => a + (even(b) ? b : 0), 0);
    for (let [x, i] of updates) {
        sum -= even(A[i]) ? A[i] : 0;
        A[i] += x;
        sum += even(A[i]) ? A[i] : 0;
        ans.push(sum);
    }
    return ans;
};
console.log(sumEvenAfterQueries([1], [4, 0]));