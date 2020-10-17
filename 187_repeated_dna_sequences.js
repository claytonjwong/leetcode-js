/*
 * 187. Repeated DNA Sequences
 *
 * Q: https://leetcode.com/problems/repeated-dna-sequences/
 * A: https://leetcode.com/problems/repeated-dna-sequences/discuss/898609/Kt-Js-Py3-Cpp-Sliding-Window-%2B-Map
 */

let findRepeatedDnaSequences = (s, word = [], m = new Map()) => {
    for (let c of s) {
        if (word.length == 10)
            word.shift();
        word.push(c);
        m.set(word.join(''), 1 + (m.get(word.join('')) || 0));
    }
    return [...m.entries()].filter(([_, cnt]) => 1 < cnt).map(([word, _]) => word);
};
