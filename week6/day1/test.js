const { fizzBuzz, consoleFizzBuzz } = require("./code");

describe("fizzBuzz tests", () => {
  test("returns FizzBuzz for mod 3 and mod 5", () =>
    expect(fizzBuzz(15)).toBe("FizzBuzz"));

  test("returns Fizz for mod 3 but not mod 5", () =>
    expect(fizzBuzz(9)).toBe("Fizz"));

  test("returns Buzz for mod 5 but not mod 3", () =>
    expect(fizzBuzz(10)).toBe("Buzz"));

  test("returns null for not mod 3 and not mod 5", () =>
    expect(fizzBuzz(8)).toBe(null));
});

describe("consoleFizzBuzz tests", () => {
  const spyLog = jest.spyOn(console, "log");

  beforeEach(() => {
    spyLog.mockReset();
  });

  test("prints FizzBuzz for mod 3 and mod 5", () => {
    consoleFizzBuzz(15);
    expect(spyLog).toHaveBeenCalledWith("FizzBuzz");
  });

  test("prints Fizz for mod 3 but not mod 5", () => {
    consoleFizzBuzz(9);
    expect(spyLog).toHaveBeenCalledWith("Fizz");
  });

  test("prints Buzz for mod 5 but not mod 3", () => {
    consoleFizzBuzz(10);
    expect(spyLog).toHaveBeenCalledWith("Buzz");
  });

  test("prints nothing", () => {
    consoleFizzBuzz(8);
    expect(spyLog).not.toHaveBeenCalled();
  });
});
