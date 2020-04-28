/*
 * 716. Max Stack
 *
 * Q: https://leetcode.com/problems/max-stack/
 * A: https://leetcode.com/problems/max-stack/discuss/600673/Javascript-and-C%2B%2B-solutions
 */

class MaxStack {
    constructor() {
        this.stack = [];
        this.max = [];
    }
    push(x) {
        this.stack.push(x);
        if (this.max.length == 0 || this.max[this.max.length - 1] <= x)
            this.max.push(x);
    }
    pop() {
        let x = this.stack.pop();
        if (this.max.length > 0 && this.max[this.max.length - 1] == x)
            this.max.pop();
        return x;
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    peekMax() {
        return this.max[this.max.length - 1];
    }
    popMax() {
        let x = this.max.pop();
        let t = []; // temp
        while (this.stack[this.stack.length - 1] < x)
            t.push(this.stack.pop());
        this.stack.pop(); // pop corresponding x
        while (t.length > 0)
            this.push(t.pop());
        return x;
    }
}