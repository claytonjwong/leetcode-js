/*
 * 939. Minimum Area Rectangle
 *
 * Q: https://leetcode.com/problems/minimum-area-rectangle/
 * A: https://leetcode.com/problems/minimum-area-rectangle/discuss/739671/Javascript-and-C%2B%2B-solutions
 */

let minAreaRect = (A, m = new Map(), min = Infinity) => {
    let N = A.length;
    A.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]); // sort points by x,y
    A.forEach(([x, y]) => m.set(x, (m.get(x) || new Set).add(y)));
    for (let i = 0; i < N; ++i) {
        let [x1, y1] = A[i];
        for (let j = i + 1; j < N; ++j) {
            let [x2, y2] = A[j];
            if (y1 != y2)
                continue;
            let y = y1 = y2; // ⭐️ since y1 == y2, let's denote this same value as y
            for (let cand of m.get(x1)) { // 🔍 find candidate y which x1 and x2 have in common
                if (cand == y)
                    continue; // ❌ candidate cannot equal y (otherwise the area would be 0)
                if (m.get(x2).has(cand))
                    min = Math.min(min, (x2 - x1) * Math.abs(cand - y)); // 🎯 minimum area rectangle
            }
        }
    }
    return min < Infinity ? min : 0;
};
