/*
 * 46. Permutations
 *
 * Q: https://leetcode.com/problems/permutations/
 * A: https://leetcode.com/problems/permutations/discuss/657552/Javascript-and-C%2B%2B-solutions
 */

let permute = A => A.length == 1 ? [ A ] :
    A.reduce((res, _, i, A, B = [...A]) => {
        B.splice(i, 1);                                                 // B is A without A[i]
        return res.concat(permute(B).map(arr => [].concat(A[i], arr))); // insert A[i] into all other positions
    }, []);