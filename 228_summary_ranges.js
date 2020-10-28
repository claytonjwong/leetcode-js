/*
 * 228. Summary Ranges
 *
 * Q: https://leetcode.com/problems/summary-ranges/
 * A: https://leetcode.com/problems/summary-ranges/discuss/913748/Kt-Js-Py3-Cpp-Monotonic-Chains
 */

let summaryRanges = (A, chain = [], chains = []) => {
    let save = () => {
        let N = chain.length;
        chains.push(chain[0] == chain[N - 1] ? `${chain[0]}` : `${chain[0]}->${chain[N - 1]}`);
        chain = [];
    };
    for (let x of A) {
        if (chain.length && x != 1 + chain[chain.length - 1])  // 🚫 broken link in the chain 🔗
            save();
        chain.push(x);
    }
    if (chain.length)
        save();
    return chains;
};
