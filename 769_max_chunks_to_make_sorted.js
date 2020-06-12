/*
 * 769. Max Chunks To Make Sorted
 *
 * Q: https://leetcode.com/problems/max-chunks-to-make-sorted/
 * A: https://leetcode.com/problems/max-chunks-to-make-sorted/discuss/682554/Javascript-and-C%2B%2B-solutions
 */

let maxChunksToSorted = (A, seen = new Set(), cnt = 0) => {
    let i = 0,
        j = 0,
        N = A.length;
    while (i < N && j < N) {
        while (!seen.has(i))
            seen.add(A[j++]);
        while (seen.has(i))
            ++i;
        cnt += i == j;
    }
    return cnt;
};