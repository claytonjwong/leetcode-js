/*
 * 1353. Maximum Number of Events That Can Be Attended
 *
 * Q: https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/
 * A: https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/discuss/579912/Javascript-and-C%2B%2B-solutions
 */

let maxEvents = (A, seen = new Set()) => {
    A.sort((a, b) => a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]);
    for (let [i, j] of A) {
        while (i <= j && seen.has(i)) ++i;
        if (i <= j) seen.add(i);
    }
    return seen.size;
};
