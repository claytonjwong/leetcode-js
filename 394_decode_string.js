/*
 * 394. Decode String
 *
 * Q: https://leetcode.com/problems/decode-string/
 * A: https://leetcode.com/problems/decode-string/discuss/941684/Kt-Js-Py3-Cpp-Stack
 */

let decodeString = (encoded, freq = '', word = '', s = []) => {
    let isdigit = c => /[0-9]/.test(c);
    let isalpha = c => /[a-z]/.test(c);
    for (let c of encoded) {
        if (c == '[') {
            s.push(word), s.push(freq);
            freq = '', word = '';
        }
        if (c == ']') {
            let [ last_freq, last_word ] = [ s.pop(), s.pop() ];
            word = last_word + word.repeat(Number(last_freq));
        }
        if (isdigit(c)) freq += c;
        if (isalpha(c)) word += c;
    }
    return word;
};
