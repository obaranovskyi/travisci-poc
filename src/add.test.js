const { add } = require("./add");

test("add - adds numbers", () => {
  expect(add(2, 2)).toBe(4);
});
