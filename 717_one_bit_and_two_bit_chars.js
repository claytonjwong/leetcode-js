/*
 * 717. 1-bit and 2-bit Characters
 *
 * Q: https://leetcode.com/problems/1-bit-and-2-bit-characters/
 * A: https://leetcode.com/problems/1-bit-and-2-bit-characters/discuss/600686/Javascript-and-C%2B%2B-solutions
 */

let isOneBitCharacter = (A, i = 0) => {
    let N = A.length;
    while (i < N - 1)
        i += !A[i] ? 1 : 2;
    return i == N - 1;
};