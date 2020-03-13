/*
 * 2. Add Two Numbers
 *
 * Q: https://leetcode.com/problems/add-two-numbers/
 * A: https://leetcode.com/problems/add-two-numbers/discuss/1093/a-few-solutions...
 */

 /**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = (a, b) => {
    let ans = new ListNode(), head = ans, carry = 0;
    for (;;) {
        head.val = (a ? a.val : 0) + (b ? b.val : 0) + carry;
        carry = Math.floor(head.val / 10);
        head.val %= 10;
        a = a ? a.next : null;
        b = b ? b.next : null;
        if (!a && !b && !carry)
            break;
        head = head.next = new ListNode();
    }
    return ans;
};