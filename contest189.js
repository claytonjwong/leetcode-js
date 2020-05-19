/*
Weekly Contest 189
May 19, 2020 at 5:38 AM
1 h 30 m	12/19	1:00:06	3/4	2587/9347
*/

/*
 * 1450. Number of Students Doing Homework at a Given Time
 *
 * Q: https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
 * A: https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/discuss/640623/Javascript-and-C%2B%2B-solutions
 */
// concise
let busyStudent = (A, B, T) => A.filter((_, i) => A[i] <= T && T <= B[i]).length;
// verbose
let busyStudent = (A, B, T, cnt = 0) => {
    let N = A.length;
    for (let i = 0; i < N; ++i)
        if (A[i] <= T && T <= B[i])
            ++cnt;
    return cnt;
};

/*
 * 1451. Rearrange Words in a Sentence
 *
 * Q: https://leetcode.com/problems/rearrange-words-in-a-sentence/
 * A: https://leetcode.com/problems/rearrange-words-in-a-sentence/discuss/640637/Javascript-and-C%2B%2B-solutions
 */
let arrangeWords = text => {
    let transform = (word, offset) => {
        let A = word.split('');
        let first = A.shift();
        A.unshift(String.fromCharCode(first.charCodeAt(0) + offset));
        return A.join('');
    };
    let tolower = word => transform(word,  32);
    let toupper = word => transform(word, -32);
    let A = text.split(' ');
    A[0] = tolower(A[0]);
    A = _.sortBy(A, [(x) => x.length]);
    A[0] = toupper(A[0]);
    return A.join(' ');
};

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