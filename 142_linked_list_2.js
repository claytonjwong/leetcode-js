/*
 * 142. Linked List Cycle II
 *
 * Q: https://leetcode.com/problems/linked-list-cycle-ii/
 * A: https://leetcode.com/problems/linked-list-cycle-ii/discuss/523559/Kt-Js-Py3-Cpp-Seen-ListNodes
 */

let detectCycle = (head, seen = new Set()) => {
    while (head) {
        if (seen.has(head))
            return head;
        seen.add(head);
        head = head.next;
    }
    return null;
};