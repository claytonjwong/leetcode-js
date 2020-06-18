/*
 * Javascript version of C++ equal_range via lower_bound and upper_bound
 *
 * https://gist.github.com/claytonjwong/53bd1c1489b12eccad176addb8afd8e0
 *
 * Input: The array A in ascending order and a target T
 * Output: The tightly bound indices [i, j] where A[i] <= T < A[j] if T exists in A
 * otherwise [-1, -1] is returned if T does not exist in A
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
    return [lowerBound(A, T), upperBound(A, T)];
};