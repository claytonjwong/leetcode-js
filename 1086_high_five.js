/*
 * 1086. High Five
 *
 * Q: https://leetcode.com/problems/high-five/
 * A: https://leetcode.com/problems/high-five/discuss/603740/Javascript-and-C%2B%2B-solutions
 */

let highFive = (scores, m = new Map(), ans = []) => {
    for (let [i, x] of scores)
        m.set(i, (m.get(i) || []).concat(x));
    for (let [i, A] of m.entries()) {
        let len = Math.min(5, A.length);
        ans.push([i, A.sort((a, b) => b - a).slice(0, len).reduce((a, b) => a + b) / len]);
    }
    return ans.map(a => [a[0], Math.floor(a[1])]).sort((a, b) => a[0] - b[0]); // round down and sort by student id
};