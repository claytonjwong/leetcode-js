/*
 * 773. Sliding Puzzle
 *
 * Q: https://leetcode.com/problems/sliding-puzzle/
 * A: https://leetcode.com/problems/sliding-puzzle/discuss/113694/C%2B%2B-BFS-with-explanation-and-example-(-EASY-to-understand-)
 */

let slidingPuzzle = (A, T = '123450', adj = { 0: [1, 3], 1: [0, 2, 4], 2: [1, 5], 3: [0, 4], 4: [1, 3, 5], 5: [2, 4] }, depth = 0) => {
    let init = A.reduce((a, b) => a.concat(b), []);
    let key = arr => arr.join('');
    let q = [ init ], seen = new Set([ key(init) ]);
    while (q.length) {
        let k = q.length;
        while (k--) {
            let cur = q.shift();
            if (cur.join('') == T) // 🎯 target T found
                return depth;
            let u = cur.indexOf(0);
            for (let v of adj[u]) {
                let next = [...cur];
                [next[u], next[v]] = [next[v], next[u]]; // swap u,v
                if (!seen.has(key(next)))
                    q.push(next), seen.add(key(next));
            }
        }
        ++depth;
    }
    return -1;
};
