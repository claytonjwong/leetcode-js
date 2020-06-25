/*
 * 95. Unique Binary Search Trees II
 *
 * Q: https://leetcode.com/problems/unique-binary-search-trees-ii/
 * A: https://leetcode.com/problems/unique-binary-search-trees-ii/discuss/705421/Javascript-and-C%2B%2B-solutions
 */

let generateTrees = N => {
    let go = (i, j, ans = []) => {
        if (j < i)
            return [ null ];
        for (let k = i; k <= j; ++k) {
            let L = go(i, k - 1),
                R = go(k + 1, j);
            for (let left of L)
                for (let right of R)
                    ans.push(new TreeNode(k, left, right));
        }
        return ans;
    };
    return N ? go(1, N) : [];
};
