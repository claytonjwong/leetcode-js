/*
 * 1519. Number of Nodes in the Sub-Tree With the Same Label
 *
 * Q: https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/
 * A: https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/discuss/746462/Javascript-Python3-C%2B%2B-post-order-traversal
 */

let countSubTrees = (N, E, keys, seen = new Set()) => {
    let ans = Array(N).fill(0);
    let adj = [...Array(N)].map(_ => []);
    E.forEach(([u, v]) => {
        adj[u].push(v);
        adj[v].push(u);
    });
    let go = (u = 0, next = Array(26).fill(0)) => {
        seen.add(u); // seen u 👀
        for (let v of adj[u]) {
            if (seen.has(v)) // 🚫 skip previously seen parent 👀
                continue;
            let cur = go(v); // 🚀 explore child v 
            for (let key = 0; key < 26; ++key) // 🎯 post-order accumulate keys for child node v
                next[key] += cur[key];
        }
        let key = keys[u].charCodeAt(0) - 'a'.charCodeAt(0);
        ans[u] = ++next[key]; // 🎯 post-order increment key for current node u
        return next;
    };
    go();
    return ans;
};
