/*
 * 448. Find All Numbers Disappeared in an Array
 *
 * Q: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * A: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/discuss/672550/Javascript-and-C%2B%2B-solutions
 */
let findDisappearedNumbers = A => {
    let ans = [...Array(A.length + 1)].map((_, i) => i); // +1 for 1-based indexing (0 is a sentinel placeholder value)
    A.forEach(x => ans[x] = 0);
    return ans.filter(x => x);
};