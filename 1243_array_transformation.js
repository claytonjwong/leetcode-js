/*
 * 1243. Array Transformation
 * 
 * Q: https://leetcode.com/problems/array-transformation/
 * A: https://leetcode.com/problems/array-transformation/discuss/421590/Javascript-and-C%2B%2B-solutions
 */

let transformArray = (A, change=false) => {
    do {
        change = false;
        let B = [...A].fill(0);
        for (let i=1; i + 1 < A.length; ++i)
            if (A[i-1] < A[i] && A[i] > A[i+1])
                --B[i], change = true;
            else if (A[i-1] > A[i] && A[i] < A[i+1])
                ++B[i], change = true;
        A = A.map((x, i) => x + B[i]);
    } while (change);
    return A;
};

let ans = transformArray([2,1,2,1,1,2,2,1]);
console.log(ans);