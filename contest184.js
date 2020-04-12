/*
 * https://leetcode.com/contest/weekly-contest-184/
 *
 * Rank          Name            Score    Finish Time    Q1 (3)          Q2 (4)      Q3 (5)     Q4 (7)
 * 2211 / 9816   claytonjwong    12       0:40:15        0:06:17  *1     0:14:19     0:35:15
 *
 * Q1: https://leetcode.com/problems/string-matching-in-an-array/
 * A1: https://leetcode.com/problems/string-matching-in-an-array/discuss/575927/Javascript-and-C%2B%2B-solutions
 *
 * Q2: https://leetcode.com/problems/queries-on-a-permutation-with-key/
 * A2: https://leetcode.com/problems/queries-on-a-permutation-with-key/discuss/575943/Javascript-and-C%2B%2B-solutions
 *
 * Q3: https://leetcode.com/problems/html-entity-parser/
 * A3: https://leetcode.com/problems/html-entity-parser/discuss/574892/Javascript-and-C%2B%2B-solutions
 */


/*
 * 1408. String Matching in an Array
 *
 * Q: https://leetcode.com/problems/string-matching-in-an-array/
 * A: https://leetcode.com/problems/string-matching-in-an-array/discuss/575927/Javascript-and-C%2B%2B-solutions
 */
let stringMatching = (words, ans = new Set()) => {
    words.forEach(word => {
        words.forEach(sub => {
            if (word != sub && word.indexOf(sub) > -1)
                ans.add(sub);
        });
    });
    return [...ans];
};


/*
 * 1409. Queries on a Permutation With Key
 *
 * Q: https://leetcode.com/problems/queries-on-a-permutation-with-key/
 * A: https://leetcode.com/problems/queries-on-a-permutation-with-key/discuss/575943/Javascript-and-C%2B%2B-solutions
 */
let processQueries = (queries, N, ans = []) => {
    let A = [...Array(N).keys()].map(x => x + 1);
    for (let j of queries) {
        let i = A.indexOf(j);
        for (ans.push(i); i > 0; --i)
            [A[i - 1], A[i]] = [A[i], A[i - 1]]; // 👈 "bubble up" A[i] to the front of A
    }
    return ans;
};


/*
 * 1410. HTML Entity Parser
 *
 * Q: https://leetcode.com/problems/html-entity-parser/
 * A: https://leetcode.com/problems/html-entity-parser/discuss/574892/Javascript-and-C%2B%2B-solutions
 */
let entityParser = (text, i = -1, j = -1, ans = []) => {
    let map = new Map([['&quot;',`"`],['&apos;',`'`],['&amp;',`&`],['&gt;',`>`],['&lt;',`<`],['&frasl;',`/`]]);
    text.split('').forEach((c, k) => {
        ans.push(c);
        if (c == '&') i = k;
        if (c == ';') j = k;
        if (i < j) {
            let N = ans.length - (j - i + 1); // // N is the index of text[i..j] (+1 for i..j inclusive)
            let T = ans.slice(N).join(''); // target 🎯
            if (map.has(T)) {
                ans = ans.slice(0, N); // remove text[i..j]
                ans.push(map.get(T)); // add corresponding html entity
            }
            i = j = -1;
        }
    });
    return ans.join('');
};
