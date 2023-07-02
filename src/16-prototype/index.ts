import './style.css'
import { Group, Line, Point } from './models'

const canvas = document.createElement('canvas')
canvas.width = 600
canvas.height = 600
canvas.style.cssText = `border:1px dashed grey`
document.body.append(canvas)

const pt1 = new Point(100, 100)
const pt2 = new Point(200, 100)
const pt3 = new Point(200, 200)
const pt4 = new Point(100, 200)

const line1 = new Line(pt1, pt2)
const line2 = new Line(pt2, pt3)
const line3 = new Line(pt3, pt4)
const line4 = new Line(pt4, pt1)

const rect = new Group().add(line1).add(line2).add(line3).add(line4)
const clonedRect = rect.copy()
clonedRect.moveOffset(200, 200)

rect.moveOffset(-100, -100)
rect.draw(canvas)
clonedRect.draw(canvas)
