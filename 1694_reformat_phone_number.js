/*
 * 1694. Reformat Phone Number
 *
 * Q: https://leetcode.com/problems/reformat-phone-number/
 * A: https://leetcode.com/problems/reformat-phone-number/discuss/978502/kt-js-py3-cpp-recursive-solutions
 */

let reformatNumber = s => {
    let go = s => {
        let N = s.length;
        if (N <= 3) return s;
        if (N == 4) return s.substring(0, 2) + '-' + s.substring(2, 4);
        return s.substring(0, 3) + '-' + go(s.substring(3, s.length));
    };
    return go(s.split('').filter(c => c != ' ' && c != '-').join(''));
};
