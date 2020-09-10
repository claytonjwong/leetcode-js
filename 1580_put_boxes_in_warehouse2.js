/*
 * 1580. Put Boxes Into the Warehouse II
 *
 * Q: https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/
 * A: https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/discuss/840231/Javascript-Python3-C%2B%2B-Greedy-%2B-Shrinking-Window-i-...-j
 */

let maxBoxesInWarehouse = (box, spot, cnt = 0) => {
    box.sort((a, b) => b - a);
    let i = 0,
        j = spot.length - 1;
    for (let k = 0; i <= j && k < box.length; ++k) {
        if (box[k] <= Math.max(spot[i], spot[j])) {
            ++cnt;
            if (spot[i] < spot[j])
                --j;
            else
                ++i;
        }
    }
    return cnt;
};
