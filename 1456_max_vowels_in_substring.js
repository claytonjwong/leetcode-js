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
