/**
 * @param {number[]} A
 * @return {number[][]}
 */
var minimumAbsDifference = (A, T=1000001, ans=[]) => {
    A.sort((a, b) => a - b);
    for (let i=1; i < A.length; ++i)
        T = Math.min(T, A[i] - A[i-1]);
    for (let i=1; i < A.length; ++i)
        if (A[i-1] + T == A[i])
            ans.push([[A[i-1], A[i]]]);
    return ans;
};

ans = minimumAbsDifference([1,3,6,10,15]);
for (let row of ans) {
    for (let val of row) {
        console.log(val);
    }
    console.log();
}