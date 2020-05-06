/*
 * 430. Flatten a Multilevel Doubly Linked List
 *
 * Q: https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 * A: https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/discuss/615199/Javascript-and-C%2B%2B-solutions
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.child = null;
    }
};

let flatten = (head) => {
    let go = (node = head) => {
        let cur = node,
            pre = cur;
        while (cur) {
            let next = cur.next;
            if (!cur.child) {
                pre = cur, cur = cur.next;
                continue;
            }
            cur.child.prev = cur, cur.next = cur.child; // head of child list
            let last = go(cur.child);
            if (next)
                next.prev = last, last.next = next; // tail of child list
            cur.child = null;
            pre = cur = last;
        }
        return pre; // return the tail
    };
    if (head)
        go();
    return head;
};