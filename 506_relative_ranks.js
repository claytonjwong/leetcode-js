/*
 * 506. Relative Ranks
 *
 * Q: https://leetcode.com/problems/relative-ranks/
 * A: https://leetcode.com/problems/relative-ranks/discuss/595725/Javascript-and-C%2B%2B-solutions
 */

let findRelativeRanks = (A, m = new Map(), rank = 0) => {
    A.forEach((x, i) => m.set(x, i));
    [...m.entries()].sort((a, b) => b[0] - a[0]).forEach(entry => {
        let i = entry[1];
        A[i] = ++rank;
    });
    return A.map(x => {
        switch (x) {
            case 1: return "Gold Medal";
            case 2: return "Silver Medal";
            case 3: return "Bronze Medal";
            default: return x.toString();
        }
    });
};