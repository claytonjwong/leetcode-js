/*
 * 1442. Count Triplets That Can Form Two Arrays of Equal XOR
 *
 * Q: https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/
 * A: https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/discuss/623806/Javascript-and-C%2B%2B-solutions
 */
let countTriplets = (A, cnt = 0) => {
    let N = A.length;
    let xor = Array(N + 1).fill(0);
    for (let i = 1; i <= N; ++i)
        xor[i] = xor[i - 1] ^ A[i - 1];
    for (let i = 0; i < N; ++i) {
        for (let j = i + 1; j < N; ++j) {
            let cur = 0;
            for (let k = j; k < N; ++k) {
                cur ^= A[k];
                if ((xor[i] ^ xor[j]) == cur) // target 🎯
                    ++cnt;
            }
        }
    }
    return cnt;
};