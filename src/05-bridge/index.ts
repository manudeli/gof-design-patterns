import { CaptionDisplay, CharactersCount, Draft, SimpleDisplay } from './models'

const draft = new Draft('This is title', 'Jonghyeon Ko', [
  'I wanna make suspensive',
  'with more knowing design patterns',
  'how to cache them correctly',
])
const charactersCount = new CharactersCount('This is title', 'Jonghyeon Ko', [
  'I wanna make suspensive',
  'with more knowing design patterns',
  'how to cache them correctly',
])

const simpleDisplay = new SimpleDisplay()
const captionDisplay = new CaptionDisplay()
draft.print(simpleDisplay)
draft.print(captionDisplay)
charactersCount.print(simpleDisplay)
charactersCount.print(captionDisplay)
console.log(`CharactersCount: ${charactersCount.getCharactersCount()}`)
