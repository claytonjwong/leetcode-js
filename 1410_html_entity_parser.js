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
            let N = ans.length - (j - i + 1); // N is the index of text[i..j] (+1 for i..j inclusive)
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
