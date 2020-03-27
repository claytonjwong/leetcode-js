/*
 * 386. Lexicographical Numbers
 *
 * Q: https://leetcode.com/problems/lexicographical-numbers/
 * A: https://leetcode.com/problems/lexicographical-numbers/discuss/414893/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number} n
 * @return {number[]}
 */

let lexicalOrder = (N, A = []) => {
    while (N)
        A.push(`${N--}`);
    return A.sort().map(s => Number(s));
};
