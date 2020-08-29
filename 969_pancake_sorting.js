/*
 * 969. Pancake Sorting
 *
 * Q: https://leetcode.com/problems/pancake-sorting/
 * A: https://leetcode.com/problems/pancake-sorting/discuss/818425/Javascript-Python3-C%2B%2B-Insertion-Sort
 */

let pancakeSort = (A, flip = []) => {
    let N = A.length;
    for (let i = N - 1; 0 <= i; --i) {
        if (A[i] == i + 1)  // ✅ i-th max value already in i-th position
            continue;
        let j = A.indexOf(i + 1);
        flip.push(j + 1), A.splice(0, j + 1, ...A.slice(0, j + 1).reverse());  // 1. move i-th max value to front
        flip.push(i + 1), A.splice(0, i + 1, ...A.slice(0, i + 1).reverse());  // 2. move i-th max value to i-th position
    }
    return flip;
};
