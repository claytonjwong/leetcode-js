/*
 * 346. Moving Average from Data Stream
 *
 * Q: https://leetcode.com/problems/moving-average-from-data-stream/
 * A: https://leetcode.com/problems/moving-average-from-data-stream/discuss/125631/Javascript-Python3-C%2B%2B-Queue-solutions
 */

class MovingAverage {
    constructor(N) {
        this.N = N;
        this.sum = 0;
        this.q = [];
    }
    next(x) {
        if (this.q.length == this.N)
            this.sum -= this.q.shift();
        this.sum += x, this.q.push(x);
        return this.sum / this.q.length;
    }
}
