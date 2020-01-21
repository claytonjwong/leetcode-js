/*
 * 589. N-ary Tree Preorder Traversal
 *
 * Q: https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 * A: https://leetcode.com/problems/n-ary-tree-preorder-traversal/discuss/486422/Javascript-and-C%2B%2B-solutions
 */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Node {
    constructor(val, children) {
        this.val = val;
        this.children = children;
    }
}

/**
 * @param {Node} root
 * @return {number[]}
 */

let preorder = (root, ans = []) => {
    let queue = [root];
    while (queue.length > 0) {
        let cur = queue[0]; queue.shift();
        if (!cur)
            continue;
        ans.push(cur.val);
        queue.unshift(...cur.children);
    }
    return ans;
};


let root = new Node(1, []);
root.children.push(new Node(3, []));
root.children.push(new Node(2, []));
root.children.push(new Node(4, []));
root.children[0].children.push(new Node(5, []))
root.children[0].children.push(new Node(6, []));

let ans = preorder(root);
console.log(ans);