/*
 * Weekly Contest 172
 * Jan 19, 2020 at 2:55 PM
 * Duration     Score    Finish Time    AC    Ranking
 * 1 h 30 m     12/18    0:46:03        3/4   1555/5191
 *
 * 1323. Maximum 69 Number
 * Q: https://leetcode.com/problems/maximum-69-number/
 * A: https://leetcode.com/problems/maximum-69-number/discuss/485286/Javascript-and-C%2B%2B-solutions
 *
 * 1324. Print Words Vertically
 * Q: https://leetcode.com/problems/print-words-vertically/
 * A: https://leetcode.com/problems/print-words-vertically/discuss/485298/Javascript-and-C%2B%2B-solutions
 *
 *
 * 1325. Delete Leaves With a Given Value
 * Q: https://leetcode.com/problems/delete-leaves-with-a-given-value/
 * A: https://leetcode.com/problems/delete-leaves-with-a-given-value/discuss/485307/Javascript-and-C%2B%2B-solutions
 *
 */

/**
 * @param {number} num
 * @return {number}
 */

 /*
let maximum69Number  = num => {
    let s = num.toString();
    let i = s.indexOf('6');
    if (i == -1)
        return num;
    return s.split('').map((c, j) => i == j ? '9' : c).join('');
};
console.log(maximum69Number(669));
*/

/*


"CIC",
"OSO",
"N M",
"T I",
"E N",
"S G",
"T"
*/

// # of words is the column length
// longest word is the row length


/**
 * @param {string} s
 * @return {string[]}
 */
/*
let printVertically = s => {
    let M = Math.max(...s.split(' ').map(w => w.length)),
        N = s.split(' ').length;
    let A = [...Array(M)].map(row => Array());
    for (let w of s.split(' '))
        for (let i = 0; i < M; ++i)
            A[i].push(i < w.length ? w[i] : ' ');
    return [...A].map(row => row.join('').trimEnd());
};
*/
// "TBONTB",
// "OEROOE",
// "   T"

// console.log(printVertically("TO BE OR NOT TO BE"));
// TOBEORNOTTOBE
// 012012012012012012
                            //  0123456789012345678
                            //  0  0  0  0  0  0


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */

 /*
let removeLeafNodes = (root, target) => {
    let go = node => {
        if (!node)
            return null;
        let L = go(node.left),
            R = go(node.right);
        if (!L) node.left = null;
        if (!R) node.right = null;
        if (!L && !R && node.val == target)
            return null;
        return node;
    };
    return go(root);
};
*/

/*
let removeLeafNodes = (root, target) => {
    let go = node => {
        if (!node) return null;
        if (!go(node.left)) node.left = null;
        if (!go(node.right)) node.right = null;
        return (!node.left && !node.right && node.val == target) ? null : node;
    };
    return go(root);
};
*/

/*
let removeLeafNodes = (root, target) => {
    if (!root) return null;
    if (!removeLeafNodes(root.left, target)) root.left = null;
    if (!removeLeafNodes(root.right, target)) root.right = null;
    return (!root.left && !root.right && root.val == target) ? null : root;
};
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(4);

let ans = removeLeafNodes(root, 2);
console.log(ans);


/*

create a list of intervals from the ranges -> [begin, end], [begin, end], ...

sort intervals by begin

if begin > 0
    return -1

track min begin, starting at 0
track max end

count overlapping intervals -> if min begin <= begin

*/