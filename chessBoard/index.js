function chessBoard(m, n) {
  if (m <= 0 || n <= 0) {
    return 0;
  }
  if (m === 1 || n === 1) {
    return 1;
  }
  return chessBoard(m - 1, n) + chessBoard(m, n - 1);
}

export { chessBoard };