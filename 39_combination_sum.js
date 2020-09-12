/*
 * 39. Combination Sum
 *
 * Q: https://leetcode.com/problems/combination-sum/
 * A: https://leetcode.com/problems/combination-sum/discuss/506331/Javascript-Python3-C%2B%2B-DFS-%2B-BT-solutions
 */

let combinationSum = (A, T, paths = []) => {
    let N = A.length;
    let go = (start = 0, t = T, path = []) => {
        if (!t) {
            paths.push([...path]);                   // 🎯 unique path with target sum T
            return;
        }
        for (let i = start; i < N; ++i)
            if (0 <= t - A[i])
                go(i, t - A[i], path.concat(A[i]));  // 🚀 recursively explore path with implicit 👀 forward/back-tracking
        return paths;
    };
    return go();
};
