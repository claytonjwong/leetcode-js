/*
 * 2. Add Two Numbers
 *
 * Q: https://leetcode.com/problems/add-two-numbers/
 * A: https://leetcode.com/problems/add-two-numbers/discuss/1093/Kt-Js-Py3-Cpp-Concise-solutions
 */

let addTwoNumbers = (A, B, carry = false) => {
    let ans = new ListNode(-1),
        cur = ans;
    while (A || B || carry) {
        let a = A ? A.val : 0,
            b = B ? B.val : 0,
            c = a + b + Number(carry);
        carry = 10 <= c, c %= 10;
        cur.next = new ListNode(c), cur = cur.next;
        A = A?.next;
        B = B?.next;
    }
    return ans.next;
};
