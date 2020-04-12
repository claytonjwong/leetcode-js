/*
 * 1023. Camelcase Matching
 *
 * Q: https://leetcode.com/problems/camelcase-matching/
 * A: https://leetcode.com/problems/camelcase-matching/discuss/574743/Javascript-and-C%2B%2B-solutions
 */

// let camelMatch = (queries, pattern, ans = []) => {
//     let isUpper = c => c.charCodeAt(0) <= 90; // 90 == 'Z'
//     let up = word => word.split('').filter(isUpper).sort().join('');
//     let target = up(pattern); // 🎯
//     for (let query of queries) {
//         if (query.length < pattern.length || up(query) != target) {
//             ans.push(false);
//             continue; // query cannot match pattern ❌
//         }
//         let j = 0;
//         for (let i = 0; i < query.length && j < pattern.length; ++i)
//             if (query[i] == pattern[j])
//                 ++j;
//         ans.push(j == pattern.length);
//     }
//     return ans;
// };

let camelMatch = (queries, pattern, ans = []) => {
    let ok = (query, j = 0) => {
        for (let i = 0; i < query.length; ++i)
            if (j < pattern.length && query[i] == pattern[j])
                ++j;
            else if (query[i] <= 'Z') // uppercase mis-match ❌
                return false;
        return j == pattern.length;
    };
    for (let q of queries)
        ans.push(ok(q));
    return ans;
};