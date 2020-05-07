/*
 * 438. Find All Anagrams in a String
 *
 * Q: https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * A: https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/618783/Javascript-and-C%2B%2B-solutions
 */

let findAnagrams = (s, p, m = new Map(), ans = []) => {
    let P = p.split(''); P.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    let need = p.length;
    let i = 0,
        j = 0;
    while (j < s.length) {
        if (m.has(s[j])) {
            m.set(s[j], -1 + m.get(s[j]));
            if (m.get(s[j]) >= 0) {
                if (--need == 0) // no needs unmet for anagram 🎯
                    ans.push(i);
            }
        }
        ++j; // always expand (++j)
        if (j - i == p.length) {
            if (m.has(s[i])) {
                m.set(s[i], 1 + m.get(s[i]));
                if (m.get(s[i]) >= 1)
                    ++need;
            }
            ++i; // only shrink (++i) when the window size is reached
        }
    }
    return ans;
};

let findAnagrams = (s, p, m = {}, ans = []) => {
    let P = p.split(''); P.forEach(x => {
        if (!m[x])
            m[x] = 0;
        ++m[x];
    });
    let N = s.length,
        K = p.length,
        need = K,
        i = 0,
        j = 0;
    while (j < N) {
        if (s[j] in m && --m[s[j]] >= 0 && !--need) // no need unmet for anagram 🎯
            ans.push(i);
        if (++j - i == K) { // always expand, only shrink when the window size is reached
            if (s[i] in m && ++m[s[i]] >= 1)
                ++need;
            ++i;
        }
    }
    return ans;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));