/*
 * 1725. Number Of Rectangles That Can Form The Largest Square
 *
 * Q: https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
 * A: https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/discuss/1020596/Kt-Js-Py3-Cpp-Best-Max-of-Min(length-width)
 */

let countGoodRectangles = A => {
    let best = Math.max(...A.map(([l, w]) => Math.min(l, w)));
    return A.filter(([l, w]) => best <= l && best <= w).length;
};

let countGoodRectangles = (A, best = Math.max(...A.map(([l, w]) => Math.min(l, w)))) => A.filter(([l, w]) => best <= l && best <= w).length;
