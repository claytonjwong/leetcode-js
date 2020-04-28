/*
 * 734. Sentence Similarity
 *
 * Q: https://leetcode.com/problems/sentence-similarity/
 * A: https://leetcode.com/problems/sentence-similarity/discuss/600740/Javascript-and-C%2B%2B-solutions
 */

var areSentencesSimilar = function(A, B, pairs, same = new Set()) {
    let M = A.length,
        N = B.length;
    if (M != N)
        return false;
    let key = (a, b) => `${a},${b}`;
    let similiar = (a, b) => a == b || same.has(key(a, b)) || same.has(key(b, a));
    for (let [a, b] of pairs)
        same.add(key(a, b)),
        same.add(key(b, a));
    for (let i = 0; i < N; ++i)
        if (!similiar(A[i], B[i]))
            return false;
    return true;
};