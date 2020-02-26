/*
 * 45. Jump Game II
 *
 * Q: https://leetcode.com/problems/jump-game-ii/
 * A: https://leetcode.com/problems/jump-game-ii/discuss/520743/Javascript-and-C%2B%2B-solutions
 */

// let jump = (A, seen = new Set([0]), i = 1, reach = 1, hops = 0) => {
//     let N = A.length;
//     let q = [A[0]];
//     while (i < N) {
//         let K = q.length;
//         while (K--) {
//             let next = q[0]; q.shift();
//             for (reach = Math.max(reach, next); i <= Math.min(reach, N - 1); ++i) {
//                 if (seen.has(i))
//                     continue;
//                 q.push(i + A[i]);
//                 seen.add(i);
//             }
//         }
//         ++hops;
//     }
//     return hops;
// };

let jump = A => {
    let N = A.length, hops = 0, reach = A[0], next = -1;
    for (let i = 1; i < N; ++hops, reach = next)
        for (next = reach; i <= Math.min(reach, N - 1); ++i)
            next = Math.max(next, i + A[i]);
    return hops;
};