/*
 * 131. Palindrome Partitioning
 *
 * Q: https://leetcode.com/problems/palindrome-partitioning/
 * A: https://leetcode.com/problems/palindrome-partitioning/discuss/972094/Kt-Js-Py3-Cpp-DFS-%2B-BT
 */

let partition = (s, paths = []) => {
    let N = s.length;
    let ok = A => A.join('') == [...A].reverse().join('');
    let go = (i = 0, path = []) => {
        if (i == N) {
            paths.push([...path]);
            return;
        }
        let cand = [];
        while (i < N) {
            cand.push(s[i]);
            if (ok(cand)) {
                path.push(cand.join(''));
                go(i + 1, path);
                path.pop();
            }
            ++i;
        }
    }
    go();
    return paths;
};
