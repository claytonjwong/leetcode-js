/*
Apple Online Assessment
Completed April 29, 2020 5:57 PM
Time Spent: 11 minutes 17 seconds
Time Allotted: 1 hour
*/

/*
 * 884. Uncommon Words from Two Sentences
 *
 * Q: https://leetcode.com/problems/uncommon-words-from-two-sentences/
 * A: https://leetcode.com/problems/uncommon-words-from-two-sentences/discuss/159907/Concise-C%2B%2B
 */
let uncommonFromSentences = (A, B, a = new Set(), b = new Set(), cnt = new Map(), ans = []) => {
    let getWords = (input, output) => {
        input.split(' ').forEach(word => {
            output.add(word);
            cnt.set(word, 1 + (cnt.get(word) || 0));
        });
    };
    getWords(A, a);
    getWords(B, b);
    for (let word of a.values()) if (!b.has(word) && cnt.get(word) == 1) ans.push(word);
    for (let word of b.values()) if (!a.has(word) && cnt.get(word) == 1) ans.push(word);
    return ans;
};

let uncommonFromSentences = (A, B, cnt = new Map(), ans = []) => {
    A.split(' ').forEach(word => cnt.set(word, 1 + (cnt.get(word) || 0)));
    B.split(' ').forEach(word => cnt.set(word, 1 + (cnt.get(word) || 0)));
    return [...cnt.entries()].filter(a => a[1] == 1).map(a => a[0]);
};

/*
 * 1196. How Many Apples Can You Put into the Basket
 *
 * Q: https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/
 * A: https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/discuss/603936/Javascript-and-C%2B%2B-solution
 */
let maxNumberOfApples = (A, i = 0, sum = 0) => {
    A.sort((a, b) => a - b);
    for (; i < A.length && sum + A[i] <= 5000; sum += A[i++]);
    return i;
};