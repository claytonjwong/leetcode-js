/*
 * 1463. Cherry Pickup II
 *
 * Q: https://leetcode.com/problems/cherry-pickup-ii/
 * A: https://leetcode.com/problems/cherry-pickup-ii/discuss/660828/Javascript-and-C%2B%2B-solutions
 */

// Top Down
let cherryPickup = A => {
    let M = A.length,
        N = A[0].length;
    let m = Array(M + 1).fill(-1);
    let go = (i = 0, L = 0, R = N - 1, max = 0) => {
        if (i == M)
            return 0;
        for (let p = -1; p <= 1; ++p) { // L column offset: left, same, right
            let left = L + (0 < i ? p : 0);
            if (!(0 <= left && left < N))
                continue;
            for (let q = -1; q <= 1; ++q) { // R column offset: left, same, right
                let right = R + (0 < i ? q : 0);
                if (!(0 <= right && right < N) || right <= left) // pruning condition: right <= left is always a sub-optimal solution
                    continue;
                let cand = A[i][left] + (left != right ? A[i][right] : 0); // maximum candidate
                max = Math.max(max, cand + go(i + 1, left, right));
            }
        }
        return max;
    };
    return go();
};

// Top Down Memo
let cherryPickup = A => {
    let M = A.length,
        N = A[0].length;
    let m = Array(M + 1).fill(-1);
    let go = (i = 0, L = 0, R = N - 1) => {
        let key = `${i},${L},${R}`;
        if (m[key] > -1)
            return m[key];
        if (i == M)
            return m[key] = 0;
        m[key] = 0;
        for (let p = -1; p <= 1; ++p) { // L column offset: left, same, right
            let left = L + (0 < i ? p : 0);
            if (!(0 <= left && left < N))
                continue;
            for (let q = -1; q <= 1; ++q) { // R column offset: left, same, right
                let right = R + (0 < i ? q : 0);
                if (!(0 <= right && right < N) || right <= left) // pruning condition: right <= left is always a sub-optimal solution
                    continue;
                let cand = A[i][left] + (left != right ? A[i][right] : 0); // maximum candidate
                m[key] = Math.max(m[key], cand + go(i + 1, left, right));
            }
        }
        return m[key];
    };
    return go();
};