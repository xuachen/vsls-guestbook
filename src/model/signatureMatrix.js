import { isBonusCell, isSpecialCell } from "./bonusCells";
import { signatures } from "./signatures";
import { observable } from "mobx";

const COLUMNS = 30;
const ROWS = 20;

class MatrixCell {
  constructor(isBonus, isSpecial, signature) {
    this.isBonus = isBonus;
    this.isSpecial = isSpecial;
    this.signature = signature;
  }
}

const matrix = [];
for (let x = 0; x < COLUMNS; x++) {
  for (let y = 0; y < ROWS; y++) {
    const cellNumber = y + (x * ROWS) + 1;
    const isBonus = isBonusCell(cellNumber);
    const isSpecial = isSpecialCell(cellNumber);

    // Adding some comments here..................
    const signature = signatures.shift();
    const matrixCell = new MatrixCell(isBonus, isSpecial, signature);
    matrix.push(matrixCell);
  }
}

export default matrix;
export default observable(matrix);