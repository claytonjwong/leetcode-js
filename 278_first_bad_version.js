/*
 * 278. First Bad Version
 *
 * Q: https://leetcode.com/problems/first-bad-version/
 * A: https://leetcode.com/problems/first-bad-version/discuss/527936/Javascript-and-C%2B%2B-solutions
 */

// let solution = isBadVersion => {
//     return n => {
//         let i = 1, j = n;
//         for (;;) {
//             let k = Math.floor((i + j) / 2);
//             if (isBadVersion(k)) {
//                 if (k == 1 || !(isBadVersion(k - 1)))
//                     return k;
//                 j = k - 1;
//             } else {
//                 i = k + 1;
//             }
//         }
//     };
// };

let solution = isBadVersion => {
    return n => {
        let i = 1, j = n;
        while (i < j) {
            let k = Math.floor((i + j) / 2);
            if (isBadVersion(k)) {
                j = k;
            } else {
                i = k + 1;
            }
        }
        return i;
    };
};
