/*
 * 1654. Minimum Jumps to Reach Home
 *
 * Q: https://leetcode.com/problems/minimum-jumps-to-reach-home/
 * A: https://leetcode.com/problems/minimum-jumps-to-reach-home/discuss/935386/Kt-Js-Py3-Cpp-BFS-%2B-DFS-solutions
 */

// BFS
let minimumJumps = (A, R, L, T) => {
    let forbidden = new Set(A);
    let markSeen = (i, backwards) => {
        let key = `${i},${backwards}`;
        if (seen.has(key))
            return false;
        seen.add(key);
        return true;
    };
    let ok = (i, backwards) => 0 <= i && i < 4000 && !forbidden.has(i) && markSeen(i, backwards);
    let q = [[ 0, false, 0 ]];
    let seen = new Set([ `0,false` ])
    while (q.length) {
        let [i, backwards, steps] = q.shift();
        if (i == T)
            return steps;
        if (ok(i + R, false))
            q.push([ i + R, false, steps + 1 ]);
        if (!backwards && ok(i - L, true))
            q.push([ i - L, true, steps + 1 ]);
    }
    return -1;
};

// DFS
let minimumJumps = (A, R, L, T, seen = new Set(), best = Infinity) => {
    let forbidden = new Set(A);
    let go = (i = 0, steps = 0, backwards = false) => {
        if (forbidden.has(i))              // 🚫 forbidden
            return;
        let key = `${i},${backwards}`;
        if (seen.has(key))                 // 👀 seen
            return;
        seen.add(key);
        if (i == T) {
            best = Math.min(best, steps);  // 🎯 minimum steps to reach target
            return;
        }
        if (i < 0 || 4000 < i)             // 🛑 out of bounds
            return;
        go(i + R, steps + 1, false);       // 🚀 DFS explore 👉 to-the-right
        if (!backwards)
            go(i - L, steps + 1, true);    // 🚀 DFS explore 👈 to-the-left
    };
    go();
    return best < Infinity ? best : -1;
};
