/*
 * Facebook On-Site Interview
 * Attempted May 6, 2020 7:07 AM
 * 47%
 * Your interview score of 4.76/10 beats 47% of all users.
 * Time Spent: 2 hours
 * Time Allotted: 2 hours
 */


/*
 * 438. Find All Anagrams in a String
 *
 * Q: https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * A: https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/618783/Javascript-and-C%2B%2B-solutions
 */
let findAnagrams = (s, p, m = {}, ans = []) => {
    let P = p.split(''); P.forEach(x => {
        if (!m[x])
            m[x] = 0;
        ++m[x];
    });
    let N = s.length,
        K = p.length,
        need = K,
        i = 0,
        j = 0;
    while (j < N) {
        if (s[j] in m && --m[s[j]] >= 0 && !--need) // no need unmet for anagram 🎯
            ans.push(i);
        if (++j - i == K) { // always expand, only shrink when the window size is reached
            if (s[i] in m && ++m[s[i]] >= 1)
                ++need;
            ++i;
        }
    }
    return ans;
};


/*
 * 1123. Lowest Common Ancestor of Deepest Leaves
 *
 * Q: https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/
 * A: https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/discuss/617067/Javascript-and-C%2B%2B-solutions
 */
let lcaDeepestLeaves = (root, max = 0, ans = null) => {
    let go = (root, i = 0) => {
        if (!root) {
            max = Math.max(max, i);
            return i;
        }
        let L = go(root.left,  i + 1),
            R = go(root.right, i + 1);
        if (L == max && R == max)
            ans = root;
        return Math.max(L, R);
    };
    go(root);
    return ans;
};


/*
 * 416. Partition Equal Subset Sum
 *
 * Q: https://leetcode.com/problems/partition-equal-subset-sum/
 * A: https://leetcode.com/problems/partition-equal-subset-sum/discuss/617275/Javascript-and-C%2B%2B-solutions
 */
// top-down
let canPartition = (A, seen = new Set()) => {
    let N = A.length;
    let total = A.reduce((a, b) => a + b);
    if (total % 2)
        return false;
    let go = (i = 0, T = Math.floor(total / 2)) => {
        if (T < 0 || seen.has(`${i},${T}`))
            return false;
        seen.add(`${i},${T}`);
        if (i == N)
            return T == 0; // target 🎯
        return go(i + 1, T - A[i]) || go(i + 1, T); // with xor without
    }
    return go();
};
// bottom-up
let canPartition = A => {
    let total = A.reduce((a, b) => a + b);
    if (total % 2)
        return false;
    let T = Math.floor(total / 2); // target 🎯
    let dp = Array(T + 1).fill(0);
    dp[0] = 1;
    for (let x of A)
        for (let sum = T; sum >= x; --sum) // potential sums to reach
            if (dp[sum - x]) // if we can reach sum without x
                dp[sum] = 1; // then we can reach sum with x
    return dp[T]; // reached target sum? 🎯
};