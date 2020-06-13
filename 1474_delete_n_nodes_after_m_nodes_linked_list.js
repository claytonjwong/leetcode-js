/*
 * 1474. Delete N Nodes After M Nodes of a Linked List
 *
 * Q: https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/
 * A: https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/discuss/685649/Javascript-and-C%2B%2B-solutions
 */

let deleteNodes = (head, save, skip) => {
    let pre = new ListNode(-1, head);
    for (;;) {
        for (let i = save; i-- && pre; pre = pre.next); // save ✅ previous i nodes
        if (!pre)
            break;
        let cur = pre.next;
        for (let j = skip; j-- && cur; cur = cur.next); // skip ❌ current j nodes
        pre.next = cur; // "remove" current j nodes
    }
    return head;
};