/*
 * 604. Design Compressed String Iterator
 *
 * Q: https://leetcode.com/problems/design-compressed-string-iterator/
 * A: https://leetcode.com/problems/design-compressed-string-iterator/discuss/599097/Javascript-and-C%2B%2B-solutions
 */

class StringIterator {
    constructor(S) {
        this.i = 0;
        this.N = 0;
        this.chars = S.split('').filter(c => c.charCodeAt(0) >= 65);
        console.log(this.chars)
        this.counts = S.split(/[A-Za-z]+/).filter(cnt => cnt.length > 0).map(Number);
        console.log(this.counts)
        this.N = this.chars.length; // same as this.counts.length
    }
    next() {
        if (!this.hasNext())
            return ' ';
        let c = this.chars[this.i];
        if (--this.counts[this.i] == 0)
            ++this.i;
        return c;
    }
    hasNext() {
        return this.i < this.N;
    }
}