/*
 * 628. Maximum Product of Three Numbers
 *
 * Q: https://leetcode.com/problems/maximum-product-of-three-numbers/
 * A: https://leetcode.com/problems/maximum-product-of-three-numbers/discuss/504153/Javascript-and-C%2B%2B-solutions
 */

let maximumProduct = A => {
    let a = -1001, b = -1001, c = -1001, p = 0, q = 0;
    for (let x of A) {
        if (x > a) {
            c = b;
            b = a;
            a = x;
        } else if (x > b) {
            c = b;
            b = x;
        } else if (x > c) {
            c = x;
        }
        if (x < p) {
            q = p;
            p = x;
        } else if (x < q) {
            q = x;
        }
    }
    return Math.max(a * b * c, a * p * q);
};
console.log(maximumProduct([1,2,3]));
console.log(maximumProduct([1,2,3,4]));
console.log(maximumProduct([-1,-2,3,4]));
console.log(maximumProduct([0,0,0]));
console.log(maximumProduct([3,2,1]));
console.log(maximumProduct([7,3,1,0,0,6]));
console.log(maximumProduct([-1,-2,-3]));
console.log(maximumProduct([-3,-2,-1]));
console.log(maximumProduct([9,1,5,6,7,2]));
