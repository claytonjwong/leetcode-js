/*
 * 1520. Maximum Number of Non-Overlapping Substrings
 *
 * Q: https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/
 * A: https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/discuss/749421/Javascript-Python3-C%2B%2B-beginend-index-%2B-greedy-consumption
 */

let maxNumOfSubstrings = (s, beg = new Map(), end = new Map(), ans = []) => {
    // 1. track the begin index and end index of each character
    let all = new Set(s.split(''));
	for (let c of all) {
        beg.set(c, s.indexOf(c));
        end.set(c, s.lastIndexOf(c));
    }
    // 2. update the min begin index and max end index for each unique character candidate
    for (let cand of all) {
        let i = beg.get(cand),
            j = end.get(cand);
        let [min, max] = [i, j];
        while (i <= max) {
            let c = s[i++];
            min = Math.min(min, beg.get(c));
            max = Math.max(max, end.get(c));
        }
        beg.set(cand, min);
        end.set(cand, max);
    }
    // 3. sort the intervals by end index for greedy consumption of non-overlapping intervals
    let A = [...all].sort((a, b) => end.get(a) - end.get(b));
    let pre = -1; // end index inclusive of previous interval
    for (let cand of A) {
        let i = beg.get(cand),
            j = end.get(cand);
        if (pre < i) { // non-overlapping interval
            ans.push(s.substring(i, j + 1)); // 🎯 +1 for i..j inclusive
            pre = j;
        }
    }
    return ans;
};
