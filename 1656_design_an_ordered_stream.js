/*
 * 1656. Design an Ordered Stream
 *
 * Q: https://leetcode.com/problems/design-an-ordered-stream/
 * A: https://leetcode.com/problems/design-an-ordered-stream/discuss/947961/Kt-Js-Py3-Cpp-Array
 */

class OrderedStream {
    constructor(N) {
        this.i = 0;
        this.N = N;
        this.A = Array(N).fill('');
    }
    insert(k, value, res = []) {
        this.A[k - 1] = value;  // -1 for 0-based indexing
        while (this.i < this.N && this.A[this.i].length)
            res.push(this.A[this.i++]);
        return res;
    }
}
