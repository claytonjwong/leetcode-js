/*

1176. Diet Plan Performance

Q: https://leetcode.com/problems/diet-plan-performance/
A: https://leetcode.com/problems/diet-plan-performance/discuss/396500/Javascript-and-C%2B%2B-Solutions

*/

var dietPlanPerformance = (A, k, lower, upper, ans=0) => {
    var sum = A.slice(0, k).reduce((a, b) => { // A[0] + ... + A[k-1]
        return a + b;
    });
    for (let j=k-1;;) {
        if (sum < lower) --ans;
        if (sum > upper) ++ans;
        if (++j >= A.length)
            break;
        sum -= A[j-k];
        sum += A[j];
    }
    return ans;
};

var ans = dietPlanPerformance([1,2,3,4,5], 1, 3, 3);
console.log(ans);