/*
 * 884. Uncommon Words from Two Sentences
 *
 * Q: https://leetcode.com/problems/uncommon-words-from-two-sentences/
 * A: https://leetcode.com/problems/uncommon-words-from-two-sentences/discuss/159907/Javascript-Python3-C%2B%2B-Word-Counter
 */

let uncommonFromSentences = (A, B, m = {}, ans = []) => {
    let words = [...A.split(' '), ...B.split(' ')];
    words.forEach(word => m[word] = 1 + (m[word] || 0));
    return words.filter(word => m[word] == 1);
};
