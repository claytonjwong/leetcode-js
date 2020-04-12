/*
 * 1409. Queries on a Permutation With Key
 *
 * Q: https://leetcode.com/problems/queries-on-a-permutation-with-key/
 * A: https://leetcode.com/problems/queries-on-a-permutation-with-key/discuss/575943/Javascript-and-C%2B%2B-solutions
 */

let processQueries = (queries, N, ans = []) => {
    let A = [...Array(N).keys()].map(x => x + 1);
    for (let j of queries) {
        let i = A.indexOf(j);
        for (ans.push(i); i > 0; --i)
            [A[i - 1], A[i]] = [A[i], A[i - 1]]; // 👈 "bubble up" A[i] to the front of A
    }
    return ans;
};