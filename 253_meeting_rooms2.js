/*
 * 253. Meeting Rooms II
 *
 * Q: https://leetcode.com/problems/meeting-rooms-ii/
 * A: https://leetcode.com/problems/meeting-rooms-ii/discuss/895910/Kt-Js-Py3-Cpp-Maximum-Overlap-via-Map
 */

let minMeetingRooms = (A, m = new Map(), overlap = 0, maximum = 0) => {
    for (let [i, j] of A) {
        m.set(i,  1 + (m.get(i) || 0));
        m.set(j, -1 + (m.get(j) || 0));
    }
    for (let [_, x] of [...m.entries()].sort((a, b) => a[0] - b[0]))
        maximum = Math.max(maximum, overlap += x);
    return maximum;
};
