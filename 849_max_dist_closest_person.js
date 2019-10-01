var maxDistToClosest = (A) => {
    var N = A.length, L=-1, R=-1, run=0, max_run=0;
    for (let i=0; i < N; ++i) {
        if (A[i])
            L = (L > -1) ? L : i, run = 0;
        else
            max_run = Math.max(max_run, ++run);
        if (A[N-1 - i])
            R = (R > -1) ? R : N-1 - i;        
    }
    return Math.max(L, Math.ceil(max_run / 2.0), N - (R+1));
};

var ans = maxDistToClosest([1,0,0,0]);
console.log(ans);