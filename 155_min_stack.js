/*
 * 155. Min Stack
 *
 * Q: https://leetcode.com/problems/min-stack/
 * A: https://leetcode.com/problems/min-stack/discuss/572580/Javascript-and-C%2B%2B-solutions
 */

class MinStack {
    constructor() {
        this.s = [];
        this.min = [];
    }
    push(x) {
        this.s.push(x);
        if (this.min.length == 0 || x <= this.min[this.min.length - 1])
            this.min.push(x);
    }
    pop() {
        if (this.top() == this.min[this.min.length - 1])
            this.min.pop();
        this.s.pop();
    }
    top() {
        return this.s[this.s.length - 1];
    }
    getMin() {
        return this.min[this.min.length - 1];
    }
}
