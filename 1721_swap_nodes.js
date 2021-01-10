/*
 * 1721. Swapping Nodes in a Linked List
 *
 * Q: https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
 * A: https://leetcode.com/problems/swapping-nodes-in-a-linked-list/discuss/1009772/Kt-Js-Py3-Cpp-Swap-based-upon-length-N
 */

let swapNodes = (head, K, N = 0) => {
    for (let cur = head; cur; cur = cur.next, ++N);
    let i = K - 1,
        j = N - K;
    let a = head,
        b = head;
    while (i--) a = a.next;
    while (j--) b = b.next;
    [a.val, b.val] = [b.val, a.val];
    return head;
};
