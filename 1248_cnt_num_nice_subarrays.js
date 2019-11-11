/*
 * 1248. Count Number of Nice Subarrays
 *
 * Q: https://leetcode.com/problems/count-number-of-nice-subarrays/
 * A:  
 * 
 */

/*

let us use a sliding window to solve this problem:



N = 5

A = 11211
    012345
     i
         j
odd 012234


i =   01234567890
A =   2221221222
odd   0001001000
even 01230120123
    
--> there's 3 even numbers to the left of the left-most odd number index

    when i = 7, then ans += 3 + 1 = 4  ==>  ans = 4

 i = 01234567
     2221221
      221221
       21221
        1221    

    when i = 8, then ans += 3 + 1 = 4 ==> ans = 8

 i = 012345678
     22212212
      2212212
       212212
        12212

    when i = 9, then ans += 3 + 1 = 4  ==> ans = 12

 i = 0123456789
     222122122
      22122122
       2122122
        122122

    when i = 10, then ans += 3 + 1 = 4  ==> ans = 16

 i = 01234567890
     2221221222
      221221222
       21221222
        1221222

for each odd number, track the amount of evens to the left/right

i =   01234567890
A =   2221221222
        3x2
           2x3

    4 * 4 = 16

    the answer then is the amount of evens to the left of the left-most odd + 1 (for odd inclusive)
    multipled by the amount of evens to the right of the right-most odd + 1 (for odd inclusive)

i =   012345678901234
A =   22212212221222
        3x2
           2x3
               3x3

    4 * 4 = 16

    +

    3 * 4 = 12

    28

    so use a sliding window of size k within odds, multiple and accumulate

i = 012345
A = 11211
L = 00010
R = 01000
o = 01 34

0,3
1,4

*/

/**
 * @param {number[]} A
 * @param {number} k
 * @return {number}
 */
// var numberOfSubarrays = function(A, k, ans=0) {
//     let L = [...A].fill(0),
//         R = [...A].fill(0);
//     let N = A.length;
//     for (let i=1; i < N; ++i)
//         L[i] = A[i-1] % 2 == 0 ? L[i-1] + 1 : 0
//     for (let j=N-1; -1 < j; --j)
//         R[j] = A[j+1] % 2 == 0 ? R[j+1] + 1 : 0;
//     let odd = [...A].map((x, i) => x % 2 ? i : -1).filter(x => x > -1);
//     while (odd.length >= k) {
//         let i = odd[0],
//             j = odd[k-1];
//         ans += (L[i] + 1) * (R[j] + 1);
//         odd.shift();
//     }
//     return ans;
// };
var numberOfSubarrays = function(A, k, ans=0) {
    let isOdd = x => x % 2;
    let N = A.length;
    let L = [...A].fill(0),
        R = [...A].fill(0);
    for (let i=1;    i < N; ++i) L[i] = !isOdd(A[i-1]) ? L[i-1] + 1 : 0
    for (let j=N-2; -1 < j; --j) R[j] = !isOdd(A[j+1]) ? R[j+1] + 1 : 0;
    let odd = [...A].map((x, i) => isOdd(x) ? i : -1).filter(x => x > -1);
    for (; odd.length >= k; odd.shift()) {
        let i = odd[0],
            j = odd[k-1];
        ans += (L[i] + 1) * (R[j] + 1);
    }
    return ans;
};
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2,1,2,2,2], 2));
console.log(numberOfSubarrays([1,1,2,1,1], 3));
