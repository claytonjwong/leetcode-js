/*
 * 1296. Divide Array in Sets of K Consecutive Numbers
 *
 * Q: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/
 * A: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/discuss/460543/Javascript-and-C%2B%2B-solutions
 */
let isPossibleDivide = (A, K, m = new Map()) => {
    A.forEach(x => m.set(x, (m.get(x) || 0) + 1));
    m = new Map([...m.entries()].sort((a, b) => a[0] - b[0]));
    for (let [x, need] of m) {
        if (need == 0)
            continue;
        for (let i = 0; i < K; ++i) {
            let [y, has] = [x + i, m.get(x + i)];
            if (!has || has < need)
                return false;
            m.set(y, m.get(y) - need);
        }
    }
    return true;
};

let ans = isPossibleDivide([1,2,3,4], 3);
console.log(ans);