/*
 * 683. K Empty Slots
 *
 * Q: https://leetcode.com/problems/k-empty-slots/
 * A: https://leetcode.com/problems/k-empty-slots/discuss/666536/Javascript-and-C%2B%2B-solutions
 */

let kEmptySlots = (bulbs, K, N = 20000, day = 1) => {
    let lo = i => {
        let t = i - K - 1;
        if (!(0 <= t && A[t]))
            return false;
        let j = i - 1;
        while (t < j && !A[j])
            --j;
        return t == j;
    };
    let hi = i => {
        let t = i + K + 1;
        if (!(t <= N && A[t]))
            return false;
        let j = i + 1;
        while (j < t && !A[j])
            ++j;
        return j == t;
    };
    let A = Array(N + 1).fill(0); // +1 for 1-based indexing
    for (let i of bulbs) {
        A[i] = 1;
        if (lo(i) || hi(i))
            return day;
        ++day;
    }
    return -1;
};