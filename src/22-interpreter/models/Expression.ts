import { Context } from './Context'

export interface Expression {
  parse(context: Context): boolean
  run(): boolean
  getDescription(): string
}
