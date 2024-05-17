function ChessBoard(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.drawBoard = function() {
        let board = '';

        // Верхні координати (A, B, C, ...)
        board += '   ';
        for (let col = 0; col < cols; col++) {
            board += String.fromCharCode(65 + col) + ' ';
        }
        board += '\n';

        for (let row = rows; row > 0; row--) {
            // Номер рядка
            board += row + ' ';
            if (row < 10) board += ' ';

            // Клітинки
            for (let col = 0; col < cols; col++) {
                if ((row + col) % 2 === 0) {
                    board += '# ';
                } else {
                    board += '@ ';
                }
            }
            board += '\n';
        }

        console.log(board);
    };
}

// Функція для отримання розмірів дошки від користувача
function getBoardSize() {
    let rows = parseInt(prompt("Введіть кількість рядків:", "8"));
    let cols = parseInt(prompt("Введіть кількість стовпців:", "8"));

    // Перевірка, чи введені значення є коректними числами
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Будь ласка, введіть коректні числові значення.");
        return null;
    }

    return { rows: rows, cols: cols };
}

// Отримати розміри дошки від користувача і створити дошку
let size = getBoardSize();
if (size) {
    let board = new ChessBoard(size.rows, size.cols);
    board.drawBoard();
}
