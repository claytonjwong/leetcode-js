/*
 * https://leetcode.com/contest/weekly-contest-179
 *
 * Rank         Name           Score    Finish Time      Q1 (3)     Q2 (4)    Q3 (5)       Q4 (6)
 * 3152 / 9847  claytonjwong   12       1:36:38          0:08:37    0:17:47   1:26:38  *2
 */

/*
 * 1374. Generate a String With Characters That Have Odd Counts
 *
 * Q: https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
 * A: https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/discuss/534703/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number} n
 * @return {string}
 */

// let generateTheString = N => {
//     let ans = Array(N - 1).fill('a');
//     ans.push(N % 2 ? 'a' : 'b');
//     return ans.join('');
// };

// let generateTheString = N => Array(N - 1).fill('a').join('') + (N % 2 ? 'a' : 'b');

let generateTheString = N => 'a'.repeat(N - 1) + (N % 2 ? 'a' : 'b');

/*

keep track of all seen and the right-most seen

if seen.size == right-most seen, then ++ans

*/

/*
 * 1375. Bulb Switcher III
 *
 * Q: https://leetcode.com/problems/bulb-switcher-iii
 * A: https://leetcode.com/problems/bulb-switcher-iii/discuss/532580/Javascript-solution
 */

/**
 * @param {number[]} light
 * @return {number}
 */
let numTimesAllBlue = (A, seen = new Set(), max = 0, ans = 0) => {
    for (let i = 0; i < A.length; ++i) {
        max = Math.max(max, A[i]);
        seen.add(A[i]);
        if (max == seen.size)
            ++ans;
    }
    return ans;
};

/*

note: instead of using seen, i can just use index i

*/

let numTimesAllBlue = (A, max = 0, ans = 0) => {
    for (let i = 0; i < A.length; ++i) {
        max = Math.max(max, A[i]);
        if (max == i + 1)
            ++ans;
    }
    return ans;
};

// console.log(numTimesAllBlue([2,1,3,5,4]));
// console.log(numTimesAllBlue([3,2,4,1,5]));

// console.log(numTimesAllBlue([4,1,2,3]));
// console.log(numTimesAllBlue([2,1,4,3,6,5]));
// console.log(numTimesAllBlue([1,2,3,4,5,6]));


/*
 * 1376. Time Needed to Inform All Employees
 *
 * Q: https://leetcode.com/problems/time-needed-to-inform-all-employees/
 * A: https://leetcode.com/problems/time-needed-to-inform-all-employees/discuss/534379/Javascript-and-C%2B%2B-solutions
 */

/*

create adj list based on manager

manager[i] is parent of i (-1 is the root with no manager)

[-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6]
  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5
 [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]

For each depth, track max and add onto answer

*/

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
//
// incorrect algorithm!  -- need to calc from bottom-up and use memoization! <-- no that's not right either!  dfs top-down should do it!
//
// let numOfMinutes = (N, headID, manager, informTime, adj = {}, ans = 0) => {
//     for (let i = 0; i < manager.length; ++i) {
//         if (!adj[manager[i]])
//             adj[manager[i]] = [];
//         adj[manager[i]].push(i);
//     }
//     let q = [headID];
//     while (q.length > 0) {
//         let max = 0;
//         let K = q.length;
//         while (K--) {
//             let i = q[0]; q.shift();
//             max = Math.max(max, informTime[i]);
//             if (adj[i])
//                 q.push(...adj[i]);
//         }
//         ans += max;
//     }
//     return ans;
// };

//
// incorrect algorithm -- need to re-compute intermediary nodes when updates occur, switch back to top-down!
//
// let numOfMinutes = (N, headID, manager, informTime, q = [], m = {}) => {
//     for (let i = 0; i < N; ++i) {
//         if (informTime[i] == 0) {
//             q.push(i);
//         }
//         m[i] = 0;
//     }
//     for (;;) {
//         let child = q[0]; q.shift();
//         let parent = manager[child];
//         if (parent == -1)
//             break;
//         let time = informTime[parent] + m[child];
//         m[parent] = Math.max(m[parent], time);
//         q.push(parent);
//     }
//     return m[headID];
// };

//
// dfs top-down
//
let numOfMinutes = (N, root, parent, cost) => {
    let adj = [...Array(N)].map(row => []);
    for (let i = 0; i < N; ++i)
        if (parent[i] > -1)
            adj[parent[i]].push(i);
    let go = (i, max = 0) => {
        for (let j of adj[i])
            max = Math.max(max, cost[i] + go(j));
        return max;
    };
    return go(root);
};

console.log(numOfMinutes(1, 0, [-1], [0]));
console.log(numOfMinutes(6, 2, [2,2,-1,2,2,2], [0,0,1,0,0,0]));

console.log(numOfMinutes(7, 6, [1,2,3,4,5,6,-1], [0,6,5,4,3,2,1]));
// //                              0 1 2 3 4 5  6    0 1 2 3 4 5 6

console.log(numOfMinutes(15, 0, [-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6], [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]));
console.log(numOfMinutes(4, 2, [3,3,-1,2], [0,0,162,914]));

console.log(numOfMinutes(11, 4, [5,9,6,10,-1,8,9,1,9,3,4], [0,213,0,253,686,170,975,0,261,309,337]));
// //                               0 1 2  3  4 5 6 7 8 9 0    0   1 2   3   4   5   6 7   8   9   0

console.log(numOfMinutes(10, 3, [8,9,8,-1,7,1,2,0,3,0], [224,943,160,909,0,0,0,643,867,722]));
//                               0 1 2  3 4 5 6 7 8 9      0   1   2   3 4 5 6   7   8   9

