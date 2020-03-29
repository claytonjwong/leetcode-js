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