/*
 * 797. All Paths From Source to Target
 *
 * Q: https://leetcode.com/problems/all-paths-from-source-to-target/
 * A: https://leetcode.com/problems/all-paths-from-source-to-target/discuss/752917/Kt-Js-Py3-Cpp-DFS-%2B-BT
 */

let allPathsSourceTarget = (A, paths = []) => {
    let N = A.length,
        s = 0,
        t = N - 1;
    let go = (path, u = path[path.length - 1]) => {
        if (u == t)
            paths.push([...path]);                  // 🎯 target t reached
        else
            A[u].forEach(v => go(path.concat(v)));  // 🚀 explore edge u -> v with implicit ✅ 👀 forward-tracking + 🚫 👀 back-tracking
    };
    go([s]);
    return paths;
};
