/*
 * https://leetcode.com/contest/weekly-contest-188/
 *
 * Rank           Name           Score   Finish Time    Q1 (3)       Q2 (4)    Q3 (5)   Q4 (7)
 * 4552 / 12714   claytonjwong   7       0:44:17        0:05:09 *1   0:39:17
 */


/*
 * 1441. Build an Array With Stack Operations
 *
 * Q: https://leetcode.com/problems/build-an-array-with-stack-operations/
 * A: https://leetcode.com/problems/build-an-array-with-stack-operations/discuss/624724/Javascript-and-C%2B%2B-solutions
 */
let buildArray = (A, n, ans = []) => {
    for (let i = 0, j = 1; i < A.length; ++j)
        if (A[i] == j)
            ans.push('Push'), ++i;   // remaining number ✅
        else
            ans.push('Push', 'Pop'); // missing number ❌
    return ans;
};


/*
 * 1442. Count Triplets That Can Form Two Arrays of Equal XOR
 *
 * Q: https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/
 * A: https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/discuss/623806/Javascript-and-C%2B%2B-solutions
 */
let countTriplets = (A, cnt = 0) => {
    let N = A.length;
    let xor = Array(N + 1).fill(0);
    for (let i = 1; i <= N; ++i)
        xor[i] = xor[i - 1] ^ A[i - 1];
    for (let i = 0; i < N; ++i) {
        for (let j = i + 1; j < N; ++j) {
            let cur = 0;
            for (let k = j; k < N; ++k) {
                cur ^= A[k];
                if ((xor[i] ^ xor[j]) == cur) // target 🎯
                    ++cnt;
            }
        }
    }
    return cnt;
};


/*
 * 1443. Minimum Time to Collect All Apples in a Tree
 *
 * Q: https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/
 */

/*
TLE solution

use bellman ford algorithm to find all distances and predecessor nodes
then from the apple, go back up to the root, tracking seen nodes
if we step to a seen node, then we can stop counting steps at that position
since we've already accounted for the other steps

*/

/*
let minTime = (N, E, A, ans = 0) => {
    let dist = Array(N).fill(Infinity),
        prev = Array(N).fill(null);
    dist[0] = 0;
    while (N--) {
        for (let [u, v] of E) {
            if (dist[v] > dist[u] + 1)
                dist[v] = dist[u] + 1,
                prev[v] = u;
            if (dist[u] > dist[v] + 1)
                dist[u] = dist[v] + 1,
                prev[u] = v;
        }
    }
    console.log(...dist)
    console.log(...prev)
    let seen = new Set([0]);
    for (let i = 0; i < A.length; ++i) {
        if (!A[i] || prev[i] == null) // no apple xor apple at root
            continue;
        seen.add(i);
        let steps = 0;
        for (let j = prev[i]; !seen.has(j); j = prev[j])
            seen.add(j), ++steps;
        ans += 2 * (steps + 1);
    }
    return ans;
};
*/

let minTime = (N, E, A, ans = 0) => {
    let m = {};
    for (let [u, v] of E) {
        if (!m[u]) m[u] = new Set();
        if (!m[v]) m[v] = new Set();
        m[u].add(v);
        m[v].add(u);
    }
    let need = A.filter(x => x).length;
    let seen = new Set([ 0 ]);
    let q = [ 0 ];
    let steps = 0;
    while (need) {
        let K = q.length;
        let found = 0;
        while (K--) {
            let cur = q.shift();
            if (A[cur])
                ++found
            for (let adj of [...m[cur]])
                if (!seen.has(adj))
                    seen.add(adj),
                    q.push(adj);
        }
        if (steps)
            ans += (2 * (steps - 1)) + (2 * found);
        need -= found;
        ++steps;
    }
    return ans;
};

console.log(minTime(4, [[0,1],[1,2],[0,3]], [true,true,true,true]));

console.log(minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,true,false,true,true,false]));

console.log(minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,true,false,false,true,false]));
