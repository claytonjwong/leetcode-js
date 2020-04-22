/*
 * 246. Strobogrammatic Number
 *
 * Q: https://leetcode.com/problems/strobogrammatic-number/
 * A: https://leetcode.com/problems/strobogrammatic-number/discuss/590845/Javascript-and-C%2B%2B-solutions
 */
let isStrobogrammatic = s => {
    let rotate = x => {
        switch (x) {
            case 0: return 0;
            case 1: return 1;
            case 6: return 9;
            case 8: return 8;
            case 9: return 6;
        }
        return -1;
    }
    let A = s.split('').map(Number);
    let N = A.length;
    for (let i = 0, j = N - 1; i <= j; ++i, --j)
        if (rotate(A[i]) != A[j])
            return false;
    return true;
};