import { expect, it } from "vitest"

const coerceAmount = (amount: number | { amount: number }) => {
  // checking typeof a parameter is a great way
  // to break down union types
  if (typeof amount === "object") {
    return amount["amount"]
  } else {
    return amount
  }
}

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20)
})

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20)
})
