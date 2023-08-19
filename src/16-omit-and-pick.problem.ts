import { Equal, Expect } from "./helpers/type-utils"

interface User {
  id: string
  firstName: string
  lastName: string
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

// Use the Pick type utility to cherry pick specific
// pieces you want to keep for another type or interface

type MyType = Pick<User, "firstName" | "lastName">

// Another, arguable less verbose in this example, method
// we can use is Omit, which essentially does the opposite
// of Pick

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>]
