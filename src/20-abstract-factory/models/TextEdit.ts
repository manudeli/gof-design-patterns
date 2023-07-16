export abstract class TextEdit {
  constructor(protected dom: HTMLElement, protected text: string) {}
  abstract render(): void
}
