"use strict";
class chessMove {
    constructor(current) {
        this.previousPosition = null;
        this.currentPosition = current;
        this.listofpMoves = [
            [current[0] - 2, current[1] - 1],
            [current[0] - 2, current[1] + 1],
            [current[0] - 1, current[1] - 2],
            [current[0] - 1, current[1] + 2],
            [current[0] + 1, current[1] + 2],
            [current[0] + 1, current[1] - 2],
            [current[0] + 2, current[1] + 1],
            [current[0] + 2, current[1] - 1],
        ];
    }
    addPrevious(chessMove) {
        this.previousPosition = chessMove;
    }
}
function knightMoves(ogLocation, distLocation) {
    if (distLocation[0] < 0 ||
        distLocation[0] > 7 ||
        distLocation[1] < 0 ||
        distLocation[1] > 7 ||
        ogLocation[0] < 0 ||
        ogLocation[0] > 7 ||
        ogLocation[1] < 0 ||
        ogLocation[1] > 7) {
        return;
    }
    const currentLocation = new chessMove(ogLocation);
    let queue = [];
    queue.push(currentLocation);
    while (queue.length != 0) {
        let current = queue[0];
        if (current.currentPosition[0] >= 0 &&
            current.currentPosition[1] >= 0 &&
            current.currentPosition[0] <= 7 &&
            current.currentPosition[1] <= 7) {
            if (current.currentPosition[0] === distLocation[0] &&
                current.currentPosition[1] === distLocation[1]) {
                let sequence = [];
                let move = current;
                while (move !== null) {
                    sequence.unshift(move === null || move === void 0 ? void 0 : move.currentPosition);
                    move = move === null || move === void 0 ? void 0 : move.previousPosition;
                }
                console.log("You made it in " + (sequence.length - 1) + " steps! Here's the steps:");
                return sequence.forEach(value => console.log(value));
            }
            for (let i = 0; i < current.listofpMoves.length; i++) {
                const newMove = new chessMove(current.listofpMoves[i]);
                newMove.addPrevious(current);
                queue.push(newMove);
            }
        }
        queue.shift();
    }
}
knightMoves([0, 0], [5, 7]);
