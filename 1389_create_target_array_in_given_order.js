/*
 * 1389. Create Target Array in the Given Order
 *
 * Q: https://leetcode.com/problems/create-target-array-in-the-given-order/
 * A: https://leetcode.com/problems/create-target-array-in-the-given-order/discuss/547200/Javascript-and-C%2B%2B-solutions
 */

let createTargetArray = (nums, index, ans = []) => {
    for (let i = 0; i < nums.length; ++i)
        ans.splice(index[i], 0, nums[i]);
    return ans;
};