/*
 * 1506. Find Root of N-Ary Tree
 *
 * Q: https://leetcode.com/problems/find-root-of-n-ary-tree/
 * A: https://leetcode.com/problems/find-root-of-n-ary-tree/discuss/729168/Kt-Js-Py3-Cpp-O(N)-%2B-O(1)-memory-solutions
 */

// naive
let findRoot = (A, children = new Set()) => {
    for (let it of A)
        for (let child of it.children)
            children.add(child);
    return A.filter(it => !children.has(it))[0];
};

// memory optimized
let findRoot = (A, x = 0) => {
    for (let it of A) {
        x ^= it.val;
        for (let child of it.children)
            x ^= child.val;
    }
    return A.filter(it => x == it.val)[0];
};
