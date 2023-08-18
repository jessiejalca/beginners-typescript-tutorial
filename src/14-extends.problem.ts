import { Equal, Expect } from "./helpers/type-utils"

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

interface Base {
  id: string
}

// - interfaces can extend from other interfaces,
// like a class; this isn't something type can do
// - this is great for expressing relationships
// between interfaces

interface User extends Base {
  firstName: string
  lastName: string
}

interface Post extends Base {
  title: string
  body: string
}

interface Comment extends Base {
  comment: string
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>
]
