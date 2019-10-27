/*

299. Bulls and Cows

Q: https://leetcode.com/problems/bulls-and-cows/
A: https://leetcode.com/problems/bulls-and-cows/discuss/402832/Javascript-and-C%2B%2B-Solutions

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var getHint = (s, t, cow1={}, cow2={}, bulls=0, cows=0) => {
    for (let i=0; i < s.length; ++i)
        if (s[i] == t[i])
            ++bulls;
        else
            cow1[s[i]] = cow1[s[i]] ? cow1[s[i]] + 1 : 1,
            cow2[t[i]] = cow2[t[i]] ? cow2[t[i]] + 1 : 1;
    for (let c in cow1)
        cows += Math.min(cow1[c], cow2[c]);
    return bulls + "A" + cows + "B";
};

const ans = getHint("1122", "2211");
console.log(ans);