/*
 * Facebook Phone Interview
 * Completed May 4, 2020 6:25 PM
 * 88%
 * Your interview score of 7.50/10 beats 88% of all users.
 * Time Spent: 33 minutes 32 seconds
 * Time Allotted: 1 hour 30 minutes
 */


/*
 * 463. Island Perimeter
 *
 * Q: https://leetcode.com/problems/island-perimeter/
 * A: https://leetcode.com/problems/island-perimeter/discuss/613726/Javascript-and-C%2B%2B-solutions
 */
// verbose
let islandPerimeter = (A, cnt = 0) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    let adj = (i, j) => {
        for (let dir of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
            let u = i + dir[0],
                v = j + dir[1];
            if (u < 0 || u == M || v < 0 || v == N) {
                ++cnt;
                continue;
            }
            cnt += !A[u][v];
        }
    };
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (A[i][j])
                adj(i, j);
    return cnt;
};
// concise
let islandPerimeter = (A, cnt = 0) => {
    let M = A.length,
        N = M ? A[0].length : 0;
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            if (A[i][j])
                for (let [u, v] of [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]])
                    cnt += u < 0 || u == M || v < 0 || v == N || !A[u][v]; // +1 for out-of-bounds xor water 🎯
    return cnt;
};


/*
 * 143. Reorder List
 *
 * Q: https://leetcode.com/problems/reorder-list/
 * A: https://leetcode.com/problems/reorder-list/discuss/523554/Javascript-and-C%2B%2B-solutions
 */
let reorderList = (head, S = []) => {
    for (let cur = head; cur; cur = cur.next)
        S.push(cur);
    let N = S.length;
    let cur = head;
    for (let i = 0; i < Math.floor(N / 2); ++i) {
        let add = S.pop();
        add.next = cur.next;
        cur.next = add;
        cur = add.next;
    }
    if (cur)
        cur.next = null;
    return head;
};


/*
 * 133. Clone Graph
 *
 * Q: https://leetcode.com/problems/clone-graph/
 * A: https://leetcode.com/problems/clone-graph/discuss/613748/Javascript-and-C%2B%2B-solutions
 */
let cloneGraph = (node, seen = new Map()) => {
    let go = node => {
        if (seen.has(node.val))
            return seen.get(node.val);
        let copy = new Node(node.val);
        seen.set(node.val, copy);
        for (let nei of node.neighbors)
            copy.neighbors.push(go(nei));
        return copy;
    };
    return node ? go(node) : null;
};