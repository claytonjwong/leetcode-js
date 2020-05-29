/*
 * 207. Course Schedule
 *
 * Q: https://leetcode.com/problems/course-schedule/
 * A: https://leetcode.com/problems/course-schedule/discuss/658707/Javascript-and-C%2B%2B-solutions
 */

let canFinish = (N, E, m = new Map(), look = new Set(), seen = new Set()) => {
    E.forEach(([u, v]) => m.set(u, (m.get(u) || new Set()).add(v)));
    let go = u => {
        if (look.has(u)) return false;
        if (seen.has(u)) return true;
        look.add(u);
        for (let v of (m.get(u) || []))
            if (!go(v))
                return false;
        look.delete(u);
        seen.add(u);
        return true;
    };
    for (let u of [...Array(N).keys()])
        if (!go(u))
            return false;
    return true;
};

console.log(canFinish(2, [[0, 1]]));
console.log(canFinish(2, [[0, 1], [1, 0]]));
console.log(canFinish(3, [[0,1],[0,2],[1,2]]));