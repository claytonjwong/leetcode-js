/*
 * 933. Number of Recent Calls
 *
 * Q: https://leetcode.com/problems/number-of-recent-calls/
 * A: https://leetcode.com/problems/number-of-recent-calls/discuss/189233/Javascript-Python3-C%2B%2B-Queue-solutions
 */

class RecentCounter {
    constructor() {
        this.q = [];
    }
    ping(t, q = this.q) {
        while (q.length && q[0] < t - 3000)
            q.shift();
        q.push(t);
        return q.length;
    }
}
