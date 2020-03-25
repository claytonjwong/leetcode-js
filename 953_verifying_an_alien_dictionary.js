/*
 * 953. Verifying an Alien Dictionary
 *
 * Q: https://leetcode.com/problems/verifying-an-alien-dictionary/
 * A: https://leetcode.com/problems/verifying-an-alien-dictionary/discuss/550428/Javascript-and-C%2B%2B-solutions
 */

let isAlienSorted = (words, order, m = {}) => {
    for (let i = 0; i < order.length; ++i)
        m[order[i]] = i;
    let sorted = [...words];
    sorted.sort((a, b) => {
        for (let i = 0; i < Math.min(a.length, b.length); ++i)
            if (a[i] != b[i])
                return m[a[i]] - m[b[i]];
        return a.length - b.length;
    });
    for (let i = 0; i < sorted.length; ++i)
        if (sorted[i] != words[i])
            return false;
    return true;
};