/*
 * 383. Ransom Note
 *
 * Q: https://leetcode.com/problems/ransom-note/
 * A: https://leetcode.com/problems/ransom-note/discuss/611792/Javascript-and-C%2B%2B-solutions
 */

let canConstruct = (A, B, need = new Map(), have = new Map()) => {
    A.split('').forEach(c => need.set(c, 1 + (need.get(c) || 0)));
    B.split('').forEach(c => have.set(c, 1 + (have.get(c) || 0)));
    return A.split('').every(c => (need.get(c) || 0) <= (have.get(c) || 0));
};