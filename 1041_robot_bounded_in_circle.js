/*
 * 1041. Robot Bounded In Circle
 *
 * Q: https://leetcode.com/problems/robot-bounded-in-circle/
 * A: https://leetcode.com/problems/robot-bounded-in-circle/discuss/294269/Javascript-Python3-C%2B%2B-Traverse-4x-%2B-Return-to-Origin
 */

let isRobotBounded = (A, K = 4) => {
    let [ U, R, D, L ] = [...Array(4).keys()];             // 🗺 clockwise directions
    let [ x, y ] = [ 0, 0 ];                               // ⭐️ origin
    let dir = U;
    while (K--) {                                          // 🔍 can we return to ⭐️ origin within 4 traversals?
        for (let c of A) {
            if (c == 'G') {                                // 🚌 step forward
                if (dir == U) --x; if (dir == D) ++x;
                if (dir == L) --y; if (dir == R) ++y;
            }
            if (c == 'L') dir = dir == U ? L : dir - 1;    // 👈 turn left
            if (c == 'R') dir = dir == L ? U : dir + 1;    // 👉 turn right
        }
        if (!x && !y)
            return true;                                   // 🎯 returned to ⭐️ origin after 1, 2, or 4 traversals
    }
    return false;
};
