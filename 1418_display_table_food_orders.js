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