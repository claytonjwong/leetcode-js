/**
 * @param {number[]} A
 * @return {number}
 */
var totalFruit = (A, cnt={}, ans=0) => {
    let N = A.length,
        i = 0,
        j = 0;
    while (j < N) {
        cnt[A[j]] = cnt[A[j]] ? cnt[A[j]] + 1 : 1;
        ++j;
        while (Object.keys(cnt).length > 2) {
            --cnt[A[i]];
            if (cnt[A[i]] == 0)
                delete cnt[A[i]];
            ++i;
        }
        ans = Math.max(ans, j - i);
    }
    return ans;
};

const ans = totalFruit([3,3,3,1,2,1,1,2,3,3,4]);
console.log(ans);