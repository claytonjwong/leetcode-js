/*
 * 1451. Rearrange Words in a Sentence
 *
 * Q: https://leetcode.com/problems/rearrange-words-in-a-sentence/
 * A: https://leetcode.com/problems/rearrange-words-in-a-sentence/discuss/640637/Javascript-and-C%2B%2B-solutions
 */

let arrangeWords = text => {
    let transform = (word, offset) => {
        let A = word.split('');
        let first = A.shift();
        A.unshift(String.fromCharCode(first.charCodeAt(0) + offset));
        return A.join('');
    };
    let tolower = word => transform(word,  32);
    let toupper = word => transform(word, -32);
    let A = text.split(' ');
    A[0] = tolower(A[0]);
    A = _.sortBy(A, [(x) => x.length]);
    A[0] = toupper(A[0]);
    return A.join(' ');
};