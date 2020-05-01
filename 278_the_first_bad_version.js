/*
 * 278. First Bad Version
 *
 * Q: https://leetcode.com/problems/first-bad-version/
 * A: https://leetcode.com/problems/first-bad-version/discuss/606733/Javascript-and-C%2B%2B-solutions
 */

let solution = isBadVersion => {
    return N => {
        let i = 0,
            j = N;
        while (i < j) {
            let k = i + Math.floor((j - i) / 2); // let k = Math.floor((i + j) / 2);
            if (!isBadVersion(k))
                i = k + 1;
            else
                j = k;
        }
        return i;
    };
};