/*
 * 339. Nested List Weight Sum
 *
 * Q: https://leetcode.com/problems/nested-list-weight-sum/
 * A: https://leetcode.com/problems/nested-list-weight-sum/discuss/124490/Kt-Js-Py3-Cpp-Recursive
 */

let depthSum = (A, depth = 1, total = 0) => {
    for (let it of A) {
        if (it.isInteger())
            total += it.getInteger() * depth;
        else
            total += depthSum(it.getList(), depth + 1);
    }
    return total;
};
