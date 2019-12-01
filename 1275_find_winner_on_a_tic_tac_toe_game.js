/*
 * 1275. Find Winner on a Tic Tac Toe Game
 *
 * Q: https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game
 * A: https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/discuss/441746/Javascript-and-C%2B%2B-solutions
 */

 /**
 * @param {number[][]} moves
 * @return {string}
 */
let tictactoe = (moves, board=[...Array(3)].map(row => Array(3).fill(-1)), turn=1, total=0) => {
    let isWin = (row=Array(3).fill(0), col=Array(3).fill(0), d1=0, d2=0) => {
        for (let i=0; i < 3; ++i) {
            for (let j=0; j < 3; ++j) {
                if (board[i][j] != turn)
                    continue;
                if (++row[i] == 3 || ++col[j] == 3)
                    return true;
                if (i == j && ++d1 == 3)
                    return true;
                if (((i == 0 && j == 2) || (i == 1 && j == 1) || (i == 2 && j == 0)) && ++d2 == 3)
                    return true;
            }
        }
        return false;
    };
    for (let [i,j] of moves) {
        board[i][j] = turn;
        if (isWin())
            return turn == 1 ? "A" : "B";
        turn ^= 1;
        ++total;
    }
    return total < 9 ? "Pending" : "Draw";
};
console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]));
