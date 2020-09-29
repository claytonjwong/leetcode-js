/*
 * 425. Word Squares
 *
 * Q: https://leetcode.com/problems/word-squares/
 * A: https://leetcode.com/problems/word-squares/discuss/871098/Javascript-Python3-C%2B%2B-Map-Prefix-and-DFS-%2B-BT
 */

let wordSquares = (A, m = {}, ans = []) => {
    let N = A[0].length;
    for (let word of A) {
        let pre = '';
        if (!m[pre]) m[pre] = [];
        m[pre].push(word);
        for (let c of word) {
            pre = pre + c;
            if (!m[pre]) m[pre] = [];
            m[pre].push(word);
        }
    }
    let go = (path = []) => {
        let i = path.length;
        if (i == N) {
            ans.push([...path]);
            return;
        }
        let pre = '';
        for (let j = 0, k = i; 0 < i && j < k; ++j)
            pre = pre + path[j][k];
        for (let word of m[pre] ? m[pre] : [])
            go(path.concat(word));
    };
    go();
    return ans;
};
