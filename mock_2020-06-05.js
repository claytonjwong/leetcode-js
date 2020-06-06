/*
 * Apple- Online Assessment
 * Completed June 5, 2020 5:12 PM
 * 96%
 * Your interview score of 8.75/10 beats 96% of all users.
 * Time Spent: 5 minutes 20 seconds
 * Time Allotted: 1 hour
 */

/*
 * 231. Power of Two
 *
 * Q: https://leetcode.com/problems/power-of-two/
 * A: https://leetcode.com/problems/power-of-two/discuss/672555/Javascript-and-C%2B%2B-solutions
 */
let isPowerOfTwo = x => x <= 0 ? false : !(x & (x - 1));

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