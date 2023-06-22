import { Unit } from './Unit'

export class Folder extends Unit {
  private units: Array<Unit> = []
  constructor(name: string) {
    super(name)
  }

  getSize(): number {
    return this.units.reduce((acc, cur) => acc + cur.getSize(), 0)
  }

  add(unit: Unit) {
    this.units.push(unit)
  }

  private createUnit(unit: Unit, dom: Element) {
    const domUnit = document.createElement('div')
    domUnit.classList.add('unit')
    domUnit.innerHTML = `<div><span>${unit.getName()}</span><span>${unit.getSize()}</span></div>`

    dom.append(domUnit)
    return domUnit
  }

  list(dom: Element) {
    const domUnit = this.createUnit(this, dom)
    const bFolder = this instanceof Folder

    if (bFolder) {
      domUnit.classList.add('folder')

      this.units.forEach(async (unit) => {
        await delay(300)

        if (unit instanceof Folder) {
          unit.list(domUnit)
        } else {
          this.createUnit(unit, domUnit)
        }
      })
    }
  }
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(() => resolve('resolved'), ms))
