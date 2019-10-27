/*

1228. Missing Number In Arithmetic Progression

Q: https://leetcode.com/problems/missing-number-in-arithmetic-progression/
A: https://leetcode.com/problems/missing-number-in-arithmetic-progression/discuss/411047/Javascript-and-C%2B%2B-Solutions

*/

var missingNumber = (A) => {
    if (A[0] > A[1])
        A.reverse();
    const n = A.length,
          d = Math.min(A[1] - A[0], A[n-1] - A[n-2]);
    for (let i=1; i < n; ++i)
        if (A[i] - A[i-1] != d)
            return A[i-1] + d;
    return 0;
};

const ans = missingNumber([15,13,12]);
console.log(ans);
