import package2 from "../lib/package-2"

test("Prints welcome", () => {
  expect(package2()).toBe("Hey, I'm package-2!")
})
