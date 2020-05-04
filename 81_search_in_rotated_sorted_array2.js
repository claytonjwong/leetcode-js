/*
 * 81. Search in Rotated Sorted Array II
 *
 * Q: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 * A: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/discuss/611810/Javascript-and-C%2B%2B-solutions
 */

let search = (A, T) => {
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i <= j) {
        let k = Math.floor((i + j) / 2);
        if (A[k] == T) // target 🎯
            return true;
        else if (A[k] > A[j]) { // k is in the left "half"
            if (A[i] <= T && T < A[k])
                j = k - 1; // T is in [i..k)
            else
                i = k + 1; // T is in (k..j]
        }
        else if (A[k] < A[j]) { // k is in the right "half"
            if (A[k] < T && T <= A[j])
                i = k + 1; // T is in (k..j]
            else
                j = k - 1; // T is in [i..k)
        }
        else
            --j; // determination of k's "half" is ambiguous, reduce search space
    }
    return false; // target not found ❌
};

let search = (A, T) => {
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i <= j) {
        let k = Math.floor((i + j) / 2);
        if (A[k] == T) // target 🎯
            return true;
        else if (A[i] < A[k]) { // k is in the larger left "half"
            if (A[i] <= T && T < A[k])
                j = k - 1; // T is in [i..k)
            else
                i = k + 1; // T is in (k..j]
        }
        else if (A[i] > A[k]) { // k is in the smaller right "half"
            if (A[k] < T && T <= A[j])
                i = k + 1; // T is in (k..j]
            else
                j = k - 1; // T is in [i..k)
        } else
            ++i; // determination of k's "half" is ambiguous, reduce search space
    }
    return false; // target not found ❌
};

console.log(search([1,1,1,3,1], 3));
console.log(search([1,1,1,1,3], 3));
console.log(search([1,3,1,1,1], 3));
console.log(search([3,1,1,1,1], 3));
//                  0 1 2 3 4 5 6 7 8