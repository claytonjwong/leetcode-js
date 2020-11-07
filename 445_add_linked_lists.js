/*
 * 445. Add Two Numbers II
 *
 * Q: https://leetcode.com/problems/add-two-numbers-ii/
 * A: https://leetcode.com/problems/add-two-numbers-ii/discuss/927269/Kt-Js-Py3-Cpp-Recursive-Reverse
 */

let addTwoNumbers = (A, B, carry = 0) => {
    let rev = (cur, pre = null) => {
        if (!cur.next) {
            cur.next = pre;
            return cur;
        }
        let next = cur.next;
        cur.next = pre;
        return rev(next, cur);
    };
    let a = rev(A),
        b = rev(B),
        ans = new ListNode(-1),
        cur = ans;
    while (a || b) {
        let c = (a ? a.val : 0) + (b ? b.val : 0) + carry;
        carry = 10 <= c; c %= 10;
        cur.next = new ListNode(c);
        cur = cur.next;
        a = a?.next;
        b = b?.next;
    }
    if (carry)
        cur.next = new ListNode(1);
    return rev(ans.next);
};
