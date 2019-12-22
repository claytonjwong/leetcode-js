/*
 * 1282. Group the People Given the Group Size They Belong To
 *
 * Q: https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
 * A: https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/discuss/448636/Javascript-and-C%2B%2B-solutions
 */
// class Solution {
// public:
//     using VI = vector<int>;
//     using VVI = vector<VI>;
//     using Map = map<int, VI>;
//     VVI groupThePeople(VI& A, Map m={}, VVI ans={}) {
//         for (auto i = 0; i < A.size(); ++i)
//             m[A[i]].push_back(i);
//         auto it = m.begin();
//         while (it != m.end()) {
//             auto& k = it->first;
//             auto& x = it->second;
//             ans.emplace_back(VI{x.back()}), x.pop_back();
//             while (ans.back().size() < k)
//                 ans.back().push_back(x.back()), x.pop_back();
//             if (x.empty())
//                 ++it;
//         }
//         return ans;
//     }
// };
let groupThePeople = (A, ans=[]) => {
    let m = new Map();
    for (let i = 0; i < A.length; ++i) {
        if (m.has(A[i]))
            m.get(A[i]).push(i);
        else
            m.set(A[i], [i]);
    }
    let B = [...m.entries()].sort();
    let i = 0;
    while (i < B.length) {
        let [k, x] = [...B[i]];
        ans.unshift([x[0]]), x.shift();
        while (ans[0].length < k)
            ans[0].unshift(x[0]), x.shift();
        if (x.length == 0)
            ++i;
    }
    return ans;
};
let ans = groupThePeople([3,3,3,3,3,1,3]);