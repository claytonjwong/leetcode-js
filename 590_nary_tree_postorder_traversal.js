/*
 * 590. N-ary Tree Postorder Traversal
 *
 * Q: https://leetcode.com/problems/n-ary-tree-postorder-traversal/
 * A: https://leetcode.com/problems/n-ary-tree-postorder-traversal/discuss/487687/Javascript-and-C%2B%2B-solutions
 */

 /**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Node {
    constructor(val) {
        this.val = val;
        this.children = null;
    }
}

/**
 * @param {Node} root
 * @return {number[]}
 */

/*
let postorder = (root, ans = []) => {
    let go = root => {
        if (!root)
            return;
        for (let child of root.children)
            go(child);
        ans.push(root.val);
    };
    go(root);
    return ans;
};
*/

let postorder = (root, ans = []) => {
    let stack = root ? [root] : [];
    while (stack.length > 0) {
        let cur = stack[stack.length - 1];
        if (!cur.children) {
            ans.push(cur.val);
            stack.pop();
        } else {
            stack.push(...cur.children.filter(child => child != null).reverse());
            cur.children = null;
        }
    }
    return ans;
}

let root = new Node(1);
root.children = [new Node(3), new Node(2), new Node(4)];
root.children[0].children = [new Node(5), new Node(6)];

console.log(postorder(root));