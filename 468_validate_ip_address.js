/*
 * 468. Validate IP Address
 *
 * Q: https://leetcode.com/problems/validate-ip-address/
 * A: https://leetcode.com/problems/validate-ip-address/discuss/690366/Javascript-Solution
 */

let validIPAddress = IP => {
    let isDigit = c => c == '0' || Number(c);
    let isAlpha = c => {
        let ord = c.toLowerCase().charCodeAt(0);
        return 97 <= ord && ord <= 102; // [a-f]
    };
    let isNum = s => (s == '0' || (1 <= Number(s) && Number(s) <= 255 && s[0] != '0'))
        && s.split('').every(c => isDigit(c));
	let isHex = s => 1 <= s.length && s.length <= 4
        && (Number(s) != NaN || parseInt(s, 16).toString(16) == s.toLowerCase())
        && s.split('').every(c => isDigit(c) || isAlpha(c));
    let IPv4 = IP.split('.').length == 4 && IP.split('.').every(s => isNum(s)),
        IPv6 = IP.split(':').length == 8 && IP.split(':').every(s => isHex(s));
    return IPv4 ? 'IPv4' : IPv6 ? 'IPv6' : 'Neither';
};