/*
 * 1346. Check If N and Its Double Exist
 *
 * Q: https://leetcode.com/problems/check-if-n-and-its-double-exist/
 * A: https://leetcode.com/problems/check-if-n-and-its-double-exist/discuss/509104/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
let checkIfExist = (A, seen = new Set()) => {
    for (let x of A) {
        if (seen.has(x / 2) || seen.has(x * 2))
            return true;
        seen.add(x);
    }
    return false;
};