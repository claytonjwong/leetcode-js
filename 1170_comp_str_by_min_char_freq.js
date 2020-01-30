/*
 * 1170. Compare Strings by Frequency of the Smallest Character
 *
 * Q: https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/
 * A: https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/discuss/493772/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
let numSmallerByFrequency = (queries, words) => {
    let f = s => {
        let A = s.split('').sort();
        let i = 1;
        while (i < A.length && A[i - 1] == A[i])
            ++i;
        return i;
    }
    let A = words.map(s => f(s)).sort((a, b) => a - b), N = A.length;
    let upper_bound = x => {
        let lo = 0, hi = A.length - 1, mid = Infinity;
        while (lo <= hi) {
            let mid = Math.ceil((lo + hi) / 2)
            if (x == A[mid])
                return mid + 1;
            if (x < A[mid])
                hi = mid - 1;
            if (x > A[mid])
                lo = mid + 1;
        }
        return hi + 1;
    };
    return queries.map(s => N - upper_bound(f(s)));
};
console.log(numSmallerByFrequency(['cbd'],['zaaaz']));
console.log(numSmallerByFrequency(['bbb','cc'],['a','aa','aaa','aaaa']));
