/*
 * 1169. Invalid Transactions
 *
 * Q: https://leetcode.com/problems/invalid-transactions/
 * A: https://leetcode.com/problems/invalid-transactions/discuss/566994/Javascript-and-C%2B%2B-solutions
 */

let invalidTransactions = (T, ans = new Set(), name = 0, time = 1, amount = 2, city = 3) => {
    let N = T.length;
    let A = T.map(t => t.split(',')).sort((a, b) => a[name] != b[name] ? a[name].localeCompare(b[name]) : a[time] - b[time]);
    A.filter(a => a[amount] > 1000).forEach(trans => ans.add(trans.join(','))); // amount exceeds 1000 ❌
    for (let i = 0; i < N; ++i)
        for (let j = 0; j < N; ++j)
            if (i != j && A[i][name] == A[j][name] && A[i][city] != A[j][city] && Math.abs(A[i][time] - A[j][time]) <= 60)
                ans.add(A[i].join(',')), // A[i] and A[j] occur within 60 minutes of each other ❌
                ans.add(A[j].join(','));
    return [...ans];
};
