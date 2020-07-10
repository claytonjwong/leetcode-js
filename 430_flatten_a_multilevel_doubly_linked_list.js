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

// iterative
let flatten = (head, stack = []) => {
    let sentinel = new Node(-1, null, head, null);
    let pre = sentinel,
        cur = sentinel.next;
    while (cur || stack.length) {
        if (!cur) { // ⭐️ done exploring level, link tail node of this level to next node of level above 👆
            cur = stack.pop(); // next node of level above 🤔
            pre.next = cur; // 🔗 tail node of previous level 👉 next node of current level
            cur.prev = pre; // 🔗 tail node of previous level 👈 next node of current level
        }
        if (cur.child) { // start exploring level below 👇, store next node of current level 🤔
            if (cur.next)
                stack.push(cur.next);
            cur.next = cur.child; // 🔗 current node 👉 child of current node
            cur.child.prev = cur; // 🔗 current node 👈 child of current node
            cur.child = null; // 🚫 remove child to flatten list
        }
        pre = cur;
        cur = cur.next;
    };
    return head;
};

// recursive
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