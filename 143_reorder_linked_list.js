/*
 * 143. Reorder List
 *
 * Q: https://leetcode.com/problems/reorder-list/
 * A: https://leetcode.com/problems/reorder-list/discuss/523554/Javascript-and-C%2B%2B-solutions
 */

let reorderList = (head, A = []) => {
    let tail = head;
    while (tail)
        A.push(tail), tail = tail.next;
    if (A.length < 3)
        return;
    let N = A.length, i = 1, j = N - 1, k = 1;
    tail = head;
    while (i <= j) {
        if (k == 0) tail.next = A[i++];
        if (k == 1) tail.next = A[j--];
        tail = tail.next;
        k ^= 1;
    }
    tail.next = null;
};

let reorderList = (head, S = []) => {
    for (let cur = head; cur; cur = cur.next)
        S.push(cur);
    let N = S.length;
    let cur = head;
    for (let i = 0; i < Math.floor(N / 2); ++i) {
        let add = S.pop();
        add.next = cur.next;
        cur.next = add;
        cur = add.next;
    }
    if (cur)
        cur.next = null;
    return head;
};