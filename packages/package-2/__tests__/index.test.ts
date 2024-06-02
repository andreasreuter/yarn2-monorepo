import package2 from "../src/"

test("Prints welcome", () => {
  expect(package2()).toBe("Hey, I'm package-2!")
})
