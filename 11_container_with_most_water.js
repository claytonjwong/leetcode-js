/*
 * 11. Container With Most Water
 *
 * Q: https://leetcode.com/problems/container-with-most-water/
 * A: https://leetcode.com/problems/container-with-most-water/discuss/469278/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = A => {
    let i = 0, j = A.length - 1, ans = 0;
    while (i < j) {
        ans = Math.max(ans, Math.min(A[i], A[j]) * (j - i));
        if (A[i] < A[j])
            ++i;
        else
            --j;
    }
    return ans;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));