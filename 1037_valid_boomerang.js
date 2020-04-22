/*
 * 1037. Valid Boomerang
 *
 * Q: https://leetcode.com/problems/valid-boomerang/
 * A: https://leetcode.com/problems/valid-boomerang/discuss/591227/Javascript-and-C%2B%2B-solutions
 */

let isBoomerang = A => {
    let [[x1, y1], [x2, y2], [x3, y3]] = A;
    return (x1 - x2) * (y1 - y3) != (x1 - x3) * (y1 - y2);
};

let isBoomerang = A => (A[0][0] - A[1][0]) * (A[0][1] - A[2][1]) != (A[0][0] - A[2][0]) * (A[0][1] - A[1][1]);