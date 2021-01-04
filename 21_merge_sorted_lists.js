/*
 * 21. Merge Two Sorted Lists
 *
 * Q: https://leetcode.com/problems/merge-two-sorted-lists/
 * A: https://leetcode.com/problems/merge-two-sorted-lists/discuss/505426/Kt-Js-Py3-Cpp-Cherry-Pick-Minimum
 */

let mergeTwoLists = (A, B) => {
    let sentinel = new ListNode(-1),
        tail = sentinel;
    while (A && B) {
        if (A.val < B.val)
            tail.next = A, A = A.next;
        else
            tail.next = B, B = B.next;
        tail = tail.next;
    }
    if (A) tail.next = A;
    if (B) tail.next = B;
    return sentinel.next;
};
