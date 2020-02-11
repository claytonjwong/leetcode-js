/*
 * 39. Combination Sum
 *
 * Q: https://leetcode.com/problems/combination-sum/
 * A: https://leetcode.com/problems/combination-sum/discuss/506331/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

let combinationSum = (A, target, ans = []) => {
    let dfs = (sum, start = 0, path = []) => {
        if (sum == 0) {
            ans.push([...path]);
            return;
        }
        for (let i = start; i < A.length; ++i) {
            if (sum - A[i] < 0)
                continue;
            path.push(A[i]);
            dfs(sum - A[i], i, path);
            path.pop();
        }
    };
    dfs(target);
    return ans;
};

let ans = combinationSum([2,3,5], 8);
for (let row of ans)
    console.log(row);