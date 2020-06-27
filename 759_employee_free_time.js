/*
 * 759. Employee Free Time
 *
 * Q: https://leetcode.com/problems/employee-free-time/
 * A: https://leetcode.com/problems/employee-free-time/discuss/119418/Javascript-and-C%2B%2B-solutions
 */

let employeeFreeTime = (A, m = new Map(), ans = []) => {
    A.forEach(employee => employee.forEach(i => m.set(i.start, Math.max((m.get(i.start) || 0), i.end))));
    let sorted = [...m.entries()].sort((a, b) => a[0] - b[0]);
    let pre = sorted.length ? sorted[0][0] : 0;
    for (let [cur, end] of sorted) {
        if (pre < cur)
            ans.push(new Interval(pre, cur)); // gap [previous end 👉 current begin] 🎯
        pre = Math.max(pre, end); // previous end is maximum end seen so far
    }
    return ans;
};
