/*
 * 1387. Sort Integers by The Power Value
 *
 * Q: https://leetcode.com/problems/sort-integers-by-the-power-value/
 * A: https://leetcode.com/problems/sort-integers-by-the-power-value/discuss/554082/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */

let getKth = (lo, hi, k, m = new Map(), dist = 0) => {
    let powVal = x => x == 1 ? 0 : x % 2 == 0 ? 1 + powVal(x / 2) : 1 + powVal(3 * x + 1);
    for (let i = lo; i <= hi; ++i) {
        let val = powVal(i);
        m.set(val, (m.get(val) || []).concat(i));
    }
    let A = [...m.entries()].sort((a, b) => a[0] - b[0]).map(a => a[1]); // sort by powVal and drop powVal to only keep each "set" of i-th values from [lo..hi]
    for (let i = 0; i < A.length; ++i) {
        let set = A[i];
        for (let j = 0; j < set.length; ++j)
            if (++dist == k) // target 🎯
                return set[j];
    }
    return -1;
};
console.log(getKth(7, 11, 4));