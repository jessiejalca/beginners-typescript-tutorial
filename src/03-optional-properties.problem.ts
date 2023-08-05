import { expect, it } from "vitest"

// Mark properties as optional with a ? at the end of the name
export const getName = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`
  }
  return params.first
}

it("Should work with just the first name", () => {
  const name = getName({
    first: "Matt",
  })

  expect(name).toEqual("Matt")
})

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Matt",
    last: "Pocock",
  })

  expect(name).toEqual("Matt Pocock")
})
