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