/*

https://leetcode.com/problems/unique-number-of-occurrences/

*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var uniqueOccurrences = (A, cnt=Array(2001).fill(0), seen=new Set()) => {
    for (let num of A)
        cnt[num] = cnt[num] ? cnt[num]+1 : 1;
    for (let val of cnt)
        if (seen.has(val))
            return false;
        else
            seen.add(val);
    return true;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));
