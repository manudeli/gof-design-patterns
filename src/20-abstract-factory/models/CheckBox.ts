export abstract class CheckBox {
  constructor(protected dom: HTMLElement, protected label: string, protected checked: boolean) {}
  abstract render(): void
}
