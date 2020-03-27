/*
 * 398. Random Pick Index
 *
 * Q: https://leetcode.com/problems/random-pick-index/
 * A: https://leetcode.com/problems/random-pick-index/discuss/553004/Javascript-and-C%2B%2B-solutions
 */

class Solution {
    constructor(A) {
        this.m = new Map();
        A.forEach((x, i) => this.m.set(x, this.m.has(x) ? this.m.get(x).concat(i) : [i]));
    }
    pick(target) {
        let index = this.m.get(target);
        let i = Math.floor(Math.random() * index.length);
        return index[i];
    }
}