import { run } from '../../towerOfHanoi/index';

describe("tower of Hanoi", function() {
  it("return 1 when disks count is 1", function() {
    expect(run(1)).toEqual(1);
  });
  it("return 2 when disks count is 1", function() {
    expect(run(2)).toEqual(3);
  });
  it("return 3 when disks count is 7", () => {
    expect(run(3)).toEqual(7);
  })
});
