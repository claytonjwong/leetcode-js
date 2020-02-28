/*
 * 141. Linked List Cycle
 *
 * Q: https://leetcode.com/problems/linked-list-cycle/
 * A: https://leetcode.com/problems/linked-list-cycle/discuss/523398/Javascript-and-C%2B%2B-solutions
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
 * @return {boolean}
 */
var hasCycle = head => {
    let slow = head,
        fast = head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast)
            return true;
    }
    return false;
};