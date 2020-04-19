/*
 * 1419. Minimum Number of Frogs Croaking
 *
 * Q: https://leetcode.com/problems/minimum-number-of-frogs-croaking/
 * A: https://leetcode.com/problems/minimum-number-of-frogs-croaking/discuss/586488/Javascript-and-C%2B%2B-solutions
 */

// hardcoded count
let minNumberOfFrogs = (S, cnt = { c: 0, r: 0, o: 0, a: 0, k: 0 }, max = -Infinity) => {
    let ok = () => cnt.c >= cnt.r && cnt.r >= cnt.o && cnt.o >= cnt.a && cnt.a >= cnt.k;
    for (let c of S) {
        ++cnt[c];
        if (!ok())
            return -1;
        if (c == 'k')
            max = Math.max(max, 1 + Math.max(cnt.c - cnt.k, cnt.r - cnt.k, cnt.o - cnt.k, cnt.a - cnt.k));
    }
    return cnt.c == cnt.r && cnt.r == cnt.o && cnt.o == cnt.a && cnt.a == cnt.k ? max : -1;
};

// count array
let minNumberOfFrogs = (S, order = 'croak', cnt = Array(5).fill(0), max = 0) => {
    let ok = () => cnt.every((_, i) => i == 0 || cnt[i - 1] >= cnt[i]);
    for (let c of S) {
        if (!ok())
            return -1;
        ++cnt[order.indexOf(c)];
        if (c == 'k')
            for (let pre of 'croa'.split(''))
                max = Math.max(max, 1 + cnt[order.indexOf(pre)] - cnt[order.indexOf(c)]);
    }
    return cnt.every((_, i) => i == 0 || cnt[i - 1] == cnt[i]) ? max : -1;
};

console.log(minNumberOfFrogs('croakcroak'))
console.log(minNumberOfFrogs('crcoakroak'))
console.log(minNumberOfFrogs('croakcrook'))
console.log(minNumberOfFrogs('croakcroa'))