/*
 * 676. Implement Magic Dictionary
 *
 * Q: https://leetcode.com/problems/implement-magic-dictionary/
 * A: https://leetcode.com/problems/implement-magic-dictionary/discuss/682319/Javascript-and-C%2B%2B-solutions
 */

class MagicDictionary {
    constructor() {
        this.dict = new Set();
    }
    buildDict(words, dict = this.dict) {
        words.forEach(word => dict.add(word));
    }
    search(word, dict = this.dict) {
        for (let i = 0; i < word.length; ++i) {
            for (let ord = 97; ord < 123; ++ord) { // ascii ordinal value for a-z inclusive
                let c = String.fromCharCode(ord);
                if (word[i] != c) {
                    let cand = word.split('');
                    cand[i] = c;
                    if (dict.has(cand.join('')))
                        return true;
                }
            }
        }
        return false;
    }
};