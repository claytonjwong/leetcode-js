/*
 * 797. All Paths From Source to Target
 *
 * Q: https://leetcode.com/problems/all-paths-from-source-to-target/
 * A: https://leetcode.com/problems/all-paths-from-source-to-target/discuss/752917/Javascript-Python3-C%2B%2B-DFS-%2B-BT
 */

let allPathsSourceTarget = (adj, paths = []) => {
    let N = adj.length,
        s = 0,
        t = N - 1;
    let go = (u = s, path = [ s ]) => {
        if (u == t)
            paths.push([...path]);     // 🎯 target t reached
        else
            for (let v of adj[u])
                go(v, path.concat(v)); // 🚀 explore edge u -> v with implicit ✅ 👀 forward-tracking + 🚫 👀 back-tracking
    };
    go();
    return paths;
};