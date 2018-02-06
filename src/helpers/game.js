export const createEmptyBoard = (rows, cols) => {
    const results = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(false);
        }
        results.push(row);
    }
    return results;
}

export const toggleCell = (board, row, col) => {
    const newBoard = cloneBoard(board);
    newBoard[row][col] = !newBoard[row][col];
    return newBoard;
}

export const runGeneration = board => {
    const rows = board.length;
    const cols = board[0].length;
    const newBoard = createEmptyBoard(rows, cols);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            newBoard[i][j] = getCellNextState(board, i, j);
        }
    }
    return newBoard;
}

export const isEmptyBoard = board => {
    const rows = board.length;
    const cols = board[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j])
                return false;
        }
    }
    return true;
}

const cloneBoard = board => board.map(row => row.slice());

const getCellNextState = (board, r, c) => {
    const alive = board[r][c];
    const livingNeighbors = getLivingNeighborCount(board, r, c);
    if (alive) {
        return livingNeighbors === 2 || livingNeighbors === 3;
    } else {
        return livingNeighbors === 3;
    }
}

const getLivingNeighborCount = (board, r, c) => {
    const rows = board.length;
    const cols = board[0].length;
    let result = 0;

    for (let i = r - 1; i <= r + 1; i++) {
        if (i < 0 || i >= rows)
            continue;
        for (let j = c - 1; j <= c + 1; j++) {
            if (j < 0 || j >= cols)
                continue;
            if (i === r && j === c)
                continue;
            result += board[i][j] ? 1 : 0;
        }
    }

    return result;
}

export default {
    createEmptyBoard,
    runGeneration,
    toggleCell,
    isEmptyBoard
};