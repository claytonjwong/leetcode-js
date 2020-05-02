/*
 * 771. Jewels and Stones
 *
 * Q: https://leetcode.com/problems/jewels-and-stones/
 * A: https://leetcode.com/problems/jewels-and-stones/discuss/113587/Javascript-and-C%2B%2B-solutions
 */

let numJewelsInStones = (jewels, S) => {
    let J = new Set(jewels.split(''));
    return S.split('').filter(c => J.has(c)).length;
};