/*
 * 252. Meeting Rooms
 *
 * Q: https://leetcode.com/problems/meeting-rooms/
 * A: https://leetcode.com/problems/meeting-rooms/discuss/919342/Kt-Js-Py3-Cpp-Sort-%2B-Scan
 */

let canAttendMeetings = (A, last = 0) => {
    A.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
    for (let [i, j] of A) {
        if (!(last <= i))
            return false;
        last = j;
    }
    return true;
};
