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
        let A = [...Object.entries(m)].sort((a, b) => a[0] - b[0]); // hack, JS does not have an ordered map
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
