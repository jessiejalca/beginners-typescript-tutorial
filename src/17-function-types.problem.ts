import { Equal, Expect } from "./helpers/type-utils"

/**
 * How do we type onFocusChange?
 */
// this is useful when you want to pass functions into
// other functions

type OnFocusChange = (isFocused: boolean) => void

// use void to show that the function will return nothing,
// or doesn't have a return value

const addListener = (onFocusChange: OnFocusChange) => {
  window.addEventListener("focus", () => {
    onFocusChange(true)
  })

  window.addEventListener("blur", () => {
    onFocusChange(false)
  })
}

addListener((isFocused) => {
  console.log({ isFocused })

  type tests = [Expect<Equal<typeof isFocused, boolean>>]
})
