export function assert(condition: boolean, error: Error | string = new Error()): asserts condition {
  if (!condition) {
    if (typeof error === 'string') {
      throw new Error(error)
    } else {
      throw error
    }
  }
}
