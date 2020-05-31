/*
 * https://leetcode.com/contest/biweekly-contest-27
 *
 * Rank          Name           Score   Finish Time    Q1 (3)     Q2 (4)     Q3 (5)    Q4 (6)
 * 1156 / 7924   claytonjwong   12      0:36:02        0:03:19    0:17:38    0:36:02
 */

/*
 * 1460. Make Two Arrays Equal by Reversing Sub-arrays
 *
 * Q: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/
 * A: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/discuss/660539/Javascript-and-C%2B%2B-solutions
 */
let canBeEqual = (T, A, m = new Map()) => {
    T.forEach(x => m.set(x,  1 + (m.get(x) || 0)));
    A.forEach(x => m.set(x, -1 + (m.get(x) || 0)));
    return [...m.values()].every(x => !x);
};

/*
 * 1461. Check If a String Contains All Binary Codes of Size K
 *
 * Q: https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/
 * A: https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/discuss/660632/Incorrect-problem-statement!!!
 */
let hasAllCodes = (S, K, q = [], all = new Set()) => {
    S.split('').forEach(c => {
        q.push(c);
        if (q.length == K) all.add(q.join('')), q.shift();
    })
    return all.size == 1 << K;
};

/*
 * 1462. Course Schedule IV
 *
 * Q: https://leetcode.com/problems/course-schedule-iv/
 * A: https://leetcode.com/problems/course-schedule-iv/discuss/660619/Javascript-and-C%2B%2B-solutions
 */
let checkIfPrerequisite = (N, E, queries, m = new Map()) => {
    E.forEach(([u, v]) => m.set(u, (m.get(u) || new Set()).add(v)));
    let dfs = (i, target, seen = new Set(), found = false) => {
        if (i == target)
            return true;
        if (seen.has(i))
            return false;
        seen.add(i);
        for (let j of (m.get(i) || []))
            found |= dfs(j, target, seen);
        return found;
    };
    return queries.map(([beg, end]) => dfs(beg, end));
};

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
        for (let p = -1; p <= 1; ++p) { // next L column relative offset: -1, 0, 1 (left, same, right)
            let left = L + (0 < i ? p : 0);
            if (!(0 <= left && left < N))
                continue;
            for (let q = -1; q <= 1; ++q) { // next R column relative offset: -1, 0, 1 (left, same, right)
                let right = R + (0 < i ? q : 0);
                if (!(0 <= right && right < N) || right <= left) // pruning condition: right <= left is always a sub-optimal solution
                    continue;
                max = Math.max(max, A[i][left] + A[i][right] + go(i + 1, left, right));
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
        for (let p = -1; p <= 1; ++p) { // next L column relative offset: -1, 0, 1 (left, same, right)
            let left = L + (0 < i ? p : 0);
            if (!(0 <= left && left < N))
                continue;
            for (let q = -1; q <= 1; ++q) { // next R column relative offset: -1, 0, 1 (left, same, right)
                let right = R + (0 < i ? q : 0);
                if (!(0 <= right && right < N) || right <= left) // pruning condition: right <= left is always a sub-optimal solution
                    continue;
                m[key] = Math.max(m[key], A[i][left] + A[i][right] + go(i + 1, left, right));
            }
        }
        return m[key];
    };
    return go();
};

