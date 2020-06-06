/*
 * 406. Queue Reconstruction by Height
 *
 * Q: https://leetcode.com/problems/queue-reconstruction-by-height/
 * A: https://leetcode.com/problems/queue-reconstruction-by-height/discuss/673416/Javascript-and-C%2B%2B-solutions
 */

let reconstructQueue = A => {
    let N = A.length;
    let ans = Array(N).fill([ Infinity, Infinity ]);
    A.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
    for (let [h, k] of A) {
        let i = 0, j = k;
        while (j) // skip past k people which have height >= h
            if (ans[i++][0] >= h)
                --j;
        while (ans[i][0] < Infinity) // find next available index for insertion
            ++i;
        ans[i] = [h, k]; // insert here 🎯
    }
    return ans;
};