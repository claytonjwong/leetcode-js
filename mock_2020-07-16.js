/*
 * Google Phone Interview
 * Completed July 16, 2020 7:33 PM
 * 85%
 * Your interview score of 5.84/10 beats 85% of all users.
 * Time Spent: 1 hour 9 minutes 23 seconds
 * Time Allotted: 1 hour 30 minutes
 */

/*
 * 941. Valid Mountain Array
 *
 * Q: https://leetcode.com/problems/valid-mountain-array/
 * A: https://leetcode.com/problems/valid-mountain-array/discuss/739686/Javascript-and-C%2B%2B-solutions
 */

let validMountainArray = A => {
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i + 1 < N  && A[i] < A[i + 1]) ++i; // climb mountain from left-to-right 👉
    while (0 <= j - 1 && A[j] < A[j - 1]) --j; // climb mountain from right-to-left 👈
    return 0 < i && i == j && j < N - 1; // 🎯 did we meet at the peak?
};

/*
 * 939. Minimum Area Rectangle
 *
 * Q: https://leetcode.com/problems/minimum-area-rectangle/
 * A: https://leetcode.com/problems/minimum-area-rectangle/discuss/739671/Javascript-and-C%2B%2B-solutions
 */

let minAreaRect = (A, m = new Map(), min = Infinity) => {
    let N = A.length;
    A.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]); // sort points by x,y
    A.forEach(([x, y]) => m.set(x, (m.get(x) || new Set).add(y)));
    for (let i = 0; i < N; ++i) {
        let [x1, y1] = A[i];
        for (let j = i + 1; j < N; ++j) {
            let [x2, y2] = A[j];
            if (y1 != y2)
                continue;
            let y = y1 = y2; // ⭐️ since y1 == y2, let's denote this same value as y
            for (let cand of m.get(x1)) { // 🔍 find candidate y which x1 and x2 have in common
                if (cand == y)
                    continue; // ❌ candidate cannot equal y (otherwise the area would be 0)
                if (m.get(x2).has(cand))
                    min = Math.min(min, (x2 - x1) * Math.abs(cand - y)); // 🎯 minimum area rectangle
            }
        }
    }
    return min < Infinity ? min : 0;
};

/*
 * 731. My Calendar II
 *
 * Q: https://leetcode.com/problems/my-calendar-ii/
 * A: https://leetcode.com/problems/my-calendar-ii/discuss/739642/Javascript-and-C%2B%2B-solutions
 */

class MyCalendarTwo {
    constructor() {
        this.m = {};
    }
    book(i, j, bookings = 0, m = this.m) {
        if (!m[i]) m[i] = 0;
        if (!m[j]) m[j] = 0;
        ++m[i]; // add candidate booking [i..j)
        --m[j];
        let A = [...Object.entries(m)].sort((a, b) => a[0] - b[0]); // hack, JS does not have an ordered map (sort by key)
        for (let [time, cnt] of A) { // ⭐️ linear scan from beginning to accumulate existing bookings
            if (j <= time) // ✅ time exceeds the [i..j) interval
                break;
            if (2 < (bookings += cnt)) { // ❌ 2 bookings exceeded
                --m[i];
                ++m[j];
                return false; // 🚫 candidate booking [i..j) failure, remove candidate and return false
            }
        }
        return true; // ✅ candidate booking [i..j) success, keep candidate and return true
    }
}
