/*
 * 1213. Intersection of Three Sorted Arrays
 *
 * Q: https://leetcode.com/problems/intersection-of-three-sorted-arrays/
 * A: https://leetcode.com/problems/intersection-of-three-sorted-arrays/discuss/531099/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */

// let arraysIntersection = (A, B, C) => {
//     return _.intersection(A, B, C);
// };

// let arraysIntersection = (A, B, C, ans = []) => {
//     let i = 0, j = 0, k = 0;
//     while (i < A.length && j < B.length && k < C.length) {
//         let max = Math.max(A[i], B[j], C[k]);
//         if (A[i] == max && B[j] == max && C[k] == max)
//             ans.push(max),
//             ++i, ++j, ++k;
//         while (i < A.length && A[i] < max) ++i;
//         while (j < B.length && B[j] < max) ++j;
//         while (k < C.length && C[k] < max) ++k;
//     }
//     return ans;
// };

// TODO: use binary search to find the max in logarithmic time rather than linear time

let arraysIntersection = (A, B, C, i = 0, j = 0, k = 0, ans = []) => {
    let search = (A, start, target) => {
        let i = start, j = A.length - 1, ans = start;
        while (i <= j) {
            let k = Math.floor((i + j) / 2);
            if (target == A[k])
                return k;
            else if (target < A[k])
                j = k - 1;
            else
                i = ans = k + 1;
        }
        return ans;
    };
    while (i < A.length && j < B.length && k < C.length) {
        let max = Math.max(A[i], B[j], C[k]);
        if (A[i] == max && B[j] == max && C[k] == max)
            ans.push(max),
            ++i, ++j, ++k;
        i = search(A, i, max);
        j = search(B, j, max);
        k = search(C, k, max);
    }
    return ans;
};

console.log(arraysIntersection([1,2,3,4,5],[1,2,5,7,9],[1,3,4,5,8]));