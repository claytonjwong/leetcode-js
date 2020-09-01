/*
 * 157. Read N Characters Given Read4
 *
 * Q: https://leetcode.com/problems/read-n-characters-given-read4/
 * A: https://leetcode.com/problems/read-n-characters-given-read4/discuss/573173/Javascript-Python3-C%2B%2B-read-next-%2B-write-to-buf
 */

let solution = read4 => (buf, N, k = 0, write = 0) => {
    do {
        next = Array(4);
        k = read4(next);
        for (let i = 0; i < k && write < N; ++i)
            buf[write++] = next[i];
    } while (k == 4 && write < N);
    return write;
};
