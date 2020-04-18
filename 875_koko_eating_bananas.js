/*
 * 875. Koko Eating Bananas
 *
 * Q: https://leetcode.com/problems/koko-eating-bananas/
 * A: https://leetcode.com/problems/koko-eating-bananas/discuss/584448/Javascript-and-C%2B%2B-solutions
 */

let minEatingSpeed = (piles, H) => {
    let k = 1;
    for (;;) {
        let h = piles // (h)ours to eat all piles ⏰
            .map(pile => Math.ceil(pile / k))
            .reduce((a, b) => a + b);
        if (h <= H)
            return k; // target 🎯
        ++k;
    }
};

let minEatingSpeed = (piles, H) => {
    let i = 1,
        j = 1e9;
    while (i < j) {
        let k = Math.floor((i + j) / 2);
        let h = piles // (h)ours to eat all piles ⏰
            .map(pile => Math.ceil(pile / k))
            .reduce((a, b) => a + b);
        if (h > H)
            i = k + 1; // ate too slow, eat faster 👉
        else
            j = k;     // ate too fast, eat slower 👈
    }
    return i;
};