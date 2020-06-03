/*
 * Apple - Online Assessment
 * Completed June 2, 2020 5:33 PM
 * 79%
 * Your interview score of 6.85/10 beats 79% of all users.
 * Time Spent: 22 minutes 47 seconds
 * Time Allotted: 1 hour
 */

/*
 * 27. Remove Element
 *
 * Q: https://leetcode.com/problems/remove-element/
 * A: https://leetcode.com/problems/remove-element/discuss/667292/Javascript-and-C%2B%2B-solutions
 */
let removeElement = (A, T, j = 0) => { // let j be the write index
    for (let i = 0; i < A.length; ++i)
        if (A[i] != T)
            A[j++] = A[i];
    return j;
};

/*
 * 39. Combination Sum
 *
 * Q: https://leetcode.com/problems/combination-sum/
 * A: https://leetcode.com/problems/combination-sum/discuss/506331/Javascript-and-C%2B%2B-solutions
 */
let combinationSum = (A, T, ans = []) => {
    let N = A.length;
    let go = (start = 0, sum = T, path = []) => {
        if (!sum) {
            ans.push([...path]);
            return;
        }
        for (let i = start; i < N; ++i)
            if (0 <= sum - A[i])
                path.push(A[i]),
                go(i, sum - A[i], path),
                path.pop(A[i]);
    };
    return (go() || true) && ans;
};