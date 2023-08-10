interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  // these are called union types
  // you can put all sorts of stuff in here,
  // including objects, other interfaces/types, etc.,
  // and they're super helpful in providing extra
  // safety in your code
  role: "admin" | "user" | "super-admin";
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // use the next line to check if errors are being caught properly
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
