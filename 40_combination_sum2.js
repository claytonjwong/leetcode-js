/*
 * 40. Combination Sum II
 *
 * Q: https://leetcode.com/problems/combination-sum-ii/
 * A: https://leetcode.com/problems/combination-sum-ii/discuss/506360/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

let combinationSum2 = (A, target, ans = []) => {
    let dfs = (sum, start = 0, path = [], seen = new Set()) => {
        if (sum == 0) {
            let sorted = [...path];
            sorted.sort((a, b) => a - b);
            let key = sorted.join();
            if (!seen.has(key))
                ans.push([...path]);
            seen.add(key);
            return;
        }
        for (let i = start; i < A.length; ++i) {
            if (sum - A[i] < 0)
                continue;
            path.push(A[i]);
            dfs(sum - A[i], i + 1, path, seen);
            path.pop();
        }
    };
    dfs(target);
    return ans;
};