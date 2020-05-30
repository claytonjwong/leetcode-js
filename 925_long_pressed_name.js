/*
 * 925. Long Pressed Name
 *
 * Q: https://leetcode.com/problems/long-pressed-name/
 * A: https://leetcode.com/problems/long-pressed-name/discuss/659364/Javascript-and-C%2B%2B-solutions
 */

let isLongPressedName = (A, B) => {
    let M = A.length,
        N = B.length,
        i = 0,
        j = 0;
    while (i < M && j < N) {
        let cntA = 0,
            cntB = 0;
        while (i + 1 < M && A[i] == A[i + 1]) ++i, ++cntA;
        while (j + 1 < N && B[j] == B[j + 1]) ++j, ++cntB;
        if (A[i] != B[j] || cntA > cntB)
            return false;
        ++i, ++j;
    }
    return i == M && j == N;
};