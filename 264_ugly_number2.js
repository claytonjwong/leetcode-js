/*
 * 264. Ugly Number II
 *
 * Q: https://leetcode.com/problems/ugly-number-ii/
 * A: https://leetcode.com/problems/ugly-number-ii/discuss/719537/Javascript-and-C%2B%2B-solutions
 */

let nthUglyNumber = (N, q = [1], seen = new Set([1])) => {
    while (--N) {
        let i = q.shift(); // ⭐️ i-th ugly number
        for (let factor of [ 2, 3, 5 ])
            if (!seen.has(i * factor))
                q.push(i * factor), seen.add(i * factor); // 👀 push unseen i-th factors onto q
        q.sort((a, b) => a - b); // hack
    }
    return q[0]; // 🎯 N-th ugly number
};
