/*
 * 1357. Apply Discount Every n Orders
 *
 * Q: https://leetcode.com/problems/apply-discount-every-n-orders/
 * A: https://leetcode.com/problems/apply-discount-every-n-orders/discuss/520418/Javascript-and-C%2B%2B-solutions
 */

class Cashier {
    constructor(n, discount, products, prices) {
        this.n = n;
        this.customer = 0;
        this.discount = discount;
        this.map = {};
        for (let i = 0; i < products.length; ++i)
            this.map[products[i]] = prices[i];
    }
    getBill(product, amount, bill = 0) {
        for (let i = 0; i < product.length; ++i) {
            let price = this.map[product[i]];
            bill += price * amount[i];
        }
        if (++this.customer % this.n == 0)
            bill -= bill * this.discount / 100;
        return bill;
    }
}