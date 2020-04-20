/*
 * 33. Search in Rotated Sorted Array
 *
 * Q: https://leetcode.com/problems/search-in-rotated-sorted-array/
 * A: https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/589200/Javascript-Solutions
 */

 /*
let search = function(A, T) {
    let find = (i, j) => {
        while (i < j) {
            let k = Math.floor((i + j) / 2);
            if (A[k] < T) // predicate for target
                i = k + 1;
            else
                j = k;
        }
        return A[i] == T ? i : -1;
    };
    let pivot = (i, j) => {
        while (i < j) {
            let k = Math.floor((i + j) / 2);
            if (A[k] >= A[0]) // predicate for pivot
                i = k + 1;
            else
                j = k;
        }
        return i;
    };
    let N = A.length,
        i = 0,
        j = N - 1;
    if (A[i] < A[j]) // A is not rotated
        return find(i, j);
    let k = pivot(i, j);
    if (T > A[N - 1])
        return find(0, k - 1) // big part
    else
        return find(k, N - 1); // small part
};
*/

/*
let search = function(A, T) {
    let pivot = x => x >= A[0], // predicates for binary search criteria
        target = x => x < T;
    let find = (i, j, pred) => {
        while (i < j) {
            let k = Math.floor((i + j) / 2);
            if (pred(A[k]))
                i = k + 1;
            else
                j = k;
        }
        if (pred == target)
            return A[i] == T ? i : -1; // index of target
        else
            return i;                  // index of pivot
    };
    let N = A.length,
        i = 0,
        j = N - 1;
    if (A[i] < A[j]) // A is not rotated
        return find(i, j, target);
    let k = find(i, j, pivot);
    if (T > A[N - 1])
        return find(0, k - 1, target); // big part
    else
        return find(k, N - 1, target); // small part
};
*/

let search = function(A, T) {
    let pivot = x => x >= A[0], target = x => x < T; // predicates for binary search criteria
    let find = (i, j, pred) => {
        while (i < j) {
            let k = Math.floor((i + j) / 2);
            i =  pred(A[k]) ? k + 1 : i;
            j = !pred(A[k]) ? k     : j;
        }
        return pred == pivot ? i : A[i] == T ? i : -1; // return index of pivot or index of target
    };
    let N = A.length, i = 0, j = N - 1;
    if (A[i] < A[j]) // A is not rotated
        return find(i, j, target);
    let k = find(i, j, pivot);
    return T > A[N - 1] ? find(0, k - 1, target) : find(k, N - 1, target); // find in big part or small part
};

console.log(search([3,1], 1));
console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1], 0));
console.log(search([4,5,6,7,0], 0));
console.log(search([4,5,6,7], 0));