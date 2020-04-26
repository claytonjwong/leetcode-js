/*
 * https://leetcode.com/contest/weekly-contest-186/
 *
 * Rank            Name             Score     Finish Time   Q1 (3)       Q2 (4)        Q3 (5)    Q4 (6)
 * 4671 / 11684    claytonjwong     7         1:54:57       0:05:12 *1   1:29:57 *4
 */

 /*
 * 1422. Maximum Score After Splitting a String
 *
 * Q: https://leetcode.com/problems/maximum-score-after-splitting-a-string/
 * A: https://leetcode.com/problems/maximum-score-after-splitting-a-string/discuss/598801/Javascript-and-C%2B%2B-solutions
 */

// AC
let maxScore = (s, max = 0) => {
    let A = s.split('').map(Number);
    let N = A.length;
    let L = Array(N),
        R = Array(N);
    for (let i = 0; i < N; ++i)
        L[i] = (A[i] == 0) + (i > 0 ? L[i - 1] : 0);     // prefix sums from 👉 (L)eft-to-right
    for (let i = N - 1; i >= 0; --i)
        R[i] = (A[i] == 1) + (i < N - 1 ? R[i + 1] : 0); // prefix sums from 👈 (R)ight-to-left
    for (let i = 1; i < N; ++i)
        max = Math.max(max, L[i - 1] + R[i]);
    return max;
};

// AC
let maxScore = (S, max = 0) => {
    let N = S.length;
    let zero = Number(S[0] == '0'),
         one = [...S].filter(c => c == '1').length - (S[0] == '1' ? 1 : 0);
    for (let i = 1; i < N; ++i) {
        max = Math.max(max, zero + one);
        zero += S[i] == '0';
         one -= S[i] == '1';
    }
    return max;
};


/*
 * 1423. Maximum Points You Can Obtain from Cards
 *
 * Q: https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 * A: https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/discuss/597883/Javascript-and-C%2B%2B-solutions
 */

 // TLE
/*
let maxScore = (A, K, m = {}) => {
    let N = A.length;
    if (K >= N)
        return A.reduce((a, b) => a + b);
    let go = (i, j, k) => {
        let key = `${i},${j},${k}`;
        if (m[key]) {
            console.log(`cache!`)
            return m[key];
        }
        if (!k)
            return m[key] = 0;
        let first = A[i] + go(i + 1, j, k - 1),
             last = A[j] + go(i, j - 1, k - 1);
        return m[key] = Math.max(first, last);
    };
    return go(0, A.length - 1, K);
};
*/

// TLE
/*
let maxScore = (A, K, m = {}) =
    let N = A.length;
    if (K >= N)
        return A.reduce((a, b) => a + b);
    let go = (i, j, k) => {
        let key = `${i},${j},${k}`;
        if (m[key])
            return m[key];
        if (!k)
            return m[key] = 0;
        let first = A[i] + go(i + 1, j, k - 1),
             last = A[j] + go(i, j - 1, k - 1);
        return m[key] = Math.max(first, last);
    };
    for (let i = 0, sum = 0; i < K; ++i) {
        let key = `${i},0,${K - i}`;
        sum += A[i];
        m[key] = sum;
    }
    for (let j = N - K - 1, sum = 0; j < N; ++j) {
        let key = `0,${j},${K - (N - j)}`;
        sum += A[j];
        m[key] = sum;
    }
    return go(0, A.length - 1, K);
};
*/

// AC
let maxScore = (A, K) => {
    let N = A.length;
    if (N <= K)
        return A.reduce((a, b) => a + b);
    A.unshift(...A.slice(N - K, N));
    let sum = 0;
    for (let i = 0, j = i; j < K; ++j)
        sum += A[j];
    let max = sum;
    for (let i = 0, j = K; i < K;) {
        sum = sum - A[i++] + A[j++];
        max = Math.max(max, sum);
    }
    return max;
}

// AC
let maxScore = (A, K) => {
    let N = A.length;
    let sum = A.slice(N - K, N).reduce((a, b) => a + b),
        max = sum;
    for (let i = 0, j = N - K; K--; max = Math.max(max, sum += A[i++] - A[j++]));
    return max;
}

// console.log(maxScore([100,40,17,9,73,75], 3));

// console.log(maxScore([1,79,80,1,1,1,200,1], 3));

// console.log(maxScore([11,49,100,20,86,29,72,1,2,3,4,5,5,6,7,78,8,8,3,232,3,3,2,21,1,2,12,32,2,32,32,32,232,3,23,23,23,2,323,2,32,23,23],29));

// console.log(maxScore([1,2,3,4,5,6,1], 3))
//                    0 1 2 3 4 5 6 7
//


// let findDiagonalOrder = (A, ans = []) => {
//     let M = A.length,
//         N = 0;
//     A.forEach(row => N = Math.max(N, ...row));
//     for (let k = 0; k < M; ++k) {
//         for (let i = k, j = 0; i >= 0 && j <= k; --i, ++j) {
//             console.log(`${i},${j},${k}`)
//             if (A[i].length < j)
//                 ans.push(A[i][j]);
//         }
//     }
//     for (let k = 1; k < M; ++k)
//         for (let i = M - 1, j = k; j < M; --i, ++j)
//             if (A[i].length < j)
//                 ans.push(A[i][j]);
//     return ans;
// };
// console.log(findDiagonalOrder([[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]));

