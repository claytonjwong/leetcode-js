/*
 * 1405. Longest Happy String
 *
 * Q: https://leetcode.com/problems/longest-happy-string/
 * A: https://leetcode.com/problems/longest-happy-string/discuss/565380/Javascript-and-C%2B%2B-solutions
 */

let longestDiverseString = (a, b, c, found = false, ans = []) => {
    let m = new Map([['a', a], ['b', b], ['c', c]]);
    do {
        found = false
        let A = [...m].sort((a, b) => b[1] - a[1]);
        let N = ans.length;
        for (let i = 0; i < 3; ++i) {
            let [cur, cnt] = A[i];
            if (cnt > 0 && (N < 2 || ans[N - 2] != cur || ans[N - 1] != cur)) {
                ans.push(cur);
                m.set(cur, m.get(cur) - 1);
                found = true;
                break;
            }
        }
    } while (found);
    return ans.join('');
};

console.log(longestDiverseString(1, 1, 7));
console.log(longestDiverseString(2, 2, 1));
console.log(longestDiverseString(7, 1, 0));