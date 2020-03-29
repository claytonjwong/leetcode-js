/*
 * https://leetcode.com/contest/weekly-contest-182/
 *
 * Rank            Name           Score   Finish Time   Q1 (3)     Q2 (4)     Q3 (5)    Q4 (8)
 * 1068 / 11694    claytonjwong   12      0:27:14       0:03:32    0:07:17	  0:27:14
 */


/*
 * 1394. Find Lucky Integer in an Array
 *
 * Q1: https://leetcode.com/problems/find-lucky-integer-in-an-array/
 * A1: https://leetcode.com/problems/find-lucky-integer-in-an-array/discuss/554794/Javascript-and-C%2B%2B-solutions
 */

let findLucky = (A, m = new Map()) => {
    for (let x of A)
        m.set(x, 1 + (m.get(x) || 0));
    for (let [k, v] of [...m.entries()].sort((a, b) => a[0] - b[0]).reverse())
        if (k == v)
            return v; // 🍀 lucky number 🍀
    return -1;
};


/*
 * 1395. Count Number of Teams
 *
 * Q2: https://leetcode.com/problems/count-number-of-teams/
 * A2: https://leetcode.com/problems/count-number-of-teams/discuss/555491/Javascript-and-C%2B%2B-solutions
 */

let numTeams = (A, ans = 0) => {
    let N = A.length;
    for (let i = 0; i < N; ++i)
        for (let j = i + 1; j < N; ++j)
            for (let k = j + 1; k < N; ++k)
                if ((A[i] < A[j] && A[j] < A[k]) || (A[i] > A[j] && A[j] > A[k]))
                    ++ans;
    return ans;
};


/*
 * 1396. Design Underground System
 *
 * Q3: https://leetcode.com/problems/design-underground-system/
 * A3: https://leetcode.com/problems/design-underground-system/discuss/554805/Javascript-and-C%2B%2B-solutions
 */

// class UndergroundSystem {
//     constructor() {
//         this.notes = {}; // { id: { s1: source-station, t1: check-in time }}
//         this.edges = {}; // { source: { destination: { time deltas }}}
//     }
//     checkIn(id, s1, t1) {
//         this.notes[id] = { s1: s1, t1: t1 };
//     }
//     checkOut(id, s2, t2) {
//         let [notes, edges] = [this.notes, this.edges];
//         let [s1, t1] = [notes[id].s1, notes[id].t1];
//         if (!edges[s1]) edges[s1] = {};
//         if (!edges[s1][s2]) edges[s1][s2] = [];
//         edges[s1][s2].push(t2 - t1); // add edge (s1 👉 s2) with time delta abs(t1 -t2) ⏰
//     }
//     getAverageTime(s1, s2) {
//         return this.edges[s1][s2].reduce((a, b) => a + b) / this.edges[s1][s2].length;
//     }
// }

class UndergroundSystem {
    constructor() {
        this.notes = {}; // { id: { s1: source-station, t1: check-in time }}
        this.edges = {}; // { source: { destination: { total time, count of time entries }}}
    }
    checkIn(id, s1, t1) {
        this.notes[id] = { s1: s1, t1: t1 };
    }
    checkOut(id, s2, t2) {
        let [notes, edges] = [this.notes, this.edges];
        let [s1, t1] = [notes[id].s1, notes[id].t1];
        if (!edges[s1]) edges[s1] = {};
        if (!edges[s1][s2]) edges[s1][s2] = { total: 0, cnt: 0 };
        let edge = edges[s1][s2]; // update edge (s1 👉 s2) with time delta abs(t1 -t2) ⏰
        edge.total += (t2 - t1), ++edge.cnt;
    }
    getAverageTime(s1, s2) {
        let edge = this.edges[s1][s2];
        return edge.total / edge.cnt;
    }
}