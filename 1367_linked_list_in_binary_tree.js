/*
 * 1367. Linked List in Binary Tree
 *
 * Q: https://leetcode.com/problems/linked-list-in-binary-tree/
 * A: https://leetcode.com/problems/linked-list-in-binary-tree/discuss/527789/Javascript-and-C%2B%2B-solutions
 */

let isSubPath = (head, root) => {
    let go = (head, root) => {
        if (root == null)
            return false;
        if (step(head, root))
            return true;
        return go(head, root.left) || go(head, root.right);
    };
    let step = (head, root) => {
        if (head == null)
            return true;
        if (root == null || head.val != root.val)
            return false;
        return step(head.next, root.left) || step(head.next, root.right);
    };
    return go(head, root);
};

// let isSubPath = (head, root) => {
//     let go = (head, root) => !root ? false : step(head, root) ? true : go(head, root.left) || go(head, root.right);
//     let step = (head, root) => !head ? true : !root || head.val != root.val ? false : step(head.next, root.left) || step(head.next, root.right);
//     return go(head, root);
// };