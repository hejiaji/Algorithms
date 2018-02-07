import { chessBoard } from "../../chessBoard/index";

describe("chess board", function() {
  it("return 0 when input is invalid", function() {
    expect(chessBoard(0, 0)).toEqual(0);
    expect(chessBoard(0, 4)).toEqual(0);
    expect(chessBoard(5, 0)).toEqual(0);
  });
  it("return the correct result with valid input", () => {
    expect(chessBoard(3, 7)).toEqual(28);
    expect(chessBoard(2, 2)).toEqual(2);
  })
});
