/*
 * https://leetcode.com/contest/biweekly-contest-26
 *
 * Name            Score     Finish Time    AC    Ranking
 * claytonjwong    12/19     0:46:26        3/4   2195/5824
 */

/*
 * 1446. Consecutive Characters
 *
 * Q: https://leetcode.com/problems/consecutive-characters/
 * A: https://leetcode.com/problems/consecutive-characters/discuss/639815/Javascript-and-C%2B%2B-solutions
 */
let maxPower = (s, max = 1) => {
    for (let i = 1, same = 1; i < s.length; ++i)
        if (s[i - 1] == s[i])
            max = Math.max(max, ++same);
        else
            same = 1;
    return max;
};

/*
 * 1447. Simplified Fractions
 *
 * Q: https://leetcode.com/contest/biweekly-contest-26/problems/simplified-fractions/
 * A: https://leetcode.com/problems/simplified-fractions/discuss/639812/Javascript-and-C%2B%2B-solutions
 */
let simplifiedFractions = (N, ans = []) => {
    let gcd = (a, b) => !b ? a : gcd(b, a % b);
    for (let j = 2; j <= N; ++j)
        for (let i = 1; i < j; ++i)
            if (gcd(i, j) == 1)
                ans.push(`${i}/${j}`);
    return ans;
};

/*
 * 1448. Count Good Nodes in Binary Tree
 *
 * Q: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 * A: https://leetcode.com/problems/count-good-nodes-in-binary-tree/discuss/639804/Javascript-and-C%2B%2B-solutions
 */
// concise
let goodNodes = (root, max = -Infinity, f = Math.max) => !root ? 0 : Number(root.val >= max)
	+ goodNodes(root.left, f(root.val, max))
	+ goodNodes(root.right, f(root.val, max));
// verbose
let goodNodes = (root, path = [], max = [], cnt = 0, bad = 0) => {
    let go = root => {
        ++cnt;
        if (max.length && max[max.length - 1] > root.val)
            ++bad;
        path.push(root.val);
        if (!max.length || root.val >= max[max.length - 1])
            max.push(root.val);
        if (root.left) go(root.left);
        if (root.right) go(root.right);
        if (max.length && max[max.length - 1] == path[path.length - 1])
            max.pop();
        path.pop();
    };
    go(root);
    return cnt - bad;
};