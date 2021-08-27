const { minus } = require("./minus");

test("minus - minus numbers", () => {
  expect(minus(2, 2)).toBe(0);
});
