/*
 * 702. Search in a Sorted Array of Unknown Size
 *
 * Q: https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/
 * A: https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/discuss/906120/Kt-Js-Py3-Cpp-Binary-Search
 */

let search = (reader, T) => {
    let i = 0,
        j = 10000;
    while (i < j) {
        let k = Math.floor((i + j) / 2);
        let cand = reader.get(k);
        if (cand == T)
            return k;
        if (cand < T)
            i = k + 1;
        else
            j = k;
    }
    return -1;
};
