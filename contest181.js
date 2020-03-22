/*
 * https://leetcode.com/contest/weekly-contest-181/
 *
 * Rank           Name           Score   Finish Time    Q1 (3)    Q2 (4)      Q3 (5)      Q4 (6)
 * 2072 / 10930   claytonjwong   12      1:13:15        0:04:52   0:17:12 *1  1:03:15 *1
 */

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


/*
 * 1390. Four Divisors
 *
 * Q: https://leetcode.com/problems/four-divisors/
 * A: https://leetcode.com/problems/four-divisors/discuss/547865/Javascript-and-C%2B%2B-solutions
 */

let sumFourDivisors = (A, ans = 0) => {
    let getDivisors = x => {
        let divs = new Set([1, x]);
        for (let i = 2; i <= Math.sqrt(x); ++i) {
            let j = x / i;
            if (x == Math.floor(i) * Math.floor(j))
                divs.add(i),
                divs.add(j);
        }
        return divs;
    }
    for (let x of A) {
        let divs = getDivisors(x);
        if (divs.size != 4)
            continue;
        ans += [...divs].reduce((a, b) => a + b);
    }
    return ans;
};


/*
 * 1391. Check if There is a Valid Path in a Grid
 *
 * Q: https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/
 * A: https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/discuss/547872/Javascript-and-C%2B%2B-solutions
 */

let hasValidPath = A => {
    let dir = [
        [],                  // 0 sentinel
        [[ 0, -1], [ 0, 1]], // 1 left  👈 / 👉 right
        [[-1,  0], [ 1, 0]], // 2 upper 👆 / 👇 lower
        [[ 0, -1], [ 1, 0]], // 3 left  👈 / 👇 lower
        [[ 0,  1], [ 1, 0]], // 4 right 👉 / 👇 lower
        [[ 0, -1], [-1, 0]], // 5 left  👈 / 👆 upper
        [[ 0,  1], [-1, 0]], // 6 right 👉 / 👆 upper
    ];
    let M = A.length,
        N = A[0].length;
    let seen = new Set([`0,0`]);
    let q = [[0, 0]];
    while (q.length > 0) {
        let [m, n] = q[0]; q.shift();
        if (m == M - 1 && n == N - 1) // target 🎯
            return true;
        let cand = dir[A[m][n]]; // next candidates from current m,n
        for (let [u, v] of cand) {
            let i = u + m, // next i
                j = v + n; // next j
            if (i < 0 || i >= M || j < 0 || j >= N || seen.has(`${i},${j}`))
                continue;
            let next = dir[A[i][j]];
            for (let [a, b] of next)
                if (a + i == m && b + j == n) // next i,j has incoming route from current m,n 👍
                    seen.add(`${i},${j}`),
                    q.push([i, j]);
        }
    }
    return false;
};

console.log(hasValidPath([[2,4,3],[6,5,2]]));
console.log(hasValidPath([[1,2,1],[1,2,1]]));

console.log(hasValidPath([[1,1,2]]));
console.log(hasValidPath([[1,1,1,1,1,1,3]]));
console.log(hasValidPath([[2],[2],[2],[2],[2],[2],[6]]));
console.log(hasValidPath([[1]]));