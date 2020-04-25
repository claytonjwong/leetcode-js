/*
 * 492. Construct the Rectangle
 *
 * Q: https://leetcode.com/problems/construct-the-rectangle/
 * A: https://leetcode.com/problems/construct-the-rectangle/discuss/595689/Javascript-and-C%2B%2B-solutions
 */

let constructRectangle = (area) => {
    let W = Math.floor(Math.sqrt(area));
    while (area % W)
        --W;
    return [ area / W, W ];
};