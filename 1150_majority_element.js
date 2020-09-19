/*
 * 1150. Check If a Number Is Majority Element in a Sorted Array
 *
 * Q: https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/
 * A: https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/discuss/854521/Javascript-Python3-C%2B%2B-Equal-Range-via-.-Binary-Search
 */

let lowerBound = (A, T) => {
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i < j) {
        let k = Math.floor((i + j) / 2);
        if (A[k] < T)
            i = k + 1;
        else
            j = k;
    }
    return A[i] == T ? i : -1;
};

let upperBound = (A, T) => {
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i < j) {
        let k = Math.floor((i + j + 1) / 2);
        if (A[k] <= T)
            i = k;
        else
            j = k - 1;
    }
    return A[j] == T ? j + 1 : -1;
};

let equalRange = (A, T) => {
    return [ lowerBound(A, T), upperBound(A, T) ];
};

let isMajorityElement = (A, T) => {
    let [ i, j ] = equalRange(A, T);
    return Math.floor(A.length / 2) < j - i;
};
