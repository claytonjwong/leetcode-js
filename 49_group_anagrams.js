/*
 * 49. Group Anagrams
 *
 * Q: https://leetcode.com/problems/group-anagrams/
 * A: https://leetcode.com/problems/group-anagrams/discuss/468575/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = (A, m = {}) => {
    for (let word of A) {
        let key = [...word].sort().join('');
        if (!m[key])
            m[key] = [];
        m[key].push(word);
    }
    return Object.values(m);
};
let ans = groupAnagrams(['abc', 'cba', 'def']);
console.log(ans);