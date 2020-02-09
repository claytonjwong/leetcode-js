// https://leetcode.com/discuss/interview-question/502496/google-onsite-substrings-that-dont-have-every-character-in-an-alphabet

// I botched this question in a Google onsite interview but worked out the solution later.

// Suppose you have a string, haystack, and a set of characters which may or may not appear in that string, alphabet. (No characters appear in alphabet more than once, because it's a set.) How many non-empty sub-strings of haystack do not contain every character in alphabet? Write a function that accepts haystack and alphabet as input and returns an answer to this question as an integer.

// Example:

// Input: haystack = "cab", alphabet = ['a', 'c']
// Output: 4
// Explanation:
// We can enumerate all 6 non-empty substrings of `cab`:
// "c" - this does not have `a`.
// "a" - this does not have `c`.
// "ca" - this has every entry in `alphabet`.
// "b" - this does not have `a` or `c`.
// "ab" - this does not have `c`.
// "cab" - this has every entry in `alphabet`.
// 4 of these substrings don't have every answer, so the function should return 4.

let numNotFromHaystack = (word, haystack, ans = 0) => {
    let need = new Set(haystack);
    for (let i = 0; i < word.length; ++i) {
        for (let j = i + 1; j <= word.length; ++j) {
            let s = word.substring(i, j);
            let found = new Set();
            for (let c of s)
                if (need.has(c))
                    found.add(c);
            if (need.size != found.size)
                ++ans;
        }
    }
    return ans;
};
console.log(numNotFromHaystack('cab', ['a', 'c']));