/*
 * 84. Largest Rectangle in Histogram
 *
 * Q: https://leetcode.com/problems/largest-rectangle-in-histogram/
 * A: https://leetcode.com/problems/largest-rectangle-in-histogram/discuss/724329/Javascript-and-C%2B%2B-solutions
 */

let largestRectangleArea = (A, s = [], max = 0) => { // 🤔 s == monotonically non-decreasing queue
    s.back = () => s[s.length - 1];
    s.empty = () => !s.length;
    let N = A.length,
        i = 0;
    let updateMaxArea = () => {
        let h = A[s.back()]; s.pop();
        let w = i - (s.empty() ? 0 : 1 + s.back());
        max = Math.max(max, h * w); // 🎯 maximum area
    }
    while (i < N) {
        while (s.length && A[i] < A[s.back()]) // 🛑 exit condition: A[i] >= s.back() for monotonically non-decreasing queue invariant
            updateMaxArea(); // ⭐️ pop back from stack & update max
        s.push(i++);
    }
    while (s.length)
        updateMaxArea(); // ⭐️ pop back from stack & update max
    return max;
};
