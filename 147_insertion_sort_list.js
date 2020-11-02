/*
 * 147. Insertion Sort List
 *
 * Q: https://leetcode.com/problems/insertion-sort-list/
 * A: https://leetcode.com/problems/insertion-sort-list/discuss/920698/Kt-Js-Py3-Cpp-Sentinel-%2B-Last
 */

let insertionSortList = head => {
    let sentinel = new ListNode(-1, head),
        last = head;
    while (last && last.next) {
        // ✅ case 1: last.next is already in sorted order
        if (last.val < last.next.val) {
            last = last.next;
            continue;
        }
        // ❌ case 2: insert last.next somewhere after sentinel and before last
        let pre = sentinel;
        while (pre != last && pre.next.val < last.next.val)
            pre = pre.next;
        let tmp = last.next.next;
        last.next.next = pre.next;
        pre.next = last.next;
        last.next = tmp;
    }
    return sentinel.next;
};
