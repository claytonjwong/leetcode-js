/*
 * 436. Find Right Interval
 *
 * Q: https://leetcode.com/problems/find-right-interval/
 * A: https://leetcode.com/problems/find-right-interval/discuss/814963/Javascript-Python3-C%2B%2B-Lower-Bound
 */

let lowerBound = (A, T) => {
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i < j) {
        let k = Math.floor((i + j) / 2);
        if (A[k][0] < T)
            i = k + 1;
        else
            j = k;
    }
    return T <= A[i][0] ? A[i][1] : -1;
};
let findRightInterval = (A, m = new Map()) => {
    A.forEach(([i, j], k) => m.set(i, k));
    m = [...m.entries()].sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
    return A.map(([i, j]) => lowerBound(m, j));
};

console.log(findRightInterval([[1,12],[2,9],[3,10],[13,14],[15,16],[16,17]]))
