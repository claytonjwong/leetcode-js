/*
 * First Unique Number
 *
 * Q: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3313/
 * A: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3313/discuss/601774/Javascript-and-C++-solutions
 */

class FirstUnique {
    constructor(A) {
        this.q = [];
        this.set = new Set();
        this.dup = new Set();
        A.forEach(x => this.add(x));
    }
    add(x) {
        if (this.set.has(x))
            this.dup.add(x);
        if (this.dup.has(x))
            return;
        this.set.add(x);
        this.q.push(x);
    }
    showFirstUnique() {
        while (this.q.length > 0) {
            let x = this.q[0];
            if (this.dup.has(x))
                this.q.shift();
            else
                return x;
        }
        return -1;
    }
}

let fu = new FirstUnique([2,3,5]);
console.log(fu.showFirstUnique());
fu.add(5);
console.log(fu.showFirstUnique());
fu.add(2);
console.log(fu.showFirstUnique());
fu.add(3);
console.log(fu.showFirstUnique());