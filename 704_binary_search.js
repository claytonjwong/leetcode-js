/*
 * 704. Binary Search
 *
 * Q: https://leetcode.com/problems/binary-search/
 * A: https://leetcode.com/problems/binary-search/discuss/600517/Javascript-and-C%2B%2B-solutions
 */

let search = (A, T) => {
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