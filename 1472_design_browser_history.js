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