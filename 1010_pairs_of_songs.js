/*
 * 1010. Pairs of Songs With Total Durations Divisible by 60
 *
 * Q: https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
 * A: https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/discuss/256716/Kt-Js-Py3-Cpp-Map-of-Buckets
 */

let numPairsDivisibleBy60 = (A, m = new Map(), pairs = 0) => {
    A = A.map(x => x % 60);
    for (let x of A) {
        let y = (60 - x) % 60;
        pairs += (m.get(y) || 0);
        m.set(x, 1 + (m.get(x) || 0));
    }
    return pairs;
};
