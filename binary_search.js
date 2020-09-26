/*
 * Javascript version of C++ equal_range via lower_bound and upper_bound
 *
 * Gist: https://gist.github.com/claytonjwong/53bd1c1489b12eccad176addb8afd8e0
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
    return i;
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
    return j + 1;
};

let equalRange = (A, T) => {
    return [lowerBound(A, T), upperBound(A, T)];
};

let i, j;
let A = [1, 1, 2, 2, 3, 3, 5, 5];
//       0  1  2  3  4  5  6  7  8

let T = 2;
[i, j] = equalRange(A, T);
console.log(`${T} in range ${i}..${j}`);  // 2 in range 2..4

T = 4;
[i, j] = equalRange(A, T);
console.log(`${T} in range ${i}..${j}`);  // 4 in range 6..6
