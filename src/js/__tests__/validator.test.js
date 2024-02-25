import luhnAlgorithm from "../validator";

test("should return true if card number is valid", () => {
  const value = "6011603839421562";
  const result = luhnAlgorithm(value);
  expect(result).toBe(true);
});

test("should return false if card number is invalid", () => {
  const value = "6011111111111155";
  const result = luhnAlgorithm(value);
  expect(result).toBe(false);
});

test("should return false if invalid value entered", () => {
  const value = "asdfdvd";
  const result = luhnAlgorithm(value);
  expect(result).toBe(false);
});
