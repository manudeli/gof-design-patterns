import { BoxDecorator, LineNumberDecorator, SideDecorator, Strings } from './models'

const strs = new Strings([
  'Hello!',
  'My name is Jonghyeon Ko',
  'I am developer making suspensive',
  'So Design patterns is necessary to make that',
])

strs.add('More adding text')

const sideDecoratedStrs = new SideDecorator(strs, '"')
const lineNumberDecoratedStrs = new LineNumberDecorator(strs)
const boxDecoratedStrs = new BoxDecorator(strs)

const pre1 = document.createElement('pre')
const pre2 = document.createElement('pre')
const pre3 = document.createElement('pre')
const pre4 = document.createElement('pre')

document.body.append(pre1)
document.body.append(pre2)
document.body.append(pre3)
document.body.append(pre4)
const domPre = document.querySelector('pre')
if (domPre) {
  strs.print(pre1)
  sideDecoratedStrs.print(pre2)
  lineNumberDecoratedStrs.print(pre3)
  boxDecoratedStrs.print(pre4)
}
