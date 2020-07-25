/*
 * 929. Unique Email Addresses
 *
 * Q: https://leetcode.com/problems/unique-email-addresses/
 * A: https://leetcode.com/problems/unique-email-addresses/discuss/186655/Concise-C%2B%2B
 */

let numUniqueEmails = (A, unique = new Set()) => {
    for (let email of A) {
        let [user, domain] = email.split('@');
        user = user.split('').filter(c => c != '.').join('');
        let i = user.indexOf('+');
        if (-1 < i)
            user = user.substring(0, i);
        unique.add(`${user}@${domain}`);
    }
    return unique.size;
};
