/*
 * 237. Delete Node in a Linked List
 *
 * Q: https://leetcode.com/problems/delete-node-in-a-linked-list/
 * A: https://leetcode.com/problems/delete-node-in-a-linked-list/discuss/666354/Javascript-and-C%2B%2B-solutions
 */

let deleteNode = node => {
    node.val = node.next.val;
    node.next = node.next.next;
};