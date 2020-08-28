/*
 * 1564. Put Boxes Into the Warehouse I
 *
 * Q: https://leetcode.com/problems/put-boxes-into-the-warehouse-i/
 * A: https://leetcode.com/problems/put-boxes-into-the-warehouse-i/discuss/817303/Javascript-Python3-C%2B%2B-Greedy
 */

let maxBoxesInWarehouse = (box, spot, cnt = 0) => {
    // 1. preprocess the boxes and spots
    box.sort((a, b) => b - a);
    for (let j = 1; j < spot.length; ++j)
        spot[j] = Math.min(spot[j], spot[j - 1]);
    // 2. greedily place i-th min box into j-th min spot (if it fits) from 👈 right-to-left
    let i = box.length - 1,
        j = spot.length - 1;
    while (0 <= i && 0 <= j) {
        if (box[i] <= spot[j])  // ✅ i-th min box fits in j-th min spot
            --i, --j, ++cnt;
        else                    // 🚫 try next monotonically non-decreasing j-th min spot
            --j;
    }
    return cnt;
};
