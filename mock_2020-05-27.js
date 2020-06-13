/*
 * Google- Online Assessment
 * Completed May 27, 2020 6:04 PM
 * Time Spent: 10 minutes 53 seconds
 * Time Allotted: 1 hour
 */

/*
 * 551. Student Attendance Record I
 *
 * Q: https://leetcode.com/problems/student-attendance-record-i/
 * A: https://leetcode.com/problems/student-attendance-record-i/discuss/596959/Javascript-and-C%2B%2B-solutions
 */
let checkRecord = S => S.split('').filter(c => c == 'A').length <= 1 && !S.includes('LLL');

/*
 * 743. Network Delay Time
 *
 * Q: https://leetcode.com/problems/network-delay-time/
 * A: https://leetcode.com/problems/network-delay-time/discuss/656011/Javascript-and-C%2B%2B-solutions
 */
let networkDelayTime = (E, N, K) => {
    let dist = Array(N + 1).fill(Infinity); // +1 for 1-based indexing
    dist[K] = 0;
    while (--N)
        for (let [u, v, w] of E)
            if (dist[v] > dist[u] + w)
                dist[v] = dist[u] + w;
    let max = Math.max(...dist.slice(1)); // exclude sentinel at index 0
    return max < Infinity ? max : -1;
};