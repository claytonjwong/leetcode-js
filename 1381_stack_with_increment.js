/*
 * 1381. Design a Stack With Increment Operation
 *
 * Q: https://leetcode.com/problems/design-a-stack-with-increment-operation/
 * A: https://leetcode.com/problems/design-a-stack-with-increment-operation/discuss/539695/Javascript-and-C%2B%2B-solutions
 */

class CustomStack {
    constructor(maxSize) {
        this.cap = maxSize;
        this.A = [];
    }
    push(x) {
        if (this.A.length < this.cap)
            this.A.push(x);
    }
    pop() {
        if (this.A.length == 0)
            return -1;
        return this.A.pop();
    }
    increment(k, val) {
        for (let i = 0; i < k && i < this.A.length; ++i)
            this.A[i] += val;
    }
}