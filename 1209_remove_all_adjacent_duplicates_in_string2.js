let removeDuplicates = (A, K, S = [['*', 0]]) => {
    for (let c of A)
        if (S[S.length - 1][0] == c && ++S[S.length - 1][1] == K)
            S.pop();
        else if (S[S.length - 1][0] != c)
            S.push([c, 1]);
    return S.map(([c, cnt]) => c.repeat(cnt)).join();
};
console.log(removeDuplicates('abcd', 2));