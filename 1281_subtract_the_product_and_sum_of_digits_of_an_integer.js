/*
 * 1281. Subtract the Product and Sum of Digits of an Integer
 *
 * Q: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 * A: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/discuss/448550/Javascript-and-C%2B%2B-solutions
 */
/*
var subtractProductAndSum = n => 
    n.toString().split('').map(Number).reduce((a, b) => a * b) -
    n.toString().split('').map(Number).reduce((a, b) => a + b);
*/
var subtractProductAndSum = n =>
    Array.from(String(n), Number).reduce((a, b) => a * b) -
    Array.from(String(n), Number).reduce((a, b) => a + b);
console.log(subtractProductAndSum(234));