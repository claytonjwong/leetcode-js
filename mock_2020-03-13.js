/*

Your interview score of 6.76/10 beats 72% of all users.

*/

/*
 * 13. Roman to Integer
 *
 * Q: https://leetcode.com/problems/roman-to-integer/
 * A: https://leetcode.com/problems/roman-to-integer/discuss/469658/Javascript-and-C%2B%2B-solutions
 */

/*

right-to-left

add and track last, if last is bigger than cur, subtract cur otherwise add cur

*/

/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = (s, pre = 0, ans = 0) => {
    let m = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    for (let c of s.split('').reverse().join('')) {
        cur = m[c];
        ans += cur < pre ? -cur : cur;
        pre = cur;
    }
    return ans;
};

/*
 * 2. Add Two Numbers
 *
 * Q: https://leetcode.com/problems/add-two-numbers/
 * A: https://leetcode.com/problems/add-two-numbers/discuss/1093/a-few-solutions...
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

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

let a = new ListNode(5);
// a.next = new ListNode(4);
// a.next.next = new ListNode(3);

let b = new ListNode(5);
// b.next = new ListNode(6);
// b.next.next = new ListNode(4);

let ans = addTwoNumbers(a, b);
while (ans) {
    console.log(`${ans.val} ->`)
    ans = ans.next;
}