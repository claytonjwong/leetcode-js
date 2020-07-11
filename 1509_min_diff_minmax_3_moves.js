/*
 * 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
 *
 * Q: https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/
 * A: https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/discuss/730531/Javascript-and-C%2B%2B-solutions
 */
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
