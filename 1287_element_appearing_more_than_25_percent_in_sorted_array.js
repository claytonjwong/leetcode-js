/*
 * 1287. Element Appearing More Than 25% In Sorted Array
 *
 * Q: https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
 * A: https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/discuss/453406/Javascript-and-C%2B%2B-solutions
 */
let findSpecialInteger = (A, cnt = {}) => {
  for (let x of A) {
    cnt[x] = cnt[x] ? cnt[x] + 1 : 1;
    if (cnt[x] > A.length / 4.0)
      return x;
  }
};
console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]));