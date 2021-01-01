/*
 * 1640. Check Array Formation Through Concatenation
 *
 * Q: https://leetcode.com/problems/check-array-formation-through-concatenation/
 * A: https://leetcode.com/problems/check-array-formation-through-concatenation/discuss/919391/Kt-Js-Py3-Cpp-Do-we-%22have%22-what-we-%22need%22
 */

// queue
let canFormArray = (need, have, q = []) => {
    for (let x of need) {
        if (q.length) {
            if (x != q[0])
                return false;
            q.shift();
            continue;
        }
        let found = false;
        for (let piece of have) {
            if (x == piece[0]) {
                q.push(...piece.slice(1, piece.length));
                found = true;
                break;
            }
        }
        if (!found)
            return false;
    }
    return true;
};

// make
let canFormArray = (need, have, m = new Map(), make = []) => {
    have.forEach((A, i) => m.set(A[0], i));
    let i = 0,
        N = need.length;
    while (i < N) {
        if (!m.has(need[i]))
            return false;
        let j = m.get(need[i]);
        make.push(...have[j]);
        i += have[j].length;
    }
    return _.zip(need, make).every(pair => pair[0] == pair[1]);
};
