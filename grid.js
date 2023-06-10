class Grid {
  //2D matrices
  #rows;
  #columns;
  constructor(rows, columns) {
    this.#rows = new Uint32Array(rows);
    this.#columns = new Uint32Array(columns);
  }
  format(){
    return { rows: this.#rows, columns: this.#columns };
  }
}

module.exports = Grid;
