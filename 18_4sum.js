/*
 * 18. 4Sum
 *
 * Q: https://leetcode.com/problems/4sum/
 * A: https://leetcode.com/problems/4sum/discuss/506107/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[]} A
 * @param {number} target
 * @return {number[][]}
 */
let fourSum = (A, target, seen = new Set(), ans = []) => {
    let N = A.length;
    A.sort((a, b) => a - b);
    for (let i = 0; i + 3 < N; ++i) {
        for (let j = i + 3; j < N; ++j) {
            let u = i + 1,
                v = j - 1;
            while (u < v) {
                let sum = A[i] + A[u] + A[v] + A[j];
                if (sum == target) {
                    let key = `${A[i]},${A[u]},${A[v]},${A[j]}`;
                    if (!seen.has(key))
                        ans.push([A[i], A[u], A[v], A[j]]);
                    seen.add(key);
                    ++u;
                    --v;
                } else if (sum < target) {
                    ++u;
                } else {
                    --v;
                }
            }
        }
    }
    return ans;
};
let ans = fourSum([5,5,3,5,1,-5,1,-2], 4);
for (let row of ans)
    console.log(row);