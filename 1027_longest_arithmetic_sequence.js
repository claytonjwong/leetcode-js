/*
 * 1027. Longest Arithmetic Sequence
 *
 * Q: https://leetcode.com/problems/longest-arithmetic-sequence/
 * A: https://leetcode.com/problems/longest-arithmetic-sequence/discuss/544568/Javascript-and-C%2B%2B-solutions
 */

/*

ok so this seems like a DP problem

the input is small enough for O(N^2)

for each i from [0..N)
    for each j from [i + 1..N)
        
these loops would compare...

Example 1:

Input: [3,6,9,12]
Output: 4

3 -> 6    =>  diff of 3
3 -> 9    =>  diff of 6
3 -> 12   =>  diff of 9

6 -> 9    =>  diff of 3
6 -> 12   =>  diff of 6

9 -> 12   =>  diff of 3

observe there are 3 diffs of 3: (3 -> 6), (6 -> 9), (9 -> 12)

we can put this sequence together as folllows:

create a diff bucket and push values onto it

3: 6, 9, 12
   2  3   4

what is there exists multiple values in each diff bucket...

Input: [7, 10, 3, 6, 9, 12, 13, 16, 19]

buckets:

3: 10, 6, 9, 12, 13, 16, 19

in this case each diff bucket should be an unordered_set for O(1) lookups!


question: how to determine the longest arithmetic sequence from the diff buckets?
we cannot simply use the bucket size, since there could be multiple sequences with the same diff

so when inserting into the diff bucket, track the maximum... so actually each diff bucket should be an unordered_map
where the map key is the value of the element inserted, and the map value is the length of the ongoing arthimetic sequencing
ending at the element value

ok so what we've got so far is the diff is the bucket and inside that bucket exist a map of element values
and their ongoing arthimetic sequence lengths.  When a new element is inserted into a bucket which is the beginning of a new
arthimetic sequence, then initially set it's value to 2 (this accounts for the element "from" and the element "to" inclusive),
otherwise if appending the value onto an existing arthimetic sequence, then increment the previous value by 1.


Example 2:

Input: [9,4,7,2,10]
Output: 3

9 -> 4   =>  diff of -5
9 -> 7   =>  diff of -2
9 -> 2   =>  diff of -7
9 -> 10  =>  diff of 1

4 -> 7   =>  diff of 3
4 -> 2   =>  diff of -2
4 -> 10  =>  diff of 6

7 -> 2   =>  diff of -5
7 -> 10  =>  diff of 3

2 -> 10  =>  diff of 8

observe there are 2 diffs of 3: (4 -> 7) and (7 -> 10), so its important to track the diff and value for each "hop"

buckets:

3: 7, 10
   2   3



Example 3:

Input: [20,1,15,3,10,5,8]
Output: 4

20 -> 1    =>  diff of -19
20 -> 15   =>  diff of -5
20 -> 3    =>  diff of -17
20 -> 10   =>  diff of -10
20 -> 5    =>  diff of -15
20 -> 8    =>  diff of -12

1 -> 15    =>  diff of 14
1 -> 3     =>  diff of 2
1 -> 10    =>  diff of 9
1 -> 5     =>  diff of 4
1 -> 8     =>  diff of 7

15 -> 3    =>  diff of -12
15 -> 10   =>  diff of -5
15 -> 5    =>  diff of -10
15 -> 8    =>  diff of -7

3 -> 10    =>  diff of 7
3 -> 5     =>  diff of 2
3 -> 8     =>  diff of 5

10 -> 5    =>  diff of -5
10 -> 8    =>  diff of -2

5 -> 8     =>  diff of 3

buckets:

-5: 15, 10, 5
     2   3  4

*/

/**
 * @param {number[]} A
 * @return {number}
 */

 // incorrect algorithm -- tracking the values in each bucket causes the answer to be too big (ie the nested loop counts diff of 0 multiple times)

// let longestArithSeqLength = (A, buckets = {}, max = 0) => {
//     for (let i = 0; i < A.length; ++i) {
//         for (let j = i + 1; j < A.length; ++j) {
//             let diff = A[j] - A[i];
//             if (!buckets[diff])
//                 buckets[diff] = {};
//             if (buckets[diff][A[j] - diff])
//                 buckets[diff][A[j]] = 1 + buckets[diff][A[j] - diff]; // case 1: append j to existing arithmetic sequence ending at i
//             else
//                 buckets[diff][A[j]] = 2;                              // case 2: start a new arithmetic sequence (2 for i and j inclusive)
//             max = Math.max(max, buckets[diff][A[j]]);
//         }
//     }
//     return max;
// };

// console.log(longestArithSeqLength([3,6,9,12])); // ok
// console.log(longestArithSeqLength([9,4,7,2,10])); // ok
// console.log(longestArithSeqLength([20,1,15,3,10,5,8])); // ok
// NG!... expect 4, but above incorrect algo outputs 7
// console.log(longestArithSeqLength([12,28,13,6,34,36,53,24,29,2,23,0,22,25,53,34,23,50,35,43,53,11,48,56,44,53,31,6,31,57,46,6,17,42,48,28,5,24,0,14,43,12,21,6,30,37,16,56,19,45,51,10,22,38,39,23,8,29,60,18]));
// ^^ is due to diff of 0...
// console.log(longestArithSeqLength([1,1,1,1]));
// ok so in addition to the last value in the arthimetic sequence,
// i also need to track the index to ensure properly appending to existing seq


