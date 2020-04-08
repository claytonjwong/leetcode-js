/*
 * 876. Middle of the Linked List
 *
 * Q: https://leetcode.com/problems/middle-of-the-linked-list/
 * A: https://leetcode.com/problems/middle-of-the-linked-list/discuss/569337/Javascript-and-C%2B%2B-solutions
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let middleNode = head => {
    let slow = head,
        fast = head;
    while (fast && fast.next)
        slow = slow.next,
        fast = fast.next.next;
    return slow;
};