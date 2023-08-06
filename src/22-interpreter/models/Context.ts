export class Context {
  private keywords: string[]
  private currentIndex = 0

  constructor(script: string) {
    this.keywords = script.split(' ')
  }

  readNextKeyword() {
    this.currentIndex++
    return this.getCurrentKeyword()
  }

  getCurrentKeyword() {
    return this.keywords.length > this.currentIndex ? this.keywords[this.currentIndex] : null
  }
}
