/*
 * 1371. Find the Longest Substring Containing Vowels in Even Counts
 *
 * Q: https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/
 * A: https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/discuss/578155/Javascript-and-C%2B%2B-solutions
 */

// let findTheLongestSubstring = (S, V = 'aeiou', max = 0) => {
//     let encode = c => 1 << V.indexOf(c);
//     let N = S.length;
//     let A = Array(N + 1).fill(0);
//     let seen = new Map([[0, 0]]);
//     for (let i = 1; i <= N; ++i) {
//         if (V.indexOf(S[i - 1]) == -1) // A[i] is not a vowel
//             A[i] = A[i - 1];
//         else                           // A[i] is a vowel
//             A[i] = A[i - 1] ^ encode(S[i - 1]);
//         if (seen.has(A[i]))
//             max = Math.max(max, i - seen.get(A[i])); // 🎯 max of i-th index minus first seen A[i] index
//         else
//             seen.set(A[i], i); // 👀 first seen A[i] index
//     }
//     return max;
// };

let findTheLongestSubstring = (S, V = 'aeiou', max = 0) => {
    let encode = c => {
        let i = V.indexOf(c);
        return i == -1 ? 0 : 1 << i;
    };
    let N = S.length;
    let A = Array(N + 1).fill(0);
    let seen = new Map([[0, 0]]);
    for (let i = 1; i <= N; ++i) {
        A[i] = A[i - 1] ^ encode(S[i - 1]);
        let first = seen.has(A[i]) ? seen.get(A[i]) : i;
        if (first == i)
            seen.set(A[i], i); // 👀 first seen A[i] index
        max = Math.max(max, i - first);  // 🎯 max of i-th index minus first seen A[i] index
    }
    return max;
};