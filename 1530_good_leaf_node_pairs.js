/*
 * 1530. Number of Good Leaf Nodes Pairs
 *
 * Q: https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/
 * A: https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/discuss/758931/Javascript-Python3-C%2B%2B-post-order-Map-distance-count
 */

let countPairs = (root, T, cnt = 0) => {
    let go = (root, m = new Map()) => {
        if (!root)
            return m;
        let L = go(root.left),
            R = go(root.right);
        if (!root.left && !root.right)
            m.set(1, 1); // ⭐️ add leaf node to map with distance 1 and count 1
        for (let [dist1, cnt1] of L.entries())
            for (let [dist2, cnt2] of R.entries())
                if (dist1 + dist2 <= T) // 🎯 count "good" leaf node pairs
                    cnt += (cnt1 * cnt2);
        // 📌 propagate coalesced child node maps up the recursive stack (dist + 1 because parent is dist + 1 from child)
        for (let [dist, cnt] of L.entries()) m.set(dist + 1, cnt + (m.get(dist + 1) || 0));
        for (let [dist, cnt] of R.entries()) m.set(dist + 1, cnt + (m.get(dist + 1) || 0));
        return m;
    };
    go(root);
    return cnt;
};
