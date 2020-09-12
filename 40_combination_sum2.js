/*
 * 40. Combination Sum II
 *
 * Q: https://leetcode.com/problems/combination-sum-ii/
 * A: https://leetcode.com/problems/combination-sum-ii/discuss/506360/Javascript-Python3-C%2B%2B-DFS-%2B-BT-solutions
 */

let combinationSum2 = (A, T, seen = new Set(), paths = []) => {
    let N = A.length;
    let go = (start = 0, t = T, path = []) => {
        if (!t) {
            let key = path.sort((a, b) => a - b).join(',');  // 🎯 unique path with target sum T
            if (!seen.has(key))
                paths.push([...path]);
            seen.add(key);
            return;
        }
        for (let i = start; i < A.length; ++i)
            if (0 <= t - A[i])
                go(i + 1, t - A[i], path.concat(A[i]))       // 🚀 recursively explore path with implicit 👀 forward/back-tracking
        return paths
    };
    return go();
};
