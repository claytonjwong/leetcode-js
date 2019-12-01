/*
 * 1276. Number of Burgers with No Waste of Ingredients
 *
 * Q: https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/
 * A: https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/discuss/441752/Javascript-and-C%2B%2B-solutions
 */

let numOfBurgers = (a, b, c=0) => {
    while (a > 0 && b > 0 && a != 2 * b)
        a -= 4, --b, ++c;
        if (a == 2 * b)
            return [c,b];
        else
            return [];
};

console.log(numOfBurgers(16, 7));