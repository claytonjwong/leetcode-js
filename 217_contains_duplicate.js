/*
 * 217. Contains Duplicate
 *
 * Q: https://leetcode.com/problems/contains-duplicate/
 * A: https://leetcode.com/problems/contains-duplicate/discuss/824996/Javascript-Python3-C%2B%2B-1-Liners-Seen-Set
 */

let containsDuplicate = A => A.length != new Set(A).size;

let containsDuplicate = (A, S = new Set()) => {
    for (let x of A) {
        if (S.has(x))
            return true;
        S.add(x);
    }
    return false;
};
