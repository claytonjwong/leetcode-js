/*
 * 1162. As Far from Land as Possible
 *
 * Q: https://leetcode.com/problems/as-far-from-land-as-possible/
 * A: https://leetcode.com/problems/as-far-from-land-as-possible/discuss/748163/Javascript-Python3-C%2B%2B-BFS-from-land-to-explore-water
 */

let maxDistance = (A, q = [], depth = 0, seen = new Set()) => {
    let N = A.length
    for (let i = 0; i < N; ++i)
        for (let j = 0; j < N; ++j)
            if (A[i][j]) // 🔍 init BFS queue with all 👀 seen land cells
                q.push([ i, j ]), seen.add(`${i},${j}`);
    if (q.length == N * N)
        return -1; // ⭐️ edge case 1: no water
    while (q.length) {
        let k = q.length;
        while (k--) {
            let [i, j] = q.shift();
            for (let [u, v] of [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]]) // clockwise directions: [ 👆, 👉, 👇, 👈 ]
                if (!(u < 0 || u == N || v < 0 || v == N || A[u][v] || seen.has(`${u},${v}`))) // 🚌 BFS explore 👀 unseen water cells
                    q.push([ u, v ]), seen.add(`${u},${v}`)
        }
        ++depth;
    }
    return depth - 1; // 🚌 BFS case: explored water from land, ending at max depth + 1 XOR ⭐️ edge case 2: no land
};
