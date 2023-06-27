export enum Action {
  UP = 1,
  DOWN,
  LEFT,
  RIGHT,
}

export class Memento {
  private _actions = new Array<Action>()
  get actions() {
    return this._actions
  }

  constructor(private _x: number, private _y: number, actions: Array<Action>) {
    this._actions = structuredClone(actions)
  }

  get x() {
    return this._x
  }
  get y() {
    return this._y
  }
}

export class BlindMan {
  private actions = new Array<Action>()

  constructor(private currentX: number, private currentY: number, private targetX: number, private targetY: number) {}

  walk(action: Action): number {
    this.actions.push(action)

    switch (action) {
      case Action.UP:
        this.currentY += 1
        break
      case Action.RIGHT:
        this.currentX += 1
        break
      case Action.DOWN:
        this.currentX -= 1
        break
      case Action.LEFT:
        this.currentY -= 1
        break

      default:
        break
    }

    return Math.sqrt(Math.pow(this.currentX - this.targetX, 2) + Math.pow(this.currentY - this.targetY, 2))
  }

  createMemento(): Memento {
    const memento = new Memento(this.currentX, this.currentY, this.actions)
    return memento
  }

  restoreMemento(memento: Memento) {
    this.currentX = memento.x
    this.currentY = memento.y
    this.actions = structuredClone(memento.actions)
  }

  resultPath() {
    return this.actions.map((action) => Action[action]).join('→')
  }
}
