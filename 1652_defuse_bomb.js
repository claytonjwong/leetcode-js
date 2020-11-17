/*
 * 1652. Defuse the Bomb
 *
 * Q: https://leetcode.com/problems/defuse-the-bomb/
 * A: https://leetcode.com/problems/defuse-the-bomb/discuss/935371/Kt-Js-Py3-Cpp-One-Step-at-a-Time
 */

let decrypt = (A, K, ans = []) => {
    let N = A.length;
    if (!K)
        return Array(N).fill(0);
    if (K < 0)
        return decrypt(A.reverse(), -K).reverse();
    let step = i => i + 1 < N ? i + 1 : 0;
    for (let i = 0; i < N; ++i) {
        let steps = K,
            total = 0,
            j = step(i);
        while (steps--) total += A[j], j = step(j);
        ans.push(total);
    }
    return ans;
};
