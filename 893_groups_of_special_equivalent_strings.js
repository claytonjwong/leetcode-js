/*
 * 893. Groups of Special-Equivalent Strings
 *
 * Q: https://leetcode.com/problems/groups-of-special-equivalent-strings/
 * A: https://leetcode.com/problems/groups-of-special-equivalent-strings/discuss/601822/Javascript-and-C%2B%2B-solutions
 */

let numSpecialEquivGroups = (A, group = new Set()) => {
    let key = s => {
        let e = [], // even
            o = []; // odd
        s.split('').forEach((c, i) => {
            if (i % 2)
                o.push(c);
            else
                e.push(c);
        });
        return `${e.sort((a, b) => a.localeCompare(b))} ${o.sort((a, b) => a.localeCompare(b))}`;
    };
    A.forEach(s => group.add(key(s)));
    return group.size;
};