/*
 * 1426. Counting Elements
 *
 * Q: https://leetcode.com/problems/counting-elements/
 * A: https://leetcode.com/problems/counting-elements/discuss/567834/Javascript-and-C%2B%2B-solutions
 */

let countElements = (A, cnt = 0) => {
    let S = new Set(A);
    return A.filter(x => S.has(x + 1)).length;
};

let countElements = (A, seen = new Set(), ans = 0) => {
    A.sort((a, b) => b - a).forEach(x => {
        ans += Number(seen.has(x + 1));
        seen.add(x);
    });
    return ans;
};