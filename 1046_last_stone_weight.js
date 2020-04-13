/*
 * 1046. Last Stone Weight
 *
 * Q: https://leetcode.com/problems/last-stone-weight/
 * A: https://leetcode.com/problems/last-stone-weight/discuss/577600/Javascript-and-C%2B%2B-solutions
 */

let lastStoneWeight = A => {
    q = [...A].sort((a, b) => a - b);
    while (q.length > 1) {
        let y = q[q.length - 1]; q.pop();
        let x = q[q.length - 1]; q.pop();
        if (y - x > 0)
            q.push(y - x), q.sort((a, b) => a - b);
    }
    return q.length == 0 ? 0 : q[0];
};