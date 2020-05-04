/*
 * 1432. Max Difference You Can Get From Changing an Integer
 *
 * Q: https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/
 * A: https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/discuss/613159/Javascript-and-C%2B%2B-solutions
 */

// greedy algorithm to cherry pick min/max
let maxDiff = x => {
    let max = () => {
        let hi = 9;
        let a = x.toString().split('').map(Number);
        for (let c of a)
            if (c < 9 && hi == 9)
                hi = c;
        return Number(a.map(c => c == hi ? 9 : c).join(''));
    };
    let min = () => {
        let zero = 0,
            one = 0;
        let b = x.toString().split('').map(Number),
            d = [...b];
        for (let c of b)
            if (b[0] != c && c > 0 && zero == 0)
                zero = c;
            else if (c > 0 && one == 0)
                one = c;
        return Math.min(
            Number(b.map(c => c == zero ? 0 : c).join('')),
            Number(d.map(c => c == one ? 1 : c).join('')),
        );
    };
    return max() - min();
};

// brute-force algorithm to find min/max
let maxDiff = (x, min = Infinity, max = -Infinity) => {
    let A = x.toString().split('').map(Number);
    let digits = [...Array(10).keys()];
    for (let i of digits) {
        for (let j of digits) {
            if (A[0] == i && j == 0)
                continue; // cannot replace with leading 0 ❌
            let cur = A.map(c => c == i ? j : c).join('');
            min = Math.min(min, cur);
            max = Math.max(max, cur);
        }
    }
    return max - min;
};
console.log(maxDiff(123456));