/*
 * https://leetcode.com/contest/weekly-contest-180
 *
 * Rank            Name            Score    Finish Time     Q1 (3)    Q2 (4)       Q3 (4)    Q4 (6)
 * 2895 / 10047    claytonjwong    11       1:02:28         0:06:31   0:57:28 *1   0:23:30
 */


/*
 * 1380. Lucky Numbers in a Matrix
 *
 * Q: https://leetcode.com/problems/lucky-numbers-in-a-matrix/
 * A: https://leetcode.com/problems/lucky-numbers-in-a-matrix/discuss/539707/Javascript-and-C%2B%2B-solutions
 */
let luckyNumbers  = (A, ans = []) => {
    let M = A.length,
        N = A[0].length;
    let min = Array(M).fill(Infinity);
    let max = Array(N).fill(-Infinity);
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            min[i] = Math.min(min[i], A[i][j]),
            max[j] = Math.max(max[j], A[i][j]);
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (min[i] == max[j]) // 🍀 lucky number 🍀
                ans.push(A[i][j]);
    return ans;
};
let A = [
    [3,7,8],
    [9,11,13],
    [15,16,17]
];
console.log(luckyNumbers(A));

let B = [[1,10,4,2],[9,3,8,7],[15,16,17,12]];
console.log(luckyNumbers(B));
console.log(luckyNumbers([[7,8],[1,2]]));


/*
 * 1382. Balance a Binary Search Tree
 *
 * Q: https://leetcode.com/problems/balance-a-binary-search-tree/
 * A: https://leetcode.com/problems/balance-a-binary-search-tree/discuss/540272/Javascript-and-C%2B%2B-solutions
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

let balanceBST = (root, A = []) => {
    let go = root => {
        if (root.left) go(root.left);
        A.push(root.val);
        if (root.right) go(root.right);
    };
    go(root);
    let bal = (root = null, i = 0, j = A.length - 1) => {
        let k = Math.floor((i + j) / 2);
        root = new TreeNode(A[k]);
        root.left  = i < k ? bal(root, i, k - 1) : null;
        root.right = k < j ? bal(root, k + 1, j) : null;
        return root;
    };
    return bal();
};

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.right = new TreeNode(3);
root.right.right.right = new TreeNode(4);
let ans = balanceBST(root);
let go = (root) => {
    if (root.left) go(root.left);
    console.log(root.val);
    if (root.right) go(root.right);
};


/*
 * 1381. Design a Stack With Increment Operation
 *
 * Q: https://leetcode.com/problems/design-a-stack-with-increment-operation/
 * A: https://leetcode.com/problems/design-a-stack-with-increment-operation/discuss/539695/Javascript-and-C%2B%2B-solutions
 */

class CustomStack {
    constructor(maxSize) {
        this.cap = maxSize;
        this.A = [];
    }
    push(x) {
        if (this.A.length < this.cap)
            this.A.push(x);
    }
    pop() {
        if (this.A.length == 0)
            return -1;
        return this.A.pop();
    }
    increment(k, val) {
        for (let i = 0; i < k && i < this.A.length; ++i)
            this.A[i] += val;
    }
}