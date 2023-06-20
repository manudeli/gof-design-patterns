export default interface Iterator<T> {
  next(): boolean
  current(): T
}
