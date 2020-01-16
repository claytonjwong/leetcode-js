/*
 * 1290. Convert Binary Number in a Linked List to Integer
 *
 * Q: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 * A: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/discuss/454225/Javascript-and-C%2B%2B-solutions
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
let getDecimalValue = (head, ans = 0) => {
    while (head) {
        ans <<= 1;
        ans |= head.val;
        head = head.next;
    }
    return ans;
};