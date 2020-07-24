/*
 * Apple Phone Interview
 * Completed July 23, 2020 6:45 PM
 * 73%
 * Your interview score of 6.89/10 beats 73% of all users.
 * Time Spent: 19 minutes 42 seconds
 * Time Allotted: 1 hour 30 minutes
 *
 * Screenshare: https://www.youtube.com/watch?v=5DVcTBsOv0k&feature=youtu.be
 */

/*
 * 724. Find Pivot Index
 *
 * Q: https://leetcode.com/problems/find-pivot-index/
 * A: https://leetcode.com/problems/find-pivot-index/discuss/751936/Javascript-Python3-C%2B%2B-Prefix-Sums
 */

let pivotIndex = A => {
    let N = A.length;
    let L = Array(N).fill(0),
        R = Array(N).fill(0);
    let beg = 1,
        end = N - 2;
    for (let i = beg; i <  N; ++i) L[i] = A[i - 1] + L[i - 1]; // non-inclusive prefix sums from Left-to-right 👉
    for (let j = end; 0 <= j; --j) R[j] = A[j + 1] + R[j + 1]; // non-inclusive suffix sums from Right-to-left 👈
    for (let k = 0; k < N; ++k)
        if (L[k] == R[k])
            return k; // 🎯 target at k-th index
    return -1;
};

/*
 * 382. Linked List Random Node
 *
 * Q: https://leetcode.com/problems/linked-list-random-node/
 * A: https://leetcode.com/problems/linked-list-random-node/discuss/752830/Javascript-Python3-C%2B%2B-random-solutions
 */

class Solution {
    constructor(head) {
        this.head = head
        this.N = 0;
        let cur = head;
        while (cur)
            cur = cur.next, ++this.N;
    }
    getRandom(head = this.head, N = this.N) {
        let cur = head;
        let hops = Math.floor(Math.random() * N);
        while (hops--)
            cur = cur.next;
        return cur.val;
    }
}
