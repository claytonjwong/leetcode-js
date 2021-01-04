/*
 * 1710. Maximum Units on a Truck
 *
 * Q: https://leetcode.com/problems/maximum-units-on-a-truck/
 * A: https://leetcode.com/problems/maximum-units-on-a-truck/discuss/999095/Kt-Js-Py3-Cpp-BEST-Greedily-TAKE-BOXES-while-we-HAVE-room
 */

let maximumUnits = (A, have, best = 0) => {
    A.sort((a, b) => b[1] - a[1]);
    for (let [boxes, units] of A) {
        let take = Math.min(have, boxes);
        best += take * units;
        have -= take;
    }
    return best;
};

// "1-liner" (just for fun! :-P)
let maximumUnits = (A, have) =>
    A.sort((a, b) => b[1] - a[1])
     .reduce((best, [boxes, units]) => {
        let take = Math.min(have, boxes);
        have -= take;
        return best + take * units;
    }, 0);
