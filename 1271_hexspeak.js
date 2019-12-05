/*
 * 1271. Hexspeak
 *
 * Q: https://leetcode.com/problems/hexspeak/
 * A: https://leetcode.com/problems/hexspeak/discuss/444208/Javascript-and-C%2B%2B-solutions
 */ 
var toHexspeak = str => {
    let hex = parseInt(str).toString(16).toUpperCase();
    let ans = hex.split('').map(c => c == '0' ? 'O' : c == '1' ? 'I' : c).join('');
    return /^[A-Z]+$/.test(ans) ? ans : "ERROR";
};
console.log(toHexspeak("747823223228")); // "AEIDBCDIBC"