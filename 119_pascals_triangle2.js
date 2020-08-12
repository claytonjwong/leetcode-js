/*
 * 119. Pascal's Triangle II
 *
 * Q: https://leetcode.com/problems/pascals-triangle-ii/
 * A: https://leetcode.com/problems/pascals-triangle-ii/discuss/787820/Javascript-Python3-C%2B%2B-solutions
 */

let getRow = k => {
    let cur = [ 1 ];
    while (k--) {
        let pre = [...cur];
        for (let i = 1; i < pre.length; ++i)
            cur[i] = pre[i - 1] + pre[i];
        cur.push(1);
    }
    return cur;
};
