/*
 * Weekly Contest 190
 * May 25, 2020 at 2:48 PM
 * 1 h 30 m    18/18    1:40:12    4/4    1683/8524
 */

/*
 * 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
 *
 * Q: https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 * A: https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/discuss/652390/Javascript-and-C%2B%2B-solutions
 */
let isPrefixOfWord = (S, T, ans = -1) => {
    let words = S.split(' ');
    for (let i = 0; i < words.length; ++i)
        if (words[i].substring(0, T.length) == T)
            return i + 1; // 🎯 +1 for 1-based indexing
    return -1;
};

/*
 * 1456. Maximum Number of Vowels in a Substring of Given Length
 *
 * Q: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 * A: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/discuss/652437/Javascript-and-C%2B%2B-solutions
 */
let maxVowels = (s, k, cnt = 0, max = 0) => {
    let isVowel = c => c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    for (let i = 0; i < s.length; ++i) {
        if (isVowel(s[i]))
            ++cnt;
        if (k <= i && isVowel(s[i - k]))
            --cnt;
        max = Math.max(max, cnt);
    }
    return max;
};

/*
 * 1457. Pseudo-Palindromic Paths in a Binary Tree
 *
 * Q: https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
 * A: https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/discuss/652445/Javascript-and-C%2B%2B-solutions
 */
let pseudoPalindromicPaths  = (root, m = Array(10).fill(0), odd = 0, ans = 0) => {
    let go = root => {
        odd += ++m[root.val] % 2 ? 1 : -1;
        if (!root.left && !root.right)
            ans += Number(odd <= 1);
        if (root.left) go(root.left);
        if (root.right) go(root.right);
        odd += --m[root.val] % 2 ? 1 : -1;
    };
    go(root);
    return ans;
};

/*
 * 1458. Max Dot Product of Two Subsequences
 *
 * Q: https://leetcode.com/problems/max-dot-product-of-two-subsequences/
 * A: https://leetcode.com/problems/max-dot-product-of-two-subsequences/discuss/653625/Javascript-and-C%2B%2B-solutions
 */
// hack for base case (when ans == 0 due to an empty subsequence of A or B)
let maxDotProduct = (A, B) => {
    let M = A.length,
        N = B.length;
    let m = [...Array(M + 1)].map(row => Array(N + 1).fill(-1));
    let go = (i = 0, j = 0) => {
        if (m[i][j] > -1)
            return m[i][j];
        if (i == M || j == N)
            return m[i][j] = 0;
        return m[i][j] = Math.max(
            go(i + 1, j + 1) + A[i] * B[j],
            go(i, j + 1), go(i + 1, j)
        );
    };
    let ans = go();
    if (ans)
        return ans;
    let max = -Infinity;
    A = [...new Set(A)];
    B = [...new Set(B)];
    A.forEach(x => B.forEach(y => max = Math.max(max, x * y)));
    return max;
};
// properly handle base case (ie. do not allow empty subsequence of A or B): TLE without Memo
let maxDotProduct = (A, B) => {
    let M = A.length,
        N = B.length;
    let go = (i = 0, j = 0) => {
        if (i == M || j == N)
            return 0;
        let max = A[i] * B[j] + Math.max(0, go(i + 1, j + 1)); // max(0, ...) to add recursive max product only if beneficial
        if (i < M - 1) max = Math.max(max, go(i + 1, j)); // i < M - 1 to ensure subsequence of A is non-empty
        if (j < N - 1) max = Math.max(max, go(i, j + 1)); // j < N - 1 to ensure subsequence of B is non-empty
        return max;
    };
    return go();
};
// properly handle base case (ie. do not allow empty subsequence of A or B): AC with memo
let maxDotProduct = (A, B) => {
    let M = A.length,
        N = B.length;
    let m = [...Array(M + 1)].map(row => Array(N + 1).fill(-Infinity));
    let go = (i = 0, j = 0) => {
        if (m[i][j] > -Infinity)
            return m[i][j];
        if (i == M || j == N)
            return m[i][j] = 0;
        m[i][j] = A[i] * B[j] + Math.max(0, go(i + 1, j + 1)); // max(0, ...) to add recursive max product only if beneficial
        if (i < M - 1) m[i][j] = Math.max(m[i][j], go(i + 1, j)); // i < M - 1 to ensure subsequence of A is non-empty
        if (j < N - 1) m[i][j] = Math.max(m[i][j], go(i, j + 1)); // j < N - 1 to ensure subsequence of B is non-empty
        return m[i][j];
    };
    return go();
};