/*
 * 1452. People Whose List of Favorite Companies Is Not a Subset of Another List
 *
 * Q: https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/
 * A: https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/discuss/640681/Javascript-and-C%2B%2B-solutions
 */

let peopleIndexes = (A, m = new Map(), ans = []) => {
    A.forEach((row, i) => m.set(i, new Set(row)));
    let isSubset = (i, j) => i != j && [...m.get(i)].filter(x => m.get(j).has(x)).length == m.get(i).size;
    let N = A.length;
    for (let i = 0; i < N; ++i) {
        let ok = true;
        for (let j = 0; j < N; ++j) {
            if (isSubset(i, j)) {
                ok = false;
                break;
            }
        }
        if (ok) ans.push(i);
    }
    return ans;
};