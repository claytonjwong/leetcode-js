/*
 * 1370. Increasing Decreasing String
 *
 * Q: https://leetcode.com/problems/increasing-decreasing-string/
 * A: https://leetcode.com/problems/increasing-decreasing-string/discuss/535626/Javascript-and-C%2B%2B-solutions
 */

let sortString = (s, ord = String.fromCharCode, offset = 'a'.charCodeAt(0), m = new Map(), ans = []) => {
    for (let c of s) {
        let i = c.charCodeAt(0);
        m.set(i, (m.get(i) || 0) + 1);
    }
    let L = (res = []) => { // forwards from (L)eft-to-right 👉
        for (let i = offset; i < offset + 26; ++i)
            if (m.get(i))
                res.push(ord(i)), m.set(i, m.get(i) - 1);
        return res;
    };
    let R = (res = []) => { // backwards from 👈 (R)ight-to-left
        for (let i = offset + 26 - 1; i >= offset; --i)
            if (m.get(i))
                res.push(ord(i)), m.set(i, m.get(i) - 1);
        return res;
    };
    for (let turn = 1;; turn ^= 1) {
        let next = turn ? L() : R();
        if (next.length == 0)
            break;
        ans = ans.concat(next);
    }
    return ans.join('');
};