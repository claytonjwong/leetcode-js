/*
 * 708. Insert into a Sorted Circular Linked List
 *
 * Q: https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/
 * A: https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/discuss/859467/Javascript-Python3-C%2B%2B-Simple-solutions
 */

let insert = (head, x) => {
    let alt = new Node(x); alt.next = alt;
    if (!head)
        return alt;
    let pre = head,
        cur = head.next;
    let max = head;
    let ok = x => pre.val <= x && x <= cur.val;
    while (!ok(x) && cur != head) {
        if (max.val <= cur.val)
            max = cur;
        pre = pre.next;
        cur = cur.next;
    }
    if (!ok(x)) {
        pre = max;
        cur = max.next;
    }
    alt.next = cur;
    pre.next = alt;
    return head;
};
