/*
 * 1441. Build an Array With Stack Operations
 *
 * Q: https://leetcode.com/problems/build-an-array-with-stack-operations/
 * A: https://leetcode.com/problems/build-an-array-with-stack-operations/discuss/624724/Javascript-and-C%2B%2B-solutions
 */
let buildArray = (A, n, ans = []) => {
    for (let i = 0, j = 1; i < A.length; ++j)
        if (A[i] == j)
            ans.push('Push'), ++i;   // remaining number ✅
        else
            ans.push('Push', 'Pop'); // missing number ❌
    return ans;
};
