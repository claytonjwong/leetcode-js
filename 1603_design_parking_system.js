/*
 * 1603. Design Parking System
 *
 * Q: https://leetcode.com/problems/design-parking-system/
 * A: https://leetcode.com/problems/design-parking-system/discuss/876790/Javascript-Python3-C%2B%2B-Concise-solutions
 */

class ParkingSystem {
    constructor(a, b, c) {
        this.A = [0, a, b, c];
    }
    addCar(x) {
        if (!this.A[x])
            return false;
        --this.A[x];
        return true;
    }
}
