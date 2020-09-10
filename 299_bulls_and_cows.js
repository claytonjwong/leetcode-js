/*
 * 299. Bulls and Cows
 *
 * Q: https://leetcode.com/problems/bulls-and-cows/
 * A: https://leetcode.com/problems/bulls-and-cows/discuss/402832/Javascript-Python3-C%2B%2B-Map-solutions
 */

let getHint = (A, B, bull = 0, cow = 0) => {
    let first  = Array(10).fill(0),
        second = Array(10).fill(0);
    for (let i = 0; i < A.length; ++i)
        if (A[i] == B[i])
            ++bull;               // case 1: same digit, increment bull
        else
            ++first[A[i]],        // case 2: diff digit, increment corresponding digit count
			++second[B[i]];
    for (let i = 0; i < 10; ++i)
        cow += Math.min(first[i], second[i]);
    return `${bull}A${cow}B`;
};
