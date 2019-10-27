/*

1181. Before and After Puzzle

Q: https://leetcode.com/problems/before-and-after-puzzle/
A: https://leetcode.com/problems/before-and-after-puzzle/discuss/406561/Javascript-and-C%2B%2B-Solutions

*/

/**
 * @param {string[]} phrases
 * @return {string[]}
 */
var beforeAndAfterPuzzles = (phrases, words=[], prefix=new Map(), suffix=new Map(), ans=new Set()) => {
    let i = 0;
    for (let phrase of phrases) {
        words.push(new Set());
        let A = phrase.split(' ');
        let first = A[0]+'_', last = A[A.length-1]+'_'; // add sentinel value '_' to differentiate 'this' from 'this_' as the map key
        if (!prefix[first]) prefix[first] = [];
        if (!suffix[last]) suffix[last] = [];
        prefix[first].push(i)
        suffix[last].push(i);
        ++i;
    }
    for (let last in suffix)
        for (let first in prefix)
            for (let i of suffix[last])
                for (let j of prefix[first])
                    if (i != j && last == first)
                        ans.add(phrases[i] + phrases[j].substring(last.length - 1)); // -1 to not include the sentinel value '_' in the length of the prefix
    return Array.from(ans).sort();
};

const ans = beforeAndAfterPuzzles(["this test","has no","matching pairs"]);
console.log(ans);