/*
 * 1306. Jump Game III
 * 
 * Q: https://leetcode.com/problems/jump-game-iii/
 * A: https://leetcode.com/problems/jump-game-iii/discuss/464420/Javascript-and-C%2B%2B-solutions
 */
/*
let canReach = (A, i) => {
    let ok = x => 0 <= x && x < A.length;
    let q = [i]; let seen = new Set(q);
    while (q.length > 0) {
        let x = q[0]; q.shift();
        if (A[x] == 0)
            return true;
        let [l, r] = [x - A[x], x + A[x]];
        if (ok(l) && !seen.has(l)) q.push(l), seen.add(l);
        if (ok(r) && !seen.has(r)) q.push(r), seen.add(r);
    }
    return false;
};
*/
let canReach = (A, x, seen = new Set()) => {
    let ok = x => 0 <= x && x < A.length && !seen.has(x);
    if (A[x] == 0)
        return true;
    seen.add(x);
    let [l, r] = [x - A[x], x + A[x]];
    return (ok(l) && canReach(A, l, seen)) || (ok(r) && canReach(A, r, seen));
};