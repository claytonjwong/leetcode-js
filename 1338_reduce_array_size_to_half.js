/*
 * 1338. Reduce Array Size to The Half
 *
 * Q: https://leetcode.com/problems/reduce-array-size-to-the-half/
 * A: https://leetcode.com/problems/reduce-array-size-to-the-half/discuss/514431/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[]} arr
 * @return {number}
 */

let minSetSize = (A, m ={}, ans = 0) => {
    for (let x of A) m[x] = m[x] ? m[x] + 1 : 1;
    let cnt = Object.entries(m).map(pair => pair[1]).sort((a, b) => b - a);
    for (let del = 0; del < A.length / 2; del += cnt[0], cnt.shift(), ++ans);
    return ans;
};