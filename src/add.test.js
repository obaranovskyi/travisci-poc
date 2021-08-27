const { add } = require("./add");

test("add - adds numbers", () => {
  expect(add(1, 4)).toBe(5);
});
