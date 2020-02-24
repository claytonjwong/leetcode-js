/*
 * 1345. Jump Game IV
 *
 * Q: https://leetcode.com/problems/jump-game-iv/
 * A: https://leetcode.com/problems/jump-game-iv/discuss/519535/Javascript-and-C%2B%2B-solutions
 */

let minJumps = (A, m = {}, q = [0], seen = new Set([0]), hops = 0) => {
    let N = A.length;
    A.forEach((x, i) => {
        if (!m[x])
            m[x] = [];
        m[x].push(i);
    });
    while (q.length > 0) {
        let K = q.length;
        while (K--) {
            let i = q[0], x = A[i]; q.shift();
            if (i + 1 == N)
                return hops;
            m[x].push(i - 1);
            m[x].push(i + 1);
            for (let j of m[x])
                if (0 <= j && j < N && !seen.has(j))
                    q.push(j), seen.add(j);
            m[x] = []; // avoid TLE by only jumping once per unique value
        }
        ++hops;
    }
    return -1;
};