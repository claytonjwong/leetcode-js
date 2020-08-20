/*
 * 143. Reorder List
 *
 * Q: https://leetcode.com/problems/reorder-list/
 * A: https://leetcode.com/problems/reorder-list/discuss/523554/Javascript-Python3-C%2B%2B-Stack-solutions
 */

let reorderList = (head, s = []) => {
    for (let beg = head; beg; beg = beg.next)
        s.push(beg)
    let half = Math.floor(s.length / 2);
    let beg = head;
    while (half--) {
        let end = s.pop();
        end.next = beg.next;
        beg.next = end;
        beg = end.next;
    }
    if (beg)
        beg.next = null;
    return head;
};
