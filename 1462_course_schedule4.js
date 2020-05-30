/*
 * 1462. Course Schedule IV
 *
 * Q: https://leetcode.com/problems/course-schedule-iv/
 * A: https://leetcode.com/problems/course-schedule-iv/discuss/660619/Javascript-and-C%2B%2B-solutions
 */
let checkIfPrerequisite = (N, E, queries, m = new Map()) => {
    E.forEach(([u, v]) => m.set(u, (m.get(u) || new Set()).add(v)));
    let dfs = (i, target, seen = new Set(), found = false) => {
        if (i == target)
            return true;
        if (seen.has(i))
            return false;
        seen.add(i);
        for (let j of (m.get(i) || []))
            found |= dfs(j, target, seen);
        return found;
    };
    return queries.map(([beg, end]) => dfs(beg, end));
};