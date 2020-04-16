/*
Apple Online Assessment
Completed April 15, 2020 6:13 PM
Time Spent: 11 minutes 16 seconds
Time Allotted: 1 hour
*/


/*
 * 268. Missing Number
 *
 * Q: https://leetcode.com/problems/missing-number/
 * A: https://leetcode.com/problems/missing-number/discuss/581574/Javascript-and-C%2B%2B-solutions
 */

// let missingNumber = A => {
//     let N = A.length + 1;
//     let sum = A.reduce((a, b) => a + b);
//     return (N * (N - 1) / 2) - sum;
// };

let missingNumber = A => ((A.length + 1) * A.length / 2) - A.reduce((a, b) => a + b);


/*
 * 38. Count and Say
 *
 * Q: https://leetcode.com/problems/count-and-say/
 * A: https://leetcode.com/problems/count-and-say/discuss/581589/Javascript-and-C%2B%2B-solutions
 */
let countAndSay = N => {
    let cur = [1], next = [];
    while (--N) {
        for (let i = 0, j = 0; i < cur.length; i = j) {
            for (j = i + 1; j < cur.length && cur[j - 1] == cur[j]; ++j);
            next.push(j - i), next.push(cur[i]); // cnt, val
        }
        cur = [...next], next = [];
    }
    return cur.join('');
};