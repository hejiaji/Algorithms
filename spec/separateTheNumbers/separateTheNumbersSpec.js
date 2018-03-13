import { separateNumbers } from "../../separateTheNumbers/index";

describe("separate numbers", function() {
  it("return true when input fits our rule", function() {
    expect(separateNumbers('1234')).toEqual({ result: true, firstElement: '1' });
    expect(separateNumbers('91011')).toEqual({ result: true, firstElement: '9' });
    expect(separateNumbers('99100')).toEqual({ result: true, firstElement: '99' });
  });

  it("return true when input does not fits our rule", function() {
    expect(separateNumbers('101103')).toEqual({ result: false });
    expect(separateNumbers('010203')).toEqual({ result: false });
    expect(separateNumbers('13')).toEqual({ result: false });
    expect(separateNumbers('1')).toEqual({ result: false });
  });
});
