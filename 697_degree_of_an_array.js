/*
 * 697. Degree of an Array
 *
 * Q: https://leetcode.com/problems/degree-of-an-array/
 * A: https://leetcode.com/problems/degree-of-an-array/discuss/588249/Javascript-and-C%2B%2B-solutions
 */

let findShortestSubArray = (A, m = new Map(), L = new Map(), R = new Map(), min = 50001) => {
    A.forEach((x, i) => {
        m.set(x, 1 + (m.get(x) || 0));
        if (!L.has(x))
            L.set(x, i); // 👈 (L)eft-most index
        R.set(x, i);     // 👉 (R)ight-most index
    });
    let max = Math.max(...m.values());
    let cands = [...m.entries()].filter(a => a[1] == max).map(a => a[0]);
    cands.forEach(x => min = Math.min(min, R.get(x) - L.get(x) + 1)); // +1 for L..R inclusive
    return min;
};
console.log(findShortestSubArray([1,2,2,3,1,4,2,3,3]));