/*
 * 1239. Maximum Length of a Concatenated String with Unique Characters
 *
 * Q: https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
 * A: https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/discuss/786020/Javascript-Python3-C%2B%2B-hash-collisions
 */

let maxLength = A => {
    A = A.filter(s => new Set(s.split('')).size == s.length); // ❌ remove invalid s
    let go = (i = 0, pre = 0) => {
        if (i == A.length)
            return 0;
        let cur = A[i].split('').reduce((hash, c) => hash | 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0)), 0);
        if (pre & cur)
            return go(i + 1, pre); // 💥 collision of non-unique chars, thus we only consider 🚫 without A[i]
        else
            return Math.max(go(i + 1, pre), A[i].length + go(i + 1, pre | cur)); // max of 🚫 without A[i] xor ✅ with A[i]
    };
    return go();
};
