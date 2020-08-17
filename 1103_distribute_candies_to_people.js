/*
 * 1103. Distribute Candies to People
 *
 * Q: https://leetcode.com/problems/distribute-candies-to-people/
 * A: https://leetcode.com/problems/distribute-candies-to-people/discuss/323409/Javascript-Python3-C%2B%2B-Brute-Force
 */

let distributeCandies = (k, N, candy = 0) => {
    let ans = Array(N).fill(0);
    while (k) {
        for (let i = 0; i < N; ++i) {
            let take = Math.min(++candy, k);  // ⭐️ take candy (not exceeding available k candies)
            ans[i] += take, k -= take;
        }
    }
    return ans;
};
