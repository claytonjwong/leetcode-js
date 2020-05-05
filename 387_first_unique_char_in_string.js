/*
 * 387. First Unique Character in a String
 *
 * Q: https://leetcode.com/problems/first-unique-character-in-a-string/
 * A: https://leetcode.com/problems/first-unique-character-in-a-string/discuss/614812/Javascript-and-C%2B%2B-solutions
 */

let firstUniqChar = (S, m = new Map(), uniq = -1) => {
    S.split('').forEach(c => m.set(c, 1 + (m.get(c) || 0)));
    S.split('').forEach((c, i) => {
        if (uniq == -1 && m.get(c) == 1)
            uniq = i;
    });
    return uniq;
};