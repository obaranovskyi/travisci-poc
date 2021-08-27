const { add } = require("./add");

test("add - adds numbers", () => {
  expect(add(1, 6)).toBe(7);
});
