/*
 * 835. Image Overlap
 *
 * Q: https://leetcode.com/problems/image-overlap/
 * A: https://leetcode.com/problems/image-overlap/discuss/133614/Javascript-Python3-C%2B%2B-Brute-Force
 */

let largestOverlap = (A, B) => {
    // 🎯  1. create T by padding B with N - 1 zeros
    let N = A.length,
        K = N + 2 * (N - 1);
    let T = [...Array(K)].map(_ => Array(K).fill(0));
    let offset = N - 1;
    for (let i = offset; i <= 2 * offset; ++i)
        for (let j = offset; j <= 2 * offset; ++j)
            T[i][j] = B[i - offset][j - offset];
    // 🔍  2. find max overlap by comparing A with all offsets in T
    let max = 0;
    for (let offset_i = 0; offset_i <= 2 * offset; ++offset_i) {
        for (let offset_j = 0; offset_j <= 2 * offset; ++offset_j) {
            let overlap = 0;
            for (let i = 0; i < N; ++i)
                for (let j = 0; j < N; ++j)
                    overlap += A[i][j] & T[i + offset_i][j + offset_j];
            max = Math.max(max, overlap);
        }
    }
    return max;
};
