/*
 * 1562. Find Latest Group of Size M
 *
 * Q: https://leetcode.com/problems/find-latest-group-of-size-m/
 * A: https://leetcode.com/problems/find-latest-group-of-size-m/discuss/810189/Javascript-Python3-C%2B%2B-Union-Find
 */

let findLatestStep = (A, K, last = -1) => {
    A = A.map(i => i - 1);  // 0-based indexing
    let N = A.length;
    let bits = Array(N).fill(0);
    let ok = new Set();
    let P = [...Array(N).keys()]; // parent representatives
    let L = Array(N).fill(1);     // length of each representative set
    let find = x => P[x] = x == P[x] ? P[x] : find(P[x]);
    let union = (a, b) => {
        a = find(a);
        b = find(b);
        P[b] = a;
        return L[a] += L[b];
    };
    let step = 1;
    for (let i of A) {
        bits[i] = 1;
        ok.delete(find(P[i - 1]));
        ok.delete(find(P[i + 1]));
        if (0 < i && bits[i - 1]) L[i] = union(i, i - 1);
        if (i < N && bits[i + 1]) L[i] = union(i, i + 1);
        if (L[i] == K)
            ok.add(i);
        if (ok.size)
            last = step;
        ++step;
    }
    return last;
};

console.log(findLatestStep([3,5,1,2,4], 1));
console.log(findLatestStep([3,1,5,4,2], 2));
console.log(findLatestStep([1], 1));
console.log(findLatestStep([2,1], 2));
console.log(findLatestStep([3,2,5,6,10,8,9,4,1,7], 3));
