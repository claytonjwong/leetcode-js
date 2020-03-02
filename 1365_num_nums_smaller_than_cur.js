/*
 * 1365. How Many Numbers Are Smaller Than the Current Number
 *
 * Q: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 * A: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/discuss/526057/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
// let smallerNumbersThanCurrent = (A, m = {}, ans = []) => {
//     let B = [...A].sort((a, b) => a - b);
//     for (let i = 0; i < B.length; ++i)
//         m[B[i]] = m[B[i]] >= 0 ? m[B[i]] : i;
//     for (let x of A)
//         ans.push(m[x]);
//     return ans;
// };
// console.log(smallerNumbersThanCurrent([7,7,7]));

let smallerNumbersThanCurrent = (A, ans = []) => {
    let S = [...A].sort((a, b) => a - b);
    let find = (x, i = 0, j = S.length - 1, ans = 0) => {
        while (i <= j) {
            let k = (i + j) >> 1;
            if (x <= S[k]) {
                ans = k;
                j = k - 1;
            } else {
                i = k + 1;
            }
        }
        return ans;
    };
    for (let x of A)
        ans.push(find(x));
    return ans;
};
console.log(smallerNumbersThanCurrent([1,2,2,3]));