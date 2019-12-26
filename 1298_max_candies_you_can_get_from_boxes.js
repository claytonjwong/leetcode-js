/*
 * 1298. Maximum Candies You Can Get from Boxes
 *
 * Q: https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/
 * A: https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/discuss/461625/Javascript-and-C%2B%2B-solutions
 */
let maxCandies = (unlocked, candies, keys, has, init, seen = new Set(), explored = new Set(), total = 0) => {
    for (let q = [...init]; q.length > 0; q.shift()) {
        let i = q[0];
        seen.add(i);
        if (!unlocked[i] || explored.has(i))
            continue; // skip if i-th box is locked or already explored once
        explored.add(i);
        total += candies[i];
        for (let j of keys[i]) {
            unlocked[j] = 1; // immediately unlock j-th box
            if (seen.has(j) && !explored.has(j))
                q.push(j); // we have seen this j-th box, but did *not* have a key when we saw it
        }
        for (let j of has[i])
            q.push(j); // add all contained boxes to queue for processing
    }
    return total;
};
