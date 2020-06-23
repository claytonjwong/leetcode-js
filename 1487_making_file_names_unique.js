/*
 * 1487. Making File Names Unique
 *
 * Q: https://leetcode.com/problems/making-file-names-unique/
 * A: https://leetcode.com/problems/making-file-names-unique/discuss/702044/Javascript-and-C%2B%2B-solutions
 */

let getFolderNames = (A, seen = new Set(), ans = []) => {
    for (let s of A) {
        let cand = s,
            cnt = 0;
        while (seen.has(cand))
            cand = `${s}(${++cnt})`;
        ans.push(cand);
        seen.add(cand);
    }
    return ans;
};