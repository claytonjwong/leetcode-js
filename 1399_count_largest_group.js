/*
 * 1399. Count Largest Group
 *
 * Q: https://leetcode.com/problems/count-largest-group/
 * A: https://leetcode.com/problems/count-largest-group/discuss/565232/Javascript-and-C%2B%2B-solutions
 */

let countLargestGroup = (N, m = new Map) => {
    let sum = x => x == 0 ? 0 : x % 10 + sum(Math.floor(x / 10));
    for (let x = 1; x <= N; ++x) {
        let k = sum(x);
        m.set(k, 1 + (m.get(k) || 0));
    }
    let max = Math.max(...m.values());
    return [...m.entries()].filter(a => a[1] == max).length;
};