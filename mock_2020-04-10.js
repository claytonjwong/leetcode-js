/*
 * Facebook - Online Assessment
 * Completed April 10, 2020 5:37 PM
 * Time Spent: 19 minutes 24 seconds
 * Time Allotted: 1 hour
 */


/*
 * 303. Range Sum Query - Immutable
 *
 * Q: https://leetcode.com/problems/range-sum-query-immutable/
 * A: https://leetcode.com/problems/range-sum-query-immutable/discuss/474670/Javascript-and-C%2B%2B-solutions
 */

class NumArray {
    constructor(nums) {
        let N = nums.length;
        this.A = Array(N + 1).fill(0);
        for (let i = 1; i <= N; ++i)
            this.A[i] = this.A[i - 1] + nums[i - 1];
    }
    sumRange(i, j) {
        return this.A[j + 1] - this.A[i];
    }
}


/*
 * 157. Read N Characters Given Read4
 *
 * Q: https://leetcode.com/problems/read-n-characters-given-read4/
 * A: https://leetcode.com/problems/read-n-characters-given-read4/discuss/573173/Javascript-and-C%2B%2B-solutions
 */

let solution = (read4) => {
    return (buf, N, next = [], read = 0) => {
        do {
            next = [];
            read = read4(next);
            for (let i = 0; i < read && buf.length < N; ++i)
                buf.push(next[i]);
        } while (read == 4 && buf.length < N);
        return buf.length;
    };
};