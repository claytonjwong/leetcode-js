/*
 * 763. Partition Labels
 *
 * Q: https://leetcode.com/problems/partition-labels/
 * A: https://leetcode.com/problems/partition-labels/discuss/828605/Javascript-Python3-C%2B%2B-Sliding-Window
 */

let partitionLabels = (S, m = new Map(), parts = []) => {
    S.split('').forEach((c, i) => m.set(c, i));                      // 🚌 linear scan to find each char's right-most index
    for (let i = 0, j = 0; i < S.length; i = ++j) {                  // 👉 move i, j forward to beginning of next partition
        j = m.get(S[i]);
        for (let k = i + 1; k < j; j = Math.max(j, m.get(S[k++])));  // 👉 slide window from i..j inclusive (expand j "as needed")
        parts.push(j - i + 1);                                       // 🎯 partition found: +1 for i..j inclusive
    }
    return parts;
};
