/*
 * 421. Maximum XOR of Two Numbers in an Array
 *
 * Q: https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
 * A: https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/discuss/849679/Javascript-Python3-C%2B%2B-Trie-%2B-Greedy-Alternative-Path
 */

let findMaximumXOR = (A, max = 0) => {
    let root = {};                                 // 🌲 trie
    A.forEach(x => {
        let xor = 0;
        let cur = root,                            // 👀 current path in trie for inserting binary representation of x
            alt = root;                            // 🤔 alternative path for pre-existing values in trie
        for (let i = 31; 0 <= i; --i) {
            let p = 0 < (x & (1 << i)) ? 1 : 0,    // 🚙 direction p and opposite 🚗 direction q
                q = p ^ 1;
            cur = cur[p] = cur[p] || {};           // 🚙 add direction p to 👀 current path (as needed)
            if (alt[q])
                alt = alt[q], xor ^= (1 << i);     // 🚗 diff direction q for 🤔 alternative path (💰 greedily take this path whenever possible)
            else
                alt = alt[p];                      // 🚙 same direction p for 🤔 alternative path
        }
        max = Math.max(max, xor);                  // 🎯 max xor
    });
    return max;
};
