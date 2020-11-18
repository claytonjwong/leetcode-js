/*
 * 56. Merge Intervals
 *
 * Q: https://leetcode.com/problems/merge-intervals/
 * A: https://leetcode.com/problems/merge-intervals/discuss/940348/Kt-Js-Py3-Cpp-Sort-A-%2B-Track-Overlaps-via-Last-End
 */

let merge = (A, ans = []) => {
    A.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
    ans.push(A[0]);
    for (let [beg, end] of A) {
        let lastIndex = ans.length - 1
        let lastEnd = ans[lastIndex][1];
        if (beg <= lastEnd)
            ans[lastIndex][1] = Math.max(lastEnd, end);  // overlap
        else
            ans.push([beg, end])                         // no overlap
    }
    return ans;
};
