/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = (tiles) => {
    var perms = ((s, fact=[1,1,2,6,24,120,720,5040], freq=new Map()) => {
        for (let c of s)
            freq[c] = freq[c] ? freq[c]+1 : 1;
        var res = fact[s.length];
        for (let key in freq)
            res /= fact[freq[key]];
        return res;
    });
    var go = ((s, cur="", seen=new Set(), i=0) => {
        if (i == s.length) {
            var res = !seen.has(cur) ? perms(cur) : 0;
            seen.add(cur);
            return res;
        }
        return go(s, cur, seen, i+1) + go(s, cur + s[i], seen, i+1);
    });
    return go([...tiles].sort()) - 1; // -1 for the empty string
};

var ans = numTilePossibilities("AAABBC");
console.log(ans);