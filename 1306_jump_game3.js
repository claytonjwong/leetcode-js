/*
 * 1306. Jump Game III
 *
 * Q: https://leetcode.com/problems/jump-game-iii/
 * A: https://leetcode.com/problems/jump-game-iii/discuss/464420/Kt-Js-Py3-Cpp-BFS-%2B-DFS
 */

// BFS
let canReach = (A, start, seen = new Set()) => {
    let q = [start];
    while (q.length) {
        let i = q.shift();
        if (!A[i])
            return true;
        for (let j of [i + A[i], i - A[i]])
            if (0 <= j && j < A.length && !seen.has(j))
                q.push(j), seen.add(j);
    }
    return false;
};

// DFS
let canReach = (A, start, seen = new Set()) => {
    let go = (i = start) => {
        if (i < 0 || A.length <= i || seen.has(i))
            return false;
        seen.add(i);
        if (!A[i])
            return true;
        return go(i + A[i]) || go(i - A[i]);
    };
    return go();
};
