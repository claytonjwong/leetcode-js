/*
 * Javascript version of Python heapq functions to push/pop to/from min/max heap
 */

let heapkey = x => Array.isArray(x) ? x[0] : x;
let heappush = (A, x, f = Math.min) => {
    let P = i => Math.floor((i - 1) / 2);  // parent
    A.push(x);
    let N = A.length,
        i = N - 1;
    while (0 < i && heapkey(A[i]) == f(heapkey(A[i]), heapkey(A[P(i)]))) {
        [A[i], A[P(i)]] = [A[P(i)], A[i]];
        i = P(i);
    }
};
let heappop = (A, x, f = Math.min) => {
    let L = i => 2 * i + 1,  // children
        R = i => 2 * i + 2;
    let N = A.length,
        i = 0;
    let top = A[0];
    [A[0], A[N - 1]] = [A[N - 1], A[0]], A.pop(), --N;
    let ok = true;
    do {
        ok = true;
        let left = f == Math.min ? Infinity : -Infinity,
        right = left;
        if (L(i) < N && heapkey(A[i]) != f(heapkey(A[i]), heapkey(A[L(i)]))) ok = false, left  = heapkey(A[L(i)]);
        if (R(i) < N && heapkey(A[i]) != f(heapkey(A[i]), heapkey(A[R(i)]))) ok = false, right = heapkey(A[R(i)]);
        if (!ok) {
            let j = left == f(left, right) ? L(i) : R(i);
            [A[i], A[j]] = [A[j], A[i]];
            i = j;
        }
    } while (!ok);
    return top;
};
