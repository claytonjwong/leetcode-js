/*
 * 1315. Sum of Nodes with Even-Valued Grandparent
 * 
 * Q: https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
 * A: https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/discuss/479681/Javascript-and-C%2B%2B-solutions
 */

let sumEvenGrandparent = (root, sum = 0) => {
    let childSum = (node, sum = 0) => {
        if (root.val % 2 != 0)
            return 0;
        if (node.left) sum += node.left.val;
        if (node.right) sum += node.right.val;
        return sum;
    };
    if (root.left) sum += childSum(root.left) + sumEvenGrandparent(root.left);
    if (root.right) sum += childSum(root.right) + sumEvenGrandparent(root.right);
    return sum;
};