/*
 * 1450. Number of Students Doing Homework at a Given Time
 *
 * Q: https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
 * A: https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/discuss/640623/Javascript-and-C%2B%2B-solutions
 */

// concise
let busyStudent = (A, B, T) => A.filter((_, i) => A[i] <= T && T <= B[i]).length;

// verbose
let busyStudent = (A, B, T, cnt = 0) => {
    let N = A.length;
    for (let i = 0; i < N; ++i)
        if (A[i] <= T && T <= B[i])
            ++cnt;
    return cnt;
};