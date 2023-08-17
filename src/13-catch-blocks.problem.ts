import { expect, it } from "vitest"

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!")
    }
  } catch (e) {
    // this is the safest solution, checking if
    // e is actually an error, so that we get
    // autocomplete without typecasting it as
    // an error when it's possible it could not be
    if (e instanceof Error) {
      return e.message
    }
  }
}

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!")
})
