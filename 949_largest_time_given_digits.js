/*
 * 949. Largest Time for Given Digits
 *
 * Q: https://leetcode.com/problems/largest-time-for-given-digits/
 * A: https://leetcode.com/problems/largest-time-for-given-digits/discuss/666302/Javascript-and-C%2B%2B-solutions
 */

let largestTimeFromDigits = (A, best = '') => {
    let permutations = A => {
        if (A.length == 1)
            return A;
        return A.reduce((res, _, i, A, B = [...A]) => {
            B.splice(i, 1); // B is A without A[i]
            return res.concat(permutations(B).map(arr => [].concat(A[i], arr))); // recursively insert A[i] into all other positions
        }, []);
    };
    let time = A => Number(`${A[0]}${A[1]}`) <= 23 && Number(`${A[2]}${A[3]}`) <= 59 ? `${A[0]}${A[1]}:${A[2]}${A[3]}` : '';
    permutations(A).forEach(cand => {
        if (best < time(cand))
            best = time(cand);
    });
    return best;
};