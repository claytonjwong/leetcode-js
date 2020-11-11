/*
 * 593. Valid Square
 *
 * Q: https://leetcode.com/problems/valid-square/
 * A: https://leetcode.com/problems/valid-square/discuss/932012/Kt-Js-Py3-Cpp-Map
 */

let validSquare = (a, b, c, d, m = new Map()) => {
    let f = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);
    let A = [ a, b, c, d ];
    for (let i = 0; i < 4; ++i) {
        for (let j = i + 1; j < 4; ++j) {
            let dist = f(...A[i], ...A[j]);
            m.set(dist, 1 + (m.get(dist) || 0));
        }
    }
    return m.size <= 2 && [...m].every(([ x, cnt ]) => 0 < x && (cnt == 2 || cnt == 4 || cnt == 6));
};
