/*
Facebook- Phone Interview
Completed March 24, 2020 6:59 PM
63%
Your interview score of 5.79/10 beats 63% of all users.
Time Spent: 47 minutes 4 seconds
Time Allotted: 1 hour 30 minutes
*/


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

/*
 * 199. Binary Tree Right Side View
 *
 * Q: https://leetcode.com/problems/binary-tree-right-side-view/
 * A: https://leetcode.com/problems/binary-tree-right-side-view/discuss/56023/Simple-C%2B%2B-using-depth-list
 */

let rightSideView = (root, D = []) => {
    let go = (root, depth = 0) => {
        if (!root)
            return;
        if (D.length == depth)
            D.push([]);
        D[depth].push(root.val);
        go(root.left, depth + 1);
        go(root.right, depth + 1);
    };
    go(root);
    return D.map(row => row[row.length - 1]);
};

/*
 * 567. Permutation in String
 *
 * Q: https://leetcode.com/problems/permutation-in-string/
 * A: https://leetcode.com/problems/permutation-in-string/discuss/551220/Javascript-and-C%2B%2B-solutions
 */

// AC, but inefficient algorithm

// let checkInclusion = (needle, haystack, map = new Map()) => {
//     let M = needle.length,
//         N = haystack.length;
//     for (let c of needle)
//         map.set(c, 1 + (map.get(c) || 0));
//     for (let i = 0; i < N; ++i) {
//         let j = 0;
//         let m = new Map(map);
//         for (; j < M && i + j < N; ++j) {
//             let cur = haystack[i + j];
//             if (!m.has(cur) || m.get(cur) == 0)
//                 break;
//             m.set(cur, m.get(cur) - 1);
//         }
//         if (j == M)
//             return true;
//     }
//     return false;
// };

// efficient sliding window

let checkInclusion = (needle, haystack, m = new Map()) => {
    let M = needle.length,
        N = haystack.length;
    if (M > N) // if needle is larger than haystack, then its impossible to find needle in haystack ❌
        return false;
    for (let i = 0; i < M; ++i) {
        let c = needle[i];
        if (!m.has(c))
            m.set(c, 0);
        m.set(c, m.get(c) - 1);
    }
    for (let i = 0; i < M; ++i) {
        let c = haystack[i];
        if (m.has(c))
            m.set(c, m.get(c) + 1);
    }
    for (let i = M; i <= N; ++i) {
        if ([...m.values()].every(x => x == 0)) // target 🎯
            return true;
        if (i < N) { // slide window 👉
            let pre = haystack[i - M],
                cur = haystack[i];
            if (m.has(pre)) m.set(pre, m.get(pre) - 1);
            if (m.has(cur)) m.set(cur, m.get(cur) + 1);
        }
    }
    return false;
};