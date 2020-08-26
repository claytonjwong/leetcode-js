/*
 * 412. Fizz Buzz
 *
 * Q: https://leetcode.com/problems/fizz-buzz/
 * A: https://leetcode.com/problems/fizz-buzz/discuss/812833/Javascript-Python3-C%2B%2B-1-Liners
 */

let fizzBuzz = n => !n ? [] : fizzBuzz(n - 1).concat(!(n % 3) && !(n % 5) ? ['FizzBuzz'] : !(n % 3) ? ['Fizz'] : !(n % 5) ? ['Buzz'] : [`${n}`]);
