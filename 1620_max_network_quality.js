/*
 * 1620. Coordinate With Maximum Network Quality
 *
 * Q: https://leetcode.com/problems/coordinate-with-maximum-network-quality/
 * A: https://leetcode.com/problems/coordinate-with-maximum-network-quality/discuss/898691/Kt-Js-Py3-Cpp-Brute-Force
 */

let bestCoordinate = (A, radius, abs = Math.abs) => {
    A.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);                       // lexicographical order
    let dist = (x1, y1, x2, y2) => Math.sqrt(abs(x1 - x2) ** 2 + abs(y1 - y2) ** 2);  // euclidean distance
    let N = A.length;
    let quality = Array(N).fill(0);
    for (let i = 0; i < N; ++i) {
        let [x1, y1, q1] = A[i];
        quality[i] = q1;
        for (let j = 0; j < N; ++j) {
            if (i == j)
                continue;
            let [x2, y2, q2] = A[j];
            let d = dist(x1, y1, x2, y2);
            if (radius < d)
                continue;
            quality[i] += Math.floor(q2 / (1 + d));
        }
    }
    let best = Math.max(...quality);
    return A[quality.indexOf(best)].slice(0, 2);
};
