const board = [
    [null, null, null], // data-row 0
    [null, null, null], // data-row 1
    [null, null, null], // data-row 2
];
let user = true;
let counter = 0;

function winner(user) {
    if (!!user) {
        console.log(`%cWINNER > ${user}`, `color: red`);

        const boardElement = document.getElementById('board');
        boardElement.classList.add("final");
    }
}

function checkBoard() {
    const flatBoard = board.flat();

    // rows
    if (flatBoard[0] === flatBoard[1] && flatBoard[1] === flatBoard[2])
        winner(flatBoard[0]);

    if (flatBoard[3] === flatBoard[4] && flatBoard[4] === flatBoard[5])
        winner(flatBoard[3]);

    if (flatBoard[6] === flatBoard[7] && flatBoard[7] === flatBoard[8])
        winner(flatBoard[6]);

    // cols
    if (flatBoard[0] === flatBoard[3] && flatBoard[3] === flatBoard[6])
        winner(flatBoard[0]);

    if (flatBoard[1] === flatBoard[4] && flatBoard[4] === flatBoard[7])
        winner(flatBoard[1]);

    if (flatBoard[2] === flatBoard[5] && flatBoard[5] === flatBoard[8])
        winner(flatBoard[2]);

    // curve
    if (flatBoard[0] === flatBoard[4] && flatBoard[4] === flatBoard[8])
        winner(flatBoard[0]);

    if (flatBoard[6] === flatBoard[4] && flatBoard[4] === flatBoard[2])
        winner(flatBoard[6]);
}

function init() {
    const fields = document.querySelectorAll(".field");

    for (field of fields) {
        field.addEventListener("click", function (event) {
            if (!event.target.dataset.marked) {
                console.log(event.target.dataset);
                const row = event.target.dataset.row;
                const col = event.target.dataset.col;

                board[row][col] = user ? "X" : "O";

                event.target.dataset.marked = "true";

                event.target.innerHTML = user ? "X" : "O";

                counter++;

                if (counter >= 5) {
                    checkBoard();
                }

                user = !user;
            }
        });
    }
}

init();
