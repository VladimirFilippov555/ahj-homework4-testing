import cardNumber from "../card";

test("return americanexpress", () => {
  const value = "371376865550854";
  const result = cardNumber(value);
  expect(result).toBe("americanexpress");
});
test("return mastercard", () => {
  const value = "5517645154858218";
  const result = cardNumber(value);
  expect(result).toBe("mastercard");
});
test("return visa", () => {
  const value = "4556360242838132";
  const result = cardNumber(value);
  expect(result).toBe("visa");
});
test("return discover", () => {
  const value = "6011270159541179";
  const result = cardNumber(value);
  expect(result).toBe("discover");
});
test("return jcb", () => {
  const value = "3535684285711106";
  const result = cardNumber(value);
  expect(result).toBe("jcb");
});
test("return dinersclub", () => {
  const value = "30569309025904";
  const result = cardNumber(value);
  expect(result).toBe("dinersclub");
});
test("return mir", () => {
  const value = "2202200188622201";
  const result = cardNumber(value);
  expect(result).toBe("mir");
});
