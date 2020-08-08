/*
 * 508. Most Frequent Subtree Sum
 *
 * Q: https://leetcode.com/problems/most-frequent-subtree-sum/
 * A: https://leetcode.com/problems/most-frequent-subtree-sum/discuss/780522/Javascript-Python3-C%2B%2B-solutions
 */

let findFrequentTreeSum = (root, m = new Map(), max = 0) => {
    if (!root)
        return [];
    let go = root => {
        let L = root.left  ? go(root.left)  : 0,
            R = root.right ? go(root.right) : 0,
            sum = root.val + L + R;
        max = Math.max(max, m.set(sum, 1 + (m.get(sum) || 0)).get(sum));
        return sum;
    };
    go(root);
    return [...m.entries()].filter(([_, cnt]) => cnt == max).map(([sum, _]) => sum);
};