// incorrect algorithm -- tracking the values and indexes in each bucket
// let longestArithSeqLength = (A, buckets = {}, max = 0) => {
//     for (let i = 0; i < A.length; ++i) {
//         for (let j = i + 1; j < A.length; ++j) {
//             let diff = A[j] - A[i];
//             if (!buckets[diff])
//                 buckets[diff] = {};
//             if (buckets[diff][A[j] - diff] && buckets[diff][A[j] - diff][1] < j)
//                 buckets[diff][A[j]] = [1 + buckets[diff][A[j] - diff][0], j]; // case 1: append j to existing arithmetic sequence ending at i
//             else
//                 buckets[diff][A[j]] = [2, j];                                 // case 2: start a new arithmetic sequence (2 for i and j inclusive)
//             max = Math.max(max, buckets[diff][A[j]][0]);
//         }
//     }
//     return max;
// };

// console.log(longestArithSeqLength([44,46,22,68,45,66,43,9,37,30,50,67,32,47,44,11,15,4,11,6,20,64,54,54,61,63,23,43,3,12,51,61,16,57,14,12,55,17,18,25,19,28,45,56,29,39,52,8,1,21,17,21,23,70,51,61,21,52,25,28]));
// output is 4, but expect 6
// the input value 0 is throwing off my check for if the bucket exists, thus, the output is too low!

// ok remember KISS == keep it simple stupid, just keep track of index/len in each bucket element and use an actual Map data structure
// so that the value of 0 passes the conditional check for case 1 to append to existing arthimetic sequence, previously using an JS object
// the value of 0 would be considered as false!

// this works out well to only track indexes (not values) in each diff bucket
// let longestArithSeqLength = (A, buckets = new Map(), max = 0) => {
//     let N = A.length;
//     for (let i = 0; i < N; ++i) {
//         for (let j = i + 1; j < N; ++j) {
//             let diff = A[j] - A[i];
//             if (!buckets.has(diff))
//                 buckets.set(diff, new Map());
//             if (buckets.get(diff).has(i))
//                 buckets.get(diff).set(j, 1 + buckets.get(diff).get(i)); // case 1: append j to existing arithmetic sequence ending at i
//             else
//                 buckets.get(diff).set(j, 2);                            // case 2: start a new arithmetic sequence (2 for i and j inclusive)
//             max = Math.max(max, buckets.get(diff).get(j));
//         }
//     }
//     return max;
// };

// let longestArithSeqLength = (A, buckets = new Map(), max = 0) => {
//     let N = A.length;
//     for (let i = 0; i < N; ++i) {
//         for (let j = i + 1; j < N; ++j) {
//             let diff = A[j] - A[i];
//             if (!buckets.has(diff))
//                 buckets.set(diff, new Map());
//             buckets.get(diff).set(j, 1 + (buckets.get(diff).get(i) || 1));
//             max = Math.max(max, buckets.get(diff).get(j));
//         }
//     }
//     return max;
// };

// let longestArithSeqLength = (A, dp = new Map(), max = 0) => {
//     let N = A.length;
//     for (let i = 0; i < N; ++i) {
//         for (let j = i + 1; j < N; ++j) {
//             let k = A[j] - A[i];
//             if (!dp.has(k))
//                 dp.set(k, new Map());
//             dp.get(k).set(j, 1 + (dp.get(k).get(i) || 1));
//             max = Math.max(max, dp.get(k).get(j));
//         }
//     }
//     return max;
// };


// map is way too ugly for me...

let longestArithSeqLength = (A, buckets = {}, max = 0) => { // buckets is {diff: {index: len}}
    let N = A.length;
    for (let i = 0; i < N; ++i) {
        for (let j = i + 1; j < N; ++j) {
            let diff = A[j] - A[i];
            if (!buckets[diff])
                buckets[diff] = {};
            if (buckets[diff][i])
                buckets[diff][j] = 1 + buckets[diff][i]; // case 1: append to existing arthimetic sequence
            else
                buckets[diff][j] = 2;                    // case 2: start a new arthimetic sequence (+2 for i and j inclusive)
            max = Math.max(max, buckets[diff][j]);
        }
    }
    return max;
};

let longestArithSeqLength = (A, dp = {}, max = 0) => {  // dp is {diff: {index: len}}
    let N = A.length;
    for (let i = 0; i < N; ++i) {
        for (let j = i + 1, k = 0; j < N; ++j) {
            let k = A[j] - A[i];
            if (!dp[k]) dp[k] = {};
            max = Math.max(max, dp[k][j] = 1 + (dp[k][i] ? dp[k][i] : 1));
        }
    }
    return max;
};

console.log(longestArithSeqLength([3,6,9,12])); // ok
console.log(longestArithSeqLength([9,4,7,2,10])); // ok
console.log(longestArithSeqLength([20,1,15,3,10,5,8])); // ok
console.log(longestArithSeqLength([12,28,13,6,34,36,53,24,29,2,23,0,22,25,53,34,23,50,35,43,53,11,48,56,44,53,31,6,31,57,46,6,17,42,48,28,5,24,0,14,43,12,21,6,30,37,16,56,19,45,51,10,22,38,39,23,8,29,60,18]));
console.log(longestArithSeqLength([1,1,1,1]));
console.log(longestArithSeqLength([44,46,22,68,45,66,43,9,37,30,50,67,32,47,44,11,15,4,11,6,20,64,54,54,61,63,23,43,3,12,51,61,16,57,14,12,55,17,18,25,19,28,45,56,29,39,52,8,1,21,17,21,23,70,51,61,21,52,25,28]));
