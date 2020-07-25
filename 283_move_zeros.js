/*
 * 283. Move Zeroes
 *
 * Q: https://leetcode.com/problems/move-zeroes/
 * A: https://leetcode.com/problems/move-zeroes/discuss/563206/Javascript-Python3-C%2B%2B-readwrite-index
 */

// more simple solution
let moveZeroes = A => {
    let N = A.length,
        i = 0,
        j = 0;
    while (j < N) {
        if (A[j])
            A[i++] = A[j]; // ✅ write each non-zero j-th value, ie. 🚫 skip each zero j-th value 🎱
        ++j;
    }
    while (i < N)
        A[i++] = 0; // write each 🚫 skipped zero j-th value 🎱 at the end
};

// previous complicated solution
let moveZeroes = A => {
    let N = A.length;
    for (let i = 0, j = 0; i < N; ++i) {
        if (A[i] == 0 && A[j] != 0) j = i; // j-th write index with value 0
        if (A[j] == 0 && A[i] != 0) [A[i], A[j++]] = [A[j], A[i]];  // swap to set i-th value to j-th write index
    }
};