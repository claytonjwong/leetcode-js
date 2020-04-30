/*
 * 1056. Confusing Number
 *
 * Q: https://leetcode.com/problems/confusing-number/
 * A: https://leetcode.com/problems/confusing-number/discuss/603611/Javascript-and-C%2B%2B-solutions
 */

let confusingNumber = N => {
    let invalid = new Set([ 2, 3, 4, 5, 7 ]);
    let rotate = { 0: 0, 1: 1, 8: 8, 6: 9, 9: 6 };
    let a = [], // a == N
        b = []; // b == rotated-N
    while (N) {
        let x = N % 10;
        if (invalid.has(x))
            return false;
        a.push(x), b.unshift(rotate[x]);
        N = Math.floor(N / 10);
    }
    return a.join('') != b.join('');
};