/*
 * 153. Find Minimum in Rotated Sorted Array
 *
 * Q: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * A: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/discuss/716821/Javascript-and-C%2B%2B-solutions
 */

// verbose
let findMin = A => {
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i < j) {
        let k = Math.floor((i + j) / 2);
        if (A[i] <= A[k] && A[k] <= A[j]) break;     // case 1: i..j is sorted, thus A[i] is the minimum 🎯
        if (A[j] <= A[i] && A[i] <= A[k]) i = k + 1; // case 2: k is in the 👈 left-most maximal-partition of A
        if (A[k] <= A[j] && A[j] <= A[i]) j = k;     // case 3: k is in the 👉 right-most minimal-partition of A
    }
    return A[i];
};

// concise
let findMin = A => {
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i < j) {
        let k = Math.floor((i + j) / 2);
        if (A[i] <= A[j]) break;     // case 1: i..j is sorted, thus A[i] is the minimum 🎯
        if (A[i] <= A[k]) i = k + 1; // case 2: k is in the 👈 left-most maximal-partition of A
        if (A[k] <= A[j]) j = k;     // case 3: k is in the 👉 right-most minimal-partition of A
    }
    return A[i];
};
