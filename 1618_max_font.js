/*
 * 1618. Maximum Font to Fit a Sentence in a Screen
 *
 * Q: https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/
 * A: https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/discuss/904856/Kt-Js-Py3-Cpp-Binary-Search
 */

let maxFont = (s, w, h, A, fontInfo) => {
    let height = x => fontInfo.getHeight(x);
    let width = x => _.sum(s.split('').map(c => fontInfo.getWidth(x, c)));
    let ok = x => height(x) <= h && width(x) <= w;
    let N = A.length,
        i = 0,
        j = N - 1;
    while (i < j) {
        let k = Math.floor((i + j) / 2);
        if (ok(A[k + 1]))
            i = k + 1;
        else
            j = k;
    }
    return ok(A[i]) ? A[i] : -1;
};
