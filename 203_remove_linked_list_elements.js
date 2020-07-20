/*
 * 203. Remove Linked List Elements
 *
 * Q: https://leetcode.com/problems/remove-linked-list-elements/
 * A: https://leetcode.com/problems/remove-linked-list-elements/discuss/745857/Javascript-Python3-C%2B%2B-iterative-with-sentinel
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

let removeElements = (head, T) => {
    let sentinel = new ListNode(-1, head);
    let pre = sentinel,
        cur = head;
    for (;;) {
        while (cur && cur.val == T)
            cur = cur.next; // 🚫 remove cur val == target T 🎯
        pre = pre.next = cur;
        if (!cur)
            break;
        cur = cur.next;
    }
    return sentinel.next;
};
