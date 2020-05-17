/*
 * 438. Find All Anagrams in a String
 *
 * Q: https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * A: https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/618783/Javascript-and-C%2B%2B-solutions
 */

let findAnagrams = (s, p, m = new Map(), ans = []) => {
    p.split('').forEach(c => m.set(c, 1 + (m.get(c) || 0)));
    let N = s.length,
        K = p.length;
    let need = K;
    for (let i = 0, j = 0; j < N; ++j) {
        if (j - i == K) { // shrink when the window size is reached
            if (m.has(s[i])) {
                m.set(s[i], 1 + m.get(s[i])); // put
                if (m.get(s[i]) > 0)
                    ++need;  // post-increment need based on what's really needed
            }
            ++i;
        }
        if (m.has(s[j])) {
            if (m.get(s[j]) > 0)
                --need; // pre-decrement need based on what's actually available
            m.set(s[j], -1 + m.get(s[j])); // take
        }
        if (!need) ans.push(i); // no need unmet for anagram at s[i..j] 🎯
    }
    return ans;
};

console.log(findAnagrams('abcabc', 'abc'));
console.log(findAnagrams('cbaebabacd', 'abc'));
