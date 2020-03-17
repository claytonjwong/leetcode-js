 /*
  * 791. Custom Sort String
  *
  * Q2: https://leetcode.com/problems/custom-sort-string/
  * A2: https://leetcode.com/problems/custom-sort-string/discuss/542718/Javascript-and-C%2B%2B-solutions
  */
 let customSortString = (S, T, m = {}) => {
    S.split('').forEach((x, i) => m[x] = i + 1);
    return T.split('').sort((a, b) => (m[a] || Infinity) - (m[b] || Infinity)).join('');
};