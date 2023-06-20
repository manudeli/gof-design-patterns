import Iterator from './Iterator'

export default interface Aggregator<T> {
  iterator(): Iterator<T>
}
