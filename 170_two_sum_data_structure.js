/*
 * 170. Two Sum III - Data structure design
 *
 * Q: https://leetcode.com/problems/two-sum-iii-data-structure-design/
 * A: https://leetcode.com/problems/two-sum-iii-data-structure-design/discuss/594312/Javascript-Python3-C%2B%2B-Map-Count-of-X
 */

class TwoSum {
    constructor() {
        this.m = new Map();
    }
    add(x, m = this.m) {
        m.set(x, 1 + (m.get(x) || 0));
    }
    find(x, m = this.m) {
        for (let [y, cnt] of [...m.entries()]) {
            let t = x - y;
            if (m.has(t) && (t != y || 1 < cnt))
                return true;
        }
        return false;
    }
}
