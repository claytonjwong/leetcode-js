/*
 * 82. Remove Duplicates from Sorted List II
 *
 * Q: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 * A: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/discuss/590900/Kt-Js-Py3-Cpp-Single-Pass
 */

let deleteDuplicates = head => {
    let sentinel = new ListNode(-123, head),
        ans = sentinel,
        pre = head,
        cur = head;
    while (cur) {
        while (cur?.val == cur?.next?.val)
            cur = cur.next;
        if (pre == cur)
            ans.next = cur, ans = ans.next;
        pre = cur = cur.next;
    }
    ans.next = null;
    return sentinel.next;
};
