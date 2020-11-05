/*
 * 1217. Minimum Cost to Move Chips to The Same Position
 *
 * Q: https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
 * A: https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/discuss/399869/Kt-Js-Py3-Cpp-Minimum-Odd-and-Even
 */

// concise
let minCostToMoveChips = A => Math.min(A.filter(x => x & 1).length, A.filter(x => !(x & 1)).length);

// verbose
let minCostToMoveChips = (A, odd = 0, even = 0) => {
    for (let x of A)
        if (x & 1)
            ++odd;
        else
            ++even;
    return Math.min(odd, even);
};
