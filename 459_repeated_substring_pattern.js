/**
 * @param {string} s
 * @return {boolean}
 */
let repeatedSubstringPattern = s => {
    let n = s.length;
    let u = new Set([...s]);
    if (u.size == 1)
        return s.length > 1;
    for (let k = 2; k <= Math.floor(n / 2); ++k) {
        if (n % k) // only consider evenly divisble k
            continue;
        let target = s.slice(0, k);
        let ok = true;
        for (let i = k; i + k <= s.length; i += k) {
            if (s.substr(i, k) != target) {
                ok = false;
                break;
            }
        }
        if (ok)
            return true;
    }
    return false;
};

let ans = repeatedSubstringPattern("ababba");
console.log(ans);