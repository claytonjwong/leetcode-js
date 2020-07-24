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
