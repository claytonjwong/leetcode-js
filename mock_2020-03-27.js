/*
Facebook- Phone Interview
Completed March 27, 2020 6:10 AM
49%
Your interview score of 5.54/10 beats 49% of all users.
Time Spent: 22 minutes 37 seconds
Time Allotted: 1 hour 30 minutes
*/

/*
 * 111. Minimum Depth of Binary Tree
 *
 * Q: https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * A: https://leetcode.com/problems/minimum-depth-of-binary-tree/discuss/553010/Javascript-and-C%2B%2B-solutions
 */

var minDepth = root => {
    let go = (root, depth = 1) => {
        if (!root.left && !root.right)
            return depth;
        let L = root.left  ? go(root.left,  depth + 1) : Infinity,
            R = root.right ? go(root.right, depth + 1) : Infinity;
        return Math.min(L, R);
    };
    return root ? go(root) : 0;
};


/*
 * 398. Random Pick Index
 *
 * Q: https://leetcode.com/problems/random-pick-index/
 * A: https://leetcode.com/problems/random-pick-index/discuss/553004/Javascript-and-C%2B%2B-solutions
 */

class Solution {
    constructor(A) {
        this.m = new Map();
        A.forEach((x, i) => this.m.set(x, this.m.has(x) ? this.m.get(x).concat(i) : [i]));
    }
    pick(target) {
        let index = this.m.get(target);
        let i = Math.floor(Math.random() * index.length);
        return index[i];
    }
}