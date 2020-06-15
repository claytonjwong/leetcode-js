/*
 * https://leetcode.com/contest/weekly-contest-193/ranking/110/
 *
 * Rank            Name            Score    Finish Time    Q1 (3)     Q2 (4)     Q3 (5)    Q4 (6)
 * 2737 / 13794    claytonjwong    7        0:09:54        0:00:55    0:09:54
 */

/*
 * 1480. Running Sum of 1d Array
 *
 * Q: https://leetcode.com/problems/running-sum-of-1d-array/
 * A: https://leetcode.com/problems/running-sum-of-1d-array/discuss/686233/Javascript-and-C%2B%2B-solutions
 */
let runningSum = (A, sum = 0) => A.map(x => sum += x);

/*
 * 1481. Least Number of Unique Integers after K Removals
 *
 * Q: https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/
 * A: https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/discuss/686410/Javascript-and-C%2B%2B-solutions
 */
let findLeastNumOfUniqueInts = (A, K, m = new Map(), all = []) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    [...m.entries()].sort((a, b) => a[1] - b[1]).forEach(([x, n]) => all.push(...Array(n).fill(x))); // sort all by ascending frequency (x occurs n times)
    return new Set(all.slice(K)).size; // greedily drop first K least freq nums and return size of remaining set
};

// brute-force TLE
let minDays = (A, T, K, m = new Map()) => {
    let N = A.length;
    let F = Array(N).fill(0);
    A.forEach((day, i) => m.set(day, (m.get(day) || new Set()).add(i)));
    for (let [day, flowers] of [...m.entries()].sort((a, b) => a[0] - b[0])) {
        console.log(`${day}: ${[...flowers]}`);
        for (let i of flowers) {
            F[i] = 1;
        }
        let group = 0, bouquets = 0;
        for (let i = 0; i < N; ++i) {
            if (F[i]) {
                ++group;
            } else {
                bouquets += Math.floor(group / K);
                group = 0;
            }
        }
        bouquets += Math.floor(group / K);
        if (bouquets >= T)
            return day;
    }
    return -1;
};
console.log(minDays([1,10,3,10,2], 3, 1));