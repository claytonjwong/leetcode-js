/*
 * 485. Max Consecutive Ones
 *
 * Q: https://leetcode.com/problems/max-consecutive-ones/
 * A: https://leetcode.com/problems/max-consecutive-ones/discuss/530121/Javascript-and-C%2B%2B-solutions
 */

// let findMaxConsecutiveOnes = A => A.map(x => x.toString()).join('').split('0').sort().reverse()[0].length;

let findMaxConsecutiveOnes = (A, ans = 0) => {
    for (let i = 0, cur = 0; i < A.length; ++i)
        ans = Math.max(ans, cur = A[i] == 0 ? 0 : cur + 1);
    return ans;
};