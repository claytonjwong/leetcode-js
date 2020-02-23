/*
 * https://leetcode.com/contest/weekly-contest-177
 *
 * Rank	            Name	        Score	Finish Time 	Q1 (4)	    Q2 (5)	    Q3 (5)	    Q4 (6)
 * 3855 / 9092	    claytonjwong 	9	    1:08:28	        1:08:28	    0:21:38
 */

/*
 * 1360. Number of Days Between Two Dates
 *
 * Q: https://leetcode.com/problems/number-of-days-between-two-dates/
 * A: https://leetcode.com/problems/number-of-days-between-two-dates/discuss/517586/Javascript-and-C%2B%2B-solutions
 */

let daysBetweenDates = (a, b) => {
    let leapYears = (y, m) => {
        if (m <= 2) --y; // don't count current year if month is Jan/Feb
        let f = Math.floor;
        return f(y / 400) + f(y / 4) - f(y / 100);
    };
    let monthDays = [0, 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    for (let i = 1; i < monthDays.length; ++i)
        monthDays[i] += monthDays[i - 1];
    let days = (y, m, d) => (y * 365) + leapYears(y, m) + monthDays[m] + d;
    let p = days(...a.split('-').map(Number)),
        q = days(...b.split('-').map(Number));
    return Math.abs(p - q);
};
// let ans = daysBetweenDates('2019-06-30', '2019-06-29');
// console.log(ans);

/*
 * 1361. Validate Binary Tree Nodes
 *
 * Q: https://leetcode.com/problems/validate-binary-tree-nodes/
 * A: https://leetcode.com/problems/validate-binary-tree-nodes/discuss/517576/Javascript-and-C%2B%2B-solutions
 */

// let validateBinaryTreeNodes = (N, L, R, q = [0], seen = new Set([0])) => {
//     while (q.length > 0) {
//         let cur = q[0]; q.shift();
//         let l = L[cur],
//             r = R[cur];  
//         if ((l > -1 && seen.has(l)) || (r > -1 && seen.has(r)))
//             return false;
//         if (l > -1) q.push(l), seen.add(l);
//         if (r > -1) q.push(r), seen.add(r);
//     }
//     return seen.size == N;
// };

let validateBinaryTreeNodes = (N, L, R) => {
    let P = [...Array(N)].map((_, i) => i);
    let find = x => P[x] = P[x] == x ? P[x] : find(P[x]);
    let union = (a, b) => {
        a = find(a);
        b = find(b);
        if (a == b)
            return false;
        P[a] = b; // arbitrary choice
        return true;
    };
    for (let i = 0; i < N; ++i) {
        if (L[i] > -1 && !union(i, L[i])) return false;
        if (R[i] > -1 && !union(i, R[i])) return false;
    }
    let rep = find(0);
    for (let i = 1; i < N; ++i)
        if (rep != find(i))
            return false;
    return true;
};
let ans = validateBinaryTreeNodes(4, [1,-1,3,-1], [2,-1,-1,-1]);
console.log(ans);