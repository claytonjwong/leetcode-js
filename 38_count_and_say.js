/*
 * 38. Count and Say
 *
 * Q: https://leetcode.com/problems/count-and-say/
 * A: https://leetcode.com/problems/count-and-say/discuss/581589/Javascript-and-C%2B%2B-solutions
 */
let countAndSay = N => {
    let cur = [1], next = [];
    while (--N) {
        for (let i = 0, j = 0; i < cur.length; i = j) {
            for (j = i + 1; j < cur.length && cur[j - 1] == cur[j]; ++j);
            next.push(j - i), next.push(cur[i]); // cnt, val
        }
        cur = [...next], next = [];
    }
    return cur.join('');
};