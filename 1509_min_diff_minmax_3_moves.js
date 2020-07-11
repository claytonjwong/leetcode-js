/*
 * 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
 *
 * Q: https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/
 * A: https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/discuss/730531/Javascript-and-C%2B%2B-solutions
 * A: https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/discuss/731233/Similar-to-1423.-Maximum-Points-You-Can-Obtain-from-Cards
 */

// verbose
let minDifference = (A, min = Infinity) => {
    let N = A.length;
    let minDiff = A => {
        if (!A.length)
            return 0;
        return Math.max(...A) - Math.min(...A);
    };
    A.sort((a, b) => a - b);
    for (let i = 0; i < 3; ++i) {
        min = Math.min(min, minDiff(A.slice(0, N - 3)), minDiff(A.slice(3)));
        A.push(A.shift())
    }
    return min;
};

// concise
let minDifference = (A, min = Infinity) => {
    A.sort((a, b) => a - b);
    let N = A.length,
        i = 0,
        j = N - 4;
    while (0 <= j && j < N)
		min = Math.min(min, A[j++] - A[i++]); // slide window by 3 👉
    return min < Infinity ? min : 0;
};
