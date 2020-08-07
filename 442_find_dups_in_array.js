// 442. Find All Duplicates in an Array
// https://leetcode.com/problems/find-all-duplicates-in-an-array/

// O(N) mem
let findDuplicates = (A, seen = new Set(), ans = []) => {
    for (let x of A) {
        if (seen.has(x))
            ans.push(x);
        seen.add(x);
    }
    return ans;
};

// O(1) mem by adding N onto the index corresponding to each value in A, only values seen twice exceed 2 * N
let findDuplicates = (A, ans = []) => {
    let N = A.length;
    for (let i of A) {
        while (N < i)
            i -= N;
        A[i - 1] += N;       // -1 for 0-based indexing
    }
    for (let i = 0; i < N; ++i)
        if (2 * N < A[i])
            ans.push(i + 1); // +1 for 1-based indexing
    return ans;
};
