/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Check each row for 1-9 without repetition
    // Check each col for 1-9 without repetition
    // Check each 3x3 board for 1-9 without repetition
    if (rowsValid(board) && colsValid(board) && subBoardsValid(board)) {
        return true;
    }
    return false;
};

// Checks if there are any duplicate numbers in each row
var rowsValid = function(board) {
    for (let row=0; row<board.length; row++) {
        let rowMap = new Map();
        for (let col=0; col<board.length; col++) {
            if (board[row][col] !== ".") {
                if (rowMap.has(board[row][col])) {
                    return false;
                } else {
                    rowMap.set(board[row][col], 1);
                }
            }
        }
  }
  return true;
}

// Checks if there are any duplicate numbers in each column
var colsValid = function(board) {
    for (let col=0; col<board.length; col++) {
        let colMap = new Map();
        for (let row=0; row<board.length; row++) {
            if (board[row][col] !== ".") {
                if (colMap.has(board[row][col])) {
                    return false;
                } else {
                    colMap.set(board[row][col], 1);
                }
            }
        }
    }
    return true;
}
var subBoardsValid = function(board) {
    let row = 0;
    let col = 0; 
    
    // While row # < row length
    while (row < board.length) {
        // While col # < col length
        while (col < board.length) {
            let boardMap = new Map();
            //  Loop through 3x3 board
            for (let i=row; i<row+3; i++) {
                for (let j=col; j<col+3; j++) {
                    if (board[i][j] !== ".") {
                        // If the same element exists, return false
                        if (boardMap.has(board[i][j])) {
                            return false;
                        } else {  // Add each element to a map
                            boardMap.set(board[i][j], 1);
                        }
                    }
                }
            }
            col += 3;
        }
        row += 3;
        col = 0;
    }
    return true;
}
