/*
 * 804. Unique Morse Code Words
 *
 * Q: https://leetcode.com/problems/unique-morse-code-words/
 * A: https://leetcode.com/problems/unique-morse-code-words/discuss/120682/Kt-Js-Py3-Cpp-Seen
 */

let uniqueMorseRepresentations = (A, seen = new Set()) => {
    let m = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..']
    for (let word of A) {
        let encoded = [];
        for (let c of word)
            encoded.push(m[c.charCodeAt(0) - 'a'.charCodeAt(0)]);
        seen.add(encoded.join(''));
    }
    return seen.size
};
