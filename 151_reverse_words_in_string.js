/*
 * 151. Reverse Words in a String
 *
 * Q: https://leetcode.com/problems/reverse-words-in-a-string/
 * A: https://leetcode.com/problems/reverse-words-in-a-string/discuss/737631/Javascript-Python3-C%2B%2B
 */

let reverseWords = s => s.split(' ').filter(word => word.length).reverse().join(' ');
