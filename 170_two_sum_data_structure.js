/*
 * 170. Two Sum III - Data structure design
 *
 * Q: https://leetcode.com/problems/two-sum-iii-data-structure-design/
 * A: https://leetcode.com/problems/two-sum-iii-data-structure-design/discuss/594312/Javascript-and-C%2B%2B-solutions
 */

class TwoSum {
    constructor() {
        this.m = new Map();
    }
    add(x) {
        let m = this.m;
        m.set(x, 1 + (m.get(x) || 0));
    }
    find(x) {
        let m = this.m;
        for (let [y, _] of m) {
            let z = x - y;
            if (m.has(z) && (y != z || m.get(y) > 1))
                return true;
        }
        return false;
    }
}