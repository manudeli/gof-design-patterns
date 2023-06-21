export default abstract class Item {
  abstract getLinesCount(): number
  abstract getLength(index: number): number
  abstract getMaxLength(): number
  abstract getString(index: number): string

  print(element: HTMLElement): void {
    const result = []
    const cntLines = this.getLinesCount()
    for (let i = 0; i < cntLines; i++) {
      const string = this.getString(i)
      result.push(string)
    }
    element.innerHTML = result.join(`\n`)
  }
}
