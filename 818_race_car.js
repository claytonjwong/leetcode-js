/*
 * 818. Race Car
 *
 * Q: https://leetcode.com/problems/race-car/
 * A: https://leetcode.com/problems/race-car/discuss/124312/Javascript-Python3-C%2B%2B-.-BFS-solutions
 */

let racecar = (T, q = [[ 0, 1 ]], seen = new Set([ `0,1` ]), depth = 0, abs = Math.abs) => {
    for (;;) {
        let k = q.length;
        while (k--) {
            let [pos, vel] = q.shift();
            if (pos == T)
                return depth;  // 🎯 target T found
            let cand = [];
            if (abs(T - (pos + vel)) < T)
                cand.push([ pos + vel, 2 * vel ]);
            cand.push([ pos, vel < 0 ? 1 : -1 ]);
            cand.forEach(([ pos, vel ]) => {
                if (!seen.has(`${pos},${vel}`))
                    q.push([ pos, vel ]), seen.add(`${pos},${vel}`);
            });
        }
        ++depth;
    }
    return -1;
};
