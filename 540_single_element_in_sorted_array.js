/*
 * 540. Single Element in a Sorted Array
 *
 * Q: https://leetcode.com/problems/single-element-in-a-sorted-array/
 * A: https://leetcode.com/problems/single-element-in-a-sorted-array/discuss/560588/Javascript-and-C%2B%2B-solutions
 */

/*
recursively split the array in half, the half with the single digit is an odd length half, and the other half
without the single digit is an even length half.  keep looking for the odd length half until it's size is 1,
which is the base case where the single element is found.

Initially set i = 0 and j = N, recursively compute the middle index k as (i + j) / 2

A = 112334488
    0123456789
    i   k    j

k exists at value 33

There are 3 digits to the left of 33: 112
There are 4 digits to the right of 33: 4488

So go left by setting j to the minimum index A[k], ie. the value 33, and recompute k

A = 112334488
    0123456789
    ik j

k exists at 11

There are 0 digits to the left of 11
There is 1 digit to the right of 11: 2

So go right by setting i to the maximum index A[k], ie. the value 11, and recompute k

A = 112334488
    0123456789
     ikj

K is a single digit, return A[k]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

let singleNonDuplicate = A => {
    let N = A.length,
        i = 0,
        j = N;
    for (;;) {
        let k = Math.floor((i + j) / 2), min = k, max = k;
        console.log(`${i},${k},${j}`)
        if (k > 0 && A[k - 1] == A[k])
            min = k - 1;
        if (k < N - 1 && A[k] == A[k + 1])
            max = k + 1;
        console.log(`${min},${max}`)
        if (k == min && k == max) // target 🎯
            return A[k];
        if (min % 2 == 1) // 👈 left is odd
            j = min;
        else // 👉 right is odd
            i = max;
    }
};
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));