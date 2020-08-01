/*
 * 359. Logger Rate Limiter
 *
 * Q: https://leetcode.com/problems/logger-rate-limiter/
 * A: https://leetcode.com/problems/logger-rate-limiter/discuss/473779/Javascript-Python3-C%2B%2B-hash-table
 */

class Logger {
    constructor() {
        this.m = new Map();
    }
    shouldPrintMessage(t, s, m = this.m) {
        if (!m.has(s) || 10 <= t - m.get(s)) {
            m.set(s, t);
            return true;
        }
        return false;
    }
}
