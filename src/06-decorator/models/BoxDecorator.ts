import Decorator from './Decorator'
import Item from './Item'

export default class BoxDecorator extends Decorator {
  getLinesCount(): number {
    return this.targetItem.getLinesCount() + 2
  }
  getLength(index: number): number {
    return this.targetItem.getLength(index) + 2
  }
  getMaxLength(): number {
    return this.targetItem.getMaxLength() + 2
  }
  getString(index: number): string {
    const maxLength = this.getMaxLength()

    if (index === 0 || index === this.getLinesCount() - 1) {
      return `<span style='color:yellow'>+${'-'.repeat(maxLength - 2)}+</span>`
    }

    return (
      `<span style='color:yellow'>|</span>` +
      `${this.targetItem.getString(index - 1)}${' '.repeat(maxLength - this.getLength(index - 1))}` +
      `<span style='color:yellow'>|</span>`
    )
  }
  constructor(targetItem: Item) {
    super(targetItem)
  }
}
