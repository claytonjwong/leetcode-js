/*
 * 484. Find Permutation
 *
 * Q: https://leetcode.com/problems/find-permutation/
 * A: https://leetcode.com/problems/find-permutation/discuss/795156/Javascript-Python3-C%2B%2B-.-Greedy-Mountain
 */

let findPermutation = (t, s = [], ans = []) => {
    let A = t.split(''); A.push('I');     // 🛑 sentinel value to exhaust last downslope xor append max value last
    for (let i = 0; i < A.length; ++i) {
        s.push(i + 1);                    // +1 for 1-based indexing
        while (A[i] == 'I' && s.length)
            ans.push(s.pop());            // 💥 greedily consume current upslope xor exhaust pending downslope
    }
    return ans;
};
