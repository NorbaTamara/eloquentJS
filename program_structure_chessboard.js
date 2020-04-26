// https://eloquentjavascript.net/02_program_structure.html

// Chessboard
function chessBoard(size){
    let board = '';
    let lines = '';
    for(linesCount = 0; linesCount < size; linesCount++){
        let line = '';
        for(columnsCount = 0; columnsCount < size; columnsCount++){
            let cell = '#';
            if (linesCount%2 !== 0 && columnsCount%2 !== 0
                ||linesCount%2 === 0 && columnsCount%2 === 0){
                    cell = ' ';
                }
            line = line + cell;
        }
      board = board + line + '\n';
    }
    return board;
}

// tests:
console.log(chessBoard(10));