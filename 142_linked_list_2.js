/*
 * 142. Linked List Cycle II
 *
 * Q: https://leetcode.com/problems/linked-list-cycle-ii/
 * A: https://leetcode.com/problems/linked-list-cycle-ii/discuss/523559/Javascript-and-C%2B%2B-solutions
 */

let detectCycle = (head, i = 0, seen = new Set()) => {
    while (head) {
        if (seen.has(head))
            return head;
        seen.add(head);
        head = head.next;
    }
    return null;
};