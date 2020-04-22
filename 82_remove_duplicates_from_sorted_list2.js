/*
 * 82. Remove Duplicates from Sorted List II
 *
 * Q: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 * A: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/discuss/590900/Javascript-and-C%2B%2B-solutions
 */

// I misunderstood the question, and removed duplicate duplicates (ie. [2,2] turns into [2])
// which is NOT what this question is asking about (ie. its expected for [2,2] to turn into [])
// let deleteDuplicates = head => {
//     let pre = head, cur = pre.next;
//     let seen = new Set([head.val]);
//     while (cur) {
//         if (pre.val != cur.val)
//             pre.next = cur, pre = cur;
//         cur = cur.next;
//     }
//     pre.next = null;
//     return head;
// };

// let deleteDuplicates = (head, A = [], seen = new Set(), dups = new Set()) => {
//     for (let cur = head; cur; cur = cur.next) {
//         let x = cur.val;
//         A.push(x)
//         if (!seen.has(x))
//             seen.add(x);
//         else
//             dups.add(x);
//     }
//     let unique = new ListNode(-1), cur = unique;
//     A.forEach(x => {
//         if (!dups.has(x))
//             cur.next = new ListNode(x), cur = cur.next;
//     });
//     return unique.next;
// };

let deleteDuplicates = head => {
    let sentinel = new ListNode(-1), ans = sentinel;
    let pre = head, cur = head;
    while (cur) {
        while (cur.next && cur.val == cur.next.val)
            cur = cur.next;
        if (pre == cur || pre.val != cur.val)
            ans.next = cur, ans = ans.next;
        pre = cur = cur.next;
    }
    ans.next = null;
    return sentinel.next;
};