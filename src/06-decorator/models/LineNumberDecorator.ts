import Decorator from './Decorator'
import Item from './Item'

export default class LineNumberDecorator extends Decorator {
  getLinesCount(): number {
    return this.targetItem.getLinesCount()
  }
  getLength(index: number): number {
    return this.targetItem.getLength(index) + 6
  }
  getMaxLength(): number {
    return this.targetItem.getMaxLength() + 6
  }
  getString(index: number): string {
    return (
      `<span style='color:green'>` +
      `${index}`.padStart(4, '0') +
      `</span><span style='color:green'>: </span>${this.targetItem.getString(index)}`
    )
  }
  constructor(targetItem: Item) {
    super(targetItem)
  }
}
