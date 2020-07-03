/*
 * 957. Prison Cells After N Days
 *
 * Q: https://leetcode.com/problems/prison-cells-after-n-days/
 * A: https://leetcode.com/problems/prison-cells-after-n-days/discuss/717917/Javascript-and-C%2B%2B-solutions
 */

let prisonAfterNDays = (A, N, all = [], m = new Map(), P = 0) => {
    let pre = [...A];
    for (let day = 0; day <= N; ++day) {
        all.push([...pre]); // 👀 track all seen
        // ⭐️ find pisano period to avoid TLE for large values of N
        let key = pre.join('');
        if (m.has(key)) {
            P = day - m.get(key); // 🎯 pisano period
            break;
        }
        m.set(key, day);
        // 🤔 generate current from previous
        let cur = Array(8).fill(0);
        for (let i = 1; i < 7; ++i)
            cur[i] = Number(pre[i - 1] == pre[i + 1]);
        [pre, cur] = [cur, pre]; // swap
    }
    return !P ? all[all.length - 1]     // ❌ case 1: pisano period *not* found in N days, return N-th day's solution
         : N % P ? all[N % P] : all[P]; // ✅ case 2: pisano period found, return N-th day's solution based upon pisano period
};
