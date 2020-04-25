/*
 * 599. Minimum Index Sum of Two Lists
 *
 * Q: https://leetcode.com/problems/minimum-index-sum-of-two-lists/
 * A: https://leetcode.com/problems/minimum-index-sum-of-two-lists/discuss/597138/Javascript-and-C%2B%2B-solutions
 */

let findRestaurant = (A, B, m = new Map(), min = 2001, ans = []) => {
    A.forEach((x, i) => m.set(x, i));
    B.forEach((x, j) => {
        if (m.has(x)) {
            let i = m.get(x);
            if (min > i + j)
                min = i + j,
                ans = [];
            if (min == i + j)
                ans.push(x);
        }
    });
    return ans;
};