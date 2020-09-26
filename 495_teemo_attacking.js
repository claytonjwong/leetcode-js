/*
 * 495. Teemo Attacking
 *
 * Q: https://leetcode.com/problems/teemo-attacking/
 * A: https://leetcode.com/problems/teemo-attacking/discuss/865500/Javascript-Python3-C%2B%2B-Accumulate-Non-overlapping-Intervals-i..j
 */

// concise
let findPoisonedDuration = (A, K, hi = -1, total = 0) => {
    for (let x of A) {
        let i = Math.max(hi, x),
            j = x + K;
        total += j - i;
        hi = Math.max(hi, j);
    }
    return total;
};

// verbose
let findPoisonedDuration = (A, K, hi = -1, total = 0) => {
    for (let x of A) {
        let i = Math.max(hi, x),
            j = x + K - 1;            // -1 for i..j inclusive
        total += j - i + 1;           // +1 for i..j inclusive
        hi = Math.max(hi, j + 1);     // +1 to skip past redundant timeslot j
    }
    return total;
};
