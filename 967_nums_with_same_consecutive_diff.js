/*
 * 967. Numbers With Same Consecutive Differences
 *
 * Q: https://leetcode.com/problems/numbers-with-same-consecutive-differences/
 * A: https://leetcode.com/problems/numbers-with-same-consecutive-differences/discuss/211594/Javascript-Python3-C%2B%2B-DFS-%2B-BT
 */

let numsSameConsecDiff = (N, K, ans = []) => {
    let go = (path = []) => {
        if (path.length == N) {
            ans.push(path.join(''));
            return;
        }
        for (let i = 0; i < 10; ++i)
            if (!path.length || i == path[path.length - 1] + K || i == path[path.length - 1] - K)
                go(path.concat(i));
    };
    go();
    if (N == 1)
        return ans;
    return [...ans].filter(s => s[0] != '0');
};
