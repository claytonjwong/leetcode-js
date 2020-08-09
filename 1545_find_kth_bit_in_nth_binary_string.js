/*
 * 1545. Find Kth Bit in Nth Binary String
 *
 * Q: https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/
 * A: https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/discuss/780890/Javascript-Python3-C%2B%2B-solutions
 */

let findKthBit = (n, k) => {
    let go = i => {
        if (!i)
            return ['0'];
        let pre = go(i - 1);
        return pre.concat('1', [...pre].map(c => c == '0' ? '1' : '0').reverse());
    };
    return go(n - 1)[k - 1];
};
