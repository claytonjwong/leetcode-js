/*
 * 1376. Time Needed to Inform All Employees
 *
 * Q: https://leetcode.com/problems/time-needed-to-inform-all-employees/
 * A: https://leetcode.com/problems/time-needed-to-inform-all-employees/discuss/534379/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

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