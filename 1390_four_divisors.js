/*
 * 1390. Four Divisors
 *
 * Q: https://leetcode.com/problems/four-divisors/
 * A: https://leetcode.com/problems/four-divisors/discuss/547865/Javascript-and-C%2B%2B-solutions
 */

let sumFourDivisors = (A, ans = 0) => {
    let getDivisors = x => {
        let divs = new Set([1, x]);
        for (let i = 2; i <= Math.sqrt(x); ++i) {
            let j = x / i;
            if (x == Math.floor(i) * Math.floor(j))
                divs.add(i),
                divs.add(j);
        }
        return divs;
    }
    for (let x of A) {
        let divs = getDivisors(x);
        if (divs.size != 4)
            continue;
        ans += [...divs].reduce((a, b) => a + b);
    }
    return ans;
};