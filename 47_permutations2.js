/*
 * 47. Permutations II
 *
 * Q: https://leetcode.com/problems/permutations-ii/
 * A: https://leetcode.com/problems/permutations-ii/discuss/136432/Kt-Js-Py3-Cpp-DFS-%2B-BT
 */

let permuteUnique = (A, ans = [], path = [], seen = new Set(), unique = new Set()) => {
    let N = A.length;
    let go = () => {
        if (path.length == N) {
            let key = path.join(' ');
            if (!unique.has(key))
                unique.add(key),
                ans.push([...path]);
            return;
        }
        for (let i = 0; i < N; ++i)
            if (!seen.has(i))
                seen.add(i),
                path.push(A[i]),
                go(),
                path.pop(),
                seen.delete(i);
    };
    go();
    return ans;
};
