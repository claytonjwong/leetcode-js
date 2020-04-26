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
    for (let i = 0, j = N - K; K--; max = Math.max(max, sum += A[i++] - A[j++])); // slide window by K 👉
    return max;
}

// AC
let maxScore = (A, K) => {
    let N = A.length,
        i = 0,
        j = N - K;
    let sum = A.slice(j, N).reduce((a, b) => a + b),
        max = sum;
    while (K--) max = Math.max(max, sum += A[i++] - A[j++]); // slide window by K 👉
    return max;
}

// console.log(maxScore([100,40,17,9,73,75], 3));

// console.log(maxScore([1,79,80,1,1,1,200,1], 3));

// console.log(maxScore([11,49,100,20,86,29,72,1,2,3,4,5,5,6,7,78,8,8,3,232,3,3,2,21,1,2,12,32,2,32,32,32,232,3,23,23,23,2,323,2,32,23,23],29));

// console.log(maxScore([1,2,3,4,5,6,1], 3))
//                    0 1 2 3 4 5 6 7
//