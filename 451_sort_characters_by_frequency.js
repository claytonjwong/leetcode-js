/*
 * 451. Sort Characters By Frequency
 *
 * Q: https://leetcode.com/problems/sort-characters-by-frequency/
 * A: https://leetcode.com/problems/sort-characters-by-frequency/discuss/645813/Javascript-and-C%2B%2B-solutions
 */

// comparison sort: O(N * logN)
let frequencySort = (s, m = new Map(), ans = []) => {
    for (let c of s)
        m.set(c, 1 + (m.get(c) || 0));
    let bucket = [...m].sort((a, b) => b[1] - a[1]);
    for (let [c, cnt] of bucket)
        ans.push(c.repeat(cnt));
    return ans.join('');
};

// counting sort: O(N)
let frequencySort = (s, m = new Map(), ans = []) => {
    let N = s.length;
    for (let c of s)
        m.set(c, 1 + (m.get(c) || 0));
    let bucket = [...Array(N + 1)].map(cnt => []);
    for (let [c, cnt] of m)
        bucket[cnt].push(c);
    for (let cnt = N; 0 <= cnt; --cnt)
        for (let c of bucket[cnt])
            ans.push(c.repeat(cnt));
    return ans.join('');
};

console.log(frequencySort('ZAabbZzCccZ'));