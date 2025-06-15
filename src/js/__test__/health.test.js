import getHealth from "../health";

test.each([
  [{ name: "magician", health: 13 }, "critycal"],
  [{ name: "magician", health: 48 }, "wounded"],
  [{ name: "magician", health: 92 }, "healthy"],
])("%o", (status, expected) => {
  const result = getHealth(status);
  expect(result).toBe(expected);
});