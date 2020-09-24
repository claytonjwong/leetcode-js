/*
 * 794. Valid Tic-Tac-Toe State
 *
 * Q: https://leetcode.com/problems/valid-tic-tac-toe-state/
 * A: https://leetcode.com/problems/valid-tic-tac-toe-state/discuss/117603/Javascript-Python3-C%2B%2B-Concise-solutions
 */

let validTicTacToe = A => {
    let X = _.sum(A.map(row => row.split('').filter(c => c == 'X').length)),
        O = _.sum(A.map(row => row.split('').filter(c => c == 'O').length));
    let win = c => {
        let target = c.repeat(3);
        if (A.some(row => row == target))
            return true;
        for (let j = 0; j < 3; ++j) {
            let col = A[0][j] + A[1][j] + A[2][j];
            if (col == target)
                return true;
        }
        return A[0][0] + A[1][1] + A[2][2] == target || A[0][2] + A[1][1] + A[2][0] == target;
    };
    let winX = win('X'),
        winO = win('O');
    if (winX && winO)       return false;  // case 1: if X won and O won
    if (winX && X - O != 1) return false;  // case 2: if X won, then there must be one more X than O
    if (winO && X - O != 0) return false;  // case 3: if O won, then there must be the same amount of X and O
    return X - O == 0 || X - O == 1;       // case 4: if no winner, then there must be the same amount of X and O xor one more X than O
};
