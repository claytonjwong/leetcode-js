/*
Apple Online Assessment
Completed April 21, 2020 8:14 AM
Time Spent: 16 minutes 33 seconds
Time Allotted: 1 hour
*/

/*
 * 246. Strobogrammatic Number
 *
 * Q: https://leetcode.com/problems/strobogrammatic-number/
 * A: https://leetcode.com/problems/strobogrammatic-number/discuss/590845/Javascript-and-C%2B%2B-solutions
 */
let isStrobogrammatic = s => {
    let rotate = x => {
        switch (x) {
            case 0: return 0;
            case 1: return 1;
            case 6: return 9;
            case 8: return 8;
            case 9: return 6;
        }
        return -1;
    }
    let A = s.split('').map(Number);
    let N = A.length;
    for (let i = 0, j = N - 1; i <= j; ++i, --j)
        if (rotate(A[i]) != A[j])
            return false;
    return true;
};

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
        if (pre == cur)
            ans.next = cur, ans = ans.next;
        pre = cur = cur.next;
    }
    ans.next = null;
    return sentinel.next;
};