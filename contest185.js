/*
 * https://leetcode.com/contest/weekly-contest-185/
 *
 * Rank            Name            Score    Finish Time     Q1 (3)       Q2 (4)      Q3 (5)        Q4 (6)
 * 2666 / 14208    claytonjwong    12       1:23:20         0:10:28 *1   0:41:44     1:13:20 *1
 */


 /*
  * 1417. Reformat The String
  *
  * Q: https://leetcode.com/problems/reformat-the-string/
  * A: https://leetcode.com/problems/reformat-the-string/discuss/586472/Javascript-and-C%2B%2B-solutions
  */
let reformat = s => {
    let letters = s.split('').filter(c => c.charCodeAt(0) >= 97),
        digits = s.split('').filter(c => c.charCodeAt(0) < 97);
    if (Math.abs(letters.length - digits.length) > 1)
        return '';
    let N = letters.length + digits.length;
    let ans = Array(N);
    let turn = letters.length >= digits.length ? 0 : 1; // 0 == letters first  1 == digits first
    for (let i = 0; i < N; ++i)
        if (i % 2 == turn)
            ans[i] = letters.shift();
        else
            ans[i] = digits.shift();
    return ans.join('');
};
// console.log(reformat('1229857369'));


/*
 * 1418. Display Table of Food Orders in a Restaurant
 *
 * Q: https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/
 * A: https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/discuss/586639/Javascript-and-C%2B%2B-solutions
 */
let displayTable = orders => {
    let T = {};
    let items = new Set();
    for (let [_, table, item] of orders) {
        items.add(item);
        if (!T[table])
            T[table] = {};
        if (!T[table][item])
            T[table][item] = 0;
        ++T[table][item];
    }
    let tables = [...Object.entries(T)];
    tables.sort((a, b) => Number(a[0]) - Number(b[0]));
    items = [...items].sort();
    let header = ['Table'].concat(items);
    let ans = [header];
    tables.forEach(table => {
        let next = [table[0]];
        items.forEach(item => next.push(table[1][item] ? table[1][item].toString() : '0'));
        ans.push(next);
    })
    return ans;
};
// console.log(displayTable([["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]));


/*
 * 1419. Minimum Number of Frogs Croaking
 *
 * Q: https://leetcode.com/problems/minimum-number-of-frogs-croaking/
 * A: https://leetcode.com/problems/minimum-number-of-frogs-croaking/discuss/586488/Javascript-and-C%2B%2B-solutions
 */

// hardcoded count
let minNumberOfFrogs = (S, cnt = { c: 0, r: 0, o: 0, a: 0, k: 0 }, max = -Infinity) => {
    let ok = () => cnt.c >= cnt.r && cnt.r >= cnt.o && cnt.o >= cnt.a && cnt.a >= cnt.k;
    for (let c of S) {
        ++cnt[c];
        if (!ok())
            return -1;
        if (c == 'k')
            max = Math.max(max, 1 + Math.max(cnt.c - cnt.k, cnt.r - cnt.k, cnt.o - cnt.k, cnt.a - cnt.k));
    }
    return cnt.c == cnt.r && cnt.r == cnt.o && cnt.o == cnt.a && cnt.a == cnt.k ? max : -1;
};

// count array
let minNumberOfFrogs = (S, order = 'croak', cnt = Array(5).fill(0), max = 0) => {
    let ok = () => cnt.every((_, i) => i == 0 || cnt[i - 1] >= cnt[i]);
    for (let c of S) {
        if (!ok())
            return -1;
        ++cnt[order.indexOf(c)];
        if (c == 'k')
            for (let pre of 'croa'.split(''))
                max = Math.max(max, 1 + cnt[order.indexOf(pre)] - cnt[order.indexOf(c)]);
    }
    return cnt.every((_, i) => i == 0 || cnt[i - 1] == cnt[i]) ? max : -1;
};

console.log(minNumberOfFrogs('croakcroak'))
console.log(minNumberOfFrogs('crcoakroak'))
console.log(minNumberOfFrogs('croakcrook'))
console.log(minNumberOfFrogs('croakcroa'))

