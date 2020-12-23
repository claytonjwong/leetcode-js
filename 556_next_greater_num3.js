/*
 * 556. Next Greater Element III
 *
 * Q: https://leetcode.com/problems/next-greater-element-iii/
 * A: https://leetcode.com/problems/next-greater-element-iii/discuss/983450/Kt-Js-Py3-Cpp-Brute-Force-Permutations
 */

let permutations = A => {
    if (A.length == 1)
        return A;
    return A.reduce((res, x, i, A, B = [...A]) => {
        B.splice(i, 1);                                               // B is A without A[i] (ie. x)
        return res.concat(permutations(B).map(a => [].concat(x, a))); // recursively insert x into all other positions
    }, []);
}
let nextGreaterElement = (T, best = 1e9 - 1) => {
    if (T < 10)
        return -1;
    let A = T.toString().split('');
    for (let p of permutations(A)) {
        let cand = parseFloat(p.join(''));
        if (T < cand && cand < best)
            best = cand;
    }
    return best < 1e9 - 1 ? best : - 1;
};
