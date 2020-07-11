/*
 * 78. Subsets
 *
 * Q: https://leetcode.com/problems/subsets/
 * A: https://leetcode.com/problems/subsets/discuss/731155/Javascript-and-C%2B%2B-solutions
 */

let subsets = (A, ans = []) => {
    let N = A.length;
    let go = (i = 0, path = []) => {
        if (i == N) {
            ans.push([...path]); // 🛑 base case: add the unique path onto the answer
            return;
        }
        go(i + 1, path.concat(A[i])); // ✅ with A[i]
        go(i + 1, path);              // 🚫 without A[i]
    };
    go();
    return ans;
};
