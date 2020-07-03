/*
 * 957. Prison Cells After N Days
 *
 * Q: https://leetcode.com/problems/prison-cells-after-n-days/
 * A: https://leetcode.com/problems/prison-cells-after-n-days/discuss/717917/Javascript-and-C%2B%2B-solutions
 */

let prisonAfterNDays = (A, N, all = [], m = new Map(), P = 0) => {
    let cur = [...A],
        pre = [...A];
    for (let day = 0; day <= N; ++day) {
        all.push([...pre]);
        // ⭐️ find pisano period to avoid TLE for large values of N
        let key = pre.join('');
        if (m.has(key)) {
            P = day - m.get(key); // 🎯 pisano period
            break;
        }
        m.set(key, day);
        // 🤔 generate current from previous
        cur[0] = cur[7] = 0; // first and last are always set to 0
        for (let i = 1; i < 7; ++i)
            cur[i] = Number(pre[i - 1] == pre[i + 1]);
        [pre, cur] = [cur, pre]; // swap
    }
    return pre == cur ? cur             // case 1: if previous equals current, then pattern is immutable until N-th day
         : !P ? all[all.length - 1]     // case 2: pisano period not reached in N days, return N-th day's solution
         : N % P ? all[N % P] : all[P]; // case 3: return N-th day based upon the pisano period
};
