/*
 * https://leetcode.com/contest/weekly-contest-192
 * https://youtu.be/tdxyH8gHtMo
 *
 * Rank            Name             Score    Finish Time    Q1 (3)     Q2 (4)     Q3 (5)     Q4 (6)
 * 1812 / 13805    claytonjwong     12       0:29:09        0:02:03    0:11:43    0:29:09
 */

/*
 * 1470. Shuffle the Array
 *
 * Q: https://leetcode.com/problems/shuffle-the-array/
 * A: https://leetcode.com/problems/shuffle-the-array/discuss/674389/Javascript-and-C%2B%2B-solutions
 */
// concise
let shuffle = (A, K, j = 0) => A.map((_, i) => !(i % 2) ? A[j++] : A[j + K - 1]);
// verbose
let shuffle = (A, K, ans = []) => {
    for (let i = 0; i < K; ++i)
        ans.push(A[i], A[i + K]);
    return ans;
};

/*
 * 1471. The k Strongest Values in an Array
 *
 * Q: https://leetcode.com/problems/the-k-strongest-values-in-an-array/
 * A: https://leetcode.com/problems/the-k-strongest-values-in-an-array/discuss/674391/Javascript-and-C%2B%2B-solutions
 */
let getStrongest = (A, K, abs = Math.abs) => {
    A.sort((a, b) => a - b);
    let m = A[Math.floor((A.length - 1) / 2)];
    return A.sort((a, b) => abs(b - m) == abs(a - m) ? b - a : abs(b - m) - abs(a - m)).slice(0, K);
};

/*
 * 1472. Design Browser History
 *
 * Q: https://leetcode.com/problems/design-browser-history/
 * A: https://leetcode.com/problems/design-browser-history/discuss/674419/Javascript-and-C%2B%2B-solutions
 */
class BrowserHistory {
    constructor(homepage) {
        this.url = [ homepage ];
        this.i = 0;
    }
    visit(next, url = this.url) {
        while (this.i)
            url.shift(), --this.i;
        url.unshift(next);
    }
    back(steps, url = this.url) {
        while (steps-- && this.i + 1 < url.length)
            ++this.i;
        return url[this.i];
    }
    forward(steps, url = this.url) {
        while (steps-- && 0 <= this.i - 1)
            --this.i;
        return url[this.i];
    }
}
