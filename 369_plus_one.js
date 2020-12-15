/*
 * 369. Plus One Linked List
 *
 * Q: https://leetcode.com/problems/plus-one-linked-list/
 * A: https://leetcode.com/problems/plus-one-linked-list/discuss/973286/Kt-Js-Py3-Cpp-Recursive-solutions
 */

let plusOne = head => {
    let go = node => {
        if (!node)
            return false;
        let carry = go(node.next);
        if (carry || !node.next) {
            if (++node.val == 10) {
                node.val = 0;
                return true;
            }
        }
        return false;
    };
    if (go(head)) {
        let pre = new ListNode(1);
        pre.next = head;
        return pre;
    }
    return head;
};
